<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Res_Users;
use App\Models\UserToPermission;


class UserController extends Controller
{
    public function __construct()
    {
        
    }

    public function getUsers() {
        $users = Res_Users::get()->toarray();
        if (!count($users)) {
            return failedError('No user!');
        }

        $permissions = array();
        foreach ($users as $user) {
            $tPermission = UserToPermission::where('user_id', $user['id'])
                    ->select('permission_id')
                    ->get()
                    ->toarray();
            foreach($tPermission as $permission) {
                $permissions[$user['id']][] = $permission['permission_id'];
            }
        }

        return response()->json([
            'success'       => true,
            'users'         => $users,
            'permissions'   => $permissions,
        ]);
    }

    public function getCurrentUser() {
        if (Auth::check()) {
            $user = Auth::user();
            $permissions1 = UserToPermission::where('user_id', $user['id'])
                ->select('permission_id')
                ->get()
                ->toarray();

            $permissions = array();
            foreach($permissions1 as $permission) {
                $permissions[] = $permission['permission_id'];
            }

            $user['permission'] = $permissions;

            return response()->json([
                'success'   => true,
                'user'      => $user,
            ]);
        }

        return failedError('Not logged in!');
    }

    public function addUser(Request $request) {
        $user = $request->input('user');

        $validator = $this->user_credential_rules($user);
        if ($validator->fails()) {
            return failedError($validator->getMessageBag()->first());
        }

        //check exist
        if (Res_Users::where('name', $user['name'])
                    ->orWhere('email', $user['email'])
                    ->exists()) {
            return failedError('User already exists!');
        }

        unset($user['created_at']);
        unset($user['updated_at']);

        Res_Users::unguard();
        $resUser = Res_Users::create($user);
        Res_Users::reguard();

        $success = ($resUser != null);

        $permission = array();
        if ($success) {
            $permission = $this->setDefaultPermission($resUser['id']);
        }

        return response()->json([
            'success'   => $success,
            'data'      => $resUser,
            'data2'     => $permission,
        ]);
    }

    public function updateUser(Request $request) {
        $user = $request->input('user');

        $validator = $this->user_credential_rules($user);
        if ($validator->fails()) {
            return failedError($validator->getMessageBag()->first());
        }

        //check exist
        if (Res_Users::where('id', '<>', $user['id'])
                    ->where(function($query) use($user) {
                        $query->where('name', $user['name'])
                              ->orWhere('email', $user['email']);
                    })
                    ->exists()) {
            return failedError('User already exists!');
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
            return failedError("User doesn't exist!");
        }

        Res_Users::unguard();
        $success = $user->delete();
        Res_Users::reguard();

        if ($success) {
            UserToPermission::where('user_id', $userId)->delete();
        }
        
        return response()->json([
            'success'   => $success
        ]);
    }

    public function setPermission(Request $request) {
        $userId = $request->input('userId');
        $permissions = $request->input('permission');

        UserToPermission::where('user_id', $userId)->delete();

        foreach ($permissions as $permission) {
            UserToPermission::create([
                'user_id'       => $userId,
                'permission_id' => $permission
            ]);
        }

        return response()->json([
            'success'   => true,
        ]);
    }

    public function setDefaultPermission($userId) {
        UserToPermission::where('user_id', $userId)->delete();

        $permissions = CONFIG('config.DEFAULT_USER_PERMISSION');
        foreach ($permissions as $permission) {
            UserToPermission::create([
                'user_id'       => $userId,
                'permission_id' => $permission
            ]);
        }

        return $permissions;
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
