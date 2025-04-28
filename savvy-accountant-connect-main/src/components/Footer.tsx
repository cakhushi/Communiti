import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">Communiti</span> Shared Services
              </div>
            </Link>
            <p className="text-gray-600 mt-2">
              Professional shared services for business solutions tailored to your needs.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-700 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/tax-filing" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                Tax Filing
              </Link>
              <Link to="/services/accounting" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                Accounting
              </Link>
              <Link to="/services/advisory" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                Advisory Services
              </Link>
              <Link to="/services/registrations" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                Registrations
              </Link>
              <Link to="/tools" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                Financial Tools
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-accountant-600 hover:translate-x-1 transition-transform inline-block">
                Terms of Service
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-accountant-600 mr-2 mt-0.5 group-hover:animate-pulse" />
                <span className="text-gray-600">1303, Skyview, Fursungi, Pune 412308</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-accountant-600 mr-2 group-hover:animate-pulse" />
                <span className="text-gray-600">+91 7249081189</span>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-accountant-600 mr-2 group-hover:animate-pulse" />
                <span className="text-gray-600">communitiservices@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Communiti Shared Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-accountant-600 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-accountant-600 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
