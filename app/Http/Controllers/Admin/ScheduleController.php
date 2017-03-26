<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Res_Stops;
use App\Models\Res_Groups;
use App\Models\Res_Times;
use Illuminate\Support\Facades\Input;

class ScheduleController extends Controller
{
    
    public function __construct()
    {
        
    }

    // Retrieve schedule by date.
    public function getRetriveScheduleByDate() { 
        $date = Input::get('date');
        $cur_date = date_create($date); 
        $response = array();
        
        // Get Holiday Schedule First.
        $cnt = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                //->where('date', $cur_date)
                ->where('day_of_week',  date('w', $cur_date->getTimestamp()))
                ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                ->count(); 
        
        if ($cnt > 0) {
            $result = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    //->where('date', $cur_date)
                    ->where('day_of_week',  date('w', $cur_date->getTimestamp()))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->get();
            
            //$isHoliday = 0;
            foreach ($result as $reservation) {

                if (date_create($reservation->date)->getTimestamp() == $cur_date->getTimestamp()) { 
                    $temp = array();
                    $temp['time'] = $reservation->time;
                    $temp['stop_area'] = Res_Stops::find($reservation->stop_id)->short;
                    $temp['max_cap'] = Res_Groups::find($reservation->group_id)->max_cap;
                    $temp['group_id'] = $reservation->group_id;
                    $temp['w_h'] = $reservation->w_h;
                    $temp['date'] = $reservation->date;
                    $temp['dow'] = $reservation->day_of_week;
                    $temp['time_id'] = $reservation->id;
                    $temp['open'] = $reservation->open;
                    $temp['area_id'] = $reservation->area_id;

                    $response[] = $temp;
                    //$isHoliday = 1;
                }
            } 
            
            /*if ($isHoliday === 1) {
                return response()->json([
                    'state' => 'success',
                    'data' => $response
                ]);
            }*/
        } 
        
        // Get weekly schedule
        $cnt = \App\Models\Res_Times::where('date', '<=',  $cur_date)
                ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                ->where('day_of_week',  date('w', strtotime($date)))
                ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                ->count();
        
        if ($cnt > 0) {
            $result = \App\Models\Res_Times::where('date', '<=',  $cur_date)
                    ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('day_of_week',  date('w', strtotime($date)))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->get();

            foreach ($result as $reservation) {
                $temp = array();
                $temp['time'] = $reservation->time;
                $temp['stop_area'] = Res_Stops::find($reservation->stop_id)->short;
                $temp['max_cap'] = Res_Groups::find($reservation->group_id)->max_cap;
                $temp['group_id'] = $reservation->group_id;
                $temp['w_h'] = $reservation->w_h;
                $temp['date'] = $reservation->date;
                $temp['dow'] = $reservation->day_of_week;
                $temp['time_id'] = $reservation->id;
                $temp['open'] = $reservation->open;
                $temp['area_id'] = $reservation->area_id;

                $response[] = $temp;
            }
        }
        
        if (count($response) > 0) {
            return response()->json([
                'state' => 'success',
                'data' => $response
            ]);
        }
        
        return response()->json([
            'state' => 'fail',
            'data' => 'Cannot find reservation for this date.'
        ]);
    }
    
