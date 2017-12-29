@extends ('main.common.base')

@section ('head')
	<link rel="stylesheet" href="css/reserve.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
        </div>


        <div class="container-fluid cb main-content">
            <div class="trip-total clearfix">
                <span class="title fl">Edit Your Ticket</span>
            </div>
            <div class="content-holder">
                <section class="content">
                    <p>Use this form if you alarady have a valide reservation (or one that is already on hold) with us and want
                        to edit it, place it on hold, have it re-emailed etc. We will show you on the next page all the various
                        options that are available.</p>
                    <br>
                    <div class="form-info">
                        <div class="row">
                            <div class="col">
                                <input class="input__field input__field--ruri" type="number" id="reservation-hold#" placeholder="*******">
                                <label class="reserve" for="reservation-hold#">Reservation or hold #</label>
                            </div>
                            <div class="col">
                                <input class="input__field input__field--ruri" type="text" id="email" placeholder="you@domain.com">
                                <label class="reserve" for="last">Email Address</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="btn-row text-right">
                                <a href="" class="btn teal">Place on hold</a><a href="" class="btn blue">Change Date or Time</a>
                            </div>
                        </div>
                    </div>
                    <div class="center text-light sm-wrap">
                        <br><br>
                        <p>Please note: Any change must be made up to midnight prior to your day of travel. If you would like
                            to change your reservation on your travel day, you may call our office at 718-834-9214, up to
                            two hours before the time of departure.</p>
                        <p>Enter your reservation number exactly the way it appears on your confirmation, and the same email
                            address that you supplied us with when you made the reservation</p>
                    </div>

                </section>
            </div>
        </div>

        <div class="container-fluid cb section-reserve content-section">
            <div class="pure-g">
                <div class="pure-u-md-1-2 pure-u-1">
                    <div class="col-p">
                        <a href="" class=""><img src="css/img/reserve/low-fares.png" style="width: 100%;" /></a>
                    </div>
                </div>
                <div class="pure-u-md-1-2 pure-u-1">
                    <div class="col-p">
                        <a href="" class=""><img src="css/img/reserve/frequent-traveler.png" style="width: 100%;" /></a>
                    </div>
                </div>
            </div>
        </div>
@endsection
