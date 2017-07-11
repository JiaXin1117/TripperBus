<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Res_Holidays extends Model
{
    protected $table = 'res_holidays';
    protected $fillable = ['date', 'name', 'pricing', 'area_id'];

}
