<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Res_Stops;
use App\Models\Res_Groups;
use App\Models\Res_Groups_DestStops;
use App\Models\Res_Times;
use App\Models\Res_Reservations;
use App\Models\Res_Schedule_Prices;
use App\Models\Res_DateSchedule;
use Illuminate\Support\Facades\Input;
use DB;
use Illuminate\Support\Facades\Validator;

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
        //Leaving
        $result1 = Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('area_id', $reqData['leaving_from'])
                    ->where('date',  $reqData['outbound_date'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->orderBy('time', 'asc')
                    ->get()->toarray();
        $result2 = Res_Times::where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('area_id', $reqData['leaving_from'])
                    ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->orderBy('time', 'asc')
                    ->get()->toarray();
        $result = array_merge($result1, $result2);
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
            $temp['w_h'] = $bus_time['w_h'];
            $temp['dow'] = $bus_time['day_of_week'];
            $temp['time_id'] = $bus_time['id'];
            $temp['open'] = $bus_time['open'];
            $temp['area_id'] = $bus_time['area_id'];
            $temp['reservation_cnt'] = Res_Reservations::where('time_id', $temp['id'])
                    ->where('group_id', $groupId)
                    ->where('outbound_area_id', $reqData['leaving_from'])
                    ->where('date',  $reqData['outbound_date'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->count();

            $res[$groupHash]['times'][] = $temp;
        }

        //Returning
        $res1 = array();
        if($reqData['return_date'] != null && $reqData['return_date'] != ""){
            $result1 = Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                        ->where('area_id', '<>',  $reqData['leaving_from'])
                        ->where('date',  $reqData['return_date'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->orderBy('time', 'asc')
                        ->get()->toarray();
            $result2 = Res_Times::where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                        ->where('area_id', '<>', $reqData['leaving_from'])
                        ->where('day_of_week',  date('w', strtotime($reqData['return_date'])))
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->orderBy('time', 'asc')
                        ->get()->toarray();
            $result = array_merge($result1, $result2);
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
                $temp['w_h'] = $bus_time['w_h'];
                $temp['dow'] = $bus_time['day_of_week'];
                $temp['time_id'] = $bus_time['id'];
                $temp['open'] = $bus_time['open'];
                $temp['area_id'] = $bus_time['area_id'];
                $temp['reservation_cnt'] = Res_Reservations::where('time_id', $temp['id'])
                        ->where('group_id', $groupId)
                        ->where('outbound_area_id', $reqData['leaving_from'])
                        ->where('date',  $reqData['return_date'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->count();

                $res1[$groupHash]['times'][] = $temp;
            }
        }
        return response()->json([
            'state' => 'success',
            'data_1' => $res,
            'data_2' => $res1
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
    }
}