    public function getRetrieveSchedulesByMonth() {
            $year = Input::get('year');
            $month = Input::get('month');
            $date_timestamp = mktime(0, 0, 0, $month, 1, $year);
            
            $response = array();
            
            for ($i = mktime(0, 0, 0, $month, 1, $year); $i <= mktime(0, 0, 0, $month, cal_days_in_month(CAL_GREGORIAN,$month,$year)); $i += 24 * 60 *60) {
                $cur_date = date("Y-m-d", $i); 
                
                // Get holiday schedule first for this date.
                $cnt = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    //->where('date', $cur_date)
                    ->where('day_of_week',  date('w', $i))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->count(); 
                
                //$isHoliday = 0;
                if ($cnt > 0) {
                    $result = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                            //->where('date', $cur_date)
                            ->where('day_of_week',  date('w', $i))
                            ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                            ->get();
                    
                    foreach ($result as $reservation) {
                        if (date_create($reservation->date)->getTimestamp() == date_create($cur_date)->getTimestamp()) { 
                            $temp = array();
                            $temp['time'] = $reservation->time;
                            $temp['stop_area'] = Res_Stops::find($reservation->stop_id)->short;
                            $temp['max_cap'] = Res_Groups::find($reservation->group_id)->max_cap;
                            $temp['group_id'] = $reservation->group_id;
                            $temp['w_h'] = $reservation->w_h;
                            $temp['date'] = $cur_date;
                            $temp['area_id'] = $reservation->area_id;
                            $temp['schedule_date'] = $reservation->date;

                            $response[] = $temp;
                            //$isHoliday = 1;
                        }
                    } 
                } 
                
                // Get weekly schedule.
                $cnt = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('date', '<=',  $cur_date)
                    ->where('day_of_week',  date('w', $i))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->count();

                if ($cnt > 0) {
                    $result = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                            ->where('date', '<=',  $cur_date)
                            ->where('day_of_week',  date('w', $i))
                            ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                            ->get();

                    foreach ($result as $reservation) {
                        $temp = array();
                        
                        $temp['time'] = $reservation->time;
                        $temp['stop_area'] = Res_Stops::find($reservation->stop_id)->short;
                        $temp['max_cap'] = Res_Groups::find($reservation->group_id)->max_cap;
                        $temp['group_id'] = $reservation->group_id;
                        $temp['w_h'] = $reservation->w_h;
                        $temp['date'] = $cur_date;
                        $temp['area_id'] = $reservation->area_id;
                        $temp['schedule_date'] = $reservation->date;

                        $response[] = $temp;
                    }
                }
                
            }
            
            if (count($response) > 0) {
                return response()->json([
                    'state' => 'success',
                    'data' => $response
                ]);
            }

            return response()->json([
                'state' => 'fail',
                'data' => 'Cannot find reservation for this date.'
            ]);
            
    }
    
    public function getRetrieveStops() {
        $stops = Res_Stops::all();
        
        $response = array();
        foreach ($stops as $stop) {
            $response[] = $stop;
        }
        
        return response()->json([
            'state' => 'success',
            'data' => $response
        ]);
    }
    
    public function postUpdateForEditExistingSchedule(Request $request) {
        $data = json_decode($request->getContent(), true); 
        
        for ($i=0; $i<count($data); $i++) {
            $item = $data[$i]; 
            $time_id = (int)$item['time_id']; 
            $temp = Res_Times::find($time_id); 
            
            if (!is_null($temp)) {
                $time = $item['hour'] . ":" . $item['min'] . ":00"; 
                $stop_id = Res_Stops::where('short', $item['stop'])
                            ->first()->id; 
                
                $temp->stop_id = $stop_id; 
                $temp->time = $time; 
                
                $temp->save(); 
            }
            
        }
    }
    
    public function postRemoveForEditExistingSchedule(Request $request) {
        $data = json_decode($request->getContent(), true); 
        
        for ($i=0; $i<count($data); $i++) {
            $item = $data[$i]; 
            $time_id = (int)$item['time_id']; 
            $temp = Res_Times::find($time_id); 
            
            if (!is_null($temp)) {
                $temp->valid = config('config.TYPE_SCHEDULE_REMOVED');
                $temp->save(); 
            }
        }
    }
    
    public function postDisableForEditExistingSchedule(Request $request) {
        $data = json_decode($request->getContent(), true); 
        
        for ($i=0; $i<count($data); $i++) {
            $item = $data[$i]; 
            $time_id = (int)$item['time_id']; 
            $temp = Res_Times::find($time_id); 
            
            if (!is_null($temp)) {
                if (isset($item['isEnabled'])) {
                    $temp->open = config('config.TYPE_SCHEDULE_ENABLED');
                } else {
                    $temp->open = config('config.TYPE_SCHEDULE_DISABLED');
                }
                
                $temp->save(); 
            }
        }
    }
    
