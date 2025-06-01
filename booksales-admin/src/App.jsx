import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenrePage from './pages/GenrePage';
import AuthorPage from './pages/AuthorPage';
import GenreForm from './components/GenreForm';
import AuthorForm from './components/AuthorForm';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
        <Navbar /> {/* ✅ Komponen navbar terpisah */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/genres" element={<GenrePage />} />
          <Route path="/genres/create" element={<GenreForm />} />
          <Route path="/authors" element={<AuthorPage />} />
          <Route path="/authors/create" element={<AuthorForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
