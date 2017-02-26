<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Weekly_Schedule;

class ScheduleController extends Controller
{
    public function __construct()
    {
        
    }
    
    public function getRetrieveWeeklySchedule() { 
        $count = Weekly_Schedule::all()->count(); 
        
        if ($count > 0) { 
            $data = Weekly_Schedule::all();
            return response()->json([
                'state' => 'success',
                'data' => $data
            ]);
        } else {
            return response()->json([
                'state' => 'fail'
            ]);
        }
    }
}
