<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin_Users extends Model
{
    protected $table = 'admin_users';
    protected $fillable = ['email', 'password'];
}
