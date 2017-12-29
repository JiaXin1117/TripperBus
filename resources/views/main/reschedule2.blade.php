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
                    <h2>You're all set!</h2>
                    <p><em>We have credited your with $27 towards your next trip</em></p>
                    <br>
                    <p><strong>To redeem:</strong><br> We have created an account with the username <strong>you@domain.com</strong>                        and email you a temporary password, sign in to your account to retrieve your credit and purchase
                        new tickets</p>
                    <p><a href="" class="btn blue">Login to account</a></p>

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
