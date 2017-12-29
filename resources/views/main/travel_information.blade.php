@extends ('main.common.base')

@section ('head')
	<link rel="stylesheet" href="css/reserve.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
        </div>


        <div class="container-fluid cb main-content">

            <div class="content-holder">
                <section class="content section-intro ">
                    <div class="">
                        <h1><strong>Travel Information</strong></h1>

                </section>
                <section class="content">

                    <h2>New York City, NY</h2>
                    <div class="pure-g">
                        <div class="pure-u-md-3-5">
                            <div class="col-p">
                                <img src="css/img/ny-landscape.jpg" alt="">
                            </div>
                        </div>
                        <div class="pure-u-md-2-5">
                            <div class="col-p">
                                <ul>
                                    <li><a href="">New York City Pick-Up Location</a></li>
                                    <li><a href="">New York City Travel Maps</a></li>
                                    <li><a href="http://www.nyctrip.com/Pages/Index.aspx?PageID=2" target="_blank">New York City Attractions</a></li>
                                    <li><a href="http://nycvisit.com/content/index.cfm?pagePkey=57" target="_blank">New York City Stat Sheet</a></li>
                                    <li><a href="http://nycvisit.com/content/index.cfm?pagePkey=1150" target="_blank">New York City First-Time Visitors Guide</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <h2>Washington, DC</h2>
                    <div class="pure-g">
                        <div class="pure-u-md-3-5">
                            <div class="col-p">
                                <img src="css/img/dc-landscape.jpg" alt="">
                            </div>
                        </div>
                        <div class="pure-u-md-2-5">
                            <div class="col-p">
                                <ul>
                                    <li><a href="">Washington DC Travel Maps</a></li>
                                    <li><a href="http://www.washington.org/planning/travel-professionals/dc-in-a-box/city-fact-sheet"
                                            target="_blank">Washington DC Fact Sheet</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <h2>Bethesda, MD</h2>
                    <div class="pure-g">
                        <div class="pure-u-md-3-5">
                            <div class="col-p">
                                <img src="css/img/md-landscape.jpg" alt="">
                            </div>
                        </div>
                        <div class="pure-u-md-2-5">
                            <div class="col-p">
                                <ul>
                                    <li><a href="">Bethesda Parking Locations</a></li>
                                    <li><a href="">Bethesda Pick-Up Location</a></li>
                                    <li><a href="">Bethesda Travel Maps</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <h2>BArlington, VA</h2>
                    <div class="pure-g">
                        <div class="pure-u-md-3-5">
                            <div class="col-p">
                                <img src="css/img/va-landscape.jpg" alt="">
                            </div>
                        </div>
                        <div class="pure-u-md-2-5">
                            <div class="col-p">
                                <ul>
                                    <li><a href="">Arlington Parking Locations</a></li>
                                    <li><a href="">Arlington Pick-Up Location</a></li>
                                    <li><a href="">Arlington Travel Maps</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr>



                </section>

                @include ('main.common.pickup_section')
                

                </div>

            </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection