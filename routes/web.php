<?php

Route::get('/', function () {
    return File::get(public_path() . '/frontend/index.html');
});







