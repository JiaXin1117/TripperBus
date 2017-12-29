@extends ('main.common.base')

@section ('head')
    <link rel="stylesheet" href="css/reserve.css">
    <link rel="stylesheet" href="css/account.css">
@endsection

@section ('body_class') interior @endsection

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
                        <li class="selected"><a href="{{url('account_details')}}">Account Details </a></li>
                        <li><a href="{{url('account_password')}}">Change Password</a></li>
                    </ul>
                </section>
                <!-- sidebar menu -->
                <div role="main">
                    <div class="padding">
                        <form>
                            <fieldset name="login">
                                <div>
                                    <h2 class="step-headline a">
                                        Login Information
                                        <span>Email will be used as your username to login.</span>
                                    </h2>
                                </div>
                                <!-- bordered -->
                                <label>
                                        <input type="text" value="you@domain.com" />
                                        <span>EMAIL</span>
                                    </label>
                            </fieldset>
                            <!-- login -->
                            <fieldset name="account-info">
                                <div>
                                    <h2 class="step-headline b">
                                        Account Information
                                        <span>The information we'll use each time you purchase.</span>
                                    </h2>
                                </div>
                                <!-- bordered -->
                                <div class="row">
                                    <label class="half">
                                            <input type="text" value="First Name" />
                                            <span>First Name</span>
                                        </label>
                                    <label class="half">
                                            <input type="text" value="Last Name" />
                                            <span>Last Name</span>
                                        </label>
                                </div>
                                <!-- row -->
                                <div class="row">
                                    <label class="col5">
                                            <input type="text" value="Address" />
                                            <span>Address</span>
                                        </label>
                                    <label class="col5">
                                            <input type="text" value="City" />
                                            <span>City</span>
                                        </label>
                                    <label class="col5">
                                            <input type="text" value="State" />
                                            <span>State</span>
                                        </label>
                                    <label class="col5">
                                            <input type="text" value="United States" />
                                            <span>United States</span>
                                        </label>
                                    <label class="col5">
                                            <input type="text" value="Zip" />
                                            <span>Zip</span>
                                        </label>
                                </div>
                                <!-- row -->
                                <div class="row">
                                    <label>
                                            <input type="text" value="Phone Number" class="small" />
                                            <span>phone</span>
                                        </label>
                                </div>
                                <!-- row -->
                            </fieldset>
                            <!-- bordered -->
                            <div class="row">
                                <input type="submit" value="SAVE">
                            </div>
                            <!-- row -->
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