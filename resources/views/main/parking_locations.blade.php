@extends ('main.common.base')

@section ('head')
	<link rel="stylesheet" href="css/reserve.css">
@endsection

@section ('body_class') interior @endsection

@section ('content')
        <div class="hero inner">
        </div>


        <div class="container-fluid cb  main-content">

            <div class="content-holder">
                <section class="content section-intro ">
                    <div class="">
                        <h1><strong>Parking Locations</strong></h1>

                </section>
                <section class="content">

                    <h2>Parking in Bethesda, MD</h2>
                    <div class="pure-g">
                        <div class="pure-u-md-3-5">
                            <div class="col-p">
                                <div class="g-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12405.325352573062!2d-77.0961417!3d38.9849337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce1f89ab92c83bcf!2sMetropolitan+Public+Parking+Garage+49!5e0!3m2!1sen!2sus!4v1510245062947"
                                        width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                                    </iframe>

                                </div>

                            </div>
                        </div>
                        <div class="pure-u-md-2-5">
                            <div class="col-p">
                                <p><strong>Garage 49 (Metropolitan Garage) 7601 Woodmont Avenue</strong></p>
                                <p>Click below for details.</p>

                                <a href="https://www.parkingpanda.com/tripper-bus-service-parking?ref=tripper" class="bold" target="_blank">View Additional Parking Locations</a>

                                <p>You may park at the Hyatt Hotel self-parking, on Wisconsin Avenue. The long-term parking
                                    garage on Waverly Street is free on nights and weekends, from Friday, 10:00 pm to Monday,
                                    8:00 am. Other times it is metered.</p>

                                <p>If you need a taxicab in Bethesda, there is Barwood Cab Company at 301 984 1900 or you can
                                    hail one at the Hyatt Hotel on Wisconsin Avenue.</p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <h2>Parking in Arlington, VA (Rosslyn)</h2>
                    <div class="pure-g">
                        <div class="pure-u-md-3-5">
                            <div class="col-p">
                                <div class="g-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.244400035233!2d-77.07211078464974!3d38.89552607957091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b65a3baef5b7%3A0x9e310e7ea6ce34df!2s1101+Wilson+Blvd%2C+Arlington%2C+VA+22209!5e0!3m2!1sen!2sus!4v1510245182141"
                                        width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                                    </iframe>

                                </div>

                            </div>
                        </div>
                        <div class="pure-u-md-2-5">
                            <div class="col-p">
                                <p><strong>1101 Wilson Blvd - Between Lynn St. and Kent St.</strong></p>
                                <p>Click below for details.</p>

                                <a href="https://www.parkingpanda.com/tripper-bus-service-parking?ref=tripper" class="bold" target="_blank">View Additional Parking Locations</a>
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