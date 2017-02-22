<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Users extends Model
{
     protected $table = 'res_users';
     protected $fillable = ['email', 'password'];
}
