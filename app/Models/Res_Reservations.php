<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Res_Reservations extends Model
{
    protected $table = 'res_reservations';
    protected $fillable = ['date', 'time_id', 'outbound_area_id', 'return_area_id', 'valid', 'First Name', 'Last Name', 'Phone', 'Groupon Code', 'Campaign Name', 'Payment Method', 'Authorize.net Links', 'IP Address', 'Made By', 'Notes', 'App Scanned', 'Leg Price', 'Transaction Amount', 'Under Account', 'Points Used', 'Points Earned', 'Action Records', 'Other Leg'];
}
