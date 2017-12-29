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
                        <li><a href="{{url('account_overview')}}">Account Overview</a></li>
                        <li class="selected"><a href="{{url('account_reservations')}}">My Reservations</a></li>
                        <li><a href="{{url('account_details')}}">Account Details </a></li>
                        <li><a href="{{url('account_password')}}">Change Password</a></li>
                    </ul>
                </section>
                <!-- sidebar menu -->
                <div role="main">
                    <div class="padding">
                        <div class="page-title">Reservation History</div>
                        <section class="reservations-overview">
                            <div class="table">
                                <div class="tr pure-g table-header-wrap">
                                    <div class="col-1 table-header pure-u-1 pure-u-md-4-24">RESERVATION NUMBER</div>
                                    <div class="col-2 table-header pure-u-1 pure-u-md-3-24">DATE/TIME</div>
                                    <div class="col-3 table-header pure-u-1 pure-u-md-4-24">ROUTE</div>
                                    <div class="col-4 table-header pure-u-1 pure-u-md-2-24">TIME</div>
                                    <div class="col-5 table-header pure-u-1 pure-u-md-2-24">SEATS</div>
                                    <div class="col-6 table-header pure-u-1 pure-u-md-2-24">POINTS</div>
                                    <div class="col-7 table-header pure-u-1 pure-u-md-2-24">TOTAL</div>
                                    <div class="col-8 table-header pure-u-1 pure-u-md-3-24">STATUS</div>
                                </div>
                                <div class="tr pure-g ">
                                    <div class="darkBlue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Reservation number</div>098329384738910</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Date/Time</div>Jan 11th 2015</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Route</div>NY to Arlington</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-2-24">
                                        <div class="mobile-label">Time</div>7:45am</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-2-24">
                                        <div class="mobile-label">Seats</div>2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-2-24">
                                        <div class="mobile-label">Points</div>+2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-2-24">
                                        <div class="mobile-label">Total</div>$65</div>
                                    <div class="td pure-u-1-2 pure-u-md-3-24  active">
                                        <div class="mobile-label">Status</div>Active</div>
                                    <div class="td pure-u-1-2 pure-u-md-2-24 options-column">
                                        <div class="mobile-label">Options</div>
                                        <ul>
                                            <li>
                                                <a href="#" class="options">Options</a>
                                                <ul>
                                                    <li><a href="#">Re-send Email Confirmation</a></li>
                                                    <li><a href="#">Print this Confirmation</a></li>
                                                    <li><a href="#">Reschedule Seat(s)</a></li>
                                                    <li><a href="#">Place Seat(s) on Hold</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="tr pure-g ">
                                    <div class="darkBlue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Reservation number</div>098329384738910</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Date/Time</div>Jan 11th 2015</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Route</div>NY to Arlington</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Time</div>7:45am</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Seats</div>2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Points</div>+2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Total</div>$65</div>
                                    <div class="td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Status</div>Complete</div>
                                    <div class="td pure-u-1-2 pure-u-md-2-24 options-column">
                                        <div class="mobile-label">Options</div>
                                        <ul>
                                            <li>
                                                <a href="#" class="options">Options</a>
                                                <ul>
                                                    <li><a href="#">Re-send Email Confirmation</a></li>
                                                    <li><a href="#">Print this Confirmation</a></li>
                                                    <li><a href="#">Reschedule Seat(s)</a>
                                                        <v∂ /li>
                                                            <li><a href="#">Place Seat(s) on Hold</a></li>
                                                </ul>
                                                </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="tr pure-g ">
                                    <div class="darkBlue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Reservation number</div>098329384738910</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Date/Time</div>Jan 11th 2015</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Route</div>NY to Arlington</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Time</div>7:45am</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Seats</div>2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Points</div>+2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Total</div>$65</div>
                                    <div class="td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Status</div>Complete</div>
                                    <div class="td pure-u-1-2 pure-u-md-2-24 options-column">
                                        <div class="mobile-label">Options</div>
                                        <ul>
                                            <li>
                                                <a href="#" class="options">Options</a>
                                                <ul>
                                                    <li><a href="#">Re-send Email Confirmation</a></li>
                                                    <li><a href="#">Print this Confirmation</a></li>
                                                    <li><a href="#">Reschedule Seat(s)</a></li>
                                                    <li><a href="#">Place Seat(s) on Hold</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="tr pure-g ">
                                    <div class="darkBlue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Reservation number</div>098329384738910</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Date/Time</div>Jan 11th 2015</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Route</div>NY to Arlington</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Time</div>7:45am</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Seats</div>2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Points</div>+2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Total</div>$65</div>
                                    <div class="td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Status</div>Complete</div>
                                    <div class="td pure-u-1-2 pure-u-md-2-24 options-column">
                                        <div class="mobile-label">Options</div>
                                        <ul>
                                            <li>
                                                <a href="#" class="options">Options</a>
                                                <ul>
                                                    <li><a href="#">Re-send Email Confirmation</a></li>
                                                    <li><a href="#">Print this Confirmation</a></li>
                                                    <li><a href="#">Reschedule Seat(s)</a></li>
                                                    <li><a href="#">Place Seat(s) on Hold</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="tr pure-g ">
                                    <div class="darkBlue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Reservation number</div>098329384738910</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Date/Time</div>Jan 11th 2015</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Route</div>NY to Arlington</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Time</div>7:45am</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Seats</div>2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Points</div>+2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Total</div>$65</div>
                                    <div class="td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Status</div>Complete</div>
                                    <div class="td pure-u-1-2 pure-u-md-2-24 options-column">
                                        <div class="mobile-label">Options</div>
                                        <ul>
                                            <li>
                                                <a href="#" class="options">Options</a>
                                                <ul>
                                                    <li><a href="#">Re-send Email Confirmation</a></li>
                                                    <li><a href="#">Print this Confirmation</a></li>
                                                    <li><a href="#">Reschedule Seat(s)</a></li>
                                                    <li><a href="#">Place Seat(s) on Hold</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="tr pure-g status-change">
                                    <div class="account-credited">
                                        Account credited <span>+$65</span>
                                    </div>
                                    <div class="darkBlue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Reservation number</div>098329384738910</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Date/Time</div>Jan 11th 2015</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Route</div>NY to Arlington</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Time</div>7:45am</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Seats</div>2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Points</div>+2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Total</div>$65</div>
                                    <div class="td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Status</div>Rescheduled</div>
                                    <div class="td pure-u-1-2 pure-u-md-2-24 options-column">
                                        <div class="mobile-label">Options</div>
                                        <ul>
                                            <li>
                                                <a href="#" class="options">Options</a>
                                                <ul>
                                                    <li><a href="#">Re-send Email Confirmation</a></li>
                                                    <li><a href="#">Print this Confirmation</a></li>
                                                    <li><a href="#">Reschedule Seat(s)</a></li>
                                                    <li><a href="#">Place Seat(s) on Hold</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="tr pure-g status-change">
                                    <div class="account-credited">
                                        Account credited <span>+$65</span>
                                    </div>
                                    <div class="darkBlue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Reservation number</div>098329384738910</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Date/Time</div>Jan 11th 2015</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-4-24">
                                        <div class="mobile-label">Route</div>NY to Arlington</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Time</div>7:45am</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Seats</div>2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-1-12">
                                        <div class="mobile-label">Points</div>+2</div>
                                    <div class="blue td pure-u-1-2 pure-u-md-2-24">
                                        <div class="mobile-label">Total</div>$65</div>
                                    <div class="td pure-u-1-2 pure-u-md-3-24">
                                        <div class="mobile-label">Status</div>On-hold</div>
                                    <div class="td pure-u-1-2 pure-u-md-2-24 options-column">
                                        <div class="mobile-label">Options</div>
                                        <ul>
                                            <li>
                                                <a href="#" class="options">Options</a>
                                                <ul>
                                                    <li><a href="#">Re-send Email Confirmation</a></li>
                                                    <li><a href="#">Print this Confirmation</a></li>
                                                    <li><a href="#">Reschedule Seat(s)</a></li>
                                                    <li><a href="#">Place Seat(s) on Hold</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <!-- reservations overview -->
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