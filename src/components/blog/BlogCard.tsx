import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { currentLanguage } = useLanguage();
  const { id, title, excerpt, date, image, category } = post;
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString(
    currentLanguage === 'el' ? 'el-GR' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
  
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col">
      <Link to={`/blog/${id}`} className="block h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title[currentLanguage]} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 text-xs rounded-full uppercase tracking-wider 
            ${category === 'yoga' ? 'bg-green-100 text-green-800' : ''}
            ${category === 'drama' ? 'bg-orange-100 text-orange-800' : ''}
            ${category === 'wellness' ? 'bg-blue-100 text-blue-800' : ''}
            ${category === 'retreat' ? 'bg-teal-100 text-teal-800' : ''}
          `}>
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          <Link to={`/blog/${id}`} className="hover:text-green-700">
            {title[currentLanguage]}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4">
          {excerpt[currentLanguage]}
        </p>
        
        <div className="mt-auto text-sm text-gray-500">
          {formattedDate}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;