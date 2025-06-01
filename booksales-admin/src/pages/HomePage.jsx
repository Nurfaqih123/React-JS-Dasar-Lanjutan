import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() =>
            document.documentElement.classList.toggle('dark')
          }
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Toggle Dark
        </button>
      </header>

      <main className="p-8">
        <h2 className="text-xl font-semibold mb-6">Welcome to the BookSales Admin Panel</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Genre Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Manage Genres</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              View and add genres for books.
            </p>
            <div className="flex gap-4">
              <Link
                to="/genres"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Genres
              </Link>
              <Link
                to="/genres/create"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add Genre
              </Link>
            </div>
          </div>

          {/* Author Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Manage Authors</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              View and add authors to your collection.
            </p>
            <div className="flex gap-4">
              <Link
                to="/authors"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Authors
              </Link>
              <Link
                to="/authors/create"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add Author
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
