<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Res_Stops;
use App\Models\Res_Groups;
use App\Models\Res_Groups_DestStops;
use App\Models\Res_Times;
use App\Models\Res_Reservations;
use App\Models\Res_Setting;
use Illuminate\Support\Facades\Input;
use DB;
use Mail;
use Auth;
use Carbon\Carbon;
use App\Mail\Mail_Reservation;
use App\Mail\Mail_Bus;
use Twilio;

class MainController extends Controller
{
    
    public function __construct()
    {
        
    }

    // Retrieve reservations from schedule info.
    public function getRetrieveReservations() {
        $param_outbound_date = Input::get('outbound_date');
        $param_outbound_area_id = Input::get('leaving_from');

        $result = \App\Models\Res_Reservations::where('res_reservations.date', $param_outbound_date)
        ->join('res_times', function($join){
            $join->on('res_times.id', '=', 'res_reservations.time_id')
            ->where('res_times.valid', config('config.TYPE_SCHEDULE_UNREMOVED'));
        })
        ->where('res_reservations.valid', config('config.TYPE_RESERVATION_VALID'))
        ->where('outbound_area_id',  $param_outbound_area_id)
        ->get(['res_reservations.created_at AS Date Made', 'res_reservations.*']); 

        return successData($result);
    }

    public function checkFields($reservation) {
        if ($reservation['First Name'] == '' 
        || $reservation['Last Name'] == ''
        || $reservation['Phone'] == ''
        || $reservation['Email'] == ''
        ) {
            return 'All the following are necessary for a new reservation: First Name, Last Name, Phone Number & Email.';
        }

        return null;
    }

    public function checkBusFull($reservation, $time_id = null) {
        if (!$time_id) {
            $time_id = $reservation['time_id'];
        }

        $time = Res_Times::find($time_id);
        $max_cap = $time->group->max_cap;
        $reservationsTotal = BusEditController::getGroup_ReservationsTotal($time->group->id, $reservation['date']);
        $remain_seats = $max_cap - $reservationsTotal;
        if ($remain_seats <= 0) {
            return 'Bus is full.';
        } else if ($reservation['Seats'] > $remain_seats) {
            $errorMsg = 'You are overbooking the bus. Now ' 
            . $remain_seats . ' seat' 
            . ($remain_seats == 1 ? ' is' : 's are') 
            . ' remaining';
            return $errorMsg;
        }

        return null;
    }

    public function checkPaymentMethod($reservation) {
        if ($reservation['Payment Method'] == 'Credit Card') {
            if ($reservation['Transaction Amount'] == ''
             || $reservation['CC Number'] == ''
             || $reservation['CC Code'] == ''
             || $reservation['CC Year'] == ''
             || $reservation['CC Month'] == '') {
                 return 'If paying by credit card, all the following are necessary: Card Number, Card Code, Month/Year Exp.';
            }

            $AuthorizeNetError = '';
            if ($trans_id = addAuthorizeNetLink($reservation, $AuthorizeNetError)) {
                $reservation['Authorize net Link'] = $trans_id;
            } else {
                $errorMsg = 'There was the following error with the card: ' . $AuthorizeNetError;
                return $errorMsg;
            }
        }

        return null;
    }

    public function procFields(&$reservation) {
        unset($reservation['created_at']);
        unset($reservation['updated_at']);
        unset($reservation['Date Made']);
        unset($reservation['time']);
        unset($reservation['stop']);
        unset($reservation['id']);

        if (!isset($reservation['Note'])) {
            $reservation['Note'] = '';
        }
    }

    public function sendBusMail($reservation) {
        $time = Res_Times::find($reservation['time_id']);
        $max_cap = $time->group->max_cap;
        $reservationsTotal = BusEditController::getGroup_ReservationsTotal($time->group->id, $reservation['date']);
        $remain_seats = $max_cap - $reservationsTotal;

        if (0 == $remain_seats) {
            $this->sendMail_Bus_Full($time->group_id);
        } else if (5 == $remain_seats) {
            $this->sendMail_Bus_5_Remain($time->group_id);
        }
    }

