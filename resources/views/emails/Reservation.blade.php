<div>
    <style type="text/css">
        html, body { width: 100%; margin: 0; padding: 0; font-family: verdana,arial; }
        .top { color: black; font-weight: bold; font-size: 13px; }
        .likep1 { color: black; font-weight: normal; font-size: 14px; text-align: center; width: 80%; margin: 10px auto 0; }
        .likep { color: black; font-weight: normal; font-size: 14px; text-align: left; width: 80%; margin: 10px auto 0; }
        .small { color: black; font-size: 12px; font-family: verdana,arial; }
        .table { max-width: 674px; text-align: center; border: 1px solid #000; margin: auto; }
        .logo img { max-width: 674px; width: 100%; text-align: center; }
        .fl { float: left; }
        .qr { width: 35%; }
        .code-label { padding-top: 30px; padding-bottom: 5px; text-transform: uppercase; text-decoration: underline; font-size: 16px; font-weight: bold; }
        .edittrip3 { margin: 10px 0px 0px 12px; width: 700px; font-size: 20px; }
    </style>
    <div class="table" style="padding-bottom: 20px; margin-bottom: 50px">
        <div class="tr">
            <div class="td logo">
                <img src="https://www.washny.com/avatar2/imgs/print_version_l_color.gif">
            </div>
        </div>
        <div class="tr">
            <div class="td likep1">
                Phone: {{$phone}} • Toll Free: {{$tollFree}} • Email: {{$companyEmail}}<br>
                <b>
                <hr>
                </b><br>
            </div>
        </div>

        <div class="tr">
            @yield ('content1')
        </div>

        <div class="tr">
            @yield ('content2')
        </div>

        <div class="tr">
            <div class="td likep1">
                <br>
                <b>• -• -• -• -• - • - • - • - </b>
            </div>
        </div>
        <div class="tr">
            <div class="td likep">
                @yield ('footer')
            </div>
        </div>
        <div class="tr">
            <div class="td small" style="font-family: verdana, arial, serif, EmojiFont;"><br>
            Our Web System Is Powered By: <a href="http://{{$companySite}}" target="_blank" rel="noopener noreferrer">{{$companySite}}</a> 
            </div>
        </div>
    </div>
</div>