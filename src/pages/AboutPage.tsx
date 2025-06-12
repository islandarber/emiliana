import React from 'react';
import AboutSection from '../components/about/AboutSection';
import TestimonialSection from '../components/home/TestimonialSection';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <AboutSection />
      <TestimonialSection />
    </div>
  );
};

export default AboutPage;