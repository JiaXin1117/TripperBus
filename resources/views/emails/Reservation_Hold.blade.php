@extends ('emails.Reservation')

@section ('content1')
<div class="td likep" width="674"><br>
    Dear {{$reservation['First Name']}} {{$reservation['Last Name']}},<br>
    <br>
    This email is regarding the reservation you have with us from {{$stop['address']}} at {{$time['time']}} on {{$reservation['date']}}. We have hereby placed 
    {{$reservation['Seats']}} 
    @if ($reservation['Seats'] > 1)
    seats
    @else
    seat
    @endif
     on hold for future travel.<br>
    <br>
    @if ($reservation['mailBody'] != '')
    Reason for this action: {{$reservation['mailBody']}}<br>
    <br>
    @endif
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
</div>
@endsection

@section ('footer')
We are looking forward to servicing you.<br><br>
{!!$emailFooter!!}
@endsection