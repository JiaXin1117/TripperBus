<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Models\Admin_Users;

class LoginController extends Controller
{
    public function __construct()
    {
        
    }
    
    public function postLogin(Request $request) { 
        $data = $request->all();
        $email = $data["email"]; 
        $password = $data["password"];  
        
        $count = Admin_Users::where('email', $email)
                ->where('password', $password)
                ->count(); 
        
        if ($count > 0) { 
            return response()->json([
                'state' => 'success'
            ]);
        } else {
            return response()->json([
                'state' => 'fail'
            ]);
        }
    }
}
