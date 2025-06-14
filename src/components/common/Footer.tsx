import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary-300 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Emiliana</h3>
            <p className="text-green-100 mb-4 max-w-xs">
              Yoga and Drama Therapy services focused on holistic well-being,
              self-discovery, and personal transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-200 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-green-100 hover:text-white transition">
                {t.nav.home}
              </Link>
              <Link to="/about" className="text-green-100 hover:text-white transition">
                {t.nav.about}
              </Link>
              <Link to="/services" className="text-green-100 hover:text-white transition">
                {t.nav.services}
              </Link>
              <Link to="/schedule" className="text-green-100 hover:text-white transition">
                {t.nav.schedule}
              </Link>
              <Link to="/testimonials" className="text-green-100 hover:text-white transition">
                {t.nav.testimonials}
              </Link>
              <Link to="/resources" className="text-green-100 hover:text-white transition">
                {t.nav.resources}
              </Link>
              <Link to="/FAQ" className="text-green-100 hover:text-white transition">
                {t.nav.FAQ}
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center text-green-100">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@emiliana-yoga.com" className="hover:text-white transition">
                  info@emiliana-yoga.com
                </a>
              </p>
              <p className="flex items-center text-green-100">
                <Phone size={18} className="mr-2" />
                <a href="tel:+306912345678" className="hover:text-white transition">
                  +30 691 234 5678
                </a>
              </p>
            </div>
            <div className="mt-6">
              <Link 
                to="/contact"
                className="inline-block bg-white text-green-900 px-4 py-2 rounded-md font-medium hover:bg-green-100 transition"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm">
            {t.footer.copyright} • {t.footer.rights}
          </p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4 text-sm text-green-200">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;