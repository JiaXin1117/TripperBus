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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio molestiae impedit temporibus quas
                            amet debitis deserunt est, mollitia qui sint et laudantium, assumenda accusantium sed!</p>
                    </div>

                </section>
                <section class="content">
                    <div class="filters">
                        <h4 id="js-filters-trigger" class="filter-trigger">Filter and Sort <i class="fa fa-plus"></i></h4>
                        <div class="filter-contain">
                            <div class="pure-g">
                                <div class="pure-u-1 pure-u-md-1-2">
                                    <div class="pure-g">
                                        <div class="pure-u-1 pure-u-md-1-2">
                                            <select class="cs-select cs-skin-slide">
													<option value="All">All</option>
													<option value="New York">New York</option>
													<option value="Washington DC">Washington DC</option>
													<option value="Bethesda">Bethesda</option>
												</select>
                                            <label class="input__label input__label--ruri" for="input-22">
													<span class="input__label-content">Filter By City</span>
												</label>
                                        </div>
                                        <div class="pure-u-1 pure-u-md-1-2">
                                            <select class="cs-select cs-skin-slide">
													<option value="Most Recent">Most Recent</option>
													<option value="Most Recent">Oldest</option>
												</select>
                                            <label class="input__label input__label--ruri" for="input-22">
													<span class="input__label-content">Date Sort</span>
												</label>
                                        </div>
                                    </div>

                                </div>
                                <div class="pure-u-1 pure-u-md-1-2">
                                    <div class="pure-g cf ">
                                        <div class="pure-u-1 pure-u-md-1">
                                            <input class="input__field input__field--ruri" type="text" id="search" placeholder="">
                                            <label class="reserve" for="search">Search</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content articles">
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
                            <div class="article-card dc" style="background-image:url('css/img/placeholder-1.jpg')">
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
                            <div class="article-card dc" style="background-image:url('css/img/placeholder-1.jpg')">
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
                    <div class="pagination">
                        <ul class="list-inline">
                            <li class="active"><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">4</a></li>
                            <li><a href="">5</a></li>
                            <li><a href="">6</a></li>
                        </ul>
                    </div>

                </section>

                @include ('main.common.pickup_section')
                


            </div>

        </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection