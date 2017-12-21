<?php namespace App\Http\Controllers\Main;

use Illuminate\Http\Request;
use Validator;
use App\Libraries\StoreManager;
use Illuminate\Routing\Controller;
use Mail;
use Illuminate\Support\Facades\Input;
use Carbon\Carbon;
use PushNotification;

class LandingController extends Controller {

    public function __construct() {

    }
    
    public function getIndex() {
/*         if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
            return redirect()->route('account');
        } else {
            return redirect()->route('login');
        } */
        return view('main.index'/* , ['account' => ''
            , 'drivers' => 'active'
            , 'orders' => ''
            , 'orders_today' => ''
            , 'orders_csv' => ''
            , 'orders_csv_geo' => ''
            , 'order_new' => ''
            , 'order_task' => ''
            , 'maps' => ''
            , 'admin_stores' => ''
            , 'admin_drivers' => ''
            , 'drivers_content' => $drivers
        ] */);   
    }

    public function getAbout() {
        return view('main.about');
    }

    public function getElite() {
        return view('main.elite');
    }

    public function getBlogIndex() {
        return view('main.blog_index');
    }

    public function getReserve1() {
        return view('main.reserve1');
    }

    public function getReserve2() {
        return view('main.reserve2');
    }

    public function getReserve3() {
        return view('main.reserve3');
    }
}
