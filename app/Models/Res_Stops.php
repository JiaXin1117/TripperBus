<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Stops extends Model
{
    protected $table = 'res_stops';
    protected $fillable = ['stop_id', 'short', 'address', 'city', 'valid', 'details'];
    
    public function times() {
        return $this->hasMany('App\Models\Res_Times');
    }
}
