<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_DateSchedule extends Model
{
    protected $table = 'res_date_schedule';
    protected $fillable = ['time_id', 'first_seats', 'first_price', 'special_price', 'last_price', 'last_seats', 'max_cap'];
}
