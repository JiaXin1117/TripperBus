$(document).ready(function(){


  $.get("http://ipinfo.io", function (response) {

      if(response.region == 'New York' || response.region == 'New Jersey' || response.region == 'Connecticut') {
        $('body').addClass('NewYork');
        $('.where').text('from New York to DC');
      } else if(response.region == 'Virginia' || response.region == "Maryland" || response.region == "District of Columbia") {
        $('body').addClass('DC');
        $('.where').text('From DC to New York');
      } else {
        $('body').addClass('anywhere');
        $('.where').text('between NY and DC');
      }
  }, "jsonp");


  	var mobile = false,
        mobileCheck = $('#mobileCheck');

    // Check if we're on a mobile device    
    if(mobileCheck.is(":visible")) {
        mobile = true;
    }


    $('.carousel').slick({
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      variableWidth: true,
      arrows: false
    });

    $('input[type=radio][name=tripType]').on('change', function(){
        switch($(this).val()){
            case 'oneway' :
                $('.ticket-info').find('.arrival-date').addClass('disabled');
                $('.ticket-info').find('#input-arrival-date').attr('disabled', 'disabled');
                break;
            case 'roundtrip' :
                $('.ticket-info').find('.arrival-date').removeClass('disabled');
                $('.ticket-info').find('#input-arrival-date').removeAttr('disabled');
                break;
        }       
    });

    $('.top .fl label, .top .fl span').on('click', function() {
      if($('#reschedule-form').hasClass('active')) {
        $('.reschedule').toggleClass('current');
        $('#ticket-form').toggleClass('active');
        $('#reschedule-form').toggleClass('active'); 
      }
    });   

    $('#js-filters-trigger').click(function(){
      $(this).toggleClass('active');
      $('.filters .filter-contain').slideToggle();
    })

    $('.reschedule').click(function(){
      $('.js-trip-selector').fadeToggle();
      $(this).toggleClass('current');
      $('#ticket-form,#reschedule-form').toggleClass('active');
    });


    $('.toggle').click(function(e) {
            $('.mob_nav').slideToggle()
        });
    
    $('.collapse ul li.active .collapse_cnt').slideDown();
    $('.collapse ul li h5').click(function(e) {
      
            $(this).parent().toggleClass('active');
      $(this).parent().siblings().removeClass('active');
      
      $(this).parent().find('.collapse_cnt').slideToggle();
      $(this).parent().siblings().find('.collapse_cnt').slideUp();
      
        });
    $('.hide').click(function(e) {
            $(this).parent().slideUp();
      $(this).parent().parent().removeClass('active');
        });

    // Discount Form Input Change 

    $('.js-input[type=radio]').change(function() {
      var form = $(this).val();
      console.log('.js-input-row.' + form);
      $(this).parents('.input-wrapper').find('.js-input-row').removeClass('active').removeClass('hidden').fadeOut('');
      $('.js-input-row.' + form ).addClass('active').fadeIn('')
    });

    // Reservation history

    $('.reservation-history').click(function() {
      $('#popup-wrapper').fadeIn(500);
    });

    $('#popup-wrapper .close').click(function() {
      $('#popup-wrapper').fadeOut(500);
    });

    if (mobile == true) {
      $('.mobile-carousel').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        adaptiveHeight: false,
        adaptiveWidth: true
      });

      $('.mobile-carousel-locations').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        adaptiveHeight: false,
        centerPadding: '40px',
        adaptiveWidth: true
      });

      $('.amentities-details').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        adaptiveWidth: true
      });

      // Calendar demo initialization
      $('#input-depart-date, #input-arrival-date').mobiscroll().calendar({
          theme: 'mobiscroll',     // Specify theme like: theme: 'ios' or omit setting to use default 
           display: 'bottom'
      });

      $('.mobile-menu').click(function(){
        $('#container').addClass('right-nav-active');
        $('body').addClass('nav-active');
        $('.menu-right').addClass('show');
        $('.mobile-right-close').addClass('active');
      });

      $('.menu-right .more-menu').click(function(){
        $('#container').removeClass('right-nav-active');
        $('body').removeClass('nav-active');
        $('.menu-right').removeClass('show');
        $('.mobile-right-close').removeClass('active');
         $('html,body').animate({
        scrollTop: $("#footer").offset().top},
        'slow');
      })

      $('.mobile-right-close').click(function() {
        $('#container').removeClass('right-nav-active');
        $('body').removeClass('nav-active');
        $('.menu-right').removeClass('show');
        $('.mobile-right-close').removeClass('active');
      });

    } // End Mobile 

    if (mobile == false) {

      //Login
      var cusLogBtn = $('.customer-login-btn');
      cusLogBtn.click(function(){
        $(this).addClass('active');
        $('.close-modal').show();
        $('.login-top').fadeIn(200).animate({marginTop: '0px'}, 200);
      });

      $('.close-modal').click(function(){
        $('.login-top').fadeOut(200).animate({marginTop: '10px'}, 200);
        $('.close-modal').hide();
        $(cusLogBtn).removeClass('active');

      });

      //More Menu 
      $('.more-menu').click(function(){
        $('.full-menu-top').toggleClass('active');
        $('nav').toggleClass('menu-active');
        $('body').addClass('ov');
        $('.close-menu').css({top: 250});
        setTimeout(function(){
          $('.close-menu').fadeIn('300');
        }, 300);
      });

      $('.close-menu').click(function() {
        $('.full-menu-top').toggleClass('active');
        $('nav').toggleClass('menu-active');
        $('body').removeClass('ov');
        $('.close-menu').animate({top: 0}, 500);
        setTimeout(function(){
          $('.close-menu').fadeOut('300');
        }, 500);
      });

      // Calendar demo initialization
      $('#input-depart-date, #input-arrival-date').mobiscroll().calendar({
          theme: 'mobiscroll',     // Specify theme like: theme: 'ios' or omit setting to use default 
           display: 'bubble'
      });

      //Custom Select Boxes
      (function() {
        [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {  
          new SelectFx(el);
        } );
      })();

      $('span.input').on('click', '.cs-options li', function() {
            $(this).parents('.cs-options').siblings('.cs-placeholder').addClass('cs-clicked');
            $(this).parents('.input').addClass('valued');
      });

      // check value of our inputs
      $('input').change(function(){
        if($(this).val() != ''){
          $(this).parents('.input').addClass('valued');
        }else{
          $(this).parents('.input').removeClass('valued');
        }
      });

      // Switch Amenities
      var $selectAmenity = $('.select-amenity');
      $selectAmenity.on('click', 'li', function(){
        var me = $(this),
            $activeDetail = $('.amentities-details div.active'),
            target = me.attr("data-amenity");

        // Set active in list    
        $('.select-amenity li.active').removeClass('active');
        me.addClass('active');    

        // Set active on large details
        $activeDetail.removeClass('active');
        var $activeDetail = $('.amentities-details div[data-amenity-lrg='+ target +']');
        $activeDetail.addClass('active');

      });

    } // End Desktop Check
});