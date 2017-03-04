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
        echo date('Y-m-01');
    }
}
