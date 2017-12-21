<?php
/* 
Route::group(['namespace' => 'Main', 'prefix' => '/', 'middlware' => ['auth']], function() {
    Route::get('/', [
        'as' => 'main',
        'uses' => 'LandingController@getIndex',
    ]);
});
 */

Route::group(['namespace' => 'Auth'], function() {
    Route::post('/login', [
        'as' => 'customer.login',
        'uses' => 'CustomerLoginController@login',
    ]);

    Route::get('/logout', [
        'as' => 'customer.logout',
        'uses' => 'CustomerLoginController@logout',
    ]);
});

Route::group(['namespace' => 'Main', 'prefix' => '/', 'middlware' => ['auth:customer']], function() {

    Route::get('/', [
        'as' => 'main.index',
        'uses' => 'LandingController@getIndex',
    ]);

    Route::get('/about', [
        'as' => 'main.about',
        'uses' => 'LandingController@getAbout',
    ]);

    Route::get('/account_details', [
        'as' => 'main.account_details',
        'uses' => 'LandingController@getAccountDetails',
    ]);

    Route::get('/account_overview', [
        'as' => 'main.account_overview',
        'uses' => 'LandingController@getAccountOverview',
    ]);

    Route::get('/account_password', [
        'as' => 'main.account_password',
        'uses' => 'LandingController@getAccountPassword',
    ]);

    Route::get('/account_reservation', [
        'as' => 'main.account_reservation',
        'uses' => 'LandingController@getAccountReservation',
    ]);

    Route::get('/account_reservations', [
        'as' => 'main.account_reservations',
        'uses' => 'LandingController@getAccountReservations',
    ]);

    Route::get('/blog_article', [
        'as' => 'main.blog_article',
        'uses' => 'LandingController@getBlogArticle',
    ]);

    Route::get('/blog_index', [
        'as' => 'main.blog_index',
        'uses' => 'LandingController@getBlogIndex',
    ]);

    Route::get('/contact', [
        'as' => 'main.contact',
        'uses' => 'LandingController@getContact',
    ]);

    Route::get('/elite', [
        'as' => 'main.elite',
        'uses' => 'LandingController@getElite',
    ]);

    Route::get('/faq', [
        'as' => 'main.faq',
        'uses' => 'LandingController@getFaq',
    ]);

    Route::get('/interior', [
        'as' => 'main.interior',
        'uses' => 'LandingController@getInterior',
    ]);

    Route::get('/offer', [
        'as' => 'main.offer',
        'uses' => 'LandingController@getOffer',
    ]);

    Route::get('/parking_locations', [
        'as' => 'main.parking_locations',
        'uses' => 'LandingController@getParkingLocations',
    ]);

    Route::get('/press_area', [
        'as' => 'main.press_area',
        'uses' => 'LandingController@getPressArea',
    ]);

    Route::get('/privacy_policy', [
        'as' => 'main.privacy_policy',
        'uses' => 'LandingController@getPrivacyPolicy',
    ]);

    Route::get('/register', [
        'as' => 'main.register',
        'uses' => 'LandingController@getRegister',
    ]);

    Route::get('/reschedule1', [
        'as' => 'main.reschedule1',
        'uses' => 'LandingController@getReschedule1',
    ]);

    Route::get('/reschedule2', [
        'as' => 'main.reschedule2',
        'uses' => 'LandingController@getReschedule2',
    ]);

    Route::get('/reschedule2b', [
        'as' => 'main.reschedule2b',
        'uses' => 'LandingController@getReschedule2b',
    ]);

    Route::get('/reserve1', [
        'as' => 'main.reserve1',
        'uses' => 'LandingController@getReserve1',
    ]);

    Route::get('/reserve2', [
        'as' => 'main.reserve2',
        'uses' => 'LandingController@getReserve2',
    ]);

    Route::get('/reserve3', [
        'as' => 'main.reserve3',
        'uses' => 'LandingController@getReserve3',
    ]);

    Route::get('/reserve3_logged', [
        'as' => 'main.reserve3_logged',
        'uses' => 'LandingController@getReserve3Logged',
    ]);

    Route::get('/special_offer', [
        'as' => 'main.special_offer',
        'uses' => 'LandingController@getSpecialOffer',
    ]);

    Route::get('/success', [
        'as' => 'main.success',
        'uses' => 'LandingController@getSuccess',
    ]);

    Route::get('/term_condition', [
        'as' => 'main.term_condition',
        'uses' => 'LandingController@getTermCondition',
    ]);

    Route::get('/travel_information', [
        'as' => 'main.travel_information',
        'uses' => 'LandingController@getTravelInformation',
    ]);


    /*     Route::get('', function () {
        return File::get(public_path() . '/index.html');
    }); */
});

Route::group(['namespace' => 'admin', 'prefix' => '/admin', 'middlware' => ['auth']], function() {
    Route::get('', function () {
        return File::get(public_path() . '/admin_frontend/index.html');
    });
});

//Auth::routes();
