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
                        <h1><strong>Contact</strong> Us</h1>

                </section>
                <section class="content article-content ny">

                    <ul class="reserve_cnt">
                        <li>
                            <h2>To Make a Reservations</h2>
                            <p>If you'd like to make a reservation, you can do it online. <a href="#" class="reserve link">Reserve Now!</a>                                You can also call us at
                                <a href="tel:17188349214" class="telno">1-718-834-9214</a> to reserve by phone.</p>
                        </li>
                        <li class="pad_last">
                            <h2>To Change Your Reservation:</h2>
                            <p><a href="#" class="reserve link">Click here</a> to login to your account to view or change your
                                bus reservation</p>
                        </li>
                    </ul>
                    <br>

                    <h2 class="color2">Fill out the Inquiry Form Below:</h2>
                    <br>
                    <br>

                    <div class="form-info">
                        <div class="row input-row pure-g">
                            <div class="pure-u-1 pure-u-md-1-2">
                                <input class="input__field input__field--ruri" type="text" id="first" placeholder="First Name">
                                <label class="reserve" for="first">First Name</label>
                            </div>
                            <div class="pure-u-1 pure-u-md-1-2">
                                <input class="input__field input__field--ruri" type="text" id="last" placeholder="Last Name">
                                <label class="reserve" for="last">Last Name</label>
                            </div>
                        </div>
                        <div class="pure-g input-row">
                            <div class="pure-u-1 pure-u-md-1-2">
                                <input class="input__field input__field--ruri" type="tel" id="email" placeholder="Email">
                                <label class="reserve" for="phone">Email</label>
                            </div>
                            <div class="pure-u-1 pure-u-md-1-2">
                                <input class="input__field input__field--ruri" type="tel" id="phone" placeholder="Phone Number">
                                <label class="reserve" for="phone">Phone</label>
                            </div>
                        </div>
                        <div class="pure-g input-row">
                            <div class="pure-u-1">
                                <textarea class="input__field input__field--ruri" name="" id="" rows="10"></textarea>
                                <label class="reserve" for="phone">comments</label>

                            </div>
                        </div>
                        <div class="input-row row text-right">
                            <div class="form-bottom pure-g">

                                <div class="pure-u-1">
                                    <input type="submit" value="Send" class="btn blue fr">
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