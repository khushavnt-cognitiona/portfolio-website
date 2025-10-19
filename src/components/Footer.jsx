import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Connect with me</h3>
        <div className="flex justify-center space-x-6 text-gray-700 dark:text-gray-300 text-2xl">
          <a href="https://www.instagram.com/engineer_khushvant" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/khushvantjadhao01/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/khushavnt-cognitiona" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-900 dark:hover:text-white transition">
            <FaGithub />
          </a>
        </div>
        <p className="mt-6 text-gray-600 dark:text-gray-400">&copy; 2025 Khushvant Jadhao. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
