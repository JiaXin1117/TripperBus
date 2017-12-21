<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Res_Customers extends Authenticatable
{
    use Notifiable;

    protected $guard = 'customer';
    protected $table = 'res_customers';

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