    public function postSaveAllForEditExistingSchedule(Request $request) {
        $data = json_decode($request->getContent(), true); 
        
        for ($i=0; $i<count($data); $i++) { 
            $one_group = $data[$i]; 
            $isNewGroup = 0;
            
            for ($j=0; $j<count($one_group); $j++) { 
                $item = $one_group[$j]; 
                
                if (isset($item['time_id'])) {
                    $time_id = (int)$item['time_id']; 
                    $temp = Res_Times::find($time_id); 
                 
                    $temp->time = $item['time']; 
                    $stop_id = Res_Stops::where('short', $item['stop_area'])
                            ->first()->id; 
                    $temp->stop_id = $stop_id;
                    $temp->save(); 
                } else {
                    $isNewGroup = 1;
                    break;
                }
            }
            
            if ($isNewGroup === 1) {
                $new_group = new Res_Groups; 
                $new_group->max_cap = config('config.MAX_CAP_BUS'); 
                $new_group->save();

                for ($j=0; $j<count($one_group); $j++) { 
                    $item = $one_group[$j]; 

                    $new_time = new Res_Times;
                    // Get store id.
                    $stop_id = Res_Stops::where('short', $item['stop_area'])
                                ->first()->id; 
                    $new_time->stop_id = $stop_id;
                    $new_time->group_id = $new_group->id; 

                    // Get time. 
                    $time = $item['hour'] . ":" . $item['min'] . ":00"; 
                    $new_time->time = $time; 
                    $new_time->date = $item['date']; 
                    $new_time->w_h = isset($item['w_h']) ? $item['w_h'] : config('config.TYPE_SCHEDULE_WEEKLY');
                    $new_time->valid = isset($item['valid']) ? $item['valid'] : config('config.TYPE_SCHEDULE_UNREMOVED');
                    $new_time->open = isset($item['open']) ? $item['open'] : config('config.TYPE_SCHEDULE_ENABLED');
                    $new_time->day_of_week = $item['dow']; 
                    $new_time->area_id = $item['area_id']; 

                    $new_time->save(); 
                } 
            }
        }
    }
    
    public function postAddForEditExistingSchedule(Request $request) { 
        $data = json_decode($request->getContent(), true); 
        if (count($data) == 0) return;
        
        for ($i=0; $i<count($data); $i++) {
            $one_group = $data[$i]; //
            
            $new_group = new Res_Groups; 
            $new_group->max_cap = config('config.MAX_CAP_BUS'); 
            $new_group->save();
            
            for ($j=0; $j<count($one_group); $j++) { 
                    $item = $one_group[$j]; 
            
                    $new_time = new Res_Times;
                    // Get store id.
                    $stop_id = Res_Stops::where('short', $item['stop_area'])
                                ->first()->id; 
                    $new_time->stop_id = $stop_id;
                    $new_time->group_id = $new_group->id; 

                    // Get time. 
                    $time = $item['hour'] . ":" . $item['min'] . ":00"; 
                    $new_time->time = $time; 
                    $new_time->date = $item['date']; 
                    $new_time->w_h = isset($item['w_h']) ? $item['w_h'] : config('config.TYPE_SCHEDULE_WEEKLY');
                    $new_time->valid = isset($item['valid']) ? $item['valid'] : config('config.TYPE_SCHEDULE_UNREMOVED');
                    $new_time->open = isset($item['open']) ? $item['open'] : config('config.TYPE_SCHEDULE_ENABLED');
                    $new_time->day_of_week = $item['dow']; 
                    $new_time->area_id = $item['area_id']; 

                    $new_time->save(); 
            } 
        }  
    }
    
}
