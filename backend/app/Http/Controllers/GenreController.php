<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;

class GenreController extends Controller
{
    
    public function index()
    {
        $genres = Genre::all();
        return response()->json($genres);
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $genre = Genre::create($request->only('name'));

        return response()->json($genre, 201);
    }

    
    public function show($id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['message' => 'Genre not found'], 404);
        }
        return response()->json($genre);
    }

    
    public function update(Request $request, $id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['message' => 'Genre not found'], 404);
        }

        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $genre->update($request->only('name'));

        return response()->json($genre);
    }

    
    public function destroy($id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['message' => 'Genre not found'], 404);
        }

        $genre->delete();

        return response()->json(['message' => 'Genre deleted successfully']);
    }
}