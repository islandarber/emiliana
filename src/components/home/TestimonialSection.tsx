import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { testimonials } from '../../data/testimonials';

const TestimonialSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12 text-green-900">
          {t.testimonials.title}
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-6"
                >
                  <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                    <div className="flex flex-col items-center">
                      <p className="font-medium text-green-800">{testimonial.name}</p>
                      <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                        {testimonial.serviceType === 'yoga' && 'Yoga Student'}
                        {testimonial.serviceType === 'drama' && 'Drama Therapy Client'}
                        {testimonial.serviceType === 'retreat' && 'Retreat Participant'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-green-800" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-green-800" />
          </button>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/testimonials"
            className="inline-block text-green-700 font-medium hover:text-green-800 transition"
          >
            {t.testimonials.viewAll} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;