    public function addReservation(Request $request){
        $input = $request->only(['reservation']);
        $reservation = $input['reservation'];

        if ($error = $this->checkFields($reservation)) {
            return failedError($error);
        }

        if ($error = $this->checkBusFull($reservation)) {
            return failedError($error);
        }

        if ($error = $this->checkPaymentMethod($reservation)) {
            return failedError($error);
        }

        $this->procFields($reservation);
        
        Res_Reservations::unguard();
        $response = Res_Reservations::create($reservation);
        Res_Reservations::reguard();

        $response['Date Made'] = $response['created_at']->format('Y-m-d H:i:s');
        
        $reservation = $response->toarray();

        $this->sendMail_Reservation_Add($reservation);
        $this->sendBusMail($reservation);

        return successData($response);
    }

    public function addReservationSeats(Request $request){
        $input = $request->only(['reservation']);
        $reservation = $input['reservation'];

        $oldReservation = Res_Reservations::find($reservation['id']);
        if (!$oldReservation) {
            return failedError('Reservation does not existing!');
        }

        if (!$reservation['Seats']) {
            return failedError('Nothing updated!');
        }

        if ($error = $this->checkBusFull($reservation, $oldReservation['time_id'])) {
            return failedError($error);
        }

        $username = Auth::user()->full_name;
        $now = date('Y/m/d g:i A');
        $Note1 = "\nReservation added " . $reservation['Seats'] 
                . ' seat' . ($reservation['Seats'] > 1 ? 's' : '') 
                . ' by ' . $username . ' on ' . $now . '.';
        $oldReservation['Note'] .= $Note1;

        if ($reservation['Payment Method'] == 'Credit Card') {
/*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                $reservation['Authorize net Link'] = $trans_id;
            }*/
        }

        $newReservation = $oldReservation;
        $oldReservation = $oldReservation->toarray();
        $newReservation['Seats'] += $reservation['Seats'];

        Res_Reservations::unguard();
        $newReservation->save();
        Res_Reservations::reguard();

        $resReservation = $newReservation->toarray();
        $resReservation['Date Made'] = $newReservation['created_at']->format('Y-m-d H:i:s');

        $this->sendMail_Reservation_Update($resReservation, $oldReservation);
        $this->sendBusMail($resReservation);

        return successData($resReservation);
    }

    public function updateReservation(Request $request){
        $input = $request->only(['reservation']);
        $reservation = $input['reservation'];

        if ($error = $this->checkFields($reservation)) {
            return failedError($error);
        }

        $oldReservation = Res_Reservations::find($reservation['id']);
        if (!$oldReservation) {
            return failedError('Reservation does not existing!');
        }

        if ($oldReservation['Seats'] < $reservation['Seats']) {
            return failedError("Seats can't be changed higher.");
        }

        if ($reservation['date'] != $oldReservation['date'] || $reservation['time_id'] != $oldReservation['time_id']) {
            if (isBeforeToday($reservation['date'])) {
                return failedError('Please select date from today!');
            }

            if ($error = $this->checkBusFull($reservation)) {
                return failedError($error);
            }

            $username = Auth::user()->full_name;
            $now = date('Y/m/d g:i A');
            $Note1 = "\nReservation deleted by " . $username . ' on ' . $now 
                    . '. Old reservation number was : ' . $oldReservation['id'] 
                    . '. New reservation number is : ' . $oldReservation['id']; // Temp newReservation number
            $reservation['Note'] .= $Note1;
        }

        if ($reservation['Payment Method'] == 'Credit Card') {
/*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                $reservation['Authorize net Link'] = $trans_id;
            }*/
        }

        $this->procFields($reservation);

        $newReservation = null;

        Res_Reservations::unguard();
        if ($oldReservation['Seats'] == $reservation['Seats']) {
            $newReservation = $oldReservation;
            $oldReservation = $oldReservation->toarray();
            if (!$newReservation->update($reservation)) {
                return failedError('Failed!');
            }
        } else {
            if ($newReservation = Res_Reservations::create($reservation)) {
                $oldReservation['Seats'] -= $reservation['Seats'];
                $oldReservation->save();
                $oldReservation = $oldReservation->toarray();
            }
        }
        Res_Reservations::reguard();

        if (!$newReservation) {
            return failedError('Failed!');
        }

        $newReservation['Date Made'] = $newReservation['created_at']->format('Y-m-d H:i:s');

        $this->sendMail_Reservation_Update($oldReservation, $newReservation->toarray());
        $this->sendBusMail($newReservation->toarray());

        return successData($newReservation->toarray());
    }

