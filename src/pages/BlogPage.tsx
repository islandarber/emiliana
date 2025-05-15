import React from 'react';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../data/blog';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-green-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white text-center">
            Blog
          </h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-serif text-green-900 mb-4">
                Stay Connected
              </h2>
              
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Subscribe to my newsletter to receive the latest articles, practice tips, 
                and information about upcoming workshops and retreats.
              </p>
              
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-2 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">
                I respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;