import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <div className="bg-primary-200 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white text-center">
            {t.services.title}
          </h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }} // Trigger when 30% of the grid is in view
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Service Information */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-serif text-green-900 mb-6">
                Custom Programs
              </h2>
              
              <p className="text-gray-700 mb-4">
                In addition to the services listed above, I offer custom programs 
                for individuals, groups, and organizations. These can be tailored to 
                specific needs, themes, or goals.
              </p>
              
              <p className="text-gray-700 mb-6">
                Some examples include:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-medium text-green-800 mb-2">
                    Corporate Wellness
                  </h3>
                  <p className="text-sm text-gray-600">
                    Workshops and ongoing programs for workplace well-being.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-medium text-orange-800 mb-2">
                    School Programs
                  </h3>
                  <p className="text-sm text-gray-600">
                    Drama therapy and movement for children and adolescents.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="font-medium text-teal-800 mb-2">
                    Special Events
                  </h3>
                  <p className="text-sm text-gray-600">
                    Workshops for conferences, gatherings, and celebrations.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="inline-block bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition">
                  Inquire About Custom Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
