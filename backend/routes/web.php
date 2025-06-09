<?php

use Illuminate\Support\Facades\Route;

// Bisa dikosongkan dulu atau buat route default

Route::get('/', function () {
    return response()->json(['message' => 'Welcome to Booksales API']);
});