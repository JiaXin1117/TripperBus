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
                    <h1>Offer title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas enim saepe recusandae laborum accusantium
                        aut debitis, autem. Quam animi perferendis repellendus, culpa ducimus est earum et, vitae. Soluta
                        debitis quibusdam aperiam at provident optio aliquid obcaecati! Magni iste ab dicta perspiciatis
                        sequi delectus, enim at, fuga aliquam temporibus amet, odit!</p>
                    <p>Earum mollitia numquam eaque placeat corrupti, perferendis inventore laudantium accusamus obcaecati nesciunt
                        voluptates officia nulla nihil asperiores, magnam, iure corporis rem. Placeat nam debitis qui perferendis
                        autem molestias numquam praesentium ea quas harum quaerat ab voluptas recusandae aperiam similique
                        porro laboriosam vero quam amet nihil, dignissimos nulla. Vitae incidunt, eum.</p>
                </section>

                <section class="content">
                    <div class="pickup center">
                        <h2>Related <b>Offers</b></h2>
                    </div>
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
                    </div>
                </section>

                @include ('main.common.pickup_section')
                

                </div>

            </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection