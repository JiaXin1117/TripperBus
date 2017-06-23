<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Res_Users;
// use App\Models\Res_Groups;
// use App\Models\Res_Groups_DestStops;
// use App\Models\Res_Times;
// use App\Models\Res_Reservations;
// use App\Models\Res_Setting;
// use Illuminate\Support\Facades\Input;
// use DB;
// use Carbon\Carbon;
// use Illuminate\Support\Facades\Mail;
// use App\Mail\Mail_Reservation;
// use App\Mail\Mail_Bus;


class UserController extends Controller
{
    
    public function __construct()
    {
        
    }

    public function getUsers() {
        $users = Res_Users::get()->toarray();
        if (!count($users)) {
            return response()->json([
                'success'   => false
            ]);
        }

        return response()->json([
            'success'   => true,
            'users'     => $users,
        ]);
    }

    public function addUser(Request $request) {
        $user = $request->input('user');

        $validator = $this->user_credential_rules($user);
        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'error'     => $validator->getMessageBag()->first(),
            ]);
        }

        //check exist
        if (Res_Users::where('username', $user['username'])
              ->orWhere('email', $user['email'])
              ->exists()) {
            return response()->json([
                'success'   => false,
                'error'     => 'User already exists!',
            ]);
        }

        unset($user['created_at']);
        unset($user['updated_at']);

        Res_Users::unguard();
        $res = Res_Users::create($user);
        Res_Users::reguard();

        $success = ($res != null);

        return response()->json([
            'success'   => $success,
            'data'      => $res,
        ]);
    }

    public function user_credential_rules(array $data) {
        $messages = [
            'email.required'    => 'Please input email!',
            'email.email'       => 'Email is bad!',
            'password.required' => 'Please input password!',
            'password.min'      => 'Password must be at least 6 characters!',
        ];

        $validator = Validator::make($data, [
            'password'  => 'required|min:6',
            'email'     => 'required|email',
        ], $messages);

        return $validator;
    }
    
}
