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

Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function() {
    Route::post('/login', [
        'as' => 'login.post',
        'uses' => 'LoginController@postLogin',
    ]);
});

Route::group(['namespace' => 'Admin', 'prefix' => 'admin'], function() {
    Route::group(['prefix' => 'schedule'], function() {
        Route::get('/retrieve_by_date', [
            'as' => 'admin.schedule.retrieve_by_date',
            'uses' => 'ScheduleController@getRetriveScheduleByDate',
        ]);
        Route::get('/retrieve_by_month', [
            'as' => 'admin.schedule.retrieve_by_month',
            'uses' => 'ScheduleController@getRetrieveSchedulesByMonth',
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
});

Route::group(['namespace' => 'Test', 'prefix' => 'test'], function() {
    Route::get('/', [
        'as' => 'test',
        'uses' => 'TestController@getIndex',
    ]);
});

