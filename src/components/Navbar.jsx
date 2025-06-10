import React, { useState, useEffect } from "react";
import '../index.css'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-photo-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-white hover:text-photo-gold-300 transition-colors duration-300">
              Nareshsanjayphoto
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-photo-gold-300 font-medium'
                    : 'text-white hover:text-photo-gold-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleNav}
            className="md:hidden text-white hover:text-photo-gold-300 transition-colors duration-300"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 transform ${
          nav ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-photo-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setNav(false)}
              className={`py-4 font-inter text-base transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-photo-gold-300 font-medium'
                  : 'text-white hover:text-photo-gold-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
