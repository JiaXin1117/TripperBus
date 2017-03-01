<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Res_Days_Of_Week;
use App\Models\Res_Stops;
use App\Models\Res_Groups;

class ScheduleController extends Controller
{
    public function __construct()
    {
        
    }
    
    public function getRetrieveSchedule() { 
        // Get days of week infos.
        $dow_cnt = Res_Days_Of_Week::all()->count(); 
        if ($dow_cnt == 0 || $dow_cnt > 7) {
            return response()->json([
                'state' => 'fail',
                'error' => 'days of week error.'
            ]);
        }
        $dow = Res_Days_Of_Week::all(); 
        
        $result = array();
        
        // Get time infos per day.
        foreach ($dow as $day) {
            
            $time_infos_per_day = $day->times;
            
            $groups = array();
            foreach($time_infos_per_day as $item) {
                if (!in_array($item->group_id, $groups)) {
                    $groups[] = $item->group_id;
                }
            } 
            
            $i = 0;
            foreach ($groups as $group) {
                foreach ($time_infos_per_day as $time_info) {
                    if ($time_info->group_id == $group) {
                        $temp = array();
                        $temp['time'] = $time_info->time;
                        $temp['stop_area'] = Res_Stops::find($time_info->stop_id)->short;
                        $temp['max_cap'] = Res_Groups::find($time_info->group_id)->max_cap;
                        $temp['group_id'] = $group;
                        
                        $result[$day->id][$i][] = $temp;
                    }
                } 
                $i++;
            } 
        }
        
        return response()->json([
            'state' => 'success',
            'data' => $result
        ]);
    }
}
