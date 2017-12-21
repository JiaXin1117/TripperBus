@extends('main.common.base')

@section('body_class') home @endsection

@section('content')
		<div class="hero">
			<div class="bg-img"></div>

			<div id="tickets" class="tickets container-fluid">
				<h1>Travel between the DC suburbs of Arlington, Bethesda and New York City</h1>
				<div class="top cf">
					<div class="fl trip-type-hldr js-trip-selector active">
						<label for="roundtrip">
							<input type="radio" value="roundtrip" name="tripType" id="roundtrip" checked> 
							<span class="wl">Round Trip</span>
						</label>
						<label for="oneway">   
							<input type="radio" name="tripType" value="oneway" id="oneway">
							<span class="wl oneway">One Way</span>
						</label>
					</div>
					<div class="fr trip-type-hldr">
						<div class="reschedule wl"><img class="icon iconic" data-src="css/img/icons/loop-icon.svg" /> Reschedule</div>
					</div>
				</div>
				<div class="forms-hldr ">
					<form id="ticket-form" class="active">
						<div class="ticket-info hp clearfix">
							<span class="input input--ruri pure-u-lg-1-4 pure-u-md-1-4 pure-u-1 city">
								<img class="icon iconic" data-src="css/img/icons/city-icon.svg" />
								<select class="cs-select cs-skin-slide" id="input-depart">
									<option value="" disabled selected>Choose City</option>
									<option value="arlington">Arlington</option>
									<option value="bethesda">Bethesda</option>
									<option value="newyork">New York</option>
								</select>  
								<label class="input__label input__label--ruri" for="input-22">
									<span class="input__label-content">Departing City</span>
								</label>
							</span>

							<span class="input input--ruri pure-u-lg-1-4 pure-u-md-1-4 pure-u-1">
								<img class="icon iconic" data-src="css/img/icons/city-icon.svg" />
								<select class="cs-select cs-skin-slide" id="input-arrive">
									<option value="" disabled selected> Choose City</option>
									<option value="arlington">Arlington</option>
									<option value="bethesda">Bethesda</option>
									<option value="newyork">New York</option>
								</select>  
								<label class="input__label input__label--ruri" for="input-22">
									<span class="input__label-content">Arriving City</span>
								</label>
							</span>

							<span class="input input--ruri pure-u-lg-1-6 pure-u-md-1-6 pure-u-1 depart-date">
								<img class="icon iconic" data-src="css/img/icons/cal-icon.svg" />
								<input class="input__field input__field--ruri has-icon" type="text" id="input-depart-date" placeholder="Pick Date">
								<label class="input__label input__label--ruri" for="input-22">
									<span class="input__label-content">Departure Date</span>
								</label>
							</span>

							<span class="input input--ruri pure-u-lg-1-6 pure-u-md-1-6 pure-u-1 arrival-date">
								<img class="icon iconic" data-src="css/img/icons/cal-icon.svg" />
								<input class="input__field input__field--ruri has-icon" type="text" id="input-arrival-date" placeholder="Pick Date">
								<label class="input__label input__label--ruri" for="input-22">
									<span class="input__label-content">Return Date</span>
								</label>
							</span>

							<span class="input input--ruri pure-u-lg-1-6 pure-u-md-1-6 pure-u-1 pure-last-input">
								<img class="icon iconic" data-src="css/img/icons/seat-icon.svg" />
								<input class="input__field input__field--ruri has-icon" type="number" min="1" id="input-num-seats" placeholder="#">
								<label class="input__label input__label--ruri" for="input-22">
									<span class="input__label-content">Number of Seats</span>
								</label>
							</span>
						</div>
						<div class="form-bottom pure-g">
							<div class="pure-u-1 pure-u-md-1-2"></div>
							<div class="fr coupon pure-u-1 pure-u-md-1-2">
								<div class="fl pure-u-1 pure-u-md-1-2">
									<label>Coupon Code</label>
									<input type="text" class="input__field" />
								</div>
								<div class="fl pure-u-1 pure-u-md-1-2">
									<input id="indexBtn" type="submit" value="Get My Tickets" class="btn green">
								</div>
							</div>

						</div>
					</form>
					<form id="reschedule-form">
						<div class="ticket-info">
							<span class="input input--ruri pure-u-md-1-2 pure-u-1">
								<img class="icon iconic" data-src="css/img/icons/envelope-closed-sm.svg" />
								<input class="input__field input__field--ruri has-icon" type="text" placeholder="Email">
								<label class="input__label input__label--ruri" for="input-22">
									<span class="input__label-content">Email</span>
								</label>
							</span>

							<span class="input input--ruri pure-u-md-1-2 pure-u-1 pure-last-input">
								<input class="input__field input__field--ruri" type="text" placeholder="Confirmation Number" >
								<label class="input__label input__label--ruri" for="input-22">
									<span class="input__label-content">Confirmation Number</span>
								</label>
							</span>
						</div>
						<div class="form-bottom pure-g">
							<div class="pure-u-1">
								<input type="submit" value="Log me in" class="btn green fr">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<section class="content-section">
			<div class="container-fluid cb sub-icons">
				<div class="pure-g mobile-carousel">
					<div class="pure-u-1 pure-u-md-1-3">
						<p>Our Riders Love Us</p>
						<div class="icon-contain">
							<img src="css/img/quote.png" alt="">
						</div>
						<div class="text light italic center">
							"The drivers are exceptional. Plus, it’s cheaper than paying all the tolls!"
						</div>
					</div>

					<div class="pure-u-1 pure-u-md-1-3">
						<p>Best Of DC Winner</p>
						<div class="icon-contain">
							<img src="css/img/award.png" alt="">
						</div>
						<div class="text light uppercase center award-text">
							<img class="pure-img" src="css/img/bestof.png" />
						</div>
					</div>
					<div class="pure-u-1 pure-u-md-1-3">
						<p>Travel Rewards</p>
						<div class="icon-contain">
							<img src="css/img/ticket.png" alt="">
						</div>
						<div class="text center ticket-main">
							<p><span class="uppercase">Frequent Traveler?</span><br> Buy six tickets and get one free!
						</div>

					</div>
				</div>
			</div>

			<div class="container-fluid cb sub-pictures">
				<div class="pure-g">
					<div class="pure-u-1 pure-u-md-1-2">
						<a href="{{url('elite')}}">
							<div class="img travel-info fl">
								<div class="headline">
									Introducing<i></i>
									<span>Tripper Bus Elite</span> <i></i> lorem ipsum about traveling in luxury
								</div>
								<div class="read-more">
									Book Now <img class="icon iconic" data-src="css/img/icons/chevron-right-sm.svg" />
								</div>
							</div>
						</a>
					</div>
					<div class="pure-u-1 pure-u-md-1-2 ">
						<div class="img first-class fr">
							<div class="headline">
								Enjoy the <i></i>
								<span>comfort</span> and <i></i>
								<span>convenience</span><i></i> of first-class coach
							</div>
							<div class="read-more">
								Read More <img class="icon iconic" data-src="css/img/icons/chevron-right-sm.svg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="carousel-hldr section section-padding">
			<div class="container-fluid">
				<h2>Professional drivers focused on <b>superior quality</b></h2>
				<h3>We follow strict DOT guidelines so you always have superior quality service and amazing experience. TripperBus drivers
					are second to none. </h3>
			</div>
			<div class="carousel">
				<div class="img"><img src="css/img/slider/1.png" /></div>
				<div class="img"><img src="css/img/slider/2.png" /></div>
				<div class="img"><img src="css/img/slider/3.png" /></div>
				<div class="img"><img src="css/img/slider/4.png" /></div>
				<div class="img"><img src="css/img/slider/5.png" /></div>
			</div>
		</div>

		<div class="amenities section section-padding">
			<div class="container-fluid">
				<h2>The <b>amenities</b> you've come to expect</h2>
				<h3>From brand new buses to free WiFi, we've got your comfort in mind</h3>
				<div class="amenities-list">
					<div class="fl select-amenity">
						<ul>
							<li class="newBuses active" data-amenity="newBuses"><img class="icon iconic" data-src="css/img/icons/bus-icon.svg" />
								<a>New Buses</a>
							</li>
							<li class="cleanRestrooms" data-amenity="cleanRestrooms"><img class="icon iconic" data-src="css/img/icons/bathroom-icon.svg" />
								<a>Clean Restrooms</a>
							</li>
							<li class="alwaysOnTime" data-amenity="alwaysOnTime"><img class="icon iconic" data-src="css/img/icons/time-icon.svg" />
								<a>On Time</a>
							</li>
							<li class="electricalOutlets" data-amenity="electricalOutlets"><img class="icon iconic" data-src="css/img/icons/electric-icon.svg" />
								<a>Electrical Outlets</a>
							</li>
							<li class="freeWifi" data-amenity="freeWifi"><img class="icon iconic" data-src="css/img/icons/wifi-icon.svg" />
								<a>Free Wifi</a>
							</li>
							<li class="newFilms" data-amenity="newFilms"><img class="icon iconic" data-src="css/img/icons/iphone.svg" />
								<a>New Release Films On Personal Device</a>
							</li>
						</ul>
					</div>
					<div class="fr amentities-details">
						<div class="newBuses detail active" data-amenity-lrg="newBuses">
							<img class="icon iconic" data-src="css/img/icons/bus-icon.svg" />
							<h4>New Buses</h4>
						</div>
						<div class="cleanRestrooms detail" data-amenity-lrg="cleanRestrooms">
							<img class="icon iconic" data-src="css/img/icons/bathroom-icon.svg" />
							<h4>Clean Restrooms</h4>
						</div>
						<div class="alwaysOnTime detail" data-amenity-lrg="alwaysOnTime">
							<img class="icon iconic" data-src="css/img/icons/time-icon.svg" />
							<h4>On Time</h4>
						</div>
						<div class="electricalOutlets detail" data-amenity-lrg="electricalOutlets">
							<img class="icon iconic" data-src="css/img/icons/electric-icon.svg" />
							<h4>Electrical Outlets</h4>
						</div>
						<div class="freeWifi detail" data-amenity-lrg="freeWifi">
							<img class="icon iconic" data-src="css/img/icons/wifi-icon.svg" />
							<h4>Free Wifi</h4>
						</div>
						<div class="newFilms detail" data-amenity-lrg="newFilms">
							<img class="icon iconic" data-src="css/img/icons/iphone.svg" />
							<h4 class="no-space">New Release Films On Personal Device</h4>
							<p><small>on almost all busses</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>

		@include ('main.common.pickup_section')

@endsection
