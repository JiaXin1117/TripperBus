<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Schedule_Type extends Model
{
    protected $table = 'res_schedule_type';
    protected $fillable = ['id', 'type'];
    
    public function times() {
        return $this->hasMany('App\Models\Res_Times');
    }
}