    public function updateReservations(Request $request){
        $input = $request->only(['reservations']);
        $reservations = $input['reservations'];

        $res_reservations = array();

        foreach ($reservations as $reservation) {
            $oldReservation = Res_Reservations::find($reservation['id'])->toarray();

            if ($reservation['Payment Method'] == 'Credit Card') {
    /*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                    $reservation['Authorize net Link'] = $trans_id;
                }*/
            }

            unset($reservation['Date Made']);

            Res_Reservations::unguard();
            $res = Res_Reservations::find($reservation['id'])->update($reservation);
            Res_Reservations::reguard();

            $res_reservation = array();
            if ($res) {
                $res_reservation = Res_Reservations::find($reservation['id']);
                $res_reservation['Date Made'] = $res_reservation['created_at']->format('Y-m-d H:i:s');

                $res_reservations[] = $res_reservation;

                $this->sendMail_Reservation_Update($res_reservation->toarray(), $oldReservation);
            }
        }

        return successData($res_reservations);
    }

    public function holdReservation(Request $request){
        $input = $request->only(['reservation']);
        $reservation = $input['reservation'];

        if ($error = $this->checkFields($reservation)) {
            return failedError($error);
        }

        if (!$reservation['Seats']) {
            return failedError('Nothing holded!');
        }

        $oldReservation = Res_Reservations::find($reservation['id']);
        if (!$oldReservation) {
            return failedError('Reservation does not existing!');
        }

        if ($reservation['Seats'] > $oldReservation['Seats']) {
            return failedError('Seats are overholding!');
        }

        $this->procFields($reservation);
        $reservation['valid'] = config('config.TYPE_RESERVATION_HOLD');
        $reservation['date'] = '';

        $username = Auth::user()->full_name;
        $oldReservation['Note'] .= "\n" . $username . ' held '. $reservation['Seats'] . ' reservation' . (($reservation['Seats'] > 1) ? 's' : '') . ' on ' . Carbon::now() . '.';

        if ($reservation['Payment Method'] == 'Credit Card') {
/*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                $reservation['Authorize net Link'] = $trans_id;
            }*/
        }

        Res_Reservations::unguard();
        if (!$resReservation = Res_Reservations::create($reservation)) {
            return failedError('Failed!');
        }

        $oldReservation['Seats'] -= $reservation['Seats'];
        $oldReservation->save();
        Res_Reservations::reguard();

        $this->sendMail_Reservation_Hold($resReservation->toarray(), $oldReservation['id']);
        $this->sendBusMail($oldReservation->toarray());

        return successData($oldReservation->toarray());
    }

    public function holdReservations(Request $request){
        $input = $request->only(['reservations']);
        $reservations = $input['reservations'];

        $res_reservations = array();

        foreach ($reservations as $reservation) {
            if (!$oldReservation = Res_Reservations::find($reservation['id'])) {
                return failedError('Reservation #'. $reservation['id'] . ' hold failed!');
            }

            $this->procFields($reservation);
            $reservation['valid'] = config('config.TYPE_RESERVATION_HOLD');
            $reservation['date'] = '';

            $username = Auth::user()->full_name;
            $oldReservation['Note'] .= "\n" . $username . ' held this reservation on ' . Carbon::now() . '.';

            if ($reservation['Payment Method'] == 'Credit Card') {
    /*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                    $reservation['Authorize net Link'] = $trans_id;
                }*/
            }

            Res_Reservations::unguard();
            if (!$resReservation = Res_Reservations::create($reservation)) {
                return failedError('Hold failed!');
            }

            $oldReservation['Seats'] -= $reservation['Seats'];
            $oldReservation->save();
            Res_Reservations::reguard();

            $this->sendMail_Reservation_Hold($resReservation->toarray(), $oldReservation['id']);
            $this->sendBusMail($oldReservation->toarray());

            $res_reservations[] = $oldReservation->toarray();
        }

        return successData($res_reservations);
    }

    public function deleteSoftReservation(Request $request){
        $input = $request->only(['reservation']);
        $reservation = $input['reservation'];

        if (!$reservation['Seats']) {
            return failedError('Nothing deleted!');
        }

        $oldReservation = Res_Reservations::find($reservation['id']);
        if (!$oldReservation) {
            return failedError('Reservation does not existing!');
        }

        if ($reservation['Seats'] > $oldReservation['Seats']) {
            return failedError('Seats are overdeleting!');
        }
        $oldReservation['Seats'] -= $reservation['Seats'];

        $username = Auth::user()->full_name;
        $oldReservation['Note'] .= "\n" . $username . ' deleted '. $reservation['Seats'] . ' reservation' . (($reservation['Seats'] > 1) ? 's' : '') . ' on ' . Carbon::now() . '.';

        if ($reservation['Payment Method'] == 'Credit Card') {
/*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                $reservation['Authorize net Link'] = $trans_id;
            }*/
        }

        Res_Reservations::unguard();
        $oldReservation->save();
        Res_Reservations::reguard();

        $oldReservation['Date Made'] = $oldReservation['created_at']->format('Y-m-d H:i:s');
        $resReservation = $oldReservation->toarray();

        $this->sendMail_Reservation_SoftDelete($resReservation, $reservation['Seats']);
        $this->sendBusMail($resReservation);

        return successData($resReservation);
    }

    public function deleteSoftReservations(Request $request){
        $input = $request->only(['reservations']);
        $reservations = $input['reservations'];

        $res_reservations = array();

        foreach ($reservations as $reservation) {
            if (!$oldReservation = Res_Reservations::find($reservation['id'])) {
                return failedError('Reservation #'. $reservation['id'] . ' delete failed!');
            }

            $oldReservation['Seats'] -= $reservation['Seats'];

            $username = Auth::user()->full_name;
            $oldReservation['Note'] .= "\n" . $username . ' deleted this reservation on ' . Carbon::now() . '.';

            if ($reservation['Payment Method'] == 'Credit Card') {
    /*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                    $reservation['Authorize net Link'] = $trans_id;
                }*/
            }

            Res_Reservations::unguard();
            $oldReservation->save();
            Res_Reservations::reguard();

            $res_reservations[] = $oldReservation->toarray();
            $this->sendMail_Reservation_SoftDelete($oldReservation->toarray(), $reservation['Seats']);
        }

        return successData($res_reservations);
    }

    public function deleteReservation(Request $request){
        $input = $request->only(['id']);
        $id = $input['id'];

        Res_Reservations::unguard();
        $response = Res_Reservations::find($id)->forceDelete();
        Res_Reservations::reguard();

        return successData($response);
    }

    public function searchReservation(Request $request){
        $searchKey = Input::get('searchKey');
        $searchVal = Input::get('searchVal');
        $caseSensitive = Input::get('caseSensitive');

        if ($searchKey == 'Date Made') {
            $searchKey = 'created_at';

            $searchDate1 = Carbon::parse($searchVal);
            $searchDate2 = Carbon::parse($searchVal)->addDay();

            $reservations = Res_Reservations::join('res_times', 'time_id', '=', 'res_times.id')
            ->join('res_stops', 'res_times.stop_id', '=', 'res_stops.id')
            ->where('res_reservations.valid', config('config.TYPE_RESERVATION_VALID'))
            ->whereBetween('res_reservations.'.$searchKey, array($searchDate1, $searchDate2))
            ->get(['res_reservations.created_at AS Date Made', 'res_reservations.*', 'res_times.time', 'res_stops.short AS stop'])
            ->toarray();
        } else {
            if ($caseSensitive) {
                $reservations = Res_Reservations::join('res_times', 'time_id', '=', 'res_times.id')
                ->join('res_stops', 'res_times.stop_id', '=', 'res_stops.id')
                ->where('res_reservations.valid', config('config.TYPE_RESERVATION_VALID'))
                ->where('res_reservations.'.$searchKey, 'like', '%'.$searchVal.'%')
                ->get(['res_reservations.created_at AS Date Made', 'res_reservations.*', 'res_times.time', 'res_stops.short AS stop'])
                ->toarray();
            } else {
                $reservations = Res_Reservations::join('res_times', 'time_id', '=', 'res_times.id')
                ->join('res_stops', 'res_times.stop_id', '=', 'res_stops.id')
                ->where('res_reservations.valid', config('config.TYPE_RESERVATION_VALID'))
                ->whereRaw('LOWER(res_reservations.`'.$searchKey.'`) like "%'.strtolower($searchVal).'%"')
                ->get(['res_reservations.created_at AS Date Made', 'res_reservations.*', 'res_times.time', 'res_stops.short AS stop'])
                ->toarray();
            }
        }

        foreach($reservations as $key => $value) {
            $reservations[$key]['time'] = date("g:i A", strtotime($reservations[$key]['time']));
        }

        return successData($reservations);
    }

    public function noteReservations(Request $request){
        $input = $request->only(['reservations', 'note']);
        $inputReservations = $input['reservations'];
        $inputNote = $input['note'];

        $res_reservations = array();
        $username = Auth::user()->full_name;
        $now = date('Y/m/d g:i A');
        $addNote = "\nNotes by Admin (" . $username . ') on ' . $now . ":\n" . $inputNote;

        foreach ($inputReservations as $reservation) {
            if (!$res_reservation = Res_Reservations::find($reservation['id'])) {
                return failedError('Note failed!');
            }

            $res_reservation['Note'] .= $addNote;
            Res_Reservations::unguard();
            $res_reservation->save();
            Res_Reservations::reguard();

            $res_reservation['Date Made'] = $res_reservation['created_at']->format('Y-m-d H:i:s');

            $res_reservations[] = $res_reservation->toarray();
        }

        return successData($res_reservations);
    }

    public function reEmailReservations(Request $request){
        $input = $request->only(['reservations', 'email']);
        $inputReservations = $input['reservations'];
        $inputMail = $input['email'];

        $res_reservations = array();

        foreach ($inputReservations as $reservation) {
            if (!$res_reservation = Res_Reservations::find($reservation['id'])) {
                return failedError ('Re-Email failed!');
            }

            $res_reservation['Date Made'] = $res_reservation['created_at']->format('Y-m-d H:i:s');
            $res_reservation = $res_reservation->toarray();

            $res_reservations[] = $res_reservation;
            $this->sendMail_Reservation_ReEmail($res_reservation, $inputMail);
        }

        return successData($res_reservations);
    }

    public function emailCustomReservations(Request $request){
        $input = $request->only(['reservations', 'subject', 'text']);
        $inputReservations = $input['reservations'];
        $inputSubject = $input['subject'];
        $inputText = $input['text'];

        if ($inputSubject == '') {
            return failedError('Invalid subject!');
        }

        if ($inputText == '') {
            return failedError('Invalid text!');
        }

        $res_reservations = array();

        foreach ($inputReservations as $reservation) {
            if (!$res_reservation = Res_Reservations::find($reservation['id'])) {
                return failedError ('Re-Email failed!');
            }

            $res_reservation['Date Made'] = $res_reservation['created_at']->format('Y-m-d H:i:s');
            $res_reservation = $res_reservation->toarray();

            $res_reservations[] = $res_reservation;
            $this->sendMail_Reservation_EmailCustom($res_reservation, $inputSubject, $inputText);
        }

        return successData($res_reservations);
    }

    public function sendTextReservations(Request $request){
        $input = $request->only(['reservations', 'text']);
        $inputReservations = $input['reservations'];
        $inputText = $input['text'];

        if ($inputText == '') {
            return failedError ('Invalid text!');
        }

        $res_reservations = array();

        foreach ($inputReservations as $reservation) {
            if (!$res_reservation = Res_Reservations::find($reservation['id'])) {
                return failedError ('Text sending failed!');
            }

            $res_reservation['Date Made'] = $res_reservation['created_at']->format('Y-m-d H:i:s');
            $res_reservation = $res_reservation->toarray();

            $res_reservations[] = $res_reservation;
            $this->sendText_Reservation($res_reservation, $inputText);
        }

        return successData($res_reservations);
    }

