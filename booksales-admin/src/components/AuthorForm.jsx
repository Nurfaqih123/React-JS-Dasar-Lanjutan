import { useState } from 'react';
import api from '../api';

export default function AuthorForm({ onSuccess }) {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/authors', { name });
    setName('');
    onSuccess(); // refresh list
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        className="border px-4 py-2 rounded w-full"
        placeholder="Nama Author"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Tambah
      </button>
    </form>
  );
}
