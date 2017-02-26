<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Weekly_Schedule extends Model
{
    protected $table = 'weekly_schedule';
    protected $fillable = ['day_of_week', 'bus_cnt', 'start_date'];
}
