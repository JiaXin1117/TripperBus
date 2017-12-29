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
                        <h1><strong>TripperBus</strong> Blog</h1>

                </section>
                <section class="content article-content ny">
                    <img src="css/img/placeholder-2.jpg" class="main-img" alt="">
                    <div class="pure-g meta">
                        <div class="pure-u-1 pure-u-md-5-8">
                            <h2 class="article-title">Get the <span>travel information</span> you need before your trip</h2>

                        </div>
                        <div class="pure-u-1 pure-u-md-3-8 text-right">
                            <h5>New York</h5>
                            <p>December 20, 2017</p>

                        </div>
                    </div>
                    <div class="article-contain">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ipsa, soluta voluptates iste totam
                            id. Repellendus illum corporis, aut sit nobis magni deserunt. Et enim sunt dolore impedit, tempore
                            minus illo. Mollitia quod culpa blanditiis dolorum sit vel cum dicta tempore velit error ab explicabo
                            officia nostrum illo, amet accusantium.</p>
                        <p>Cum maiores incidunt omnis cumque laudantium nesciunt totam saepe similique eius quae, dicta, consequuntur
                            asperiores commodi esse. Aperiam quidem nihil eaque aliquam magnam maiores nam, dolorum iure
                            veniam consequatur! Magnam fugiat ex nostrum quia iure deleniti ad, in eius quae? Vel ipsam tempore
                            suscipit quo rerum iste a, minima dolorum.</p>
                        <p>Cum ipsum ad perferendis ex, accusamus repellat voluptatibus praesentium numquam voluptas deleniti
                            quisquam placeat quia eaque ratione facere, ipsam labore maiores. At quis explicabo, autem vero
                            deleniti totam repudiandae accusantium dolor nobis eum sequi reiciendis quaerat esse, doloremque
                            inventore ullam officiis quasi, commodi cumque voluptatem illo! A eveniet unde cum.</p>
                        <p>Vero, explicabo odio esse dolore, quisquam ipsam accusamus expedita earum possimus ullam fugiat delectus
                            facilis atque mollitia ex voluptate ducimus nulla qui nihil? Atque harum non quia et. Quas labore
                            esse iure delectus eos autem architecto consequatur libero sed distinctio minus, aut dolorum
                            neque! Facilis quaerat, non debitis veritatis. Asperiores.</p>
                        <p>Deserunt omnis, et accusamus corporis expedita qui eos unde id voluptate consequuntur, praesentium,
                            cupiditate? Qui quos corporis voluptatum, dicta culpa minima eveniet suscipit tenetur, soluta
                            mollitia amet. Facere inventore hic error rerum illo officia, recusandae rem, impedit sed aspernatur
                            ratione corrupti nihil minus tempore quaerat quibusdam itaque nobis. Possimus, officia.</p>
                    </div>

                </section>
                <section class="content articles">
                    <div class="pickup center">
                        <h2>Related <b>Articles</b></h2>
                    </div>
                    <div class="pure-g">

                        <div class="pure-u-md-1-2">
                            <div class="article-card ny" style="background-image:url('css/img/placeholder-1.jpg')">
                                <div class="article-card-content">
                                    <a href="">
                                        <h4>Get the <span>travel information</span> you need before your trip</h4>
                                        <div class="pure-g article-meta">
                                            <div class="pure-u-1-2">
                                                <span>Read More <i class="fa fa-angle-right"></i></span>
                                            </div>
                                            <div class="pure-u-1-2 text-right">
                                                <h5>New York</h5>
                                                <p>December 20,2017</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="pure-u-md-1-2">
                            <div class="article-card ny" style="background-image:url('css/img/placeholder-1.jpg')">
                                <div class="article-card-content">
                                    <a href="">
                                        <h4>Get the <span>travel information</span> you need before your trip</h4>
                                        <div class="pure-g article-meta">
                                            <div class="pure-u-1-2">
                                                <span>Read More <i class="fa fa-angle-right"></i></span>
                                            </div>
                                            <div class="pure-u-1-2 text-right">
                                                <h5>New York</h5>
                                                <p>December 20,2017</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
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