    public function getSettings() {
        $settings = Res_Setting::first();

        return successData($settings);
    }

    public function setSettings(Request $request){
        $input = $request->only(['settings']);
        $input = $input['settings'];
        
        Res_Setting::unguard();
        $settings = Res_Setting::first();

        foreach ($input as $key => $value) {
            $settings[$key] = $value;
        }

        $settings->save();
        Res_Setting::reguard();

        return $this->getSettings();
    }

    public function getPriceInfo() {
        $param_group_id = Input::get('group_id');

        $cnt = \App\Models\Res_Schedule_Prices::where('group_id', $param_group_id)
                ->count(); 

        if ($cnt > 0) {
            $result = \App\Models\Res_Schedule_Prices::where('group_id', $param_group_id)
                ->first(); 

            return successData($result);
        }

        return failedError('Failed!');
    }

    public function postRetrieveGroupInformations(Request $request) {
        $param_groupIDs = json_decode($request->getContent(), true); 
        
        $response = array();
        foreach ($param_groupIDs as $groupID) {
            $temp = array();
            $temp['group_id'] = $groupID;
            $temp['group_max_capacity'] = Res_Groups::find($groupID)['max_cap']; 

            $cnt = Res_Groups_DestStops::where('group_id', $groupID)->count();
            if ($cnt > 0) {
                $result = Res_Groups_DestStops::where('group_id', $groupID)->get(); 
                
                $temp1 = "";
                for ($i=0; $i<count($result); $i++) {
                    $item = $result[$i]; 
                    if ($i < (count($result) -1)) {
                        $temp1 .= Res_Stops::find($item['dest_stop_id'])['short'] . ", "; 
                    } else {
                        $temp1 .= Res_Stops::find($item['dest_stop_id'])['short']; 
                    }
                } 
                $temp['group_destinations'] = $temp1; 
            } else {
                $temp['group_destinations'] = "";
            } 

            $response[] = $temp;
        }

        return successData($response);
    }

    public function sendMail_Reservation_Add($reservation) {
        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_ADD')));
    }

    public function sendMail_Reservation_SoftDelete($reservation, $deleteSeats) {
        $reservation['deleteSeats'] = $deleteSeats;

        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_SOFTDELETE')));
    }

