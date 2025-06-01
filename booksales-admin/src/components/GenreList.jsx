import { useEffect, useState } from 'react';
import api from '../api';

export default function GenreList({ refresh }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api.get('/genres').then((res) => setGenres(res.data));
  }, [refresh]);

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">Daftar Genre</h2>
      <ul className="list-disc pl-5">
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}
