<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Reservations extends Model
{
    protected $table = 'res_reservations';
    protected $fillable = ['date', 'time', 'outbound_area_id', 'return_area_id', 'valid', 'group_id'];
}
