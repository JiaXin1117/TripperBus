@extends ('emails.Reservation')

@section ('content1')
<div class="td likep">
    <b>Only 5 Reservations are left on Bus #{{$busId}}.</b>
    <br><br>
    <b>Thank you for reserving with us, your itinerary is shown below.</b>
    <br><br>
    Please scroll down and present the scannable code on your smartphone/tablet screen to our agent at the bus together with valid ID. Make sure that the code is fully displayed on your device screen at that time. If you think you may not have access to this email confirmation at that time, please print it out on paper and bring that along with you instead.
    <br>
</div>
@endsection

@section ('footer')
{!!$reservationFooter!!} 
@endsection
