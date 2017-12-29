@extends ('main.common.base')

@section ('head')
    <link rel="stylesheet" href="css/account.css">
@endsection

@section ('body_class') interior account @endsection

@section ('content')
        <div class="holder">
            <div class="container">
                <div class="account-heading">
                    <h3>
                        Account Settings
                    </h3>
                </div>
                <section id="sidebar-menu">
                    <ul>
                        <li><a href="{{url('account_overview')}}">Account Overview</a></li>
                        <li><a href="{{url('account_reservations')}}">My Reservations</a></li>
                        <li><a href="{{url('account_details')}}">Account Details </a></li>
                        <li class="selected"><a href="{{url('account_password')}}">Change Password</a></li>
                    </ul>
                </section>
                <!-- sidebar menu -->
                <div role="main">
                    <div class="padding">
                        <form>
                            <fieldset name="login">
                                <div class="">
                                    <h2 class="step-headline a">
                                        Change your password
                                        <span>Enter your current password and then select a new password.</span>
                                    </h2>
                                </div>
                                <!--  -->
                                <div class="">
                                    <label class="padded-40">
										<input type="password" value="some password" />
										<span>CURRENT PASSWORD</span>
									</label>
                                    <label class="padded-20">
										<input type="password" value="" />
										<span>NEW PASSWORD</span>
									</label>
                                    <label class="padded-60">
										<input type="password" value="" />
										<span>CONFIRM PASSWORD</span>
									</label>
                                </div>
                                <!--  -->
                                <div class="row">
                                    <input type="submit" value="Change Pasword">
                                </div>
                                <!-- row -->
                            </fieldset>
                            <!-- login -->
                        </form>
                    </div>
                    <!-- padding -->
                </div>
                <!-- main -->
            </div>
            <!-- container -->
        </div>
        <!-- holder -->
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection