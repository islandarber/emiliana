import React from 'react';
import { resources } from '../data/resources';
import { BookOpen, Music, Video } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ResourcesPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  return (
    <div className="pt-20">
      <div className="bg-primary-200 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white text-center">
            Free Resources
          </h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              Explore these free resources to support your well-being journey. 
              From yoga sequences to guided meditations, these tools are designed 
              to help you incorporate mindfulness and movement into your daily life.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map(resource => (
                <div 
                  key={resource.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
                >
                  <div className={`p-6 ${
                    resource.type === 'guide' ? 'bg-green-50' : 
                    resource.type === 'audio' ? 'bg-blue-50' : 
                    'bg-purple-50'
                  }`}>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        resource.type === 'guide' ? 'bg-green-100 text-green-800' : 
                        resource.type === 'audio' ? 'bg-blue-100 text-blue-800' : 
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {resource.type === 'guide' && <BookOpen size={20} />}
                        {resource.type === 'audio' && <Music size={20} />}
                        {resource.type === 'video' && <Video size={20} />}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {resource.title[currentLanguage]}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-700 mb-6">
                      {resource.description[currentLanguage]}
                    </p>
                    
                    <div className="mt-auto">
                      <a 
                        href={resource.url}
                        className={`inline-block px-4 py-2 rounded-md font-medium ${
                          resource.type === 'guide' ? 'bg-green-700 text-white hover:bg-green-800' : 
                          resource.type === 'audio' ? 'bg-blue-700 text-white hover:bg-blue-800' : 
                          'bg-purple-700 text-white hover:bg-purple-800'
                        } transition`}
                      >
                        {resource.type === 'guide' && 'Download PDF'}
                        {resource.type === 'audio' && 'Listen Now'}
                        {resource.type === 'video' && 'Watch Video'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Resource Request */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-serif text-green-900 mb-4">
                Request a Resource
              </h2>
              
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Is there a specific topic or practice you'd like to see covered in a 
                future resource? Let me know, and I'll consider creating content to 
                address your needs.
              </p>
              
              <form className="max-w-md mx-auto space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                
                <textarea 
                  placeholder="Resource Request" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;