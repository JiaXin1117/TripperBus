<?php namespace App\Http\Middleware;

use Closure;
use Response;
use Illuminate\Http\Request;

class Cors {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    
    public function __construct(Request $request) {

        $request->header('Access-Control-Allow-Origin', '*');
        $request->header('Content-Type', 'text/plain');
    }
    
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers','Content-Type, Authorization, X-XSRF-TOKEN');
    }

}