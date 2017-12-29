@extends ('main.common.base')

@section ('head')
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
                        <li class="selected"><a href="{{url('account_overview')}}">Account Overview</a>
                        </li>
                        <li><a href="{{url('account_reservations')}}">My Reservations</a>
                        </li>
                        <li><a href="{{url('account_details')}}">Account Details </a>
                        </li>
                        <li><a href="{{url('account_password')}}">Change Password</a>
                        </li>
                    </ul>
                </section>
                <!-- sidebar menu -->
                <div role="main">
                    <div class="padding">
                        <section class="reservation-history">
                            <div class="page-title">Reservation History</div>
                            <br>
                            <div class="trip">
                                <div class="tr pure-g">
                                    <div class="active pure-u-1-3 pure-u-md-1-3 th">
                                        <span>ACTIVE</span>
                                    </div>
                                    <div class="pure-u-1-3 pure-u-md-1-3 th">
                                        <span class="res-number">RESERVATION#</span> <span>1098372473-3082</span>
                                    </div>
                                    <div class="pure-u-1-3 pure-u-md-1-3 th">
                                        <ul class="action">
                                            <li><a href="#" class="options">Options</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tr pure-g trip-details">
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>DATE/TIME</h3>
                                        <p class="active-trip">
                                            1/09/15 10:15 am
                                        </p>
                                        <h3>PAYMENT METHOD</h3>
                                        <p>
                                            Tripper Points
                                        </p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>ROUTE</h3>
                                        <p class="active-trip">
                                            New York to Arlington
                                        </p>
                                        <h3>LAST MODIFIED</h3>
                                        <p>1/01/15</p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>SEATS</h3>
                                        <p class="active-trip">1</p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3 class="right">ORDER SUMMARY</h3>
                                        <ul>
                                            <li>
                                                Ticket value: <span>$27</span>
                                            </li>
                                            <li>
                                                Total points used: <span class="blue">10</span>
                                            </li>
                                            <li>
                                                Total amount paid: <span>$0</span>
                                            </li>
                                            <li>
                                                Total points earned: <span>0</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="trip">
                                <div class="tr">
                                    <div class="passed pure-u-1 pure-u-md-1-3 th">
                                        <span>PASSED</span>
                                    </div>
                                    <div class="pure-u-1 pure-u-md-1-3 th">
                                        <span class="res-number">RESERVATION#</span> <span>1098372473-3082</span>
                                    </div>
                                    <div class="pure-u-1 pure-u-md-1-3 th">
                                        <ul class="action">
                                            <li><a href="#" class="print">Print Detail</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tr pure-g trip-details">
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>DATE/TIME</h3>
                                        <p>
                                            1/09/15 10:15 am
                                        </p>
                                        <h3>PAYMENT METHOD</h3>
                                        <p>
                                            <img src="css/img/account/icon-credit-card-visa.png" alt="" /> **** 3164
                                        </p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>ROUTE</h3>
                                        <p>
                                            New York to Arlington
                                        </p>
                                        <h3>LAST MODIFIED</h3>
                                        <p>1/01/15</p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>SEATS</h3>
                                        <p>1</p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3 class="right">ORDER SUMMARY</h3>
                                        <ul>
                                            <li>
                                                Ticket value: <span>$27</span>
                                            </li>
                                            <li>
                                                Total points used: <span class="blue">10</span>
                                            </li>
                                            <li>
                                                Total amount paid: <span>$0</span>
                                            </li>
                                            <li>
                                                Total points earned: <span>0</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="trip">
                                <div class="tr">
                                    <div class="cancelled pure-u-1 pure-u-md-1-3 th">
                                        <span>CANCELLED</span>
                                    </div>
                                    <div class="pure-u-1 pure-u-md-1-3 th">
                                        <span class="res-number">RESERVATION#</span> <span>1098372473-3082</span>
                                    </div>
                                    <div class="pure-u-1 pure-u-md-1-3 th">
                                        <ul class="action">
                                            <li><a href="#" class="print">Print Detail</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tr pure-g trip-details">
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>DATE/TIME</h3>
                                        <p>
                                            1/09/15 10:15 am
                                        </p>
                                        <h3>PAYMENT METHOD</h3>
                                        <p>
                                            ---
                                        </p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>ROUTE</h3>
                                        <p>
                                            New York to Arlington
                                        </p>
                                        <h3>LAST MODIFIED</h3>
                                        <p>1/01/15</p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3>SEATS</h3>
                                        <p>2</p>
                                    </div>
                                    <div class="pure-u-1-2 pure-u-md-1-4">
                                        <h3 class="right">ORDER SUMMARY</h3>
                                        <ul>
                                            <li>
                                                Ticket value: <span>$27</span>
                                            </li>
                                            <li>
                                                Total points used: <span class="green">+22</span>
                                            </li>
                                            <li>
                                                Total amount paid: <span class="green">+22</span>
                                            </li>
                                            <li>
                                                Total points earned: <span class="green">+22</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- reservation history -->
                    </div>
                    <!-- padding -->
                </div>
                <!-- main -->
            </div>
            <!-- container -->
        </div>
@endsection

@section ('after_container')
    <div id="popup-wrapper">
        <div class="content">
            <header>
                <a href="#" class="close">X</a>
                <h3>Edit Your Trip</h3>
                <p>
                    RESERVATION #: <span>E-518-Z-0220NY</span>
                </p>
            </header>
            <form>
                <fieldset>
                    <div class="row location">
                        <label>
						<input type="text" value="New York, NY">
						<span>DEPARTING CITY</span>
					</label>
                        <label>
						<input type="text" value="Arlington, VA">
						<span>ARRIVING CITY</span>
					</label>
                    </div>
                    <!-- row -->
                    <div class="row calendar">
                        <label>
						<input type="text" value="1/5/15">
						<span>DEPARTURE DATE</span>
					</label>
                        <label>
						<input type="text" value="1/12/15">
						<span>RETURN DATE</span>
					</label>
                    </div>
                    <!-- row -->
                    <div class="row cols calendar">
                        <label>
						<input type="text" value="1/5/15">
						<span>DEPARTURE TIME</span>
					</label>
                        <label>
						<input type="text" value="1/12/15">
						<span>RETURN TIME</span>
					</label>
                        <label class="seats">
						<input type="text" value="2">
						<span>NUMBER OF SEATS</span>
					</label>
                    </div>
                    <!-- row cols -->
                    <div class="submit">
                        <input type="submit" value="UPDATE TRIP" />
                    </div>
                    <!-- submit -->
                </fieldset>
            </form>
            <footer>
                <p>
                    You can change the date or time of your reservation up until 12am midnight prior to your trip. If you need to modify a reservation
                    after 12am midnight prior departure time, please call our office at 718.834.9214.
                </p>
            </footer>
        </div>
    </div>
    <!-- popup wrapper -->
@endsection


@section ('script')
<script src="js/reserve.js"></script>
@endsection