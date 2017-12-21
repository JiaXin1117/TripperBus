@extends('main.common.base')

@section('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
        </div>

        <div class="container-fluid cb main-content">

            <div class="content-holder">
                <section class="content section-intro ">
                    <div class="">
                        <h1><strong>About Us</strong></h1>
                    </div>
                </section>
                <section class="content article-content ny">

                    <h2>New DC and NYC Routes Coupled with Industry Experience</h2>

                    <p>Tripper Bus is an independently owned and operated company which has partnered with an established motor
                        coach company with 15 years of safe, reliable transportation service experience. Tripper Bus executive
                        team coupled with the bus company has more than 30 years of travel industry experience as well. Tripper
                        Bus' motor coaches have logged millions of miles along the busy corridor between New York City and
                        Washington, DC. Travelers can rely on Tripper Bus for dependable on-time arrival, convenient pick-up
                        and drop-off locations, cost-effective travel fares and a safe, comfortable travel experience.</p>

                    <div class="pure-g">
                        <div class="pure-u-md-1-3">
                            <div class="col-p"><img src="css/img/slider/1.png" alt=""></div>
                        </div>
                        <div class="pure-u-md-1-3">
                            <div class="col-p"><img src="css/img/slider/2.png" alt=""></div>
                        </div>
                        <div class="pure-u-md-1-3">
                            <div class="col-p"><img src="css/img/slider/3.png" alt=""></div>
                        </div>
                    </div>

                    <h3>Your Safety Comes First</h3>
                    <p>Bus travel is considered to be the safest mode of transportation over cars, trucks, trains, planes and
                        other commercial vehicles. Tripper Bus motor coach partner is proud of consistently achieving the
                        Highest Safety Ratings from the U.S. Department of Transportation.</p>

                    <p>We continually strive to put passenger safety first. Every motor coach in our fleet is fully licensed,
                        insured, and routinely inspected and our drivers maintain superior experience records.</p>

                    <h3>Travel in Comfort and with Convenience</h3>
                    <p>Tripper Bus is committed to offering the busy traveler the newest and most meticulously maintained vehicles,
                        fully equipped with the latest in comfort and convenience.</p>

                    <p>Our luxury motor coaches can comfortably seat up to 55 passengers with plenty of leg room. Each bus is
                        equipped with a Wireless Internet connection for your entertainment and communication needs with
                        Plug-Ins available to charge your cell phone or laptop. Restrooms are always clean and sanitary.</p>

                    <p>Reducing the hassle in travel, Tripper Bus picks up and drops off its passengers at Metro accessible
                        locations in the Washington, DC Metro area (Bethesda, Maryland and Rosslyn Metro in Virginia) and
                        a known and convenient New York City location.</p>

                    <h3>Easy and Cost Effective Traveling</h3>
                    <p>With the high cost of gas and continued airline turmoil, Tripper Bus offers the most cost-effective,
                        timely, and relaxing mode of transportation for travelers. It certainly beats the hassle of flying
                        or driving yourself. With regular fares priced at $27 each way, traveling to Washington, DC and New
                        York City has never been so easy, convenient, or cost-effective.</p>

                    <p>Tripper Bus is happy to do our part for a healthier environment. Each one of our motor coaches removes
                        up to 56 cars from the road, substantially reducing air, ground, water, and noise pollution.</p>



                </section>

                @include ('main.common.pickup_section')

                </div>

            </div>
        </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection