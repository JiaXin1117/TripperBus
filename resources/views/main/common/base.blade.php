<!doctype html>
<html class="no-js" lang="">
	<head>
		@include ('main.common.head')
		@yield ('head')
	</head>

	<body class="@yield('body_class')">
		@include ('main.common.full_menu_top')

		<div id="container">
			@include ('main.common.nav')

			@yield ('content')

			<!-- Footer -->
			@include ('main.common.footer')

		</div>

		<div id="mobileCheck"></div>

		@include ('main.common.script')

		@yield ('script')
	</body>
</html>
