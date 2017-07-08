<?php

Route::group(['namespace' => 'Frontend', 'prefix' => '/', 'middlware' => ['auth']], function() {
    Route::get('', function () {
        return File::get(public_path() . '/frontend/index.html');
    });
});

//Auth::routes();
