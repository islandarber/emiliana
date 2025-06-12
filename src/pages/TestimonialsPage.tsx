import React from 'react';
import { testimonials } from '../data/testimonials';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-20">
      <div className="bg-primary-200 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white text-center">
            {t.testimonials.title}
          </h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-8">
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-lg shadow-sm p-8 border-l-4
                  ${testimonial.serviceType === 'yoga' ? 'border-green-500' : ''}
                  ${testimonial.serviceType === 'drama' ? 'border-orange-500' : ''}
                  ${testimonial.serviceType === 'retreat' ? 'border-teal-500' : ''}
                `}
              >
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {testimonial.serviceType === 'yoga' && 'Yoga Student'}
                      {testimonial.serviceType === 'drama' && 'Drama Therapy Client'}
                      {testimonial.serviceType === 'retreat' && 'Retreat Participant'}
                    </span>
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 text-xs rounded-full uppercase tracking-wider
                      ${testimonial.serviceType === 'yoga' ? 'bg-green-100 text-green-800' : ''}
                      ${testimonial.serviceType === 'drama' ? 'bg-orange-100 text-orange-800' : ''}
                      ${testimonial.serviceType === 'retreat' ? 'bg-teal-100 text-teal-800' : ''}
                    `}>
                      {testimonial.serviceType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Leave a Testimonial */}
          <div className="mt-16 max-w-3xl mx-auto bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-serif text-green-900 mb-6 text-center">
              Share Your Experience
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="yoga">Yoga</option>
                  <option value="drama">Drama Therapy</option>
                  <option value="retreat">Retreat</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Testimonial
                </label>
                <textarea
                  id="testimonial"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition"
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;