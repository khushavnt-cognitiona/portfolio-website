import React, { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-cover bg-center shadow-md border-2 border-indigo-600 dark:border-indigo-400 hover:shadow-lg transition-shadow overflow-hidden flex-shrink-0" style={{ backgroundImage: `url('/img/Snapchat-752709285.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Khushvant Jadhao</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Software Engineer</p>
          </div>
        </div>

        <nav className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white md:hidden focus:outline-none hover:text-indigo-500 transition"
          >
            <FaBars size={24} />
          </button>

          <ul className={`md:flex md:space-x-6 absolute md:static bg-white dark:bg-gray-900 md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in-out shadow-md md:shadow-none ${menuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden md:max-h-full'}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition font-medium">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition font-medium">About</Link>
            </li>
            <li>
              <Link to="/skills" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition font-medium">Skills</Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition font-medium">Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition font-medium">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
