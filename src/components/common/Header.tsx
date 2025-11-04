import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { t, currentLanguage, setLanguage, languages } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white bg-opacity-50 py-2'
      }`}
    >
      <div
    className={`absolute left-0 right-0 bottom-0 h-6 pointer-events-none transition-opacity duration-300
      bg-gradient-to-b from-transparent to-white`}
    style={{ opacity: isScrolled ? 1.5 : 0.2 }}
  />
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img src="/logoem3.png" alt="imglogo" className='w-[60px]'/>
          <Link
            to="/"
            className="font-sans text-2xl md:text-3xl font-semibold text-black flex items-center mr-4"
          >
            Emiliana
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-md px-4 py-2 rounded-md">
          <Link 
            to="/" 
            className={`transition-all duration-300 ${
              isActive('/') 
                ? 'text-primary-200 font-bold'     // Active: darker primary
                : 'text-text hover:text-primary-100' // Normal + hover
            }`}
          >
            {t.nav.home}
          </Link>
          <Link 
            to="/about" 
            className={`transition-all duration-300 ${
              isActive('/about') 
                ? 'text-primary-200 font-bold' 
                : 'text-text hover:text-primary-100'
            }`}
          >
            {t.nav.about}
          </Link>
          <Link 
            to="/services" 
            className={`transition-all duration-300 ${
              isActive('/services') 
                ? 'text-primary-200 font-bold' 
                : 'text-text hover:text-primary-100'
            }`}
          >
            {t.nav.services}
          </Link>
          <Link 
            to="/schedule" 
            className={`transition-all duration-300 ${
              isActive('/schedule') 
                ? 'text-primary-300 font-bold' 
                : 'text-text hover:text-primary-100'
            }`}
          >
            {t.nav.schedule}
          </Link>
          <Link 
            to="/contact" 
            className={`transition-all duration-300 ${
              isActive('/contact') 
                ? 'text-primary-300 font-bold' 
                : 'text-text hover:text-primary-100'
            }`}
          >
            {t.nav.contact}
          </Link>
          
          {/* Language Selector */}
          <div className="relative group flex items-center">
            <button className="flex items-center text-text hover:text-primary-100 transition-all duration-300">
              <Globe size={18} className="mr-1" />
              <span className="text-sm uppercase">{currentLanguage}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    currentLanguage === lang.code
                      ? 'bg-primary-100 text-primary-300'
                      : 'text-text hover:bg-gray-50'
                  } transition-all duration-300`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            to="/book-a-session" 
            className="px-4 py-2 bg-button text-white rounded-md text-sm font-medium hover:bg-primary-200 transition-all duration-300 transform hover:scale-105"
          >
            {t.hero.cta}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={() => setLanguage(currentLanguage === 'en' ? 'el' : 'en')}
            className="p-2 text-text hover:text-primary-100 transition-all duration-300"
          >
            <Globe size={20} />
          </button>
          
          <button
            className="text-text hover:text-primary-100 focus:outline-none transition-all duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-white z-40 md:hidden"
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col h-full pt-6 px-4">
          {['/', '/about', '/services', '/schedule', '/blog', '/contact'].map((path, idx) => (
            <Link
              key={idx}
              to={path}
              className={`py-3 text-lg text-center border-b border-gray-100 transition-all duration-300 ${
                isActive(path) ? 'text-primary-200 font-bold' : 'text-text hover:text-primary-100'
              }`}
            >
              {t.nav[path === '/' ? 'home' : path.slice(1)]}
            </Link>
          ))}
          <div className="mt-auto mb-8">
            <Link
              to="/book-a-session"
              className="block w-full py-3 bg-button text-white rounded-md text-center text-lg font-medium hover:bg-primary-200 transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.cta}
            </Link>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
