import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center">
     <div className="absolute inset-0 overflow-hidden z-0">
      <video
        className="w-full h-full object-cover absolute top-0 left-0"
        src="/video_home.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          transform: 'scale(1.1)',
          transformOrigin: 'center center'
        }}
      />
      <div className="absolute inset-0 bg-secondary-300/40"></div>
    </div>
    
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-sans text-white leading-tight mb-4"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 mb-8"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link 
              to="/contact"
              className="bg-primary-300 hover:bg-primary-400 text-white rounded-md px-6 py-3 font-medium text-center transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.cta}
            </Link>
            <Link 
              to="/services"
              className="bg-white hover:bg-primary-100 text-secondary-300 rounded-md px-6 py-3 font-medium text-center transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.learnMore}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Hero;