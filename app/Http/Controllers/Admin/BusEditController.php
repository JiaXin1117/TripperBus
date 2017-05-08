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
use App\Models\Settings;
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
        $default_price = Settings::where('key', 'DEFAULT_PRICE')->first()->value;
        $result = Res_Times::where('area_id', $reqData['leaving_from'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where(function($query) use($reqData)
                        {
                            $query->where(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                                ->where('date',  $reqData['outbound_date']);
                            })
                            ->orWhere(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                                ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])));
                            });
                        })
                    ->orderBy('time', 'asc')
                    ->get()->toarray();
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
            $temp['reservation_cnt'] = intval(Res_Reservations::where('time_id', $temp['id'])
                    ->where('date',  $reqData['outbound_date'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->select(DB::raw('sum(reserve_count) as reservation_cnt'))
                    ->first()->reservation_cnt);

            $res[$groupHash]['times'][] = $temp;
        }

        //Returning
        $res1 = array();
        if($reqData['return_date'] != null && $reqData['return_date'] != ""){
            $result = Res_Times::where('area_id', '<>', $reqData['leaving_from'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where(function($query) use($reqData)
                        {
                            $query->where(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                                ->where('date',  $reqData['return_date']);
                            })
                            ->orWhere(function($squery) use($reqData){
                                $squery->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                                ->where('day_of_week',  date('w', strtotime($reqData['return_date'])));
                            });
                        })
                    ->orderBy('time', 'asc')
                    ->get()->toarray();
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
                $temp['reservation_cnt'] = intval(Res_Reservations::where('time_id', $temp['id'])
                        ->where('date',  $reqData['return_date'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->select(DB::raw('sum(reserve_count) as reservation_cnt'))
                        ->first()->reservation_cnt);

                $res1[$groupHash]['times'][] = $temp;
            }
        }
        return response()->json([
            'state' => 'success',
            'data_1' => $res,
            'data_2' => $res1,
            'default_price' => $default_price,
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
        //Leaving
        $default_price = Settings::where('key', 'DEFAULT_PRICE')->first()->value;
        $result1 = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
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
                                ->where('day_of_week',  date('w', strtotime($reqData['outbound_date'])));
                            });
                        })
                    ->select('res_times.id', 'res_times.group_id', 'res_times.time', 'res_times.area_id', 'res_times.w_h', 'res_times.day_of_week', 'res_times.date', 'res_stops.short')
                    ->orderBy('res_times.time', 'asc')
                    ->get()->toarray();
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
            $temp['w_h'] = $bus_time->w_h;
            $temp['dow'] = $bus_time->day_of_week;
            $temp['time_id'] = $bus_time->id;
            $temp['area_id'] = $bus_time->area_id;
            $temp['reservation_cnt'] = intval(Res_Reservations::where('time_id', $temp['id'])
                    ->where('date',  $reqData['outbound_date'])
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->select(DB::raw('sum(reserve_count) as reservation_cnt'))
                    ->first()->reservation_cnt);
            $temp['move'] = 0;
            $temp['note_change'] = 0;
            $temp['reason'] = "";
            $temp['email_reason'] = 0;
            $res[$groupHash]['times'][] = $temp;
        }

        //Returning
        $res1 = array();
        $result2 = array();
        if($reqData['return_date'] != null && $reqData['return_date'] != ""){
            $result2 = DB::table('res_times')
                    ->join('res_stops', function($join){
                            $join->on('res_times.stop_id', '=', 'res_stops.id');
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
                                ->where('day_of_week',  date('w', strtotime($reqData['return_date'])));
                            });
                        })
                    ->select('res_times.id', 'res_times.group_id', 'res_times.time', 'res_times.area_id', 'res_times.w_h', 'res_times.day_of_week', 'res_times.date', 'res_stops.short')
                    ->orderBy('res_times.time', 'asc')
                    ->get()->toarray();
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
                $temp['w_h'] = $bus_time->w_h;
                $temp['dow'] = $bus_time->day_of_week;
                $temp['time_id'] = $bus_time->id;
                $temp['area_id'] = $bus_time->area_id;
                $temp['reservation_cnt'] = intval(Res_Reservations::where('time_id', $temp['id'])
                        ->where('date',  $reqData['return_date'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->select(DB::raw('sum(reserve_count) as reservation_cnt'))
                        ->first()->reservation_cnt);
                $temp['move'] = 0;
                $temp['note_change'] = 0;
                $temp['reason'] = "";
                $temp['email_reason'] = 0;
                $res1[$groupHash]['times'][] = $temp;
            }
        }
        return response()->json([
            'state' => 'success',
            'data_1' => $res,
            'data_2' => $res1,
            'time_1' => $result1,
            'time_2' => $result2,
            'default_price' => $default_price,
        ]);
    }

    public function moveReservations(Request $request){
        $buses = $request->only(['buses']);
        $buses = $buses['buses'];
        foreach($buses as $bus){
            foreach($bus['times'] as $time){
                if($time['move'] != 0){
                    Res_Reservations::where('time_id', $time['id'])
                        ->where('date',  $bus['date'])
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->update(['reason' => $time['reason'], 'time_id' => $time['move']]);
                }
            }
        }
    }
}