    public function sendMail_Reservation_Update($reservation, $oldReservation) {
        $reservation['old'] = $oldReservation;

        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_UPDATE')));
        if ($reservation['Email'] != $oldReservation['Email']) {
            Mail::to($oldReservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_UPDATE')));
        }
    }

    public function sendMail_Reservation_Hold($reservation, $oldId) {
        $reservation['oldId'] = $oldId;

        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_HOLD')));
    }

    public function sendMail_Reservation_ReEmail($reservation, $subject) {
        $reservation['mailSubject'] = $subject;

        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_REEMAIL')));
    }

    public function sendMail_Reservation_EmailCustom($reservation, $subject, $text) {
        $reservation['mailSubject'] = $subject;
        $reservation['mailText'] = $text;

        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_CUSTOMEMAIL')));
    }

    public function sendMail_Bus_Full($busId) {
        $company_email = getSettingsValue('company_email');
        // $company_email = 'jiaxin_wp1117@outlook.com';

        Mail::to($company_email)->queue(new Mail_Bus(config('config.TYPE_MAIL_BUS_FULL'), $busId));
    }

    public function sendMail_Bus_5_Remain($busId) {
        $company_email = getSettingsValue('company_email');
        // $company_email = 'jiaxin_wp1117@outlook.com';

        Mail::to($company_email)->queue(new Mail_Bus(config('config.TYPE_MAIL_BUS_5_REMAIN'), $busId));
    }

    public function sendText_Reservation($reservation, $text) {
        if ($reservation['Phone'] == '') {
            return failedError('Invalid phone number!');
        }

        $fromPhones = config('config.FROM_PHONE_NUMBER');

        if (!$count = count ($fromPhones)) {
            return failedError('No from phone number!');
        }

        $fromPhone = $fromPhones[rand() % $count];

        Twilio::from($fromPhone)->message($reservation['Phone'], $text);
    }


    public function getReports() {
        $dateType = Input::get('dateType');
        $dateStr1 = Input::get('date1');
        $dateStr2 = Input::get('date2');

        $result = array();
        if ($dateType == 'Booking') {
            $dateFieldStr = 'created_at';
        } else if ($dateType == 'Travel') {
            $dateFieldStr = 'date';
        } else {
            return failedError('Date is invalid.');
        }

        $date1 = date('Y-m-d', strtotime($dateStr1));
        $date2 = date('Y-m-d', strtotime($dateStr2));

        $reservations[0] = \App\Models\Res_Reservations::
        join('res_times', 'res_reservations.time_id', '=', 'res_times.id')
        ->join('res_stops', 'res_times.stop_id', '=', 'res_stops.id')
        ->where('res_reservations.valid', config('config.TYPE_RESERVATION_VALID'))
        ->where('res_reservations.'.$dateFieldStr, '>=', $date1)
        ->where('res_reservations.'.$dateFieldStr, '<=', $date2)
        ->select('res_reservations.*', 'res_stops.short')
        ->where('res_reservations.outbound_area_id', 1)
        ->get();

        $reservations[1] = \App\Models\Res_Reservations::
        join('res_times', 'res_reservations.time_id', '=', 'res_times.id')
        ->join('res_stops', 'res_times.stop_id', '=', 'res_stops.id')
        ->where('res_reservations.valid', config('config.TYPE_RESERVATION_VALID'))
        ->where('res_reservations.'.$dateFieldStr, '>=', $date1)
        ->where('res_reservations.'.$dateFieldStr, '<=', $date2)
        ->select('res_reservations.*', 'res_stops.short')
        ->where('res_reservations.outbound_area_id', 2)
        ->get();


        $totalCount[0] = count($reservations[0]);
        $totalCount[1] = count($reservations[1]);

        $totalAmount[0] = \App\Models\Res_Reservations::
        join('res_times', 'res_reservations.time_id', '=', 'res_times.id')
        ->join('res_stops', 'res_times.stop_id', '=', 'res_stops.id')
        ->where('res_reservations.valid', config('config.TYPE_RESERVATION_VALID'))
        ->where('res_reservations.'.$dateFieldStr, '>=', $date1)
        ->where('res_reservations.'.$dateFieldStr, '<=', $date2)
        ->where('res_reservations.outbound_area_id', 1)
        ->sum('Transaction Amount') ?: "0.00";

        $totalAmount[1] = \App\Models\Res_Reservations::
        join('res_times', 'res_reservations.time_id', '=', 'res_times.id')
        ->join('res_stops', 'res_times.stop_id', '=', 'res_stops.id')
        ->where('res_reservations.valid', config('config.TYPE_RESERVATION_VALID'))
        ->where('res_reservations.'.$dateFieldStr, '>=', $date1)
        ->where('res_reservations.'.$dateFieldStr, '<=', $date2)
        ->where('res_reservations.outbound_area_id', 2)
        ->sum('Transaction Amount') ?: "0.00";

        $result[0] = array();
        $tempResult = array();
        foreach ($reservations[0] as $reservation) {
            $stop = $reservation['short'];
            $tempResult[$stop][] = $reservation;
        }
        foreach ($tempResult as $key => $value) {
            $item = array();
            $item['stop'] = $key;
            $item['count'] = count($value);
            $result[0][] = $item;
        }

        $result[1] = array();
        $tempResult = array();

        foreach ($reservations[1] as $reservation) {
            $stop = $reservation['short'];
            $tempResult[$stop][] = $reservation;
        }
        foreach ($tempResult as $key => $value) {
            $item = array();
            $item['stop'] = $key;
            $item['count'] = count($value);
            $result[1][] = $item;
        }

        return response()->json([
            'success'       => true,
            'reports'       => $result,
            'totalCount'    => $totalCount,
            'totalAmount'   => $totalAmount,
        ]);
    }
}
