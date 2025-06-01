<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\BookController;

// Authentication routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public routes
Route::get('/books', [BookController::class, 'index']);
Route::get('/books/{id}', [BookController::class, 'show']);

// Protected routes - Customer only
Route::middleware(['auth:sanctum', 'role:customer'])->group(function () {
    // Transaction CRUD for customers
    Route::post('/transactions', [TransactionController::class, 'store']);
    Route::get('/transactions/{id}', [TransactionController::class, 'show']);
    Route::put('/transactions/{id}', [TransactionController::class, 'update']);
    Route::get('/my-transactions', [TransactionController::class, 'myTransactions']);
    
    // Logout
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Protected routes - Admin only
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    // View all transactions and delete
    Route::get('/transactions', [TransactionController::class, 'index']);
    Route::delete('/transactions/{id}', [TransactionController::class, 'destroy']);
    
    // Book management (admin only)
    Route::post('/books', [BookController::class, 'store']);
    Route::put('/books/{id}', [BookController::class, 'update']);
    Route::delete('/books/{id}', [BookController::class, 'destroy']);
    
    // Logout
    Route::post('/logout', [AuthController::class, 'logout']);
});