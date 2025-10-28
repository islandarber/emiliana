import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import TestimonialSection from '../components/home/TestimonialSection';
import AboutSection from '../components/about/AboutSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <AboutSection />
      <TestimonialSection />
    </>
  );
};

export default HomePage;