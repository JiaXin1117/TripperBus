@extends ('main.common.base')

@section ('head')
    <link rel="stylesheet" href="css/reserve.css">
    <link rel="stylesheet" href="css/account.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="holder">
            <div class="container">
                <section class="account-heading">
                    <h3>
                        Account Settings
                    </h3>
                </section>
                <section id="sidebar-menu">
                    <ul>
                        <li class="selected"><a href="#">Account Overview</a></li>
                        <li><a href="#">My Reservations</a></li>
                        <li><a href="#">Account Details </a></li>
                        <li><a href="#">Change Password</a></li>
                    </ul>
                </section>
                <!-- sidebar menu -->
                <div role="main">
                    <div class="padding">
                        <h2 class="welcome">Welcome Michael</h2>
                        <div class="info">
                            <ul class="list-inline">
                                <li>24 <span>POINTS</span></li>
                                <li><sup>$</sup>14.00 <span>CASH/CREDIT</span></li>
                            </ul>
                        </div>
                        <!-- info -->
                        <div class="page-title">Upcoming Trips</div>
                        <br>
                        <section class="reservations">
                            <table>
                                <tr>
                                    <th colspan="2">
                                        <span class="res-number">RESERVATION Number<span>1098372473-3082</span></span>
                                    </th>
                                    <th colspan="4">
                                        <ul class="action">
                                            <li><a href="#" class="options">Options</a></li>
                                            <li><a href="{{url('account_reservation')}}" class="view-order">View History</a></li>
                                        </ul>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>DATE/TIME</h3>
                                        <p>
                                            1/09/15 10:15 am
                                        </p>
                                    </td>
                                    <td>
                                        <h3>ROUTE</h3>
                                        <p>
                                            New York to Arlington
                                        </p>
                                    </td>
                                    <td>
                                        <h3>SEATS</h3>
                                        <p>1</p>
                                    </td>
                                    <td>
                                        <h3>POINTS</h3>
                                        <p>+2</p>
                                    </td>
                                    <td>
                                        <h3>TOTAL</h3>
                                        <p>$65</p>
                                    </td>
                                    <td>
                                        <h3>STATUS</h3>
                                        <p class="active">Active</p>
                                    </td>
                                </tr>
                            </table>
                        </section>
                        <!--  <section class="reservation">
                        <div class="reservations-overview">
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
                                        <div class="td pure-u-1-2 pure-u-md-4-24">
                                            <div class="mobile-label">Reservation number</div>098329384738910</div>
                                            <div class="td pure-u-1-2 pure-u-md-3-24"><div class="mobile-label">Date/Time</div>Jan 11th 2015</div>
                                            <div class="td pure-u-1-2 pure-u-md-4-24"><div class="mobile-label">Route</div>NY to Arlington</div>
                                            <div class="td pure-u-1-2 pure-u-md-2-24"><div class="mobile-label">Time</div>7:45am</div>
                                            <div class="td pure-u-1-2 pure-u-md-2-24"><div class="mobile-label">Seats</div>2</div>
                                            <div class="td pure-u-1-2 pure-u-md-2-24"><div class="mobile-label">Points</div>+2</div>
                                            <div class="td pure-u-1-2 pure-u-md-2-24"><div class="mobile-label">Total</div>$65</div>
                                            <div class="td pure-u-1-2 pure-u-md-3-24  active"><div class="mobile-label">Status</div>Active</div>
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
                                </div>

                    </section> -->
                        <div class="rewards">
                            <h3>Every 6 points queals a free ticket</h3>
                            <p>
                                You have <strong>2 free tickets</strong> and need 4 more points to earn your next free ticket
                            </p>
                        </div>
                        <!-- rewards -->
                    </div>
                    <!-- padding -->
                </div>
                <!-- main -->
            </div>
            <!-- container -->
        </div>
        <!-- holder -->
        <!-- Footer -->
        <div id="footer">
            <div class="container-fluid footer-info">
                <div class="pure-g">
                    <div class="pure-u-md-1-4 pure-u-1 column">
                        <h4>Travel Information</h4>
                        <ul>
                            <li><a>Travel Information</a></li>
                            <li><a>Parking Locations</a></li>
                            <li><a>Pickup Locations</a></li>
                            <li><a>Travel Maps</a></li>
                            <li><a>Promotional Offers</a></li>
                        </ul>
                    </div>
                    <div class="pure-u-md-1-4 pure-u-1 column">
                        <h4>More About Tripper Bus</h4>
                        <ul>
                            <li><a>About Us</a></li>
                            <li><a>Media Center</a></li>
                        </ul>
                    </div>
                    <div class="pure-u-md-1-4 pure-u-1 column">
                        <h4>Customer Service</h4>
                        <ul>
                            <li><a>Contact Us</a></li>
                            <li><a>Travel Maps</a></li>
                            <li><a>FAQs</a></li>
                            <li><a href="mailto:info@TripperBus.com">Gift Cards</a></li>

                            <li><a>Terms of Service</a></li>
                            <li><a>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="pure-u-md-1-4 pure-u-1 column">
                        <div class="footer-logo"><img src="css/img/logo.png" class="footer-logo" /></div>
                        <p class="contact-info">Phone: <span>718.834.9214</span><br /> Email: <span><a href="mailto:info@tripperbus.com">info@tripperbus.com</a></span></p>
                        <div class="social-links">
                            <img class="icon iconic" data-src="css/img/icons/twitter.svg" />
                            <img class="icon iconic" data-src="css/img/icons/facebook.svg" />
                            <img class="icon iconic" data-src="css/img/icons/googleplus.svg" />
                            <img class="icon iconic" data-src="css/img/icons/instagram.svg" />
                        </div>
                    </div>

                </div>
                <div class="footer-bottom">
                    <div class="fl">Copyright ⓒ 2017 TripperBus.<br>Operated by Gunther Charters US DOT 110308 MC 128577</div>
                    <div class="fr">All rights reserved.</div>
                </div>
            </div>
        </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection