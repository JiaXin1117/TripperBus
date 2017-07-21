@extends ('emails.Reservation')

@section ('content1')
<div class="td likep" width="674"><br>
    Dear {{$reservation['First Name']}} {{$reservation['Last Name']}},<br>
    <br>
    This message is regarding your reservation (# {{$reservation['id']}}) for {{$reservation['Seats']}} seat from {{$reservation['area_name']}} on {{$reservation['date']}}.<br>
    <br>
    Please be advised that there has been a time change in the above reservation.<br>
    <br>
    The old information: {{$reservation['oldTime']}} from {{$reservation['oldStopAddress']}} {{$reservation['oldStopDetail']}}<br>
    <br>
    <b>The new information: {{$reservation['newTime']}} from {{$reservation['newStopAddress']}} {{$reservation['newStopDetail']}}</b><br>
    {!! $reservation['reason'] !!}<br>
    If this change is inconvenient for you, please do not hesitate to contact us by email at {{$companyEmail}} or by phone (during business hours) at {{$phone}} or toll-free at {{$tollFree}}<br>
</div>
@endsection

@section ('footer')
We are looking forward to servicing you.<br><br>
{!!$emailFooter!!}
@endsection
