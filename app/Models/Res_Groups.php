<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Groups extends Model
{
    protected $table = 'res_groups';
    protected $fillable = ['group_id', 'max_cap'];
    
    public function times() {
        return $this->hasMany('App\Models\Res_Times');
    }
}
