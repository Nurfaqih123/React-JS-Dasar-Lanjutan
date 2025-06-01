import { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';


export default function AuthorPage() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manajemen Author</h1>
      <AuthorForm onSuccess={() => setRefresh(refresh + 1)} />
      <AuthorList refresh={refresh} />
    </div>
  );
}
