<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run()
    {
        $books = [
            [
                'title' => 'The Great Gatsby',
                'author' => 'F. Scott Fitzgerald',
                'genre' => 'Fiction',
                'price' => 15.99,
                'stock' => 50,
                'description' => 'A classic American novel',
                'published_date' => '2023-01-15'
            ],
            [
                'title' => 'To Kill a Mockingbird',
                'author' => 'Harper Lee',
                'genre' => 'Fiction',
                'price' => 12.99,
                'stock' => 30,
                'description' => 'A gripping tale of racial injustice',
                'published_date' => '2023-02-20'
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'genre' => 'Dystopian',
                'price' => 13.99,
                'stock' => 40,
                'description' => 'A dystopian social science fiction novel',
                'published_date' => '2023-03-10'
            ]
        ];

        foreach ($books as $book) {
            Book::create($book);
        }

        echo "Books created successfully!\n";
    }
}