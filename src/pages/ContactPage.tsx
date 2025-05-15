import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-green-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white text-center">
            Contact
          </h1>
        </div>
      </div>
      
      <ContactForm />
      
      {/* Map Section - Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-serif text-green-900 mb-6 text-center">
              Find My Studio
            </h2>
            
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden relative">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-600 font-medium">
                  Interactive Map Placeholder
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                Studio Address: 123 Wellness Street, Athens, Greece 12345
              </p>
              <p className="text-gray-700 mt-2">
                Nearest Public Transport: Syntagma Metro Station (10 min walk)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;