import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout  as Yoga } from 'lucide-react';
import { BookHeart  as Drama } from 'lucide-react';
import { TentTree  as Map } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServiceHighlights: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12 text-green-900">
          {t.services.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-darkgreyblueish">
          {/* Yoga Services */}
          <div className="rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
            <img src="/solo1.jpg" alt="solo1" className='rounded-md mb-4' />
            <h3 className="text-xl font-medium mb-4">
              {t.services.yoga.title}
            </h3>
            <p className="mb-6">
              {t.services.yoga.description}
            </p>
            <Link 
              to="/services"
              className="inline-block font-medium border px-4 py-2 rounded-lg hover:text-green-800 transition"
            >
              {t.services.cta}
            </Link>
          </div>
          
          {/* Drama Therapy */}
          <div className="bg-orange-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Drama size={32} className="text-orange-700" />
            </div>
            <h3 className="text-xl font-medium text-orange-900 mb-4">
              {t.services.drama.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.services.drama.description}
            </p>
            <Link 
              to="/services"
              className="inline-block text-orange-700 font-medium hover:text-orange-800 transition"
            >
              {t.services.cta} →
            </Link>
          </div>
          
          {/* Retreats */}
          <div className="bg-teal-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Map size={32} className="text-teal-700" />
            </div>
            <h3 className="text-xl font-medium text-teal-900 mb-4">
              {t.services.retreats.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.services.retreats.description}
            </p>
            <Link 
              to="/services"
              className="inline-block text-teal-700 font-medium hover:text-teal-800 transition"
            >
              {t.services.cta} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;