<?php

namespace App\Http\Middleware;

use Closure;
use Session;
use Auth;
use Illuminate\Auth\AuthenticationException;

use App\Models\Permission;
use App\Models\UserToPermission;

class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $permission)
    {
        // Check if a permission is required for the route, and
        // if so, ensure that the user has that permission.
        if ($this->checkPermission($request->user(), $permission)) {
            return $next($request);
        }
        return response()->json(['error' => "You don't have permission!"], 401);
    }

    private function checkPermission($user, $permission) {
        $permissionId = Permission::where('permission', $permission)->first();

        if (!$permissionId)
            return false;

        $userPermission = UserToPermission::where('user_id', $user['id'])
            ->where('permission_id', $permissionId['id'])
            ->get()
            ->toarray();

        return count($userPermission);
    }
}
