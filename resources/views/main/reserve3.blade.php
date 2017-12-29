@extends ('main.common.base')

@section ('head')
	<link rel="stylesheet" href="css/reserve.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
            <div class="bg-img"></div>

            <div id="tickets" class="tickets container-fluid">
                <div class="top-header">
                    <h3 class="fl">Confirm your trip</h2>
                        <div class="steps fr">
                            <div class="step">
                                <div class="num">1</div>
                                <span class="label">Plan Trip</span>
                            </div>
                            <div class="step">
                                <div class="num">2</div>
                                <span class="label">Choose Times</span>
                            </div>
                            <div class="step last active">
                                <div class="num">3</div>
                                <span class="label">Confirm</span>
                            </div>
                        </div>
                </div>

                <div class="trip-total clearfix">
                    <span class="title fl">Trip Total</span>
                    <span class="cost fr"> <sup>$</sup>67.00</span>
                </div>
                <div class="forms-hldr">
                    <form id="ticket-login-form">
                        <div class="ticket-info">
                            <strong class="title">Sign in to your account <span>(optional)</span></strong>
                            <span class="input input--ruri pure-u-md-2-5 pure-u-1">
										<img class="icon iconic" data-src="css/img/icons/envelope-closed-sm.svg" />
										<input class="input__field input__field--ruri has-icon" type="text" id="input-num-seats" placeholder="Email">
										<label class="input__label input__label--ruri" for="input-22">
											<span class="input__label-content">Email</span>
                            </label>
                            </span>

                            <span class="input input--ruri pure-u-md-2-5 pure-u-1 pure-last-input">
										<img class="icon iconic" data-src="css/img/icons/lock-locked-md.svg" />
										<input class="input__field input__field--ruri has-icon" type="password" id="input-num-seats" placeholder="Password" >
										<label class="input__label input__label--ruri" for="input-22">
											<span class="input__label-content">Password</span>
                            </label>
                            </span>
                            <div class="pure-u-md-1-5">
                                <input type="submit" value="Login" class="btn blue fr">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <div class="container-fluid cb section-reserve">

            <div class="content-holder">
                <form action="#">
                    <section class="content section-reserve">
                        <div class="title-holder">
                            <h3 class="reserve-section-headline fl a">Confirm your trip details</h3>
                            <a href="{{url('reserve2')}}" class="edit">Edit Trip</a>
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
                    </section>
                    <section class="content section-reserve">
                        <div class="title-holder">
                            <h3 class="reserve-section-headline b">Customer Information</h1>
                                <span class="sub-head">Reserving online with Tripper Bus Service is extremely safe.</br>
											All information is encrypted</span>
                        </div>
                        <div class="form-info">
                            <div class="row">
                                <div class="col">
                                    <input class="input__field input__field--ruri" type="text" id="first" placeholder="First Name">
                                    <label class="reserve" for="first">First Name</label>
                                </div>
                                <div class="col">
                                    <input class="input__field input__field--ruri" type="text" id="last" placeholder="Last Name">
                                    <label class="reserve" for="last">Last Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input class="input__field input__field--ruri" type="tel" id="phone" placeholder="Phone Number">
                                    <label class="reserve" for="phone">Phone</label>
                                    <p class="small helper-text">We sometimes text passengers about last minute service delays, so we ask that you enter
                                        a cell phone number</p>
                                </div>
                                <div class="col">
                                    <input class="input__field input__field--ruri" type="email" id="mail2" placeholder="Email">
                                    <label class="reserve" for="mail2">Email</label>
                                </div>
                                <div class="col">
                                    <input class="input__field input__field--ruri" type="email" id="mail3" placeholder="Confirm Email">
                                    <label class="reserve" for="mail3">Confirm Email</label>
                                </div>
                            </div>
                            <div class="check small-pad">
                                <input type="checkbox" id="text"><label class="reserve" for="text">Receive text messages about your travel</label>
                            </div>
                            <div class="check">
                                <input type="checkbox" id="my"><label class="reserve" for="my">Create my account (buy <span>six tickets</span> and get one free!)</label>
                            </div>
                            <div class="sms ">
                                <strong class="title">Stay Updated on your trip</strong>
                                <p>Stay updated via text on any delays and updates</p>
                                <div class="row">
                                    <div class="col">
                                        <input class="input__field input__field--ruri" type="tel" id="phone1" placeholder="Mobile Number">
                                        <label class="reserve" for="phone1">Mobile phone</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="content section-reserve">
                        <div class="title-holder">
                            <h3 class="reserve-section-headline c">Discounts</h1>
                        </div>
                        <div class="form-info">
                            <div class="discount-form input-wrapper">
                                <div class="row">
                                    <strong class="title">Type:</strong>
                                    <div class="radio-holder">
                                        <label class="reserve" for="disk1"><input class="js-input" type="radio" data-form="gift-card" value="gift-card" name="card" id="disk1">Gift Card</label>
                                        <label class="reserve" for="disk2"><input class="js-input" type="radio" data-form="company-credit" value="company-credit" name="card" id="disk2" checked>Company Credit</label>
                                        <label class="reserve" for="disk3"><input class="js-input" type="radio" data-form="promo-code" value="promo-code" name="card" id="disk3">Promo Code</label>
                                    </div>
                                </div>
                                <div class="row js-input-row gift-card company-credit active">
                                    <div class="col">
                                        <input class="input__field input__field--ruri" type="text" id="card" placeholder="Card #">
                                        <label class="reserve" for="card">Card #</label>
                                    </div>
                                    <div class="col">
                                        <input class="input__field input__field--ruri" type="email" id="emai2" placeholder="Email">
                                        <label class="reserve" for="emai2">Email</label>
                                    </div>
                                    <div class="col">
                                        <button class="btn blue" type="button" disabled>Apply</button>
                                    </div>
                                </div>
                                <div class="row js-input-row hidden promo-code">
                                    <div class="col">
                                        <input class="input__field input__field--ruri" type="text" id="card" placeholder="Promo Code">
                                        <label class="reserve" for="card">Promo Code</label>
                                    </div>
                                    <div class="col">
                                        <button class="btn blue" type="button" disabled>Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="content section-reserve">
                        <div class="title-holder">
                            <h3 class="reserve-section-headline d">Payment Information</h1>
                        </div>
                        <div class="payment-form  input-wrapper">
                            <div class="row">
                                <strong class="title">Type:</strong>
                                <div class="radio-frame">
                                    <div class="radio-block">
                                        <input type="radio" class="js-input" value="credit-card" name="type" id="disk4" checked>
                                        <label class="reserve" for="disk4">
																	Credit Card
																</label>
                                    </div>
                                    <div class="radio-block">
                                        <input type="radio" class="js-input" value="paypal" name="type" id="disk5">
                                        <label class="reserve" for="disk5">
																	Paypal
																</label>
                                    </div>
                                    <div class="radio-block">
                                        <input type="radio" class="js-input" value="college-card" name="type" id="disk6">
                                        <label class="reserve" for="disk6">College Card
																</label >
															</div>
														</div>
													</div>
													<div class="row js-input-row credit-card active">
														<div class="col">
															<input class="input__field input__field--ruri" type="text"  id="form1" placeholder="Name On Card">
															<label class="reserve" for="form1">Name On Card</label>
                                    </div>
                                    <div class="col">
                                        <input class="input__field input__field--ruri" type="text" id="form2" placeholder="Credit Card Number">
                                        <label class="reserve" for="form2">Credit Card Number</label>
                                    </div>
                                    <div class="col">
                                        <div class="input-block">
                                            <input class="input__field input__field--ruri" type="text" id="mm" placeholder="MM">
                                            <label class="reserve" for="mm">EXMONTH</label>
                                        </div>
                                        <div class="input-block">
                                            <input class="input__field input__field--ruri" type="text" id="yy" placeholder="YY">
                                            <label class="reserve" for="yy">EXYEAR</label>
                                        </div>
                                        <div class="input-block">
                                            <input class="input__field input__field--ruri" type="text" id="year" placeholder="###">
                                            <label class="reserve" for="year">SECURITY CODE</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row js-input-row paypal hidden">
                                    <p><strong><em>Continue to Paypal. Once you complete your transaction you'll be redirected back to this page</em></strong></p>
                                </div>
                                <div class="row js-input-row college-card hidden">
                                    <div class="col">
                                        <select class="input__field input__field--ruri" name="college" id="college">
																<option value="American University">American University</option>
															</select>
                                        <label class="reserve" for="form1">Select your College</label>
                                    </div>
                                    <div class="col">
                                        <input class="input__field input__field--ruri" type="text" id="form2" placeholder="Card Number">
                                        <label class="reserve" for="form2">Card Number</label>
                                    </div>
                                    <div class="col">
                                        <button class="btn blue" type="button" disabled>Validate</button>
                                    </div>
                                </div>
                                <div class="cost-variant">
                                    <dl>
                                        <dt>1 Seat from New York to Arlington:</dt>
                                        <dd>$27.00</dd>
                                        <dt>1 Seat from Arlington to New York:</dt>
                                        <dd>$28.00</dd>
                                        <dt>Reservation Fee:</dt>
                                        <dd>$1.00</dd>
                                        <dt>Other</dt>
                                        <dd>$1.00</dd>
                                        <dt class="red">Discount:</dt>
                                        <dd class="red">-$4.00</dd>
                                    </dl>
                                    <span class="cost"> <sup>$</sup><strong class="price">67.00</strong></span>
                                    <div class="accept-form">
                                        <div class="row">
                                            <label class="reserve" for="accept">I have read and accept the <a href="#">Tripper Bus Terms and Conditions</a></label>

                                            <input type="checkbox" id="accept">
                                            <p class="small terms">Tripper Bus is not responsible for lost, damaged or stolen items, nor hold any
                                                liability for transporation delays due to weather or road conditions. We
                                                do our best to provide wireless service and ammenties on the bus, if these
                                                services are not available credit will not be given.</p>
                                            <div class="form-bottom pure-g">
                                                <div class="pure-u-1 pure-u-md-3-4 btn-label">

                                                </div>
                                                <div class="pure-u-1 pure-u-md-1-4">
                                                    <a href="{{url('reserve3')}}">
                                                        <!-- Remove in production -->
                                                        <input type="submit" value="Puchase Ticket" class="btn blue fr">
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- label for=""></label>
																<input class="btn blue" type="submit" value="PURSCHASE TICKET"> -->
                                    </div>
                                </div>
                            </div>
                            <div class="box-frame">
                                <div class="img-frame">
                                    <a href="https://www.verisign.com/" target="_blank"><img src="css/img/reserve/img-1.png" alt="img description"></a>
                                </div>
                            </div>
                    </section>
                </form>
                </div>

            </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection