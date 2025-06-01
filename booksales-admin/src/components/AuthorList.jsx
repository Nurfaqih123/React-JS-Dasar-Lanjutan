import { useEffect, useState } from 'react';
import api from '../api';

export default function AuthorList({ refresh }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    api.get('/authors').then((res) => setAuthors(res.data));
  }, [refresh]);

  return (
    <div className="bg-white shadow p-4 rounded dark:bg-gray-800 dark:text-white">
      <h2 className="text-lg font-semibold mb-2">Daftar Author</h2>
      <ul className="list-disc pl-5">
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
}
