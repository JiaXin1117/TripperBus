@extends ('emails.Reservation')

@section ('content1')
<div class="td likep">
    <b>Thank you for reserving with us, your itinerary is shown below.</b><br>
    <br>
    Please scroll down and present the scannable code on your smartphone/tablet screen to our agent at the bus together with valid ID. Make sure that the code is fully displayed on your device screen at that time. If you think you may not have access to this email confirmation at that time, please print it out on paper and bring that along with you instead.
    <br>
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
    <b>Name:</b> {{$reservation['First Name']}} {{$reservation['Last Name']}}<br>
    <b>Seats Reserved:</b> {{$reservation['Seats']}}<br>
    <b>Reservation Number:</b> {{$reservation['id']}}<br>
    <b>Date:</b> {{$reservation['date']}}<br>
    <b>Time &amp; Place:</b> {{$time['time']}} from {{$stop['address']}}., {{$stop['city']}} - ({{$stop['details']}})<br>
    <b>Destination &amp; approximate arrival time:</b><br>
    {{$destination}}<br>
</div>
@endsection

@section ('footer')
{!!$reservationFooter!!} 
@endsection
