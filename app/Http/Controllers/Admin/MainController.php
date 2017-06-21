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
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Mail\Mail_Reservation;
use App\Mail\Mail_Bus;

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
        ->where('outbound_area_id',  $param_outbound_area_id)
//        ->select(DB::raw('res_reservations.*'))
        ->get(['res_reservations.created_at AS Date Made', 'res_reservations.*']); 

        return response()->json([
            'state' => 'success',
            'data' => $result
        ]);
    }

    public function addReservation(Request $request){
        $input = $request->only(['reservation']);
        $reservation = $input['reservation'];

        $time = Res_Times::find($reservation['time_id']);
        $max_cap = $time->group->max_cap;
        $reservationsTotal = BusEditController::getGroup_ReservationsTotal($time->group->id, $reservation['date']);
        $remain_seats = $max_cap - $reservationsTotal;
        if ($remain_seats == 0) {
            $errorMsg = 'Bus is full.';
            return response()->json([
                'success' => false,
                'error' => $errorMsg
            ]);
        }
        else if ($reservation['Seats'] > $remain_seats)
        {
            $errorMsg = 'Bus is overflowing. Now ' 
            . $remain_seats . ' seat' 
            . ($remain_seats == 1 ? ' is' : 's are') 
            . ' remaining';
            return response()->json([
                'success' => false,
                'error' => $errorMsg
            ]);
        }

        if ($reservation['Seats'] == $remain_seats) {
            $this->sendMail_Bus_Full($time->group_id);
        } else if ($reservation['Seats'] == $remain_seats - 5) {
            $this->sendMail_Bus_5_Remain($time->group_id);
        }

        if ($reservation['Payment Method'] == 'Credit Card') {
/*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                $reservation['Authorize net Link'] = $trans_id;
            }*/
        }

        if (!isset($reservation['Note'])) {
            $reservation['Note'] = '';
        }

        unset($reservation['Date Made']);

        Res_Reservations::unguard();
        $response = Res_Reservations::create($reservation);
        Res_Reservations::reguard();

        $response['Date Made'] = $response['created_at']->format('Y-m-d H:i:s');
        
        $reservation = Res_Reservations::where('id', $response['id'])->get()->toarray()[0];
        $this->sendMail_Reservation_Add($reservation);

        return response()->json([
            'success' => true,
            'data' => $response
        ]);
    }

    public function updateReservation(Request $request){
        $input = $request->only(['reservation']);
        $reservation = $input['reservation'];

        $oldReservation = Res_Reservations::where('id', $reservation['id'])->get()->toarray()[0];

        if ($reservation['Payment Method'] == 'Credit Card') {
/*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                $reservation['Authorize net Link'] = $trans_id;
            }*/
        }

        unset($reservation['Date Made']);
        Res_Reservations::unguard();
        $res = Res_Reservations::find($reservation['id'])->update($reservation);
        Res_Reservations::reguard();

        $response = array();
        if ($res) {
            $response = Res_Reservations::find($reservation['id']);
            $response['Date Made'] = $response['created_at']->format('Y-m-d H:i:s');

            $reservation = Res_Reservations::where('id', $reservation['id'])->get()->toarray()[0];
            $this->sendMail_Reservation_Update($reservation, $oldReservation);
        }

        return response()->json($response);
    }

    public function updateReservations(Request $request){
        $input = $request->only(['reservations']);
        $reservations = $input['reservations'];

        $res_reservations = array();

        foreach ($reservations as $reservation) {
            $oldReservation = Res_Reservations::where('id', $reservation['id'])->get()->toarray()[0];

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

        return response()->json($res_reservations);
    }

    public function deleteSoftReservation(Request $request){
        $input = $request->only(['reservation']);
        $reservation = $input['reservation'];

        $reservation['Seats'] = 0;
        $reservation['Transaction Amount'] = 0;
        $username = 'Administrator'; // Temp
        $reservation['Note'] .= "\n" . $username . ' deleted this reservation on ' . Carbon::now() . '.';

        if ($reservation['Payment Method'] == 'Credit Card') {
/*            if ($trans_id = addAuthorizeNetLink($reservation)) {
                $reservation['Authorize net Link'] = $trans_id;
            }*/
        }

        unset($reservation['Date Made']);
        Res_Reservations::unguard();
        $res = Res_Reservations::find($reservation['id'])->update($reservation);
        Res_Reservations::reguard();

        $response = array();
        if ($res) {
            $response = Res_Reservations::find($reservation['id']);
            $response['Date Made'] = $response['created_at']->format('Y-m-d H:i:s');

            $reservation = Res_Reservations::where('id', $reservation['id'])->get()->toarray()[0];
            $this->sendMail_Reservation_SoftDelete($reservation);
        }

        return response()->json($response);
    }

    public function deleteSoftReservations(Request $request){
        $input = $request->only(['reservations']);
        $reservations = $input['reservations'];

        $res_reservations = array();

        foreach ($reservations as $reservation) {
            $reservation['Seats'] = 0;
            $reservation['Transaction Amount'] = 0;
            $username = 'Administrator'; // Temp
            $reservation['Note'] .= "\n" . $username . ' deleted this reservation on ' . Carbon::now() . '.';

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
                $this->sendMail_Reservation_SoftDelete($reservation);
            }
        }

        return response()->json($res_reservations);
    }

    public function deleteReservation(Request $request){
        $input = $request->only(['id']);
        $id = $input['id'];

        Res_Reservations::unguard();
        $response = Res_Reservations::find($id)->forceDelete();
        Res_Reservations::reguard();

        return response()->json($response);
    }

    public function searchReservation(Request $request){
        $searchKey = Input::get('searchKey');
        $searchVal = Input::get('searchVal');
        $caseSensitive = Input::get('caseSensitive');

        if ($searchKey == 'Date Made') {
            $searchKey = 'created_at';
        }

        Res_Reservations::unguard();

        if ($caseSensitive) {
            $result = Res_Reservations::where('valid', 1)
            ->where($searchKey, 'like', '%'.$searchVal.'%')
            ->get(['created_at AS Date Made', 'res_reservations.*'])->toarray();
        } else {
            $result = Res_Reservations::where('valid', 1)
            ->whereRaw('LOWER(`'.$searchKey.'`) like "%'.strtolower($searchVal).'%"')
            ->get(['created_at AS Date Made', 'res_reservations.*'])->toarray();
        }

        Res_Reservations::reguard();

        return response()->json([
            'state' => 'success',
            'data' => $result
        ]);
    }

    public function emailReservations(Request $request){
        $input = $request->only(['reservations', 'mail']);
        $reservations = $input['reservations'];
        $mailContents = $input['mail'];

        $res_reservations = array();

        foreach ($reservations as $reservation) {
            $username = 'Administrator'; // Temp
            $res_reservation = array();
            $res_reservation = Res_Reservations::find($reservation['id']);

            if ($res_reservation) {
                $res_reservation['Date Made'] = $res_reservation['created_at']->format('Y-m-d H:i:s');

                $res_reservations[] = $res_reservation;
                $this->sendMail_Reservation_ReEmail($reservation, $mailContents);
            }
        }

        return response()->json($res_reservations);
    }

    public function getSettings() {
        $settings = Res_Setting::first();

        return response()->json([
            'state' => 'success',
            'settings' => $settings
        ]);
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

            return response()->json([
                'state' => 'success',
                'data' => $result
            ]);
        }

        return response()->json([
            'state' => 'fail'
        ]);
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

        return response()->json([
            'state' => 'success',
            'data' => $response
        ]);
    }

    public function sendMail_Reservation_Add($reservation) {
        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_ADD')));
    }

    public function sendMail_Reservation_SoftDelete($reservation) {
        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_SOFTDELETE')));
    }

    public function sendMail_Reservation_Update($reservation, $oldReservation) {
        $reservation['old'] = $oldReservation;

        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_UPDATE')));
        if ($reservation['Email'] != $oldReservation['Email']) {
            Mail::to($oldReservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_UPDATE')));
        }
    }

    public function sendMail_Reservation_ReEmail($reservation, $mailContents) {
        $reservation['mailContents'] = $mailContents;

        Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_REEMAIL')));
    }

    public function sendMail_Bus_Full($busId) {
//        $company_email = 'jiaxin_wp1117@outlook.com';
        $company_email = getSettingsValue('company_email');

        Mail::to($company_email)->queue(new Mail_Bus(config('config.TYPE_MAIL_BUS_FULL'), $busId));
    }

    public function sendMail_Bus_5_Remain($busId) {
//        $company_email = 'jiaxin_wp1117@outlook.com';
        $company_email = getSettingsValue('company_email');

        Mail::to($company_email)->queue(new Mail_Bus(config('config.TYPE_MAIL_BUS_5_REMAIN'), $busId));
    }
    
}
