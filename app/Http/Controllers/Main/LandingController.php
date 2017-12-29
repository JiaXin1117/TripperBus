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
        return view('main.index'/* , [
            'account' => '',
        ] */);   
    }

    public function getAbout() {
        return view('main.about');
    }

    public function getAccountDetails() {
        return view('main.account_details');
    }

    public function getAccountOverview() {
        return view('main.account_overview');
    }

    public function getAccountPassword() {
        return view('main.account_password');
    }

    public function getAccountReservation() {
        return view('main.account_reservation');
    }

    public function getAccountReservations() {
        return view('main.account_reservations');
    }

    public function getBlogArticle() {
        return view('main.blog_article');
    }

    public function getBlogIndex() {
        return view('main.blog_index');
    }

    public function getContact() {
        return view('main.contact');
    }

    public function getElite() {
        return view('main.elite');
    }

    public function getFaq() {
        return view('main.faq');
    }

    public function getInterior() {
        return view('main.interior');
    }

    public function getOffer() {
        return view('main.offer');
    }

    public function getParkingLocations() {
        return view('main.parking_locations');
    }

    public function getPressArea() {
        return view('main.press_area');
    }

    public function getPrivacyPolicy() {
        return view('main.privacy_policy');
    }

    public function getRegister() {
        return view('main.register');
    }

    public function getReschedule1() {
        return view('main.reschedule1');
    }

    public function getReschedule2() {
        return view('main.reschedule2');
    }

    public function getReschedule2b() {
        return view('main.reschedule2b');
    }

    public function getReserve1() {
        return view('main.reserve1');
    }

    public function getReserve2() {
        return view('main.reserve2');
    }

    public function getReserve3_Logged() {
        return view('main.reserve3_logged');
    }

    public function getReserve3() {
        return view('main.reserve3');
    }

    public function getSpecialOffer() {
        return view('main.special_offer');
    }

    public function getSuccess() {
        return view('main.success');
    }

    public function getTermCondition() {
        return view('main.term_condition');
    }

    public function getTravelInformation() {
        return view('main.travel_information');
    }

}
