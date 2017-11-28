<?php

use App\Models\Res_Setting;
use App\Models\Res_Times;
use Carbon\Carbon;

function getSettingsValue($key) {
    return Res_Setting::get()->first()[$key];
}

function successData($data) {
    return response()->json([
        'success'   => true,
        'data'     => $data,
    ]);
}

function failedError($error) {
    return response()->json([
        'success'   => false,
        'error'     => $error,
    ]);
}

function isBeforeToday($dateStr) {
    $today = Carbon::today();
    $date = new Carbon($dateStr);

    return ($date < $today);
}

function makeReservationNumber($reservation) {
    $time_id = $reservation['time_id'];
    $time = Res_Times::find($time_id)->time;
    $timeStr = Carbon::parse($time)->format('hi');
    $stopStr = Res_Times::find($time_id)->stop->city;
    $idStr = str_pad(substr(strval($reservation['id']), 0, 4), 4, 0, STR_PAD_LEFT);
    $dateStr1 = Carbon::parse($reservation['date'])->format('my');
    $dateStr2 = Carbon::parse($reservation['date'])->format('d');

    $reservation['Res_num'] = $dateStr1 . $timeStr . $stopStr[0] . $idStr . $dateStr2;
}

function addAuthorizeNetLink($reservation, &$AuthorizeNetError) {

    $auth_net_url    = "https://certification.authorize.net/gateway/transact.dll";
    #  Uncomment the line ABOVE for shopping cart test accounts or BELOW for live merchant accounts
    // $auth_net_url    = "https://secure2.authorize.net/gateway/transact.dll";
    
    // include("./au1.php");
    // include("./au2.php");

    $x_l="839K8uarKj3r";
    $x_t="95Ukcc6RZ287Pc7B";

    // Test login ID & trans key
    // $x_l="57Ddes9P3";
    // $x_t="4yT8238a9UpbJb72";

    $hold_authnet_values = array
    (
    "x_login"    => $x_l,
    "x_version"    => "3.1",
    "x_delim_data"   => "TRUE",
    "x_type"    => "AUTH_CAPTURE",
    "x_tran_key"   => $x_t,
    "x_card_num"   => $reservation['CC Number'],
    "x_card_code"   => $reservation['CC Code'],
    "x_exp_date"   => $reservation['CC Month'].substr($reservation['CC Year'],2,2),
    "x_amount"    => $reservation['Transaction Amount'],
    "x_test_request"  => "FALSE",
    "x_first_name"   => $reservation['First Name'],
    "x_last_name"   => $reservation['Last Name'],
    "x_phone"    => $reservation['Phone'],
    "x_email"    => $reservation['Email'],
    "x_invoice_num"   => $reservation['id'],
    );
    
    $hold_fields = "";
    
    foreach( $hold_authnet_values as $hold_key => $hold_value ) $hold_fields .= "$hold_key=" . urlencode( $hold_value ) . "&";
    
    $hold_ch = curl_init("https://secure.authorize.net/gateway/transact.dll"); // URL of gateway for cURL to post to
    curl_setopt($hold_ch, CURLOPT_HEADER, 0); // set to 0 to eliminate header info from response
    curl_setopt($hold_ch, CURLOPT_RETURNTRANSFER, 1); // Returns response data instead of TRUE(1)
    curl_setopt($hold_ch, CURLOPT_POSTFIELDS, rtrim( $hold_fields, "& " )); // use HTTP POST to send form data
    curl_setopt($hold_ch, CURLOPT_SSL_VERIFYPEER, FALSE); // uncomment this line if you get no gateway response.
    curl_setopt($hold_ch, CURLOPT_VERBOSE, 1);
    $hold_resp = curl_exec($hold_ch); //execute post and get results
    $AuthorizeNetError = curl_error($hold_ch);

    curl_close ($hold_ch);
    if ($AuthorizeNetError != '') {
        /*echo $AuthorizeNetError;
        print_r("\n");*/
        return 0;
    }
/*    print_r("hold_fields:" . $hold_fields);
    print_r("\n");
    print_r("hold_resp:" . $hold_resp);
    print_r("\n");
    return;*/
    $hold_response_array=explode(",",$hold_resp);
//    $hold_response_array = json_decode ($hold_resp, true);

//    print_r($hold_response_array);
    if ($hold_response_array[2] != 1) {
        $AuthorizeNetError = $hold_response_array[3];
        return 0;
    }

    if (!$hold_response_array || count($hold_response_array) < 6)
        return 0;
    $hold_response_code=$hold_response_array[0];
    $trans_id=$hold_response_array[6];
    return $trans_id;
/*    print_r("$hold_response_array:");
    print_r($hold_response_array);
    return;
    print_r("$trans_id:");
    print_r($trans_id);*/
    //if (($upfname=="Chaim123")||($upfname=="Busbud123")||($upfname=="Wanderu123"))
/*me    if ($upfname=="Chaim123")
    //then its allways ok to proceed 
    {
    $hold_response_code=1;
    //$resnum="-CYF123-1-CYF123-3-CYF123-1 SATMAR DRIVE-CYF123-9174185418-CYF123-8457832827-CYF123-41.32256-CYF123--70.425548";
    }





    if($hold_response_code==2)
    {
    header ("Location:reservations-3.php?etype=15&submit=1");
    exit;
    }
    
    elseif($hold_response_code==3){
    header ("Location:reservations-3.php?etype=16&sr=$hold_response_array[3]&submit=1");
    exit;
    }
    
    elseif($hold_response_code!=1) //any other error _ i don't know what but 4 or 5 reservations squeaked by a year so lemme jump in here and add a if !=1 loop...
    {
    header ("Location:reservations-3.php?etype=17&submit=1");
    exit;
    }
    
    elseif($hold_response_code==1) //this means the hold was successfully placed so...
    {
    //any condiotion
    $paid=1;
    }
    //close if total_amount!=0 - disable because there's always going to be a charge
    //}
*/
}


