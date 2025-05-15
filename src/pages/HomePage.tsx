import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import TestimonialSection from '../components/home/TestimonialSection';
import AboutSection from '../components/about/AboutSection';
import ContactForm from '../components/contact/ContactForm';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <AboutSection />
      <TestimonialSection />
      <ContactForm />
    </>
  );
};

export default HomePage;