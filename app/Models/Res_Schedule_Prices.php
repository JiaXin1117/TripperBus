<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Schedule_Prices extends Model
{
    protected $table = 'res_schedule_prices';
    protected $fillable = ['group_id', 'first_seats', 'first_price', 'special_price', 'last_price', 'last_seats'];
}
