import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Hamburger menüsünün durumu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Menüyü aç/kapa
  };

  const closeMenu = () => {
    setIsOpen(false); // Menüyü kapat
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Sol kısım: Site ismi */}
      <Link to="/home" className="text-white text-2xl font-bold">
        DailyNews
      </Link>

      {/* Hamburger ikonu (mobil görünüm için) */}
      <button
        onClick={toggleMenu}
        className="text-white md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Masaüstü Menü (sol tarafta) */}
      <div className="hidden md:flex md:space-x-6">
        <Link to="/home" className="text-white hover:text-gray-400">
          Home
        </Link>
        <Link to="/business" className="text-white hover:text-gray-400">
          Business
        </Link>
        <Link to="/entertainment" className="text-white hover:text-gray-400">
          Entertainment
        </Link>
        <Link to="/general" className="text-white hover:text-gray-400">
          General
        </Link>
        <Link to="/health" className="text-white hover:text-gray-400">
          Health
        </Link>
        <Link to="/science" className="text-white hover:text-gray-400">
          Science
        </Link>
        <Link to="/sports" className="text-white hover:text-gray-400">
          Sports
        </Link>
        <Link to="/technology" className="text-white hover:text-gray-400">
          Technology
        </Link>
      </div>

      {/* Mobil menü (tam ekran sağ tarafta) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-xl">Menu</h2>
          <button onClick={closeMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="/home"
            className="text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/business"
            className="text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            Business
          </Link>
          <Link
            to="/entertainment"
            className="text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            Entertainment
          </Link>
          <Link
            to="/general"
            className="text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            General
          </Link>
          <Link
            to="/health"
            className="text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            Health
          </Link>
          <Link
            to="/science"
            className="text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            Science
          </Link>
          <Link
            to="/sports"
            className="text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            Sports
          </Link>
          <Link
            to="/technology"
            className="text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            Technology
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
