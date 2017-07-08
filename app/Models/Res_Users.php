<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Res_Users extends Authenticatable
{
    use Notifiable;

    protected $table = 'res_users';
    protected $fillable = ['email', 'password', 'name', 'full_name'];

    protected $hidden = [
        /*'password', */'remember_token',
    ];
    
    /**
     * This mutator automatically hashes the password.
     *
     * @var string
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = \Hash::make($value);
    }

}
