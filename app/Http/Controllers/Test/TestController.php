<?php

namespace App\Http\Controllers\Test;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class TestController extends Controller
{
    public function __construct()
    {
    }
    
    public function getIndex(Request $request) {
        //return view('test.test_index');
        echo date_format(date_create('2017-03-04'), 'w');
    }
}
