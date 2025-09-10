import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      
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
              <div className="bg-gray-200 h-96 rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.497780296292!2d23.763901415631272!3d38.0533837797071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd40b8f2e56f%3A0x3134c2da43a8173a!2sAlexandrou%20Diakou%2014%2C%20Nea%20Ionia%20141%2022%2C%20Greece!5e0!3m2!1sen!2sde!4v1694342238047!5m2!1sen!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                Spiti Psychotherapeías <br />
                Alexandrou Diákou 14, <br />
                Neó Irakleío 141 22, <br />
                Attica, Greece
              </p>
              <p className="text-gray-700 mt-2">
                Nearest Public Transport: Irakleio Metro Station (Line M1 Green)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;