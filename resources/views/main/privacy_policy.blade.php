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
                        <h1><strong>Privacy Policy</strong></h1>

                </section>
                <section class="content article-content ny">

                    <h3>Customer Information & Credit Card Transactions</h3>
                    <p>We value your privacy and will safeguard any information attained through transactions or other interaction.
                        All customer information is kept strictly confidential. Under no circumstances will we disclose,
                        share, or sell customer information without explicit prior consent from you.</p>

                    <p>Persons who supply us with their telephone numbers on-line may receive telephone contact from us with
                        information regarding orders they have placed on-line, but not for any other reason. We do not not
                        share, sell or trade telephone numbers or email addresses.</p>

                    <h3>Security</h3>
                    <p>We use secure SSL technology to ensure the safety of your transactions and credit card information.</p>

                    <p>
                        <h3>xternal Site Links</h3>
                        Our site pages may contain links to other websites on the internet. Content and Privacy Policies are the responsibility of
                        their respective owners.</p>

                    <h3>IP Addresses and Logging</h3>
                    <p>Our servers log information about visitors, including IP addresses, date/time visited, referring website,
                        length of stay, etc. This information is used for site statistics only.</p>



                </section>

                @include ('main.common.pickup_section')
                

                </div>

            </div>
@endsection

@section ('script')
<script src="js/reserve.js"></script>
@endsection