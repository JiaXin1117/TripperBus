        <nav>
			<div class="container-fluid">
				<div class="mobile-menu">
					<img class="icon iconic mobile-menu-right" data-src="css/img/icons/menu-sm.svg" />
				</div>
				<div class="mobile-right-close"></div>
				<h1 class="fl logo">
					<a href="{{ url('/') }}">
						<img src="css/img/logo.png">
					</a>
				</h1>
				<ul class="fl menu-right">
					<li><a href='{{url("reserve1")}}'>Reserve</a></li>
					<li><a>Locations</a></li>
					<li><a href='{{url("about")}}'>About</a></li>
					<li><a href='{{url("elite")}}'>Elite Bus Service</a></li>
					<li><a href='{{url("blog_index")}}'>Blog</a></li>
					<li class="more-menu"><a>More</a></li>
					<li class="mobile-only"><a>Edit my ticket</a></li>
					<li class="customer-login-btn mobile-only"><a>My Account</a></li>
				</ul>
				<div class="close-menu"></div>
				<ul class="fr account web-only">
					@if (Auth::guard('customer')->check())
					<li><a><img class="icon iconic" data-src="css/img/icons/ticket.svg" /> Edit my ticket</a></li>
					<li><a href="{{ route('customer.logout') }}"><img class="icon iconic" data-src="css/img/icons/avatar-icon.svg" /> Log Out</a></li>
					@else
					<li class="customer-login-btn"><a><img class="icon iconic" data-src="css/img/icons/avatar-icon.svg" /> Log In</a></li>
					@endif
					<li><a><img class="icon iconic" data-src="css/img/icons/twitter.svg" /></a></li>
					<li><a><img class="icon iconic" data-src="css/img/icons/facebook.svg" /></a></li>
					<li><a><img class="icon iconic" data-src="css/img/icons/googleplus.svg" /></a></li>
					<li><a><img class="icon iconic" data-src="css/img/icons/instagram.svg" /></a></li>

					<!-- Login Top -->
					<div class="close-modal"></div>
					<div class="login-top">
						<form id="login-form" method="post" action="{{ route('customer.login') }}">
	                        {{ csrf_field() }}
							<span class="input input--ruri pure-u-1">
                                <label class="" for="input-22">
                                    Email
                                </label>
                                <div class="input-contain">
                                    <img class="icon iconic" data-src="css/img/icons/envelope-closed-sm.svg" />
                                    <input class="input__field input__field--ruri" type="text" id="input-num-seats" placeholder="Email" name="email">
                                </div>
                            </span>

							<span class="input input--ruri pure-u-1">
                                <label class="" for="input-22">
                                    Password
                                </label>
                                <div class="input-contain">
                                    <img class="icon iconic" data-src="css/img/icons/lock-locked-md.svg" />
                                    <input class="input__field input__field--ruri" type="password" id="input-num-seats" placeholder="Password" name="password">
                                </div>
                            </span>
							<span class="input pure-u-1 ">
                                <input type="submit" value="Login" class="btn blue fr">
                            </span>
							<div class="form-bottom pure-g">
								<div class="pure-u-md-1-2 fl">
									<a href="" class="forgot-password">Create Account</a>
								</div>
								<div class="pure-u-md-1-2 text-right">
									<a href="" class="forgot-password">Forgot Password?</a>
								</div>
							</div>
						</form>
					</div>

				</ul>
			</div>
		</nav>
