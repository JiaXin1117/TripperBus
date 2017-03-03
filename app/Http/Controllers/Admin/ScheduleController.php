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
    protected $db_week_schedule = 1;
    protected $db_hol_schedule = 2;
    
    public function __construct()
    {
        
    }

    // Retrieve schedule by date.
    public function get_Retrive_Schedule_By_Date() { 
        $date = Input::get('date');
        if ($date == NULL) {
            return response()->json([
                'state' => 'fail',
                'data' => 'No Input Data'
            ]);
        }
        
        $cur_date = date_create($date); 
        
        $result = \App\Models\Res_Times::where('w_h', $this->db_hol_schedule)
                    ->where('date', date_format($cur_date, 'Y-m-d'))->count(); 
        if ($result == 0) { // if weekly schedule
                $result = \App\Models\Res_Times::where('w_h', $this->db_week_schedule)
                    ->where('date', '<=',  $cur_date)
                    ->where('day_of_week',  date('w', strtotime($date)))
                    ->count();
                if ($result == 0) {
                    return response()->json([
                        'state' => 'fail',
                        'data' => 'No weekly schedule set for this date.'
                    ]);
                } else {
                    $result = \App\Models\Res_Times::where('w_h', $this->db_week_schedule)
                    ->where('date', '<=',  $cur_date)
                    ->where('day_of_week',  date('w', strtotime($date)))
                    ->get();
                    
                    $response = array();
                    foreach ($result as $reservation) {
                        $temp = array();
                        $temp['time'] = $reservation->time;
                        $temp['stop_area'] = Res_Stops::find($reservation->stop_id)->short;
                        $temp['max_cap'] = Res_Groups::find($reservation->group_id)->max_cap;
                        $temp['group_id'] = $reservation->group_id;
                        $temp['schedule_type'] = $reservation->w_h;

                        $response[] = $temp;
                    }
                    return response()->json([
                        'state' => 'success',
                        'data' => $response
                    ]);
                }
                
                
        } else {    // if holiday schedule
                $result = \App\Models\Res_Times::where('w_h', $this->db_hol_schedule)
                    ->where('date', date_format($cur_date, 'Y-m-d'))->get(); 
            
                $response = array();
                foreach ($result as $reservation) {
                    $temp = array();
                    $temp['time'] = $reservation->time;
                    $temp['stop_area'] = Res_Stops::find($reservation->stop_id)->short;
                    $temp['max_cap'] = Res_Groups::find($reservation->group_id)->max_cap;
                    $temp['group_id'] = $reservation->group_id;
                    $temp['schedule_type'] = $reservation->w_h;
                    
                    $response[] = $temp;
                }
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
}
