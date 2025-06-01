<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    public function run()
    {
        DB::table('authors')->insert([
            ['name' => 'Nasa Zakiyyan', 'email' => 'zakiyyan@gmail.com', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Teguh Arsetyo', 'email' => 'teguh@gmail.com', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Dihya Ramdhan', 'email' => 'dihya@gmail.com', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Ulil Azmi', 'email' => 'ulil@gmail.com', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Nurfaqih', 'email' => 'nurfaqih@gmail.com', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}