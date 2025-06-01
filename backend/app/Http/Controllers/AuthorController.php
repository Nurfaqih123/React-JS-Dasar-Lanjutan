<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

class AuthorController extends Controller
{
    
    public function index()
    {
        $authors = Author::all();
        return response()->json($authors);
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $author = Author::create($request->only('name'));

        return response()->json($author, 201);
    }

    
    public function show($id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }
        return response()->json($author);
    }

    
    public function update(Request $request, $id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $author->update($request->only('name'));

        return response()->json($author);
    }

    
    public function destroy($id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        $author->delete();

        return response()->json(['message' => 'Author deleted successfully']);
    }

    
}