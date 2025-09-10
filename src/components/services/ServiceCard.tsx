import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { currentLanguage } = useLanguage();
  const { id, title, description, image } = service;
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title[currentLanguage]} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-green-900 mb-3">
          {title[currentLanguage]}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description[currentLanguage]}
        </p>
        
        <Link 
          to={`/services/${id}`}
          className="flex items-center text-green-700 font-medium group-hover:text-green-800 transition"
        >
          Learn More 
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
