<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Res_Stops;
use App\Models\Res_Areas;
use App\Models\Res_Groups;
use App\Models\Res_Groups_DestStops;
use App\Models\Res_Times;
use App\Models\Res_Reservations;
use App\Models\Res_Schedule_Prices;
use App\Models\Res_DateSchedule;
use App\Models\Res_Holidays;
use Illuminate\Support\Facades\Input;
use DB;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Mail\Mail_Reservation;

class BusEditController extends Controller
{
    
    public function __construct()
    {
        
    }
    
    public function getBusTimes(Request $request){
        $reqData = $request->only(['outbound_date', 'leaving_from', 'return_date']);
        $validator = Validator::make($reqData, [
            'outbound_date' => 'required',
            'leaving_from' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            $res['success'] = false;
            $res['message'] = "The data is not correct.";
            return response()->json($res);
        }

        $holidayName1 = '';
        $holidayName2 = '';
        
        // ------------------ Leaving ----------------------

        $count = Res_Times::where('area_id', $reqData['leaving_from'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('date',  $reqData['outbound_date'])
                    ->count();
        if ($count > 0) {
            $result = Res_Times::where('area_id', $reqData['leaving_from'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('date',  $reqData['outbound_date'])
                    ->orderBy('time', 'asc')
                    ->get()->toarray();

            $holiday = Res_Holidays::where('area_id', $reqData['leaving_from'])
                    ->where('date', $reqData['outbound_date'])
                    ->first();
            if ($holiday) {
                $holidayName1 = $holiday['name'];
            }
        } else {
            $latest_date = Res_Times::where('area_id', $reqData['leaving_from'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('date', '<=',  $reqData['outbound_date'])
                    ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])))
                    ->max('date');

            $result = Res_Times::where('area_id', $reqData['leaving_from'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('date', $latest_date)
                    ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])))
                    ->orderBy('time', 'asc')
                    ->get()->toarray();
        }

/*        $result = Res_Times::where('area_id', $reqData['leaving_from'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where(function($query) use($reqData)
                        {
                            $query->where(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                                ->where('date',  $reqData['outbound_date']);
                            })
                            ->orWhere(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                                ->where('date', '<=',  $reqData['outbound_date'])
                                ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])));
                            });
                        })
                    ->orderBy('time', 'asc')
                    ->get()->toarray();*/

        $res = array();
        foreach ($result as $bus_time) {
            $groupId = $bus_time['group_id'];
            $groupHash = 0;
            for($i = 0; $i < count($res); $i++){
                if($res[$i]['group_id'] == $groupId)
                {
                    $groupHash = $i;
                    break;
                }
            }
            if($i == count($res)){
                $groupHash = $i;
                $temp = array();
                $price = Res_DateSchedule::where('group_id', $groupId)->where('date', $reqData['outbound_date'])->first();
                $max_cap = 0;
                if($price == null){
                    $price = Res_Schedule_Prices::where('group_id', $groupId)->first();
                    if ($price == null) {
                        $price['first_seats'] = 0;
                        $price['first_price'] = 0;
                        $price['special_price'] = 0;
                        $price['last_seats'] = 0;
                        $price['last_price'] = 0;
                    }
                    $price['bus_opened'] = 0;
                    $price['bus_note'] = '';
                    $max_cap = Res_Groups::find($groupId)->max_cap;
                }
                else
                    $max_cap = $price->max_cap;
                $temp['max_cap'] = $max_cap;
                $temp['group_id'] = $groupId;
                $temp['travel_zoo_booked'] = 0;
                $temp['date'] = $reqData['outbound_date'];
                $temp['reserved'] = 0;
                $temp['destination'] = '';
                $destinations = Res_Stops::where('area_id', '<>', $bus_time['area_id'])->get()->toarray();
                for($i = 0; $i < count($destinations); $i++){
                    $temp['destination'] .= $destinations[$i]['short'];
                    if($i < count($destinations)-1)
                        $temp['destination'] .= ',';
                }
                $temp['price'] = $price;
                $temp['times'] = array();
                $res[] = $temp;
            }
            $temp = array();
            $temp['time'] = date("g:i A", strtotime($bus_time['time']));
            $temp['id'] = $bus_time['id'];
            $temp['stop_area'] = Res_Stops::find($bus_time['stop_id'])->short;
            $temp['area_name'] = Res_Areas::find($bus_time['area_id'])->area_name;
            $temp['w_h'] = $bus_time['w_h'];
            $temp['dow'] = $bus_time['day_of_week'];
            $temp['time_id'] = $bus_time['id'];
            $temp['open'] = $bus_time['open'];
            $temp['area_id'] = $bus_time['area_id'];
            $temp['reservation_cnt'] = $this->getTime_ReservationsTotal($temp['id'], $reqData['outbound_date']);

            $res[$groupHash]['times'][] = $temp;
        }


        // -------------------------- Returning ----------------------
        $res1 = array();
        if($reqData['return_date'] != null && $reqData['return_date'] != ""){

            $count = Res_Times::where('area_id', '<>', $reqData['leaving_from'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                        ->where('date',  $reqData['return_date'])
                        ->count();
            if ($count > 0) {
                $result = Res_Times::where('area_id', '<>', $reqData['leaving_from'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                        ->where('date',  $reqData['return_date'])
                        ->orderBy('time', 'asc')
                        ->get()->toarray();
                $holiday = Res_Holidays::where('area_id', '<>', $reqData['leaving_from'])
                        ->where('date', $reqData['return_date'])
                        ->first();
                if ($holiday) {
                    $holidayName2 = $holiday['name'];
                }
            } else {
                $latest_date = Res_Times::where('area_id', '<>', $reqData['leaving_from'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                        ->where('date', '<=',  $reqData['return_date'])
                        ->where('day_of_week',  date('w', strtotime($reqData['return_date'])))
                        ->max('date');

                $result = Res_Times::where('area_id', '<>', $reqData['leaving_from'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                        ->where('date', $latest_date)
                        ->where('day_of_week',  date('w', strtotime($reqData['return_date'])))
                        ->orderBy('time', 'asc')
                        ->get()->toarray();
            }

            /*$result = Res_Times::where('area_id', '<>', $reqData['leaving_from'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where(function($query) use($reqData)
                        {
                            $query->where(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                                ->where('date',  $reqData['return_date']);
                            })
                            ->orWhere(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                                ->where('date', '<=',  $reqData['return_date'])
                                ->where('day_of_week',  date('w', strtotime($reqData['return_date'])));
                            });
                        })
                    ->orderBy('time', 'asc')
                    ->get()->toarray();*/

            foreach ($result as $bus_time) {
                $groupId = $bus_time['group_id'];
                $groupHash = 0;
                for($i = 0; $i < count($res1); $i++){
                    if($res1[$i]['group_id'] == $groupId)
                    {
                        $groupHash = $i;
                        break;
                    }
                }
                if($i == count($res1)){
                    $groupHash = $i;
                    $temp = array();
                    $price = Res_DateSchedule::where('group_id', $groupId)->where('date', $reqData['return_date'])->first();
                    $max_cap = 0;
                    if($price == null){
                        $price = Res_Schedule_Prices::where('group_id', $groupId)->first();
                        if ($price == null) {
                            $price['first_seats'] = 0;
                            $price['first_price'] = 0;
                            $price['special_price'] = 0;
                            $price['last_seats'] = 0;
                            $price['last_price'] = 0;
                        }
                        $price['bus_opened'] = 0;
                        $price['bus_note'] = '';
                        $max_cap = Res_Groups::find($groupId)->max_cap;
                    }
                    else
                        $max_cap = $price->max_cap;
                    $temp['max_cap'] = $max_cap;
                    $temp['group_id'] = $groupId;
                    $temp['travel_zoo_booked'] = 0;
                    $temp['reserved'] = 0;
                    $temp['destination'] = '';
                    $destinations = Res_Stops::where('area_id', '<>', $bus_time['area_id'])->get()->toarray();
                    for($i = 0; $i < count($destinations); $i++){
                        $temp['destination'] .= $destinations[$i]['short'];
                        if($i < count($destinations)-1)
                            $temp['destination'] .= ',';
                    }
                    $temp['price'] = $price;
                    $temp['times'] = array();
                    $temp['date'] = $reqData['return_date'];
                    $res1[] = $temp;
                }
                $temp = array();
                $temp['time'] = date("g:i A", strtotime($bus_time['time']));
                $temp['id'] = $bus_time['id'];
                $temp['stop_area'] = Res_Stops::find($bus_time['stop_id'])->short;
                $temp['area_name'] = Res_Areas::find($bus_time['area_id'])->area_name;
                $temp['w_h'] = $bus_time['w_h'];
                $temp['dow'] = $bus_time['day_of_week'];
                $temp['time_id'] = $bus_time['id'];
                $temp['open'] = $bus_time['open'];
                $temp['area_id'] = $bus_time['area_id'];
                $temp['reservation_cnt'] = $this->getTime_ReservationsTotal($temp['id'], $reqData['return_date']);

                $res1[$groupHash]['times'][] = $temp;
            }
        }
        return response()->json([
            'state'         => 'success',
            'data_1'        => $res,
            'data_2'        => $res1,
            'holidayName1'  => $holidayName1,
            'holidayName2'  => $holidayName2,
        ]);
    }

    public function updateBuses(Request $request){
        $buses = $request->only(['buses']);
        $buses = $buses['buses'];
        foreach($buses as $bus){
            $price = Res_DateSchedule::where('group_id', $bus['group_id'])->where('date', $bus['date'])->first();
            if($price == null){
                Res_DateSchedule::unguard();
                $new_date_schedule = array();
                $new_date_schedule['group_id'] = $bus['group_id'];
                $new_date_schedule['date'] = $bus['date'];
                $price = Res_DateSchedule::create($new_date_schedule);
                Res_DateSchedule::reguard();
            }
            $price->first_seats = $bus['price']['first_seats'];
            $price->first_price = $bus['price']['first_price'];
            $price->special_price = $bus['price']['special_price'];
            $price->last_seats = $bus['price']['last_seats'];
            $price->last_price = $bus['price']['last_price'];
            $price->bus_opened = $bus['price']['bus_opened'];
            $price->bus_note = $bus['price']['bus_note'];
            $price->max_cap = $bus['max_cap'];
            $price->save();
        }
        
        return response()->json([
            'success'   => true,
        ]);
    }

    public function getBusForMove(Request $request){
        $reqData = $request->only(['outbound_date', 'leaving_from', 'return_date']);
        $validator = Validator::make($reqData, [
            'outbound_date' => 'required',
            'leaving_from' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            $res['success'] = false;
            $res['message'] = "The data is not correct.";
            return response()->json($res);
        }

        $holidayName1 = '';
        $holidayName2 = '';
        // -------------------------------- Leaving ----------------------------------
        $count = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('date',  $reqData['outbound_date'])
                    ->count();

        if ($count > 0) {

            $result1 = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('date',  $reqData['outbound_date'])
                    ->select('res_times.id', 'res_times.group_id', 'res_times.time', 'res_times.area_id', 'res_times.w_h', 'res_times.day_of_week', 'res_times.date', 'res_stops.short', 'res_areas.area_name')
                    ->orderBy('res_times.time', 'asc')
                    ->get()->toarray();

                    $holiday = Res_Holidays::where('area_id', $reqData['leaving_from'])
                            ->where('date', $reqData['outbound_date'])
                            ->first();
                    if ($holiday) {
                        $holidayName1 = $holiday['name'];
                    }
        } else {
            $latest_date = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('date', '<=',  $reqData['outbound_date'])
                    ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])))
                    ->max('date');

            $result1 = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('date', $latest_date)
                    ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])))
                    ->select('res_times.id', 'res_times.group_id', 'res_times.time', 'res_times.area_id', 'res_times.w_h', 'res_times.day_of_week', 'res_times.date', 'res_stops.short', 'res_areas.area_name')
                    ->orderBy('res_times.time', 'asc')
                    ->get()->toarray();
        }

        /*$result1 = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where(function($query) use($reqData)
                        {
                            $query->where(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                                ->where('date',  $reqData['outbound_date']);
                            })
                            ->orWhere(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                                ->where('date', '<=',  $reqData['outbound_date'])
                                ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])));
                            });
                        })
                    ->select('res_times.id', 'res_times.group_id', 'res_times.time', 'res_times.area_id', 'res_times.w_h', 'res_times.day_of_week', 'res_times.date', 'res_stops.short', 'res_areas.area_name')
                    ->orderBy('res_times.time', 'asc')
                    ->get()->toarray();*/

        $res = array();
        foreach ($result1 as $bus_time) {
            $bus_time->time = date("g:i A", strtotime($bus_time->time));
            $groupId = $bus_time->group_id;
            $groupHash = 0;
            for($i = 0; $i < count($res); $i++){
                if($res[$i]['group_id'] == $groupId)
                {
                    $groupHash = $i;
                    break;
                }
            }
            if($i == count($res)){
                $groupHash = $i;
                $temp = array();
                $price = Res_DateSchedule::where('group_id', $groupId)->where('date', $reqData['outbound_date'])->first();
                $max_cap = 0;
                if($price == null){
                    $price = Res_Schedule_Prices::where('group_id', $groupId)->first();
                    $price['bus_opened'] = 0;
                    $price['bus_note'] = '';
                    $max_cap = Res_Groups::find($groupId)->max_cap;
                }
                else
                    $max_cap = $price->max_cap;
                $temp['max_cap'] = $max_cap;
                $temp['group_id'] = $groupId;
                $temp['travel_zoo_booked'] = 0;
                $temp['date'] = $reqData['outbound_date'];
                $temp['reserved'] = 0;
                $temp['destination'] = '';
                $destinations = Res_Stops::where('area_id', '<>', $bus_time->area_id)->get()->toarray();
                for($i = 0; $i < count($destinations); $i++){
                    $temp['destination'] .= $destinations[$i]['short'];
                    if($i < count($destinations)-1)
                        $temp['destination'] .= ',';
                }
                $temp['price'] = $price;
                $temp['times'] = array();
                $res[] = $temp;
            }
            $temp = array();
            $temp['time'] = $bus_time->time;
            $temp['id'] = $bus_time->id;
            $temp['stop_area'] = $bus_time->short;
            $temp['area_name'] = $bus_time->area_name;
            $temp['w_h'] = $bus_time->w_h;
            $temp['dow'] = $bus_time->day_of_week;
            $temp['time_id'] = $bus_time->id;
            $temp['area_id'] = $bus_time->area_id;
            $temp['reservation_cnt'] = $this->getTime_ReservationsTotal($temp['id'], $reqData['outbound_date']);
            $temp['move'] = 0;
            $temp['note_change'] = 0;
            $temp['Note'] = "";
            $temp['email_reason'] = 0;
            $res[$groupHash]['times'][] = $temp;
        }

        // ---------------------------- Returning -------------------------------
        $res1 = array();
        $result2 = array();
        if($reqData['return_date'] != null && $reqData['return_date'] != "") {

            $count = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', '<>', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('date',  $reqData['return_date'])
                    ->count();
            
            if ($count > 0) {

                $result2 = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', '<>', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('date',  $reqData['return_date'])
                    ->select('res_times.id', 'res_times.group_id', 'res_times.time', 'res_times.area_id', 'res_times.w_h', 'res_times.day_of_week', 'res_times.date', 'res_stops.short', 'res_areas.area_name')
                    ->orderBy('res_times.time', 'asc')
                    ->get()->toarray();

                    $holiday = Res_Holidays::where('area_id', '<>', $reqData['leaving_from'])
                            ->where('date', $reqData['return_date'])
                            ->first();
                    if ($holiday) {
                        $holidayName2 = $holiday['name'];
                    }
            } else {
                $latest_date = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', '<>', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('date', '<=',  $reqData['return_date'])
                    ->where('day_of_week',  date('w', strtotime($reqData['return_date'])))
                    ->max('date');

                $result2 = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', '<>', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('date', $latest_date)
                    ->where('day_of_week',  date('w', strtotime($reqData['return_date'])))
                    ->select('res_times.id', 'res_times.group_id', 'res_times.time', 'res_times.area_id', 'res_times.w_h', 'res_times.day_of_week', 'res_times.date', 'res_stops.short', 'res_areas.area_name')
                    ->orderBy('res_times.time', 'asc')
                    ->get()->toarray();
            }

/*            $result2 = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
                      })
                    ->join('res_areas', function($join){
                            $join->on('res_times.area_id', '=', 'res_areas.id');
                      })
                    ->where('res_times.area_id', '<>', $reqData['leaving_from'])
                    ->where('res_times.valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where(function($query) use($reqData)
                        {
                            $query->where(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                                ->where('date',  $reqData['return_date']);
                            })
                            ->orWhere(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                                ->where('date', '<=',  $reqData['return_date'])
                                ->where('day_of_week',  date('w', strtotime($reqData['return_date'])));
                            });
                        })
                    ->select('res_times.id', 'res_times.group_id', 'res_times.time', 'res_times.area_id', 'res_times.w_h', 'res_times.day_of_week', 'res_times.date', 'res_stops.short', 'res_areas.area_name')
                    ->orderBy('res_times.time', 'asc')
                    ->get()->toarray();*/
            foreach ($result2 as $bus_time) {
                $bus_time->time = date("g:i A", strtotime($bus_time->time));
                $groupId = $bus_time->group_id;
                $groupHash = 0;
                for($i = 0; $i < count($res1); $i++){
                    if($res1[$i]['group_id'] == $groupId)
                    {
                        $groupHash = $i;
                        break;
                    }
                }
                if($i == count($res1)){
                    $groupHash = $i;
                    $temp = array();
                    $price = Res_DateSchedule::where('group_id', $groupId)->where('date', $reqData['return_date'])->first();
                    $max_cap = 0;
                    if($price == null){
                        $price = Res_Schedule_Prices::where('group_id', $groupId)->first();
                        $price['bus_opened'] = 0;
                        $price['bus_note'] = '';
                        $max_cap = Res_Groups::find($groupId)->max_cap;
                    }
                    else
                        $max_cap = $price->max_cap;
                    $temp['max_cap'] = $max_cap;
                    $temp['group_id'] = $groupId;
                    $temp['travel_zoo_booked'] = 0;
                    $temp['reserved'] = 0;
                    $temp['destination'] = '';
                    $destinations = Res_Stops::where('area_id', '<>', $bus_time->area_id)->get()->toarray();
                    for($i = 0; $i < count($destinations); $i++){
                        $temp['destination'] .= $destinations[$i]['short'];
                        if($i < count($destinations)-1)
                            $temp['destination'] .= ',';
                    }
                    $temp['price'] = $price;
                    $temp['times'] = array();
                    $temp['date'] = $reqData['return_date'];
                    $res1[] = $temp;
                }
                $temp = array();
                $temp['time'] = $bus_time->time;
                $temp['id'] = $bus_time->id;
                $temp['stop_area'] = $bus_time->short;
                $temp['area_name'] = $bus_time->area_name;
                $temp['w_h'] = $bus_time->w_h;
                $temp['dow'] = $bus_time->day_of_week;
                $temp['time_id'] = $bus_time->id;
                $temp['area_id'] = $bus_time->area_id;
                $temp['reservation_cnt'] = $this->getTime_ReservationsTotal($temp['id'], $reqData['return_date']);
                $temp['move'] = 0;
                $temp['note_change'] = 0;
                $temp['Note'] = "";
                $temp['email_reason'] = 0;
                $res1[$groupHash]['times'][] = $temp;
            }
        }
        return response()->json([
            'state'         => 'success',
            'data_1'        => $res,
            'data_2'        => $res1,
            'time_1'        => $result1,
            'time_2'        => $result2,
            'holidayName1'  => $holidayName1,
            'holidayName2'  => $holidayName2,
        ]);
    }

    public function moveReservations(Request $request){
        $buses = $request->only(['buses']);
        $buses = $buses['buses'];
        $user = Auth::user()->full_name;
        foreach($buses as $bus) {
            foreach($bus['times'] as $time) {
                if($time['move'] != 0) {
                    $notesAdd = 'Original reservation: ' . $bus['date'] . ' at ' . $time['time']
                     . ' from ' . $time['stop_area'] . 
                     '.. Changed by ' . $user . 
                     ' on ' . Carbon::now() . '.';
                     $notesReason = "";
                     if ($time['note_change'] && count($time['Note'])) {
                         $notesReason = "\nReason for change: " . $time['Note'];
                     }
                     $notesAdd .= $notesReason;

                    $moveReservations = Res_Reservations::join('res_areas', 'res_reservations.outbound_area_id', '=', 'res_areas.id')
                                    ->where('time_id', $time['id'])
                                    ->where('date',  $bus['date'])
                                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                                    ->get()->toarray();

                    Res_Reservations::where('time_id', $time['id'])
                                    ->where('date',  $bus['date'])
                                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                                    ->where('Note', '<>', '')
                                    ->update([
                                        'time_id' => $time['move'],
                                        'Note' => DB::raw("CONCAT(Note, '\r\n" . $notesAdd . "')")
                                    ]);

                    Res_Reservations::where('time_id', $time['id'])
                                    ->where('date',  $bus['date'])
                                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                                    ->where(function($query) use($time, $notesAdd) {
                                        $query->whereNull('Note')
                                        ->orWhere('Note', '=', '');
                                    })
                                    ->update([
                                        'time_id' => $time['move'],
                                        'Note' => $notesAdd
                                    ]);

                    if ($time['email_reason']) {
                        $this->sendMail_Reservation_MovePeople($moveReservations, $time['id'], $time['move'], $bus['date'], $notesReason);
                    }
                }
            }
        }

        return response()->json([
            'success'   => true,
        ]);
    }

    public function sendMail_Reservation_MovePeople($reservations, $oldTimeID, $newTimeID, $date, $reason) {
        $oldTime = Res_Times::find($oldTimeID);
        $newTime = Res_Times::find($newTimeID);
        $oldStopID = $oldTime['stop_id'];
        $newStopID = $newTime['stop_id'];
        $oldStop = Res_Stops::find($oldStopID);
        $newStop = Res_Stops::find($newStopID);

        foreach ($reservations as $reservation) {
            $reservation['oldTime'] = $oldTime['time'];
            $reservation['newTime'] = $newTime['time'];
            $reservation['date'] = $date;
            $reservation['oldStopAddress'] = $oldStop['address'];
            $reservation['newStopAddress'] = $newStop['address'];
            $reservation['oldStopDetail'] = $oldStop['details'];
            $reservation['newStopDetail'] = $newStop['details'];
            $reservation['reason'] = ($reason == "") ? "" : nl2br($reason."\n");
            
            Mail::to($reservation['Email'])->queue(new Mail_Reservation($reservation, config('config.TYPE_MAIL_RESERVATION_MOVE')));
        }
    }

    public static function getTime_ReservationsTotal($time_id, $date) {
        $total = intval(Res_Reservations::where('time_id', $time_id)
        ->where('date',  $date)
        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
        ->select(DB::raw('sum(Seats) as reservation_cnt'))
        ->first()->reservation_cnt);

        return $total;
    }

    public static function getGroup_ReservationsTotal($group_id, $date) {
        $times = Res_Groups::find($group_id)->times;
        $total = 0;
        
        foreach ($times as $time) {
            $total += BusEditController::getTime_ReservationsTotal($time['id'], $date);
        }

        return $total;
    }
}
