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
                        <h1><strong>Press</strong> Area</h1>

                </section>
                <section class="content article-content ny">

                    <ul class="">
                        <li>
                            <h3>Media Contact</h3>
                            <ul>
                                <li>
                                    <p class="var_font_size">For media requests, please contact <strong>Laura Hamilton</strong> at at <a href="mailto:at Video@TripperBus.com">Video@TripperBus.com</a>.</p>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <h3>Press Releases</h3>
                            <h4 class="color2">2009 Releases</h4>
                            <ul>
                                <li>
                                    <p class="var_font_size">February 2009 - <a href="#" class="link">Tripper Bus Unveils New Virginia, Maryland and New York City Routes Starting February 		2009 for as Little as $1 Each Way with Convenient Bus Stops</a></p>
                                </li>
                            </ul>
                            <h4 class="color2">2008 Releases</h4>
                            <ul>
                                <li>
                                    <p class="var_font_size">TripperBus.com Announces Launch of Virginia, Maryland, & New York City Routes in 2009.</p>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <h3>Press Releases</h3>
                            <ul>
                                <li>
                                    <p>February 4, 2009 - <a href="#" class="link">Another bus service to NYC is coming to DC.</a></p>
                                </li>
                                <li>
                                    <p>February 4, 2009 - <a href="#" class="link">Another Bus to NYC</a></p>
                                </li>
                                <li>
                                    <p>February 4, 2009 - <a href="#" class="link">New York-bound travelers get one more bus option</a></p>
                                </li>
                                <li>
                                    <p>February 3, 2009 - <a href="#" class="link">Tripper Bus offers new way to see DC</a></p>
                                </li>
                                <li>
                                    <p>January 2, 2009 - <a href="#" class="link">Alternatives to Traveling Under the Sea Taking a Safari with Kids</a></p>
                                </li>
                                <li>
                                    <p>December 30, 2008 - <a href="#" class="link">Temperatures May be Cold in NYC, but this City is Hot for Travelers</a></li>
                            </ul>

                        </li>
                        <li>
                            <h3>Images</h3>
                            <ul>
                                <li>
                                    <p>Tripper Bus Logo - <a href="#" class="link">view</a></p>
                                </li>
                                <li>
                                    <p>Exterior Bus Photo - <a href="#" class="link">view</a></p>
                                </li>
                                <li>
                                    <p>Interior Bus Photo - <a href="#" class="link">view</a></p>
                                </li>
                            </ul>

                        </li>
                    </ul>



                </section>

                @include ('main.common.pickup_section')
                

                </div>

            </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection