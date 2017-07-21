@extends ('emails.Reservation')

@section ('content1')
<div class="td likep" width="674"><br>
    Dear {{$reservation['First Name']}} {{$reservation['Last Name']}},<br>
    <br>
    {{$reservation['mailText']}}
</div>
@endsection

@section ('footer')
We are looking forward to servicing you.<br><br>
{!!$emailFooter!!}
@endsection
