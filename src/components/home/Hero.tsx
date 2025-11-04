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
        className="w-full h-full md:object-center absolute top-0 left-0 object-cover object-[60%_center]"
        src="/video_home.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          transform: 'scale(1.1)',
          transformOrigin: 'center center',
          minWidth: '100%',
          minHeight: '100%'
        }}
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 lg:pt-24 text-white">
        <div className="max-w-4xl lg:max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans text-white leading-tight mb-4 sm:mb-6"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 mb-6 sm:mb-8 lg:mb-10 max-w-3xl"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link 
              to="/book-a-session"
              className="bg-button hover:bg-section text-white rounded-lg px-6 sm:px-8 py-3 sm:py-4 font-medium text-center text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.hero.cta}
            </Link>
            <Link 
              to="/services"
              className="bg-button hover:bg-background/100 rounded-lg px-6 sm:px-8 py-3 sm:py-4 font-medium text-center text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              {t.hero.learnMore}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 lg:h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Hero;