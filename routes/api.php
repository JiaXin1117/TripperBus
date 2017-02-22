<?php

use Illuminate\Http\Request;

Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function() {
    Route::post('/login', [
        'as' => 'login.post',
        'uses' => 'LoginController@postLogin',
    ]);
});

Route::group(['namespace' => 'Test', 'prefix' => 'test'], function() {
    Route::get('/', [
        'as' => 'test',
        'uses' => 'TestController@getIndex',
    ]);
});

