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
                        <h1><strong>Special</strong> Offers</h1>

                </section>
                <section class="content">
                    <div class="pure-g offer-grid">
                        <div class="pure-u-1 pure-u-md-1-2">
                            <a href="{{url('offer')}}" class="offer">
									<img src="css/img/offer_pic.png" alt="" class="pure-img">
									<p>*Regular-priced one-way ticket is classified as $27<br>
									**Cannot combine two special offers within one sale</p>
								</a>
                        </div>
                        <div class="pure-u-1 pure-u-md-1-2">
                            <a href="{{url('offer')}}" class="offer">
									<img src="css/img/offer_pic.png" alt="" class="pure-img">
									<p>*Regular-priced one-way ticket is classified as $27<br>
									**Cannot combine two special offers within one sale</p>
								</a>
                        </div>
                        <div class="pure-u-1 pure-u-md-1-2">
                            <a href="{{url('offer')}}" class="offer">
									<img src="css/img/offer_pic.png" alt="" class="pure-img">
									<p>*Regular-priced one-way ticket is classified as $27<br>
									**Cannot combine two special offers within one sale</p>
								</a>
                        </div>
                        <div class="pure-u-1 pure-u-md-1-2">
                            <a href="{{url('offer')}}" class="offer">
									<img src="css/img/offer_pic.png" alt="" class="pure-img">
									<p>*Regular-priced one-way ticket is classified as $27<br>
									**Cannot combine two special offers within one sale</p>
								</a>
                        </div>
                    </div>
                </section>

                @include ('main.common.pickup_section')
                

                </div>

            </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection