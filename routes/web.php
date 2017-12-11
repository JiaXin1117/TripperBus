<?php

Route::group(['namespace' => 'Frontend', 'prefix' => '/', 'middlware' => ['auth']], function() {
    Route::get('', function () {
        return File::get(public_path() . '/index.html');
    });
});

Route::group(['namespace' => 'Frontend', 'prefix' => '/admin', 'middlware' => ['auth']], function() {
    Route::get('', function () {
        return File::get(public_path() . '/admin_frontend/index.html');
    });
});

//Auth::routes();
