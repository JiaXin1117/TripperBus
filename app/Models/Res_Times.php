<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Times extends Model
{
    protected $table = 'res_times';
    protected $fillable = ['time_id', 'stop_id', 'group_id', 'time', 'date', 'valid', 'w/h'];
}
