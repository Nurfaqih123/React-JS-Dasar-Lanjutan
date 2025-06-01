import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow mb-4 flex justify-between items-center">
      <div className="flex gap-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold underline'
              : 'hover:text-blue-500'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/genres"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold underline'
              : 'hover:text-blue-500'
          }
        >
          Genre
        </NavLink>
        <NavLink
          to="/authors"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold underline'
              : 'hover:text-blue-500'
          }
        >
          Author
        </NavLink>
      </div>

      {/* ✅ Toggle dark mode (hanya satu tombol) */}
      <button
        onClick={toggleDarkMode}
        className="px-4 py-1 text-sm bg-gray-300 text-black dark:bg-gray-700 dark:text-white rounded"
      >
        Toggle Dark
      </button>
    </nav>
  );
}
