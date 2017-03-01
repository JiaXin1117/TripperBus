<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Days_Of_Week extends Model
{
    protected $table = 'res_days_of_week';
    protected $fillable = ['id', 'details'];
    
    public function times() {
        return $this->hasMany('App\Models\Res_Times', 'day_of_week');
    }
}
