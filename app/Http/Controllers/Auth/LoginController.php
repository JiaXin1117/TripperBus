<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Res_Users;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
//    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('guest')->except('logout');
    }

    public function postLogin(Request $request) { 
        $data = $request->all();
        $email = $data["email"]; 
        $password = $data["password"];
        /*
        $user = Res_Users::where('name', $name)
                        ->orWhere('email', $name)
                        ->select('name', 'email', 'full_name', 'password', 'created_at')
                        ->first();
        
        if (!count($user)) {
            return response()->json([
                'success'   => false,
                'error'     => 'Invalid User!',
            ]);
        }

        $user = $user->toarray();

        if (!\Hash::check($password, $user['password'])) {
            return response()->json([
                'success'   => false,
                'error'     => 'Invalid Password!',
            ]);
        }

        if (Auth::login($user)) {*/

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            return response()->json([
                'success'   => true,
                'data'      => Auth::user(),
            ]);
        }
        return response()->json([
            'success'   => false,
            'error'     => 'Authentication failed!',
        ]);
    }

    public function getLogout() {
        Auth::logout();
    }
}
