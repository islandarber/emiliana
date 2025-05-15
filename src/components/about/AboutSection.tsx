import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg" 
                alt="Emiliana yoga instructor" 
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-700 text-white py-2 px-4 rounded-md">
                {t.about.experience}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-serif text-green-900 mb-6">
              {t.about.title}
            </h2>
            
            <div className="space-y-4 text-gray-700">
              {t.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-md">
                <p className="font-medium text-green-800">Yoga Instructor</p>
                <p className="text-sm text-gray-600">RYT-500</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-md">
                <p className="font-medium text-orange-800">Drama Therapist</p>
                <p className="text-sm text-gray-600">M.A., RDT</p>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-md">
                <p className="font-medium text-teal-800">Retreat Facilitator</p>
                <p className="text-sm text-gray-600">15+ Retreats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;