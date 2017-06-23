<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Models\Res_Users;

class LoginController extends Controller
{
    public function __construct()
    {
        
    }
    
    public function postLogin(Request $request) { 
        $data = $request->all();
        $name = $data["name"]; 
        $password = $data["password"];
        
        $user = Res_Users::where('username', $name)
                        ->orWhere('email', $name)
                        ->select('username', 'email', 'full_name', 'password', 'created_at')
                        ->first();
        
        if (!count($user)) {
            return response()->json([
                'success'   => false,
                'error'     => 'Invalid User',
            ]);
        }

        $user = $user->toarray();

        if (!\Hash::check($password, $user['password'])) {
            return response()->json([
                'success'   => false,
                'error'     => 'Invalid Password!',
            ]);
        }

        return response()->json([
            'success'   => true,
            'data'      => $user
        ]);
    }
}