/* original
//$auth_net_url    = "https://certification.authorize.net/gateway/transact.dll";
 #  Uncomment the line ABOVE for shopping cart test accounts or BELOW for live merchant accounts
 $auth_net_url    = "https://secure2.authorize.net/gateway/transact.dll";
 
 include("./au1.php");
 include("./au2.php");

 
  $hold_authnet_values = array
 (
  "x_login"    => "$x_l",
  "x_version"    => "3.1",
  "x_delim_data"   => "TRUE",
  "x_type"    => "AUTH_CAPTURE",
  "x_tran_key"   => "$x_t",
   "x_card_num"   => $cc_number,
   "x_card_code"   => $ccv,
  "x_exp_date"   => $cc_exp_month.substr($cc_exp_year,2,2),
  "x_amount"    => $total_amount,
  "x_test_request"  => "FALSE",
  "x_first_name"   => $cc_fname,
  "x_last_name"   => $cc_lname,
  "x_phone"    => $newphonenumber,
  "x_email"    => $eadd,
  "x_invoice_num"   => $resnum,
 );
 
 $hold_fields = "";
 
 foreach( $hold_authnet_values as $hold_key => $hold_value ) $hold_fields .= "$hold_key=" . urlencode( $hold_value ) . "&";
 
 $hold_ch = curl_init("https://secure.authorize.net/gateway/transact.dll"); // URL of gateway for cURL to post to
 curl_setopt($hold_ch, CURLOPT_HEADER, 0); // set to 0 to eliminate header info from response
 curl_setopt($hold_ch, CURLOPT_RETURNTRANSFER, 1); // Returns response data instead of TRUE(1)
 curl_setopt($hold_ch, CURLOPT_POSTFIELDS, rtrim( $hold_fields, "& " )); // use HTTP POST to send form data
 curl_setopt($hold_ch, CURLOPT_SSL_VERIFYPEER, FALSE); // uncomment this line if you get no gateway response.
 $hold_resp = curl_exec($hold_ch); //execute post and get results
 curl_close ($hold_ch);
 $hold_response_array=explode(",",$hold_resp);
 $hold_response_code=$hold_response_array[0];
 $trans_id=$hold_response_array[6];
//if (($upfname=="Chaim123")||($upfname=="Busbud123")||($upfname=="Wanderu123"))
if ($upfname=="Chaim123")
//then its allways ok to proceed 
{
$hold_response_code=1;
//$resnum="-CYF123-1-CYF123-3-CYF123-1 SATMAR DRIVE-CYF123-9174185418-CYF123-8457832827-CYF123-41.32256-CYF123--70.425548";
}





 if($hold_response_code==2)
 {
 header ("Location:reservations-3.php?etype=15&submit=1");
 exit;
 }
 
 elseif($hold_response_code==3){
 header ("Location:reservations-3.php?etype=16&sr=$hold_response_array[3]&submit=1");
 exit;
 }
 
 elseif($hold_response_code!=1) //any other error _ i don't know what but 4 or 5 reservations squeaked by a year so lemme jump in here and add a if !=1 loop...
 {
 header ("Location:reservations-3.php?etype=17&submit=1");
 exit;
 }
 
 elseif($hold_response_code==1) //this means the hold was successfully placed so...
{
//any condiotion
$paid=1;
}
//close if total_amount!=0 - disable because there's always going to be a charge
//}
*/
