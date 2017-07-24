<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => ['auth']], function() {
    Route::group(['prefix' => 'schedule', 'middleware' => ['permission:Schedules']], function() {
        Route::get('/retrieve_by_date', [
            'as' => 'admin.schedule.retrieve_by_date',
            'uses' => 'ScheduleController@getRetriveScheduleByDate',
        ]);
        Route::get('/retrieve_by_month', [
            'as' => 'admin.schedule.retrieve_by_month',
            'uses' => 'ScheduleController@getRetrieveSchedulesByMonth',
        ]);
        Route::get('/retrieve_group_times', [
            'as' => 'admin.schedule.retrieve_group_times',
            'uses' => 'ScheduleController@getRetriveGroupTimes',
        ]);
        Route::get('/retrieve_stops', [
            'as' => 'admin.schedule.retrieve_stops',
            'uses' => 'ScheduleController@getRetrieveStops',
        ]);
        Route::get('/retrieve_stops_for_area', [
            'as' => 'admin.schedule.retrieve_stops_for_area',
            'uses' => 'ScheduleController@getAvailableStopsForArea',
        ]);
        Route::get('/retrieve_stop_from_id', [
            'as' => 'admin.schedule.retrieve_stop_from_id',
            'uses' => 'ScheduleController@getStopInfo',
        ]);
        Route::get('/retrieve_group_info', [
            'as' => 'admin.schedule.retrieve_group_info',
            'uses' => 'ScheduleController@getGroupInfo',
        ]);
        Route::get('/retrieve_dest_stops_for_group', [
            'as' => 'admin.schedule.retrieve_dest_stops_for_group',
            'uses' => 'ScheduleController@getDestStopsForGroup',
        ]);
        
        // POST Requests
        Route::post('/update_existing_schedule', [
            'as' => 'admin.schedule.update_existing_schedule',
            'uses' => 'ScheduleController@postUpdateForEditExistingSchedule',
        ]);
        Route::post('/remove_existing_schedule', [
            'as' => 'admin.schedule.remove_existing_schedule',
            'uses' => 'ScheduleController@postRemoveForEditExistingSchedule',
        ]);
        Route::post('/disable_existing_schedule', [
            'as' => 'admin.schedule.disable_existing_schedule',
            'uses' => 'ScheduleController@postDisableForEditExistingSchedule',
        ]);
        Route::post('/saveall_existing_schedule', [
            'as' => 'admin.schedule.saveall_existing_schedule',
            'uses' => 'ScheduleController@postSaveAllForEditExistingSchedule',
        ]);
        Route::post('/save_groups_additional_infos', [
            'as' => 'admin.schedule.save_groups_additional_infos',
            'uses' => 'ScheduleController@postSaveGroupsAdditionalInfo',
        ]);
        Route::post('/add_existing_schedule', [
            'as' => 'admin.schedule.add_existing_schedule',
            'uses' => 'ScheduleController@postAddForEditExistingSchedule',
        ]);
        
    });


    Route::group(['prefix' => 'main', 'middleware' => ['permission:Main']], function() {
        Route::get('/retrieve_reservations_by_date', [
            'as' => 'admin.main.retrieve_reservations_by_date',
            'uses' => 'MainController@getRetrieveReservations',
        ]);
        Route::post('/add_reservation', [
            'as' => 'admin.main.add_reservation',
            'uses' => 'MainController@addReservation',
        ]);
        Route::post('/add_reservation_seats', [
            'as' => 'admin.main.add_reservation_seats',
            'uses' => 'MainController@addReservationSeats',
        ]);
        Route::post('/update_reservation', [
            'as' => 'admin.main.update_reservation',
            'uses' => 'MainController@updateReservation',
        ]);
        Route::post('/update_reservations', [
            'as' => 'admin.main.update_reservations',
            'uses' => 'MainController@updateReservations',
        ]);
        Route::post('/hold_reservation', [
            'as' => 'admin.main.hold_reservation',
            'uses' => 'MainController@holdReservation',
        ]);
        Route::post('/hold_reservations', [
            'as' => 'admin.main.hold_reservations',
            'uses' => 'MainController@holdReservations',
        ]);
        Route::post('/delete_soft_reservation', [
            'as' => 'admin.main.delete_soft_reservation',
            'uses' => 'MainController@deleteSoftReservation',
        ]);
        Route::post('/delete_soft_reservations', [
            'as' => 'admin.main.delete_soft_reservations',
            'uses' => 'MainController@deleteSoftReservations',
        ]);
        Route::post('/delete_reservation', [
            'as' => 'admin.main.delete_reservation',
            'uses' => 'MainController@deleteReservation',
        ]);
        Route::get('/search_reservation', [
            'as' => 'admin.main.search_reservation',
            'uses' => 'MainController@searchReservation',
        ]);
        Route::post('/note_reservations', [
            'as' => 'admin.main.note_reservations',
            'uses' => 'MainController@noteReservations',
        ]);
        Route::post('/re_email_reservations', [
            'as' => 'admin.main.re_email_reservations',
            'uses' => 'MainController@reEmailReservations',
        ]);
        Route::post('/email_custom_reservations', [
            'as' => 'admin.main.email_custom_reservations',
            'uses' => 'MainController@emailCustomReservations',
        ]);
        Route::post('/sendtext_reservations', [
            'as' => 'admin.main.sendtext_reservations',
            'uses' => 'MainController@sendTextReservations',
        ]);
        Route::post('/email_custom_text_reservations', [
            'as' => 'admin.main.email_custom_text_reservations',
            'uses' => 'MainController@emailCustomTextReservations',
        ]);

        Route::get('/get_Settings', [
            'as' => 'admin.main.get_Settings',
            'uses' => 'MainController@getSettings',
        ]);

        Route::post('/set_Settings', [
            'as' => 'admin.main.set_Settings',
            'uses' => 'MainController@setSettings',
        ])->middleware('permission:Settings');;


        Route::get('/get_price_for_bus', [
            'as' => 'admin.main.get_price_for_bus',
            'uses' => 'MainController@getPriceInfo',
        ]);
        
        Route::get('/get_bus_times', [
            'as' => 'admin.main.get_bus_times',
            'uses' => 'BusEditController@getBusTimes',
        ]);

        Route::post('/update_buses', [
            'as' => 'admin.main.update_buses',
            'uses' => 'BusEditController@updateBuses',
        ]);

        Route::get('/get_bus_for_move', [
            'as' => 'admin.main.get_bus_for_move',
            'uses' => 'BusEditController@getBusForMove',
        ]);
        
        Route::post('/move_reservations', [
            'as' => 'admin.main.move_reservations',
            'uses' => 'BusEditController@moveReservations',
        ]);

        Route::post('/retrieve_group_additional_info', [
            'as' => 'admin.main.retrieve_group_additional_info',
            'uses' => 'MainController@postRetrieveGroupInformations',
        ]);
    });

    Route::group(['prefix' => 'user'], function() {
        Route::get('/get_current_user', [
            'as' => 'admin.user.get_current_user',
            'uses' => 'UserController@getCurrentUser',
        ]);
    });

    Route::group(['prefix' => 'user', 'middleware' => ['permission:Users']], function() {
        Route::get('/get_users', [
            'as' => 'admin.user.get_users',
            'uses' => 'UserController@getUsers',
        ]);

        Route::post('/add_user', [
            'as' => 'admin.user.add_user',
            'uses' => 'UserController@addUser',
        ]);

        Route::post('/update_user', [
            'as' => 'admin.user.update_user',
            'uses' => 'UserController@updateUser',
        ]);

        Route::post('/delete_user', [
            'as' => 'admin.user.delete_user',
            'uses' => 'UserController@deleteUser',
        ]);

        Route::post('/set_permission', [
            'as' => 'admin.user.set_permission',
            'uses' => 'UserController@setPermission',
        ]);
    });


    Route::group(['prefix' => 'report', 'middleware' => ['permission:Reports']], function() {
        Route::get('/get_reports', [
            'as' => 'admin.report.get_reports',
            'uses' => 'MainController@getReports',
        ]);
    });
});

Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function() {
    Route::post('/login', [
        'as' => 'auth.login',
        'uses' => 'LoginController@postLogin'
    ]);
    Route::get('/logout', [
        'as' => 'auth.logout',
        'uses' => 'LoginController@getLogout'
    ]);
});

Route::group(['namespace' => 'Test', 'prefix' => 'test'], function() {
    Route::get('/', [
        'as' => 'test',
        'uses' => 'TestController@getIndex',
    ]);
});

