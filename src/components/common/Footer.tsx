import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-heading text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logoem2.png" alt="imglogo" className='w-[40px]'/>
              <h3 className="text-xl font-serif ml-2">Emiliana</h3>
            </div>
            <p className="mb-4 max-w-xs">
              Yoga and Drama Therapy services focused on holistic well-being,
              self-discovery, and personal transformation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/emiliana_ts" className="text-white hover:text-green-200 transition">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/emily.vinyasayoga" className="text-white hover:text-green-200 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-white transition">
                {t.nav.home}
              </Link>
              <Link to="/about" className="hover:text-white transition">
                {t.nav.about}
              </Link>
              <Link to="/services" className="hover:text-white transition">
                {t.nav.services}
              </Link>
              <Link to="/schedule" className="hover:text-white transition">
                {t.nav.schedule}
              </Link>
              <Link to="/testimonials" className="hover:text-white transition">
                {t.nav.testimonials}
              </Link>
              <Link to="/resources" className="hover:text-white transition">
                {t.nav.resources}
              </Link>
              <Link to="/FAQ" className="hover:text-white transition">
                {t.nav.FAQ}
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@emiliana-yoga.com" className="hover:text-white transition">
                  tsoukala.emiliana@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+306912345678" className="hover:text-white transition">
                  +30 695 576 7949
                </a>
              </p>
            </div>
            <div className="mt-6">
              <Link 
                to="/contact"
                className="inline-block bg-white text-text px-4 py-2 rounded-md font-medium hover:bg-green-100 transition"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            {t.footer.copyright} • {t.footer.rights}
          </p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4 text-sm">
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