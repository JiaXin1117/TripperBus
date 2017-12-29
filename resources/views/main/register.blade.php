@extends ('main.common.base')

@section ('head')
	<link rel="stylesheet" href="css/reserve.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
            <div id="tickets" class="container-fluid">
                <div class="top-header">
                    <h3 class="fl">Create your account</h3>
                </div>
            </div>
        </div>


        <div class="container-fluid cb main-content">
            <div class="trip-total clearfix">
                <span class="title fl">Register an account and earn points towards a free ticket today!</span>
            </div>
            <div class="content-holder">
                <section class="content section-reserve">
                    <div class="title-holder">
                        <h3 class="reserve-section-headline a">Login Information<span>Email will be used as your username to login</span></h3>
                    </div>
                    <div class="form-info register">
                        <div class="row">
                            <div class="col">
                                <input class="input__field input__field--ruri" type="email" id="mail2" placeholder="Email">
                                <label class="reserve" for="mail2">Email</label>
                            </div>
                            <div class="col">
                                <input class="input__field input__field--ruri" type="email" id="mail3" placeholder="Confirm Email">
                                <label class="reserve" for="mail3">Confirm Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input class="input__field input__field--ruri" type="password" id="password" placeholder="************">
                                <label class="reserve" for="password">Password</label>
                            </div>
                            <div class="col">
                                <input class="input__field input__field--ruri" type="password" id="password-confirm" placeholder="************">
                                <label class="reserve" for="password-confirm">Confirm Password</label>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content section-reserve">
                    <div class="title-holder">
                        <h3 class="reserve-section-headline b">Account Information<span>Email will be used as your username to login</span></h3>
                    </div>
                    <form action="">
                        <div class="form-info register-form">
                            <div class="row input-row">
                                <div class="col">
                                    <input class="input__field input__field--ruri" type="text" id="first" placeholder="First Name">
                                    <label class="reserve" for="first">First Name</label>
                                </div>
                                <div class="col">
                                    <input class="input__field input__field--ruri" type="text" id="last" placeholder="Last Name">
                                    <label class="reserve" for="last">Last Name</label>
                                </div>
                            </div>
                            <div class="pure-g input-row">
                                <div class="pure-u-md-1-3">
                                    <input class="input__field input__field--ruri" type="text" id="address" placeholder="Address">
                                    <label class="reserve" for="address">Address</label>
                                </div>
                                <div class="pure-u-md-1-6">
                                    <input class="input__field input__field--ruri" type="text" id="city" placeholder="City">
                                    <label class="reserve" for="city">City</label>
                                </div>
                                <div class="pure-u-md-1-6">
                                    <input class="input__field input__field--ruri" type="text" id="state" placeholder="State">
                                    <label class="reserve" for="state">State</label>
                                </div>
                                <div class="pure-u-md-1-6">
                                    <input class="input__field input__field--ruri" type="text" id="country" placeholder="United States">
                                    <label class="reserve" for="country">Country</label>
                                </div>
                                <div class="pure-u-md-1-6">
                                    <input class="input__field input__field--ruri" type="text" id="zip" placeholder="Zip">
                                    <label class="reserve" for="zip">Zip</label>
                                </div>
                            </div>
                            <div class="pure-g input-row">
                                <div class="pure-u-md-1-3">
                                    <input class="input__field input__field--ruri" type="tel" id="phone" placeholder="Phone Number">
                                    <label class="reserve" for="phone">Phone</label>
                                </div>
                            </div>
                            <div class="input-row row text-right">
                                <label class="reserve" for="accept">Please contact me with updates regarding transporation with Tripper Bus</label>
                                <span class="jcf-checkbox jcf-unchecked"><span></span><input type="checkbox" id="accept"
                                    style="position: absolute; height: 100%; width: 100%; opacity: 0; margin: 0px;"></span>
                                <div class="form-bottom pure-g">

                                    <div class="pure-u-1">
                                        <input type="submit" value="Register Account" class="btn blue fr">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
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
