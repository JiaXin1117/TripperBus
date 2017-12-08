<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Customers extends Model
{
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

    public function permissions() {
        return $this->hasMany('App\Models\CustomerToPermission', 'customer_id');
    }
}
