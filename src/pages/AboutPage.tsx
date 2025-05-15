import React from 'react';
import AboutSection from '../components/about/AboutSection';
import TestimonialSection from '../components/home/TestimonialSection';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-green-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white text-center">
            About Emiliana
          </h1>
        </div>
      </div>
      <AboutSection />
      
      {/* Additional About Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif text-green-900 mb-6">
              My Philosophy
            </h2>
            
            <div className="prose prose-green max-w-none">
              <p>
                I believe that true wellness comes from integrating the body, mind, and spirit. 
                Through my work as both a yoga instructor and drama therapist, I have witnessed 
                the profound healing that occurs when we bring awareness to our physical sensations, 
                emotions, and creative expression.
              </p>
              
              <p>
                My approach draws from both Eastern and Western traditions, combining the ancient 
                wisdom of yoga with contemporary therapeutic modalities. I create safe, supportive 
                spaces where exploration, vulnerability, and transformation can occur.
              </p>
              
              <p>
                Whether you're seeking physical rejuvenation, emotional processing, creative 
                expression, or spiritual connection, my goal is to meet you where you are and 
                provide guidance tailored to your unique journey.
              </p>
              
              <h3 className="text-xl font-medium text-green-900 mt-8 mb-4">
                Education & Certifications
              </h3>
              
              <ul>
                <li>Master's Degree in Drama Therapy (New York University)</li>
                <li>500-Hour Yoga Teacher Training (Yoga Alliance Certified)</li>
                <li>Specialized Training in Trauma-Informed Yoga</li>
                <li>Expressive Arts Therapy Certification</li>
                <li>Mindfulness Meditation Teacher Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialSection />
    </div>
  );
};

export default AboutPage;