<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author',
        'genre',
        'price',
        'stock',
        'description',
        'published_date'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'published_date' => 'date'
    ];

    // Relasi ke Transaction
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    // Method untuk mengurangi stock
    public function decreaseStock($quantity)
    {
        if ($this->stock >= $quantity) {
            $this->decrement('stock', $quantity);
            return true;
        }
        return false;
    }
}