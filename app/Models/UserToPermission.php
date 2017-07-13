<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserToPermission extends Model
{
    protected $table = 'users_to_permissions';
    protected $fillable = ['user_id', 'permission_id'];

    public function user() {
        return $this->belongsTo('App\Models\Res_Users', 'user_id');
    }
}
