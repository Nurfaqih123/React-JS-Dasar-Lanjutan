<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('books', function (Blueprint $table) {
            $table->unsignedBigInteger('genre_id')->after('cover_photo');
            $table->unsignedBigInteger('author_id')->after('genre_id');

            // Opsional: jika ingin tambahkan relasi foreign key
            // $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');
            // $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::table('books', function (Blueprint $table) {
            $table->dropColumn(['genre_id', 'author_id']);
        });
    }
};

