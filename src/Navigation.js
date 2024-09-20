import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="container mx-auto px-6 py-6">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-300">
          Lexal
        </Link>
        <div className="space-x-6">
          <Link to="/projects" className="text-gray-600 hover:text-indigo-600 transition duration-300">Projects</Link>
          <a 
            href="mailto:Business@lexalai.com" 
            className="text-gray-600 hover:text-indigo-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;