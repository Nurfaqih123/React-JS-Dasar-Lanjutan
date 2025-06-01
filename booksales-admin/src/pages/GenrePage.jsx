import { useState } from 'react';
import GenreForm from '../components/GenreForm';
import GenreList from '../components/GenreList';

export default function GenrePage() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manajemen Genre</h1>
      <GenreForm onSuccess={() => setRefresh(refresh + 1)} />
      <GenreList refresh={refresh} />
    </div>
  );
}
