@extends ('main.common.base')

@section ('head')
    <script src="https://use.fontawesome.com/e55e02b563.js"></script>

    <link rel="stylesheet" href="css/reserve.css">
    <link rel="stylesheet" href="css/account.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
            <div class="bg-img"></div>

            <div id="tickets" class="tickets container-fluid">
                <div class="top-header">
                    <h3 class="fl">Select your travel time</h2>
                        <div class="steps fr">
                            <div class="step">
                                <div class="num">1</div>
                                <span class="label">Plan Trip</span>
                            </div>
                            <div class="step active">
                                <div class="num">2</div>
                                <span class="label">Choose Times</span>
                            </div>
                            <div class="step last">
                                <div class="num">3</div>
                                <span class="label">Confirm</span>
                            </div>
                        </div>
                </div>
                <div class="top">
                    <div class="fl trip-type-hldr">
                        <label for="roundtrip">
									<input type="radio" value="roundtrip" name="tripType" id="roundtrip" checked> 
									<span class="wl">Round Trip</span>
								</label>
                        <label for="oneway">   
									<input type="radio" name="tripType" value="oneway" id="oneway">
									<span class="wl oneway">One Way</span>
								</label>
                    </div>

                </div>
                <div class="forms-hldr">
                    <form id="ticket-form" class="active">
                        <div class="ticket-info clearfix">
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
											<span class="input__label-content">Depart Date</span>
                            </label>
                            </span>

                            <span class="input input--ruri pure-u-lg-1-6 pure-u-md-1-6 pure-u-1 arrival-date">
										<img class="icon iconic" data-src="css/img/icons/cal-icon.svg" />
										<input class="input__field input__field--ruri has-icon" type="text" id="input-arrival-date" placeholder="Pick Date">
										<label class="input__label input__label--ruri" for="input-22">
											<span class="input__label-content">Arrival Date</span>
                            </label>
                            </span>

                            <span class="input input--ruri pure-u-lg-1-6 pure-u-md-1-8 pure-u-1 pure-last-input">
										<img class="icon iconic" data-src="css/img/icons/seat-icon.svg" />
										<input class="input__field input__field--ruri has-icon" type="text" id="input-num-seats" placeholder="#">
										<label class="input__label input__label--ruri" for="input-22">
											<span class="input__label-content"># of Seats</span>
                            </label>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="container-fluid cb section-reserve">
            <div class="content completed">
                <div class="title-holder">
                    <h3 class="reserve-section-headline a"><b>Departing Trip: Bethesda to New York</b></h3>
                    <p class="trip-details"><b>Pick up:</b> <span><a href="https://www.google.com/maps/place/Tripper+Bus/@40.7501482,-73.9965576,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7c964b03fd011:0x4e37c3545e7c8db6!8m2!3d40.7501442!4d-73.9943636" target="_blank">NW Corner of 31st Street 8th Ave</a></span>                        <b>Drop off:</b> <span><a href="https://www.google.com/maps/place/7272+Wisconsin+Ave,+Bethesda,+MD+20814/@38.9821525,-77.0961952,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7c97b0079ed6f:0xacf76bb753dbf251!8m2!3d38.9821484!4d-77.0940012" target="_blank">7272 Wisconsin Avenue Bethesda, MD</a></span></p>
                    <p class="trip-details-sub">Estimated Travel Time from Bethesda 4 - 4.5 Hours, From Virginia 4.5 - 5 Hours. We are not responsible
                        for delays due to traffic, weather or unforeseen emergency mechanical issues.</p>
                </div>
                <div class="trip-overview">
                    <div class="day-picker">
                        <ul>
                            <li>
                                <span class="day">Monday</span>
                                <span class="date">1/3/15</span>
                            </li>
                            <li>
                                <span class="day">Tuesday</span>
                                <span class="date">1/4/15</span>
                            </li>
                            <li class="active">
                                <span class="day">Wednesday</span>
                                <span class="date">January 5th 2015</span>
                            </li>
                            <li>
                                <span class="day">Thursday</span>
                                <span class="date">1/6/15</span>
                            </li>
                            <li>
                                <span class="day">Friday</span>
                                <span class="date">1/7/15</span>
                            </li>
                        </ul>
                    </div>
                    <div class="select-time">
                        <ul class="trip-options">
                            <li class="tb-sold-out">
                                <!-- This is the web version -->

                                <div class="web-only clearfix">
                                    <div class="depart-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Departure
												</span>
                                        <span class="time">
													7:00 AM
												</span>
                                        <span class="location">
													NYC
												</span>
                                    </div>
                                    <div class="arrow pure-u-1 pure-u-md-1-12">
                                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                    </div>
                                    <div class="arrive-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Aprox Arrival
												</span>
                                        <span class="time">
													11:30 AM
												</span>
                                        <span class="location">
													Arlington
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        &nbsp;
                                    </div>



                                    <div class="price pure-u-1 pure-u-md-1-8">
                                        <span class="sold-out">
													Sold Out
												</span>
                                    </div>
                                </div>
                                <!-- End Web Version -->

                                <!-- This is the mobile version -->

                                <div class="mobile-only option">
                                    <div class="pure-u-1-4 select-indicator">
                                        <div class="checkmark">&nbsp;</div>
                                    </div>
                                    <div class="pure-u-1-2">
                                        <div class="depart-time pure-u-1">
                                            <span class="label">
														Departure
													</span>
                                            <span class="time">
														7:00 AM
													</span>
                                            <span class="location">
														NYC
													</span>
                                        </div>

                                        <div class="arrive-time pure-u-1">
                                            <span class="label">
														Aprox Arrival
													</span>
                                            <span class="time">
														11:30 AM
													</span>
                                            <span class="location">
														Arlington
													</span>
                                        </div>
                                    </div>

                                    <div class="price pure-u-1-4">
                                        <span class="sold-out">
													Sold Out
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        <ul class="list-inline">
                                            <li>
                                                <img width="100" src="css/img/icons/tripper-elite.png" alt="">
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <!-- End Mobile Version -->

                            </li>
                            <li class="tb-available">
                                <!-- This is the web version -->

                                <div class="web-only">
                                    <div class="depart-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Departure
												</span>
                                        <span class="time">
													7:00 AM
												</span>
                                        <span class="location">
													NYC
												</span>
                                    </div>
                                    <div class="arrow pure-u-1 pure-u-md-1-12">
                                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                    </div>
                                    <div class="arrive-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Aprox Arrival
												</span>
                                        <span class="time">
													11:30 AM
												</span>
                                        <span class="location">
													Arlington
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        <ul class="list-inline">
                                            <li>
                                                <span class="fa-stack fa-lg ban">
														  <i class="fa fa-wifi fa-stack-1x" aria-hidden="true"></i>
														  <i class="fa fa-ban fa-stack-2x text-danger"></i>
														</span>
                                            </li>
                                            <li>
                                                <span class="fa-stack fa-lg ban">
														  <i class="fa fa-plug fa-stack-1x" aria-hidden="true"></i>
														  <i class="fa fa-ban fa-stack-2x text-danger"></i>
														</span>
                                            </li>
                                            <li>
                                                <li>
                                                    <span class="fa-stack fa-lg ban">
															  <i class="fa fa-film fa-stack-1x" aria-hidden="true"></i>
															  <i class="fa fa-ban fa-stack-2x text-danger"></i>
															</span>
                                                </li>
                                            </li>
                                        </ul>


                                    </div>



                                    <div class="price pure-u-1 pure-u-md-1-8">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                </div>
                                <!-- End Web Version -->

                                <!-- This is the mobile version -->

                                <div class="mobile-only option">
                                    <div class="pure-u-1-4 select-indicator">
                                        <div class="checkmark">&nbsp;</div>
                                    </div>
                                    <div class="pure-u-1-2">
                                        <div class="depart-time pure-u-1">
                                            <span class="label">
														Departure
													</span>
                                            <span class="time">
														7:00 AM
													</span>
                                            <span class="location">
														NYC
													</span>
                                        </div>

                                        <div class="arrive-time pure-u-1">
                                            <span class="label">
														Aprox Arrival
													</span>
                                            <span class="time">
														11:30 AM
													</span>
                                            <span class="location">
														Arlington
													</span>
                                        </div>
                                    </div>

                                    <div class="price pure-u-1-4">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        <ul class="list-inline">
                                            <li>
                                                <span class="fa-stack fa-lg ban">
														  <i class="fa fa-wifi fa-stack-1x" aria-hidden="true"></i>
														  <i class="fa fa-ban fa-stack-2x text-danger"></i>
														</span>
                                            </li>
                                            <li>
                                                <span class="fa-stack fa-lg ban">
														  <i class="fa fa-plug fa-stack-1x" aria-hidden="true"></i>
														  <i class="fa fa-ban fa-stack-2x text-danger"></i>
														</span>
                                            </li>
                                            <li>
                                                <li>
                                                    <span class="fa-stack fa-lg ban">
															  <i class="fa fa-film fa-stack-1x" aria-hidden="true"></i>
															  <i class="fa fa-ban fa-stack-2x text-danger"></i>
															</span>
                                                </li>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <!-- End Mobile Version -->

                            </li>
                            <li class="tb-available">
                                <!-- This is the web version -->

                                <div class="web-only">
                                    <div class="depart-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Departure
												</span>
                                        <span class="time">
													7:00 AM
												</span>
                                        <span class="location">
													NYC
												</span>
                                    </div>
                                    <div class="arrow pure-u-1 pure-u-md-1-12">
                                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                    </div>
                                    <div class="arrive-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Aprox Arrival
												</span>
                                        <span class="time">
													11:30 AM
												</span>
                                        <span class="location">
													Arlington
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        <ul class="list-inline">
                                            <li>
                                                <img width="100" src="css/img/icons/tripper-elite.png" alt="">
                                            </li>
                                        </ul>
                                    </div>



                                    <div class="price pure-u-1 pure-u-md-1-8">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                    <!-- 	<div class="alert"><img class="icon iconic" data-src="css/img/icons/alert.svg" />Pickup location has been moved to 5800 Edgemmor Lane</div> -->
                                </div>
                                <!-- End Web Version -->

                                <!-- This is the mobile version -->

                                <div class="mobile-only option">
                                    <div class="pure-u-1-4 select-indicator">
                                        <div class="checkmark">&nbsp;</div>
                                    </div>
                                    <div class="pure-u-1-2">
                                        <div class="depart-time pure-u-1">
                                            <span class="label">
														Departure
													</span>
                                            <span class="time">
														7:00 AM
													</span>
                                            <span class="location">
														NYC
													</span>
                                        </div>

                                        <div class="arrive-time pure-u-1">
                                            <span class="label">
														Aprox Arrival
													</span>
                                            <span class="time">
														11:30 AM
													</span>
                                            <span class="location">
														Arlington
													</span>
                                        </div>
                                    </div>

                                    <div class="price pure-u-1-4">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        &nbsp;
                                    </div>
                                </div>
                                <!-- End Mobile Version -->

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="tb-remove-line-height">
                    <h3 class="reserve-section-headline b"><b>Returning Trip: New York to Bethesda</b></h3>
                    <p class="trip-details"><b>Pick up:</b> <span><a href="https://www.google.com/maps/place/7272+Wisconsin+Ave,+Bethesda,+MD+20814/@38.9821525,-77.0961952,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7c97b0079ed6f:0xacf76bb753dbf251!8m2!3d38.9821484!4d-77.0940012" target="_blank">7272 Wisconsin Avenue Bethesda, MD</a></span>                        <b>Drop off:</b> <span><a href="https://www.google.com/maps/place/8th+Ave+%26+W+31st+St,+New+York,+NY+10001/data=!4m2!3m1!1s0x89c259b1d8b5b161:0x677a41f2e0afb81b?sa=X&ved=0ahUKEwj-2dTF_ZDXAhWI6yYKHTfNCugQ8gEIJTAA" target="_blank">NW Corner of 31st Street 8th Ave</a></span></p>

                    <p class="trip-details-sub">Estimated Travel Time between 4 - 4.5 Hours. We are not responsible for delays due to traffic, weather,
                        or unforeseen emergency mechanical issues.</p>
                </div>
                <div class="trip-overview">

                    <div class="day-picker">
                        <ul>
                            <li>
                                <span class="day">Monday</span>
                                <span class="date">1/3/15</span>
                            </li>
                            <li>
                                <span class="day">Tuesday</span>
                                <span class="date">1/4/15</span>
                            </li>
                            <li class="active">
                                <span class="day">Wednesday</span>
                                <span class="date">January 5th 2015</span>
                            </li>
                            <li>
                                <span class="day">Thursday</span>
                                <span class="date">1/6/15</span>
                            </li>
                            <li>
                                <span class="day">Friday</span>
                                <span class="date">1/7/15</span>
                            </li>
                        </ul>
                    </div>
                    <div class="select-time">
                        <ul class="trip-options">
                            <li class="tb-available">
                                <!-- This is the web version -->

                                <div class="web-only clearfix">
                                    <div class="depart-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Departure
												</span>
                                        <span class="time">
													7:00 AM
												</span>
                                        <span class="location">
													NYC
												</span>
                                    </div>
                                    <div class="arrow pure-u-1 pure-u-md-1-12">
                                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                    </div>
                                    <div class="arrive-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Aprox Arrival
												</span>
                                        <span class="time">
													11:30 AM
												</span>
                                        <span class="location">
													Arlington
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        &nbsp;
                                    </div>



                                    <div class="price pure-u-1 pure-u-md-1-8">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                </div>
                                <!-- End Web Version -->

                                <!-- This is the mobile version -->

                                <div class="mobile-only option">
                                    <div class="pure-u-1-4 select-indicator">
                                        <div class="checkmark">&nbsp;</div>
                                    </div>
                                    <div class="pure-u-1-2">
                                        <div class="depart-time pure-u-1">
                                            <span class="label">
														Departure
													</span>
                                            <span class="time">
														7:00 AM
													</span>
                                            <span class="location">
														NYC
													</span>
                                        </div>

                                        <div class="arrive-time pure-u-1">
                                            <span class="label">
														Aprox Arrival
													</span>
                                            <span class="time">
														11:30 AM
													</span>
                                            <span class="location">
														Arlington
													</span>
                                        </div>
                                    </div>

                                    <div class="price pure-u-1-4">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        &nbsp;
                                    </div>

                                </div>
                                <!-- End Mobile Version -->

                            </li>
                            <li class="tb-available">
                                <!-- This is the web version -->

                                <div class="web-only">
                                    <div class="depart-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Departure
												</span>
                                        <span class="time">
													7:00 AM
												</span>
                                        <span class="location">
													NYC
												</span>
                                    </div>
                                    <div class="arrow pure-u-1 pure-u-md-1-12">
                                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                    </div>
                                    <div class="arrive-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Aprox Arrival
												</span>
                                        <span class="time">
													11:30 AM
												</span>
                                        <span class="location">
													Arlington
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        &nbsp;
                                    </div>



                                    <div class="price pure-u-1 pure-u-md-1-8">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                </div>
                                <!-- End Web Version -->

                                <!-- This is the mobile version -->

                                <div class="mobile-only option">
                                    <div class="pure-u-1-4 select-indicator">
                                        <div class="checkmark">&nbsp;</div>
                                    </div>
                                    <div class="pure-u-1-2">
                                        <div class="depart-time pure-u-1">
                                            <span class="label">
														Departure
													</span>
                                            <span class="time">
														7:00 AM
													</span>
                                            <span class="location">
														NYC
													</span>
                                        </div>

                                        <div class="arrive-time pure-u-1">
                                            <span class="label">
														Aprox Arrival
													</span>
                                            <span class="time">
														11:30 AM
													</span>
                                            <span class="location">
														Arlington
													</span>
                                        </div>
                                    </div>

                                    <div class="price pure-u-1-4">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        &nbsp;
                                    </div>

                                </div>
                                <!-- End Mobile Version -->

                            </li>
                            <li class="tb-available">
                                <!-- This is the web version -->

                                <div class="web-only">
                                    <div class="depart-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Departure
												</span>
                                        <span class="time">
													7:00 AM
												</span>
                                        <span class="location">
													NYC
												</span>
                                    </div>
                                    <div class="arrow pure-u-1 pure-u-md-1-12">
                                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                    </div>
                                    <div class="arrive-time pure-u-3-4 pure-u-md-1-5">
                                        <span class="label">
													Aprox Arrival
												</span>
                                        <span class="time">
													11:30 AM
												</span>
                                        <span class="location">
													Arlington
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        &nbsp;
                                    </div>



                                    <div class="price pure-u-1 pure-u-md-1-8">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                </div>
                                <!-- End Web Version -->

                                <!-- This is the mobile version -->

                                <div class="mobile-only option">
                                    <div class="pure-u-1-4 select-indicator">
                                        <div class="checkmark">&nbsp;</div>
                                    </div>
                                    <div class="pure-u-1-2">
                                        <div class="depart-time pure-u-1">
                                            <span class="label">
														Departure
													</span>
                                            <span class="time">
														7:00 AM
													</span>
                                            <span class="location">
														NYC
													</span>
                                        </div>

                                        <div class="arrive-time pure-u-1">
                                            <span class="label">
														Aprox Arrival
													</span>
                                            <span class="time">
														11:30 AM
													</span>
                                            <span class="location">
														Arlington
													</span>
                                        </div>
                                    </div>

                                    <div class="price pure-u-1-4">
                                        <span class="label">
													Select
												</span>
                                        <span class="price">
													26.00
												</span>
                                    </div>
                                    <div class="commodity pure-u-1 pure-u-md-3-8">
                                        &nbsp;
                                    </div>

                                </div>
                                <!-- End Mobile Version -->

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="form-bottom pure-g">
                    <div class="pure-u-1 pure-u-md-3-4 btn-label">

                    </div>
                    <div class="pure-u-1 pure-u-md-1-4">
                        <a href="{{url('reserve3')}}">
                            <!-- Remove in production -->
                            <input type="submit" value="Confirm Your Trip" class="btn blue fr">
                        </a>
                    </div>
                </div>
            </div>
        </div>
@endsection
