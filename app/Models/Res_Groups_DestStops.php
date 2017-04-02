<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Groups_DestStops extends Model
{
    protected $table = 'res_groups_deststops';
    protected $fillable = ['group_id', 'dest_stop_id'];
}
