<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .top { color: black; font-weight: bold; font-size: 13px; font-family: verdana, arial; }
        .likep { color: black; font-weight: normal; font-size: 12px; font-family: verdana, arial; }
        .small { color: black; font-size: 8px; font-family: verdana, arial; }
        .edittrip3 { margin: 10px 0px 0px 12px; width: 700px; font-size: 20px; }
    </style>
</head>
<body>
<div>
<table border="1"><tbody><tr><td>
<table><tbody>
    <tr>
        <td class="top" align="center" width="674"><img src="https://www.washny.com/avatar2/imgs/print_version_l_color.gif" alt="" border="0"><br>
        <br>
        Phone: {{$phone}} • Toll Free: {{$tollFree}} • Email: {{$companyEmail}}<br>
        <b>=======================================================</b><br>
        </td>
    </tr>
    <tr>
        <td class="likep" width="674"><br>
        Dear {{$reservation['First Name']}} {{$reservation['Last Name']}},<br>
        <br>
        This email is regarding the reservation you have with us from <span tabindex="0" role="button" class="contextualExtensionHighlight ms-font-color-themePrimary ms-border-color-themePrimary ident_598_627">{{$stop['address']}}</span> at {{$time['time']}} on {{$reservation['date']}}. We have hereby placed {{$reservation['Seats']}} seat on hold for future travel.<br>
        <br>
        The following is your new "Hold Number":<br>
        <b>
        <div class="edittrip3" style="font-family: verdana, arial, serif, EmojiFont;">{{$reservation['id']}}</div>
        </b><br>
        <br>
        Whenever you decide on a day of travel, log in to our website using this new "Hold Number" together with your email address, and you will be able to choose a new travel date.<br>
        (To log in right now you may <a href="https://www.tripperbus.com/edit-trip.php?submit=submit&amp;res_lookup={{$reservation['id']}}&amp;eadd_lookup=jiaxin_wp1117@outlook.com" target="_blank" rel="noopener noreferrer">click here</a>)<br>
        Please note that the new travel date &amp; time will be subject to availability of seats on the trip of your choice.<br>
        Also, if the price of your new reservation is more expensive than your original reservation, you will be charged the difference at that time.<br>
        <b>PLEASE NOTE:</b> At this time, your old reservation number (<b>{{$reservation['oldId']}}</b>) is no longer valid for travel or modification.<br>
        </td>
    </tr>
    <tr>
        <td class="likep" width="674"><br>
        We are looking forward to servicing you.<br>
        <br>
        {!!$emailFooter!!}
        </td>
    </tr>
    <tr>
        <td class="small" align="center" width="674"><br>
        Our Web System Is Powered By: <a href="http://{{$companySite}}" target="_blank" rel="noopener noreferrer">{{$companySite}}</a> </td>
    </tr>
</tbody></table>
</td></tr></tbody></table>
</div>
</body>
</html>