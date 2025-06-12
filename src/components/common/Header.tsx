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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <img src="/logoem.png" alt="imglogo" className='w-[20px] mr-2'/>
        <Link 
          to="/"
          className="font-sans text-xl md:text-2xl font-semibold text-secondary-300 flex items-center mr-4"
        >
          Emiliana
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm hover:text-primary-300 transition-all duration-300 ${
              isActive('/') ? 'text-primary-300 font-medium font-bold' : 'text-primary-500'
            }`}
          >
            {t.nav.home}
          </Link>
          <Link 
            to="/about" 
            className={`text-sm hover:text-primary-300 transition-all duration-300 ${
              isActive('/about') ? 'text-primary-300 font-medium' : 'text-primary-500'
            }`}
          >
            {t.nav.about}
          </Link>
          <Link 
            to="/services" 
            className={`text-sm hover:text-primary-300 transition-all duration-300 ${
              isActive('/services') ? 'text-primary-300 font-medium' : 'text-primary-500'
            }`}
          >
            {t.nav.services}
          </Link>
          <Link 
            to="/schedule" 
            className={`text-sm hover:text-primary-300 transition-all duration-300 ${
              isActive('/schedule') ? 'text-primary-300 font-medium' : 'text-primary-500'
            }`}
          >
            {t.nav.schedule}
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm hover:text-primary-300 transition-all duration-300 ${
              isActive('/contact') ? 'text-primary-300 font-medium' : 'text-primary-500'
            }`}
          >
            {t.nav.contact}
          </Link>
          
          <div className="relative group flex items-center">
            <button className="flex items-center text-secondary-300 hover:text-primary-300 transition-all duration-300">
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
                      : 'text-secondary-300 hover:bg-gray-50'
                  } transition-all duration-300`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <Link 
            to="/contact" 
            className="px-4 py-2 bg-primary-300 text-white rounded-md text-sm font-medium hover:bg-primary-400 transition-all duration-300 transform hover:scale-105"
          >
            {t.hero.cta}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={() => setLanguage(currentLanguage === 'en' ? 'el' : 'en')}
            className="p-2 text-secondary-300"
          >
            <Globe size={20} />
          </button>
          
          <button
            className="text-secondary-300 focus:outline-none"
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
          <Link
            to="/"
            className="py-3 text-lg text-center text-secondary-300 border-b border-gray-100 hover:text-primary-300 transition-all duration-300"
          >
            {t.nav.home}
          </Link>
          <Link
            to="/about"
            className="py-3 text-lg text-center text-secondary-300 border-b border-gray-100 hover:text-primary-300 transition-all duration-300"
          >
            {t.nav.about}
          </Link>
          <Link
            to="/services"
            className="py-3 text-lg text-center text-secondary-300 border-b border-gray-100 hover:text-primary-300 transition-all duration-300"
          >
            {t.nav.services}
          </Link>
          <Link
            to="/schedule"
            className="py-3 text-lg text-center text-secondary-300 border-b border-gray-100 hover:text-primary-300 transition-all duration-300"
          >
            {t.nav.schedule}
          </Link>
          <Link
            to="/blog"
            className="py-3 text-lg text-center text-secondary-300 border-b border-gray-100 hover:text-primary-300 transition-all duration-300"
          >
            {t.nav.blog}
          </Link>
          <Link
            to="/contact"
            className="py-3 text-lg text-center text-secondary-300 border-b border-gray-100 hover:text-primary-300 transition-all duration-300"
          >
            {t.nav.contact}
          </Link>
          <div className="mt-auto mb-8">
            <Link
              to="/contact"
              className="block w-full py-3 bg-primary-300 text-white rounded-md text-center text-lg font-medium hover:bg-primary-400 transition-all duration-300 transform hover:scale-105"
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