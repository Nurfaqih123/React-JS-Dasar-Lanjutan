<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'book_id',
        'quantity',
        'unit_price',
        'total_price',
        'status',
        'notes',
        'transaction_date'
    ];

    protected $casts = [
        'transaction_date' => 'datetime',
        'unit_price' => 'decimal:2',
        'total_price' => 'decimal:2'
    ];

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke Book
    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    // Accessor untuk formatted price
    public function getFormattedTotalPriceAttribute()
    {
        return '$' . number_format($this->total_price, 2);
    }
}