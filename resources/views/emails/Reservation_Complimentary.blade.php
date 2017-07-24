@extends ('emails.Reservation')

@section ('content1')
<div class="td likep" width="674"><br>
    Dear {{$reservation['First Name']}} {{$reservation['Last Name']}},<br>
    <br>
    This email is regarding the {{$reservation['Seats']}} 
    @if ($reservation['Seats'] > 1)
    seats
    @else
    seat
    @endif
     you had with us from {{$stop['address']}} at {{$time['time']}} on {{$reservation['date']}}. We are hereby giving you an additional {{$reservation['Seats']}} 
    @if ($reservation['Seats'] > 1)
    seats
    @else
    seat
    @endif
     in the form of a special "Complimentary Number" as a curtesy for you to use toward future travel with us.<br>
    <br>
    Reason for this action: {{$reservation['mailBody']}}.<br>
    <br>
    The following is your new "Complimentary Number":<br>
    <b>
    <div class="edittrip3" style="font-family: verdana, arial, serif, EmojiFont;">{{$reservation['newId']}}</div>
    </b><br>
    <br>
    Whenever you decide on a day of travel, simply return to our website, click on the "Edit My Trip" link, and enter this "Complimentary Number" together with your email address to choose a travel date.<br>
    (To log in right now you may <a href="https://www.tripperbus.com/edit-trip.php?submit=submit&amp;res_lookup={{$reservation['newId']}}&amp;eadd_lookup=jiaxin_wp1117@outlook.com" target="_blank" rel="noopener noreferrer">click here</a>)<br>
    <br>
    PLEASE NOTE: Travel dates/times will be subject to availability of seats on the trip of your choice.<br>
    <br>
    Also, please note that a complimentary ticket has the same value as the original ticket from which it was generated.<br>
    This means that if the price of your new ticket is more expensive than the one in your original reservation, you will be charged the difference at that time.<br>
    <br>
    Your reservation number (<b>{{$reservation['id']}}</b>) is not affected by this action. <br>
</div>
@endsection

@section ('footer')
We are looking forward to servicing you.<br><br>
{!!$emailFooter!!}
@endsection