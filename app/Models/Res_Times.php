<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Times extends Model
{
    protected $table = 'res_times';
    protected $fillable = ['id', 'stop_id', 'group_id', 'time', 'date', 'valid', 'open', 'w_h', 'day_of_week', 'area_id'];
}
