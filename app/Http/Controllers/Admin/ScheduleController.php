<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Res_Stops;
use App\Models\Res_Groups;
use App\Models\Res_Groups_DestStops;
use App\Models\Res_Times;
use App\Models\Res_Holidays;
use Illuminate\Support\Facades\Input;

class ScheduleController extends Controller
{
    
    public function __construct()
    {
        
    }

    // Retrieve schedule by date.
    public function getRetriveScheduleByDate() { 
        $date = Input::get('date');
        $area_id = Input::get('area_id');
        $cur_date = date_create($date); 
        $response = array();
        
        // Get Holiday Schedule First.
        $cnt = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                ->where('date', $cur_date)
                // ->where('day_of_week',  date('w', $cur_date->getTimestamp()))
                ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                ->where('area_id', $area_id)
                ->count(); 
        
        if ($cnt > 0) {
            $result = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    //->where('date', $cur_date)
                    ->where('day_of_week',  date('w', $cur_date->getTimestamp()))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('area_id', $area_id)
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
        } else { 
        
            // Get weekly schedule
            $cnt = \App\Models\Res_Times::where('date', '<=',  $cur_date)
                    ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('day_of_week',  date('w', strtotime($date)))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('area_id', $area_id)
                    ->count();
            
            if ($cnt > 0) {
                $result = \App\Models\Res_Times::where('date', '<=',  $cur_date)
                        ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                        ->where('day_of_week',  date('w', strtotime($date)))
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->where('area_id', $area_id)
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
            $area_id = Input::get('area_id');
            $date_timestamp = mktime(0, 0, 0, $month, 1, $year);
            
            $response = array();
            $holidays = array();
            
            for ($i = mktime(0, 0, 0, $month, 1, $year); $i <= mktime(0, 0, 0, $month, cal_days_in_month(CAL_GREGORIAN,$month,$year)); $i += 24 * 60 *60) {
                $cur_date = date("Y-m-d", $i); 
                $holiday = null;
                
                // Get holiday schedule first for this date.
                $cnt = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('date', $cur_date)
                    // ->where('day_of_week',  date('w', $i))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('area_id', $area_id)
                    ->count(); 
                
                //$isHoliday = 0;
                if ($cnt > 0) {
                    $result = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                            ->where('date', $cur_date)
                            // ->where('day_of_week',  date('w', $i))
                            ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                            ->where('area_id', $area_id)
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

                    $holiday = Res_Holidays::where('date', $cur_date)
                                ->first();
                } else {
                    
                    // Get weekly schedule.
                    $cnt = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                        ->where('date', '<=',  $cur_date)
                        ->where('day_of_week',  date('w', $i))
                        ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                        ->where('area_id', $area_id)
                        ->count();

                    if ($cnt > 0) {
                        $result = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                                ->where('date', '<=',  $cur_date)
                                ->where('day_of_week',  date('w', $i))
                                ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                                ->where('area_id', $area_id)
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

                $holidays[] = $holiday;
            }

            if (count($response) > 0) {
                return response()->json([
                    'state' => 'success',
                    'data' => $response,
                    'holidays'   => $holidays,
                ]);
            }

            return response()->json([
                'state' => 'fail',
                'data' => 'Cannot find reservation for this date.'
            ]);
            
    }
    
    // Retrieve GroupTimes.
    public function getRetriveGroupTimes() { 
        $date = Input::get('date');
        $area_id = Input::get('area_id');
        $schedule_type = Input::get('schedule_type');

        $cur_date = date_create($date); 
        $response = array();
        $times = array();
        $holiday = array();
        
        if ($schedule_type == config('config.TYPE_SCHEDULE_HOLIDAY')) {
            // Get Holiday Schedule First.
            $cnt = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                ->where('date', $cur_date)
                // ->where('day_of_week',  date('w', $cur_date->getTimestamp()))
                ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                ->where('area_id', $area_id)
                ->count(); 
            
            if ($cnt > 0) {
                $result = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_HOLIDAY'))
                    ->where('date', $cur_date)
                    //->where('day_of_week',  date('w', $cur_date->getTimestamp()))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('area_id', $area_id)
                    ->get();
                
                foreach ($result as $time) {
                    $temp = array();
                    $temp['time'] = $time->time;
                    $temp['stop_area'] = Res_Stops::find($time->stop_id)->short;
                    $temp['max_cap'] = Res_Groups::find($time->group_id)->max_cap;
                    $temp['group_id'] = $time->group_id;
                    $temp['w_h'] = $time->w_h;
                    $temp['date'] = $time->date;
                    $temp['dow'] = $time->day_of_week;
                    $temp['time_id'] = $time->id;
                    $temp['open'] = $time->open;
                    $temp['area_id'] = $time->area_id;

                    $times[] = $temp;
                }

                $holiday = Res_Holidays::where('date', $cur_date)
                                    ->where('area_id', $area_id)
                                    ->first();
            }
        } 
        else {
            // Get weekly schedule
            $latest_date = \App\Models\Res_Times::where('date', '<=',  $cur_date)
                ->where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                ->where('day_of_week',  date('w', strtotime($date)))
                ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                ->where('area_id', $area_id)
                ->max('date');

            $cnt = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                ->where('date', $latest_date)
                ->where('day_of_week',  date('w', strtotime($date)))
                ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                ->where('area_id', $area_id)
                ->count();
            
            if ($cnt > 0) {
                $result = \App\Models\Res_Times::where('w_h', config('config.TYPE_SCHEDULE_WEEKLY'))
                    ->where('date', $latest_date)
                    ->where('day_of_week',  date('w', strtotime($date)))
                    ->where('valid',  config('config.TYPE_SCHEDULE_UNREMOVED'))
                    ->where('area_id', $area_id)
                    ->get();

                foreach ($result as $time) {
                    $temp = array();
                    $temp['time'] = $time->time;
                    $temp['stop_area'] = Res_Stops::find($time->stop_id)->short;
                    $temp['max_cap'] = Res_Groups::find($time->group_id)->max_cap;
                    $temp['group_id'] = $time->group_id;
                    $temp['w_h'] = $time->w_h;
                    $temp['date'] = $time->date;
                    $temp['dow'] = $time->day_of_week;
                    $temp['time_id'] = $time->id;
                    $temp['open'] = $time->open;
                    $temp['area_id'] = $time->area_id;

                    $times[] = $temp;
                }
            }
            
            $response['latest_date'] = $latest_date;
        }

        $group_times = array();
        $groups = array();

        if (count($times) > 0) {
            usort($times, function($a, $b) { return ($a['time'] - $b['time']); });

            $grouped = array();
            foreach($times as $item) {
                $grouped[$item['group_id']][] = $item;
            }

            foreach($grouped as $item) {
                $group_times[] = $item;

                $group = Res_Groups::find($item[0]['group_id']);
                $group['dest_stops'] = Res_Groups_DestStops::where('group_id', $item[0]['group_id'])->get();
                $groups[] = $group;
            }
        }

        $response['group_times'] = $group_times;
        $response['groups'] = $groups;
        $response['stops'] = Res_Stops::all()->toarray();
        if ($holiday) {
            $response['holiday'] = $holiday;
        }

        return response()->json([
            'state' => 'success',
            'data' => $response
        ]);
/*        
        return response()->json([
            'state' => 'fail',
            'data' => 'Cannot find reservation for this date.'
        ]);*/
    }

    public function getRetrieveStops() {
        $stops = Res_Stops::all();

        $response = $stops->toarray();
/*        
        $response = array();
        foreach ($stops as $stop) {
            $response[] = $stop;
        }*/
        
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
        
        $group_main_info = $data['group_main_info'];
        $group_additional_info = $data['group_additional_info'];
        $holiday = isset($data['holiday']) ? $data['holiday'] : null;
        
        for ($i=0; $i<count($group_main_info); $i++) { 
            $one_group = $group_main_info[$i];
            
            $isNewGroup = 0;
            $isRemoved = (isset($group_additional_info[$i]['Removed']) && $group_additional_info[$i]['Removed']);
            $isDisabled = (isset($group_additional_info[$i]['Disabled']) && $group_additional_info[$i]['Disabled']);
            $isNew = (isset($group_additional_info[$i]['New']) && $group_additional_info[$i]['New']);
            
            // ********* Update infos on res_times. 
            for ($j=0; $j<count($one_group); $j++) { 
                $item = $one_group[$j]; 
                
                 if (isset($item['time_id'])) {
                    $time_id = (int)$item['time_id']; 
                    $temp = Res_Times::find($time_id);

                    if ($isNew && ($temp->date != $item['date'])) {
                        $isNewGroup = 1;
                        break;
                    }
                 
                    $temp->time = $item['time']; 
                    $stop_id = Res_Stops::where('short', $item['stop_area'])
                            ->first()->id; 
                    $temp->stop_id = $stop_id;
                    $temp->valid = $isRemoved ? config('config.TYPE_SCHEDULE_REMOVED') : config('config.TYPE_SCHEDULE_UNREMOVED');
                    $temp->open = $isDisabled ? config('config.TYPE_SCHEDULE_DISABLED') : config('config.TYPE_SCHEDULE_ENABLED');
                    $temp->w_h = isset($item['w_h']) ? $item['w_h'] : config('config.TYPE_SCHEDULE_WEEKLY');
                    $temp->save(); 
                } else {
                    $isNewGroup = 1;
                    break;
                }
            }
            // Update infos on res_times. ********* 
            
            if ($isNewGroup) {
                if ($isRemoved)
                    continue;
                    
                $new_group = new Res_Groups; 
                $new_group->max_cap = $group_additional_info[$i]['max_capacity'];
                $new_group->save();

                for ($j=0; $j<count($one_group); $j++) { 
                    $item = $one_group[$j]; 

                    //************ Store infos on Res_Times Table. 
                    $new_time = new Res_Times;
                    
                    $stop_id = Res_Stops::where('short', $item['stop_area'])
                                ->first()->id; 
                    $new_time->stop_id = $stop_id;
                    $new_time->group_id = $new_group->id; 

                    $time = $item['hour'] . ":" . $item['min'] . ":00"; 
                    $new_time->time = $time; 
                    $new_time->date = $item['date']; 
                    $new_time->w_h = isset($item['w_h']) ? $item['w_h'] : config('config.TYPE_SCHEDULE_WEEKLY');
                    $new_time->valid = isset($item['valid']) ? $item['valid'] : config('config.TYPE_SCHEDULE_UNREMOVED');
                    $new_time->open = $isDisabled ? config('config.TYPE_SCHEDULE_DISABLED') : config('config.TYPE_SCHEDULE_ENABLED');
                    $new_time->day_of_week = $item['dow']; 
                    $new_time->area_id = $item['area_id']; 

                    $new_time->save(); 
                    //Store infos on Res_Times Table. **************
                } 

                //*********** Store infos about dest stops. 
                foreach ($group_additional_info[$i]['dest_stops'] as $dest_stop) {
                    $new_group_deststop = new Res_Groups_DestStops; 
                    $new_group_deststop->group_id = $new_group->id;
                    $new_group_deststop->dest_stop_id = $dest_stop['stop_id'];
                    $new_group_deststop->save();
                }
                // Store infos about dest stops. ***********

            } else {
                // ********* Update infos about dest_stops.
                $temp = Res_Groups::find($group_additional_info[$i]['group_id']); 
                $temp->max_cap = $group_additional_info[$i]['max_capacity'];
                $temp->save(); 

                Res_Groups_DestStops::where('group_id', $group_additional_info[$i]['group_id'])->delete();                  

                foreach ($group_additional_info[$i]['dest_stops'] as $dest_stop) {
                    $new_group_deststop = new Res_Groups_DestStops; 
                    $new_group_deststop->group_id = $group_additional_info[$i]['group_id'];
                    $new_group_deststop->dest_stop_id = $dest_stop['stop_id'];
                    $new_group_deststop->save();
                }
                // Update infos about dest_stops. *********
            }
        }

        if ($holiday) {
            $this->setHoliday($holiday);
        }

        return response()->json([
            'success'   => true,
        ]);
    }
    
    public function postSaveGroupsAdditionalInfo(Request $request) {
        $groupAdditionalInfo = json_decode($request->getContent(), true); 
        if (count($groupAdditionalInfo) == 0) return;
              
        for ($i=0; $i<count($groupAdditionalInfo); $i++) {
            $item = $groupAdditionalInfo[$i];
            
            if (!isset($item['group_id']) || !isset($item['max_capacity']) || !isset($item['dest_stop_id']) ) continue;
            
            $temp = Res_Groups::find($item['group_id']); 
            
            if (isset($temp)) {
                $temp->max_cap = $item['max_capacity']; 
                $temp->dest_stop_id = $item['dest_stop_id']; 
                
                $temp->save(); 
            }
        }
    }
    
    public function postAddForEditExistingSchedule(Request $request) { 
        $data = json_decode($request->getContent(), true); 
        if (count($data) == 0) return;
        
        $group_main_info = $data['group_main_info'];
        $group_additional_info = $data['group_additional_info'];
        
        for ($i=0; $i<count($group_main_info); $i++) {
            $one_group = $group_main_info[$i]; 
            
            $new_group = new Res_Groups; 
            $new_group->max_cap = $group_additional_info[$i]['max_capacity'];
            $new_group->dest_stop_id = $group_additional_info[$i]['dest_stop_id']; 
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
    
    public function getAvailableStopsForArea() {
            $param_areaId = Input::get("area_id");
            
            $cnt = Res_Stops::where('area_id', $param_areaId)->count();
            if ($cnt > 0) {
                $stops = Res_Stops::where('area_id', $param_areaId)->get();
                
                return response()->json([
                    'state' => 'success',
                    'data' => $stops
                ]);
            }
            
            return response()->json([
                'state' => 'fail'
            ]);
    }
    
    public function getStopInfo() {
            $param_stopId = Input::get("stop_id");
            
            $stop = Res_Stops::find($param_stopId);
            if (isset($stop)) {
                return response()->json([
                    'state' => 'success',
                    'data' => $stop
                ]);
            }
            
            return response()->json([
                'state' => 'fail'
            ]);
    }
    
    public function getGroupInfo() {
            $param_groupId = Input::get('group_id');
            
            $group = Res_Groups::find($param_groupId);
            $group['dest_stops'] = Res_Groups_DestStops::where('group_id', $param_groupId)->get();
            if (isset($group)) {
                return response()->json([
                    'state' => 'success',
                    'data' => $group
                ]);
            }
            
            return response()->json([
                'state' => 'fail'
            ]);
    }

    public function getDestStopsForGroup() {
            $param_groupId = Input::get("group_id");
            
            $cnt = Res_Groups_DestStops::where('group_id', $param_groupId)->count();
            if ($cnt > 0) {
                $items = Res_Groups_DestStops::where('group_id', $param_groupId)->get();
                
                return response()->json([
                    'state' => 'success',
                    'data' => $items
                ]);
            }
            
            return response()->json([
                'state' => 'fail'
            ]);
    }
    
    public function setHoliday($holiday) {
        if(!isset($holiday['pricing'])) {
            $holiday['pricing'] = 0;
        }
        Res_Holidays::updateOrCreate(
            ['date' => $holiday['date'], 'area_id' => $holiday['area_id']],
            ['name' => $holiday['name'], 'pricing' => $holiday['pricing']]
        );
    }

    public function unsetHoliday($holiday) {
        $exist = Res_Holidays::where('date', $holiday['date'])
                    ->where('name', $holiday['name'])
                    ->where('id', $holiday['id'])
                    ->first();
        if (!$exist) {
            return "Holiday doesn't exist";
        }

        Res_Holidays::delete($holiday);

        return '';
    }
}
