import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const firstHalf = t.about.description.slice(0, 3); // or 1
  const secondHalf = t.about.description.slice(3);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-green-900 mb-10 text-center md:text-left">
          {t.about.title}
        </h2>

        {/* First part of text */}
        <div className="mb-8 space-y-4 text-gray-700 max-w-3xl mx-auto md:mx-0">
          {firstHalf.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Image + second part of text side by side */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Image */}
          <div className="md:w-1/2 flex flex-col items-center">
            <img 
              src="https://cdn.doctoranytime.gr/profileimages/303f8f28-97e8-46c5-ab54-03d4e6c892fd.jpg" 
              alt="Emiliana yoga instructor" 
              className="rounded-lg shadow-md w-full max-w-md"
            />
            <div className="mt-4 text-center text-gray-600">
              {t.about.experience}
            </div>
          </div>

          {/* Second part of text */}
          <div className="md:w-1/2 space-y-4 text-gray-700">
            {secondHalf.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Roles / badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
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
    </section>
  );
};

export default AboutSection;
