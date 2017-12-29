@extends ('main.common.base')

@section ('head')
	<link rel="stylesheet" href="css/reserve.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
        </div>


        <div class="container-fluid cb main-content">

            <div class="content-holder">
                <section class="content section-intro sm-wrap">
                    <div class="center">
                        <h1>Your Trip Has Been Confirmed</h1>
                        <h2>Ticket Code: 4098272983240982</h2>
                        <p>You will receive your itinerary shortly in your email. You can return to our site at anytime and
                            check the status of your trip. If you need to make any changes to your reservation please be
                            ready to use your ticket code number</p>
                        <p><strong>Download our app for special features and low fairs.</strong></p>
                        <a href="" class="btn blue">Download our App</a>
                    </div>


                </section>
                <section class="content section-reserve">
                    <div class="">
                        <h3 class="">Your Trip Details</h3>
                    </div>
                    <div class="seats"><span><strong>1 Seat</strong></span></div>
                    <div class="box-holder">
                        <div class="box">
                            <time class="mark" datetime="2015-01-17">January 17th 2015 at <strong>3:00pm</strong></time>
                            <dl class="">
                                <dt>Departing Trip: </dt>
                                <dd>New York to Bethesda</dd>
                                <dt>Pick up: </dt>
                                <dd>NW Corner of 31st Street 8th Ave</dd>
                                <dt>Drop off: </dt>
                                <dd>NW Corner of 31st Street and 8th Ave</dd>
                            </dl>
                        </div>
                        <div class="box">
                            <time class="mark" datetime="2015-01-19">January 19th 2015 at <strong>3:15pm</strong></time>
                            <dl class="">
                                <dt>Returning Trip: </dt>
                                <dd>Arlington to New York</dd>
                                <dt>Pick up: </dt>
                                <dd>NW Corner of 31st Street 8th Ave</dd>
                                <dt>Drop off: </dt>
                                <dd>4801 Edgemoor Lane</dd>
                            </dl>
                        </div>
                    </div>
                    <br><br>

                    <div class="center btn-row">
                        <a href="" class="btn blue">Print Tickets</a>
                        <a href="" class="btn teal">Download PDF</a>
                    </div>
                    <br>
                </section>
                <!-- 	<section class="content section-reserve">
						<div class="title-holder">
							<h3 class="reserve-section-headline fl b">Cosi feed reservations</h3>
						</div>
						<p>Cosi will now be delivering lunch and dinner to the bus for your trip! Orders can be made by Arlington and Bethesda passengers. Deliver will be waiting on the Bethesda Location</p>
						<p><strong>There are no delivery fees!</strong></p>
						<p><a href="">Click here</a> and follow the insturctions for your trip. Please make ordres 24 hours before trip.</p>
					</section>
					<section class="content section-reserve">
						<div class="title-holder">
							<h3 class="reserve-section-headline fl c">Your Fast Reserve Account</h3>
						</div>
						<p><strong>A Tripper Bus Fast Reserve Account has automatically been setup for you. This will allow for a faster reservation process the next time you book with Tripper Bus</strong></p>
						<p class="alert">A temporary password has been generated, so be sure to <a href="">Change your password</a> in your account dtails.</p>
						<p>You may also	<a href="">edit your account details</a> and <a href="">edit your reservations.</a> Please also note, there is only one email address per customer. Coupons may only be redeemed through initial registered email address.</p>
					</section> -->
                <section class="content section-reserve">
                    <div class="">
                        <h3 class="">Our Favorite bites, attractions and entertainment in the city</h3>
                        <br>
                    </div>
                    <!-- <div class="pure-g">
							<div class="pure-u-md-1-3"><a class="img-link" href=""><img class="pure-img" src="css/img/hotel-1.png" alt=""></a></div>
							<div class="pure-u-md-1-3"><a class="img-link" href=""><img class="pure-img" src="css/img/hotel-2.png" alt=""></a></div>
							<div class="pure-u-md-1-3"><a class="img-link" href=""><img class="pure-img" src="css/img/hotel-3.png" alt=""></a></div>
						</div> -->
                    <div class="container-fluid cb sub-pictures">
                        <div class="pure-g">
                            <div class="pure-u-1 pure-u-md-1-2">
                                <div class="img travel-info fl">
                                    <div class="headline">
                                        This is a <span>blog article title</span> and will link to the blog page
                                    </div>
                                    <div class="read-more">
                                        Read More <img class="icon iconic" data-src="css/img/icons/chevron-right-sm.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="pure-u-1 pure-u-md-1-2">
                                <div class="img travel-info fl">
                                    <div class="headline">
                                        This is a <span>blog article title</span> and will link to the blog page
                                    </div>
                                    <div class="read-more">
                                        Read More <img class="icon iconic" data-src="css/img/icons/chevron-right-sm.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <h3>Be Sure To Join Our <a>Loyalty Rewards Program</a> To Earn Free Travel!</h3>
                </section>

            </div>

        </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection