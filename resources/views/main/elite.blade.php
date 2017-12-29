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
                        <h1>Introducing <strong>Tripper Bus Elite</strong></h1>

                </section>
                <section class="content article-content ny">
                    <p>Feeling VIP and looking to travel in style and class? We've got you covered! Travel to your destination
                        in true <strong>first class</strong> on board <strong>TRIPPER BUS ELITE!</strong> This new executive
                        coach transforms the bus travel experience with its' luxurious and spacious interior. Sink into the
                        comfort of leather captains chair seating, offering more leg room and personal space. Grab a beverage
                        and a snack, relax and let us do the driving.</p>

                    <p>Tripper Elite is equipped with amenities from wifi and electrical outlets, to on board entertainment
                        with complimentary new release movies and tv series viewable on your personal device. Tripper Bus
                        Elite is the newest luxury choice for travel between the D.C. Suburbs of Arlington and Bethesda and
                        New York City.</p>



                </section>

                @include ('main.common.pickup_section')
                

            </div>

        </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection