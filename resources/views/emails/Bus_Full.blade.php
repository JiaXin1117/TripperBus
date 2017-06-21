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
    </style>
    <div>
        <div>
            <div class="table">
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
                    <div class="td likep">
                        <b>Bus #{{$busId}} is full now.</b>
                        <br><br>
                        <b>Thank you for reserving with us, your itinerary is shown below.</b>
                        <br><br>
                        Please scroll down and present the scannable code on your smartphone/tablet screen to our agent at the bus together with valid ID. Make sure that the code is fully displayed on your device screen at that time. If you think you may not have access to this email confirmation at that time, please print it out on paper and bring that along with you instead.
                        <br>
                    </div>
                </div>
                <div class="tr">
                    <div class="td likep1">
                        <br>
                        <b>• -• -• -• -• - • - • - • - </b>
                    </div>
                </div>
                <div class="tr">
                    <div class="td likep">
                        {!!$reservationFooter!!} 
                    </div>
                </div>
                <div class="tr">
                    <div class="td small" style="font-family: verdana, arial, serif, EmojiFont;"><br>
                    Our Web System Is Powered By: <a href="http://{{$companySite}}" target="_blank" rel="noopener noreferrer">{{$companySite}}</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>