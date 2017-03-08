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
        $cur_date = date_create($date); 
        
        $cnt = \App\Models\Res_Times::where('date', '<=',  $cur_date)
            ->where('day_of_week',  date('w', strtotime($date)))
            ->count();
        if ($cnt == 0) {
            return response()->json([
                'state' => 'fail',
                'data' => 'No weekly schedule set for this date.'
            ]);
        } else {
            $result = \App\Models\Res_Times::where('date', '<=',  $cur_date)
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
                $temp['from_date'] = $reservation->date;
                $temp['dow'] = $reservation->day_of_week;

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
    
    
    public function get_Retrieve_Schedules_By_Month() {
            $year = Input::get('year');
            $month = Input::get('month');
            $date_timestamp = mktime(0, 0, 0, $month, 1, $year);
            
            $response = array();
            
            for ($i = mktime(0, 0, 0, $month, 1, $year); $i <= mktime(0, 0, 0, $month, cal_days_in_month(CAL_GREGORIAN,$month,$year)); $i += 24 * 60 *60) {
                $cur_date = date("Y-m-d", $i);
                
                $cnt = \App\Models\Res_Times::where('w_h', $this->db_week_schedule)
                    ->where('date', '<=',  $cur_date)
                    ->where('day_of_week',  date('w', $i))
                    ->count();
                
                if ($cnt > 0) {
                    
                    $result = \App\Models\Res_Times::where('w_h', $this->db_week_schedule)
                            ->where('date', '<=',  $cur_date)
                            ->where('day_of_week',  date('w', $i))
                            ->get();
                    
                    foreach ($result as $reservation) {
                        $temp = array();
                        $temp['time'] = $reservation->time;
                        $temp['stop_area'] = Res_Stops::find($reservation->stop_id)->short;
                        $temp['max_cap'] = Res_Groups::find($reservation->group_id)->max_cap;
                        $temp['group_id'] = $reservation->group_id;
                        $temp['schedule_type'] = $reservation->w_h;
                        $temp['schedule_date'] = $cur_date;

                        $response[] = $temp;
                    }
                }
            }
            
            return response()->json([
                'state' => 'success',
                'data' => $response
            ]);
            
    }
    
    public function get_Retrieve_Stops() {
        $stops = Res_Stops::all();
        
        $response = array();
        foreach ($stops as $stop) {
            $response[] = $stop->short;
        }
        
        return response()->json([
            'state' => 'success',
            'data' => $response
        ]);
    }
    
}
