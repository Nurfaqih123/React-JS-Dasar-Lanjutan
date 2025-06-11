<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    // Hapus atau comment baris ini jika ada:
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function index()
    {
        // Return data books
        $books = [
            ['id' => 1, 'title' => 'Book 1', 'author' => 'Author 1'],
            ['id' => 2, 'title' => 'Book 2', 'author' => 'Author 2'],
        ];
        
        return response()->json([
            'success' => true,
            'data' => $books
        ]);
    }
}