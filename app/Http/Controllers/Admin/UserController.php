<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Res_Users;


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

    public function getCurrentUser() {
        if (Auth::check()) {
            return response()->json([
                'success'   => true,
                'user'      => Auth::user(),
            ]);
        }

        return  response()->json([
            'success'   => false,
            'error'     => 'Not logged in!',
        ]);
    }

    public function addUser(Request $request) {
        $user = $request->input('user');

        $validator = $this->user_credential_rules($user);
        if ($validator->fails()) {
            return response()->json([
                'success'    => false,
                'error'     => $validator->getMessageBag()->first(),
            ]);
        }

        //check exist
        if (Res_Users::where('name', $user['name'])
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

    public function updateUser(Request $request) {
        $user = $request->input('user');

        $validator = $this->user_credential_rules($user);
        if ($validator->fails()) {
            return response()->json([
                'status'    => false,
                'error'     => $validator->getMessageBag()->first(),
            ]);
        }

        //check exist
        if (Res_Users::where('id', '<>', $user['id'])
                    ->where(function($query) use($user) {
                        $query->where('name', $user['name'])
                              ->orWhere('email', $user['email']);
                    })
                    ->exists()) {
            return response()->json([
                'success'   => false,
                'error'     => "User already exists!",
            ]);
        }

        unset($user['created_at']);
        unset($user['updated_at']);

        Res_Users::unguard();
        $success = Res_Users::find($user['id'])->update($user);
        Res_Users::reguard();

        $resUser = $success ? Res_Users::find($user['id']) : null;
        
        return response()->json([
            'success'   => $success,
            'data'      => $resUser,
        ]);
    }

    public function deleteUser(Request $request) {
        $userId = $request->input('userId');

        //check exist
        $user = Res_Users::find($userId);
        if (!$user) {
            return response()->json([
                'success'   => false,
                'error'     => "User doesn't exist!",
            ]);
        }

        Res_Users::unguard();
        $success = $user->delete();
        Res_Users::reguard();

        return response()->json([
            'success'   => $success
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
