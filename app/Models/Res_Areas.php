<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Areas extends Model
{
    protected $table = 'res_areas';
    protected $fillable = ['id', 'area_name'];
    
    public function stops() {
        return $this->hasMany('App\Models\Res_Stops');
    }
}
