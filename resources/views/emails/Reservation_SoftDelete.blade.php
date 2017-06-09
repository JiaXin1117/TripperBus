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
                        Phone: {{$phone}} • Toll Free: {{$tollFree}} • Email: {{$email}}<br>
                        <b>
                        <hr>
                        </b><br>
                    </div>
                </div>
                <div class="tr">
                    <div class="td likep">
                        <b>Your reservation # ({{$reservation['id']}}) has now been deleted.</b><br>
                        <b>Thank you for reserving with us, your itinerary is shown below.</b><br>
                        <br>
                        Please scroll down and present the scannable code on your smartphone/tablet screen to our agent at the bus together with valid ID. Make sure that the code is fully displayed on your device screen at that time. If you think you may not have access to this email confirmation at that time, please print it out on paper and bring that along with you instead.<br>
                    </div>
                </div>
                <div class="tr">
                    <div class="td">
                        <div class="code-label">
                            Please present this code when boarding the bus<br>
                            <br>
                            {{$reservation['id']}} 
                        </div>
                    </div>
                    <div class="td likep">
                        <br>
                        <b><u>Y O U R&nbsp;&nbsp; I T I N E R A R Y:</u></b><br>
                        <b>Name:</b> {{$reservation['First Name']}} {{$reservation['Last Name']}}<br>
                        <b>Seats Reserved:</b> {{$reservation['Seats']}}<br>
                        <b>Reservation Number:</b> {{$reservation['id']}}<br>
                        <b>Date:</b>  <span tabindex="0" role="button" class="contextualExtensionHighlight ms-font-color-themePrimary ms-border-color-themePrimary ident_1624_1684">{{$reservation['date']}}</span><br>
                        <b><span tabindex="0" role="button" class="contextualExtensionHighlight ms-font-color-themePrimary ms-border-color-themePrimary ident_1624_1684">Time &amp; Place:</span></b><span tabindex="0" role="button" class="contextualExtensionHighlight ms-font-color-themePrimary ms-border-color-themePrimary ident_1624_1684"> {{$time['time']}} from {{$stop['address']}}</span>., {{$stop['city']}} - ({{$stop['details']}})<br>
                        <b>Destination &amp; approximate arrival time:</b><br>
                        {{$destination}}<br>
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
                        Please be at the bus stop at least 15 minutes before travel time, otherwise your seat may be assigned to another passenger.<br>
                        <b>Your seat is ONLY GUARANTEED for the pickup location you have specified when booking your ticket.</b><br>
                        This ticket is non refundable. However, you may reschedule or put your ticket on hold up until 12:00 am midnight prior to travel. Use the Edit My Trip feature on our website to do this. Alternatively, you may contact us at {{$tollFree2}} during business hours or email us at {{$email}}. If you do not change the reservation before that time and don't travel, your ticket will be forfeited.<br>
                        <br>
                        <b>Please note</b>: On Saturdays, please call the following number for inquiries only: {{$phone2}}<br>
                        <br>
                        Sign-up &amp; become a member of our Rewards Program today! Remember: For every 8 one-way ticket or 4 round trip tickets you purchase under your account, you will receive a free one-way ticket for the next time you travel!<br>
                        <br>
                        Please Note: We are not responsible for damaged, lost, or stolen packages during loading or unloading.<br>
                        <br>
                        Transportation provided by Q.T. Transport MC#{{$transportMC}}<br>
                        <br>
                        From all of us at Washington Deluxe - Have a safe trip!! 
                    </div>
                </div>
                <div class="tr">
                    <div class="td small" style="font-family: verdana, arial, serif, EmojiFont;"><br>
                    Our Web System Is Powered By: <a href="http://{{$website}}" target="_blank" rel="noopener noreferrer">{{$website}}</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
