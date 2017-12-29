@extends ('main.common.base')

@section ('head')
	<link rel="stylesheet" href="css/reserve.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner one">
            <div class="bg-img"></div>

            <div id="tickets" class="tickets container-fluid">
                <div class="top-header">
                    <h3 class="fl">Select your travel time</h3>
                    <div class="steps fr">
                        <div class="step active">
                            <div class="num">1</div>
                            <span class="label">Plan Trip</span>
                        </div>
                        <div class="step">
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

                            <span class="input input--ruri pure-u-lg-1-6 pure-u-md-1-6 pure-u-1 pure-last-input">
									<img class="icon iconic" data-src="css/img/icons/seat-icon.svg" />
									<input class="input__field input__field--ruri has-icon" type="text" id="input-num-seats" placeholder="#">
									<label class="input__label input__label--ruri" for="input-22">
										<span class="input__label-content"># of Seats</span>
                            </label>
                            </span>
                        </div>
                        <div class="form-bottom pure-g">
                            <div class="pure-u-1 pure-u-md-12-24"></div>
                            <div class="fr button-pre-text pure-u-1 pure-u-md-6-24">
                            </div>
                            <div class="pure-u-1 pure-u-md-5-24">
                                <a href="{{url('reserve2')}}">
                                    <!-- Remove in production -->
                                    <input value="Find My Tickets" class="btn blue">
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="container-fluid cb section-reserve content-section">
            <h2 class="headline">Travel with us and save</h2>
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
