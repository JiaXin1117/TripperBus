<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .top { color: black; font-weight: bold; font-size: 13px; font-family: verdana, arial; }
        .likep { color: black; font-weight: normal; font-size: 12px; font-family: verdana, arial; }
        .small { color: black; font-size: 8px; font-family: verdana, arial; }
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
        This message is regarding your reservation (# {{$reservation['id']}}) for {{$reservation['Seats']}} seat from {{$reservation['area_name']}} on {{$reservation['date']}}.<br>
        <br>
        Please be advised that there has been a time change in the above reservation.<br>
        <br>
        The old information: {{$reservation['oldTime']}} from <span tabindex="0" role="button" class="contextualExtensionHighlight ms-font-color-themePrimary ms-border-color-themePrimary ident_695_725">{{$reservation['oldStopAddress']}}</span> {{$reservation['oldStopDetail']}}<br>
        <br>
        <b>The new information: {{$reservation['newTime']}} from <span tabindex="0" role="button" class="contextualExtensionHighlight ms-font-color-themePrimary ms-border-color-themePrimary ident_828_849">{{$reservation['newStopAddress']}}</span> {{$reservation['newStopDetail']}}</b><br>
        {!! $reservation['reason'] !!}<br>
        If this change is inconvenient for you, please do not hesitate to contact us by email at {{$companyEmail}} or by phone (during business hours) at {{$phone}} or toll-free at {{$tollFree}}<br>
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