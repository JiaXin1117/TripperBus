@extends ('emails.Reservation')

@section ('content1')
<div class="td likep">
    <b>Your reservation # ({{$reservation['id']}}) has now been updated.</b><br>
    <b>Thank you for reserving with us, your itinerary is shown below.</b><br>
    <br>
    Please scroll down and present the scannable code on your smartphone/tablet screen to our agent at the bus together with valid ID. Make sure that the code is fully displayed on your device screen at that time. If you think you may not have access to this email confirmation at that time, please print it out on paper and bring that along with you instead.<br>
</div>
@endsection

@section ('content2')
<div class="td">
    <div class="code-label">
        Please present this code when boarding the bus<br>
        <br>
        {{$reservation['id']}} 
    </div>
</div>
<div class="td likep">
    <br>
    <b><u>Y O U R&nbsp;&nbsp; I T I N E R A R Y:</u></b><br>
    <b>Name:</b> {{$reservation['First Name']}} {{$reservation['Last Name']}}
    @if ($reservation['old']['First Name'] != $reservation['First Name'] ||
        $reservation['old']['Last Name'] != $reservation['Last Name'])
        (<b>Changed from:</b> {{$reservation['old']['First Name']}} {{$reservation['old']['Last Name']}})
    @endif
    <br>
    @if ($reservation['old']['Phone'] != $reservation['Phone'])
    <b>Phone:</b> {{$reservation['Phone']}}
        (<b>Changed from:</b> {{$reservation['old']['Phone']}})
    <br>
    @endif
    @if ($reservation['old']['Email'] != $reservation['Email'])
    <b>Email:</b> {{$reservation['Email']}}
        (<b>Changed from:</b> {{$reservation['old']['Email']}})
    <br>
    @endif
    <b>Seats Reserved:</b> {{$reservation['Seats']}}
    @if ($reservation['old']['Seats'] != $reservation['Seats'])
        (<b>Changed from:</b> {{$reservation['old']['Seats']}})
    @endif
    <br>
    @if ($reservation['old']['Note'] != $reservation['Note'])
    <b>Note:</b> {{$reservation['Note']}}
    @if ($reservation['old']['Note'] == "")
        (<b>Newly added</b>)
    @elseif ($reservation['Note'] == "")
        (<b>Deleted original:</b> {{$reservation['old']['Note']}})
    @else
        (<b>Changed from:</b> {{$reservation['old']['Note']}})
    @endif
    <br>
    @endif
    <b>Reservation Number:</b> {{$reservation['id']}}<br>
    <b>Date &amp; Time:</b> 
    {{$reservation['date']}} {{$time['time']}}
    @if ($reservation['old']['date'] != $reservation['date'] || $oldTime['time'] != $time['time'])
        (<b>Changed from:</b> {{$reservation['old']['date']}} {{$oldTime['time']}})
    @endif
    <br>
    <b>Place:</b>
        from {{$stop['address']}}., {{$stop['city']}} - ({{$stop['details']}})<br>
    <b>Destination &amp; approximate arrival time:</b><br>
    {{$destination}}<br>
</div>
@endsection

@section ('footer')
{!!$reservationFooter!!} 
@endsection
