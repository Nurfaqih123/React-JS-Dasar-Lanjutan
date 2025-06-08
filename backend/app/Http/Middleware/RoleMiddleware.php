<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle($request, Closure $next, $role)
    {
        if (!Auth::check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if (Auth::user()->role != $role) {
            return response()->json(['error' => 'Forbidden'], 403);
        }

        return $next($request);
    }
}