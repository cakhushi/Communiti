import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md" 
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-accountant-700">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">Communiti</span> Shared Services
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-accountant-600 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accountant-600 transition-all group-hover:w-full"></span>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-accountant-600 font-medium relative group">
                  Services <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accountant-600 transition-all group-hover:w-full"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card">
                <DropdownMenuItem asChild>
                  <Link to="/services/tax-filing" className="w-full">
                    Tax Filing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/accounting" className="w-full">
                    Accounting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/advisory" className="w-full">
                    Advisory Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/registrations" className="w-full">
                    Registrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/digital-marketing" className="w-full">
                    Digital Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/seo-smo" className="w-full">
                    SEO, SMO & Ads
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/tools" className="text-gray-700 hover:text-accountant-600 font-medium relative group">
              Tools
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accountant-600 transition-all group-hover:w-full"></span>
            </Link>
            
            <Link to="/blog" className="text-gray-700 hover:text-accountant-600 font-medium relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accountant-600 transition-all group-hover:w-full"></span>
            </Link>
            
            <Link to="/about" className="text-gray-700 hover:text-accountant-600 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accountant-600 transition-all group-hover:w-full"></span>
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-accountant-600 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accountant-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-2 space-y-4">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-accountant-600 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="py-2">
              <div className="font-medium text-gray-700 mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/tax-filing"
                  className="block py-1 text-gray-600 hover:text-accountant-600"
                  onClick={toggleMenu}
                >
                  Tax Filing
                </Link>
                <Link
                  to="/services/accounting"
                  className="block py-1 text-gray-600 hover:text-accountant-600"
                  onClick={toggleMenu}
                >
                  Accounting
                </Link>
                <Link
                  to="/services/advisory"
                  className="block py-1 text-gray-600 hover:text-accountant-600"
                  onClick={toggleMenu}
                >
                  Advisory Services
                </Link>
                <Link
                  to="/services/registrations"
                  className="block py-1 text-gray-600 hover:text-accountant-600"
                  onClick={toggleMenu}
                >
                  Registrations
                </Link>
                <Link
                  to="/services/digital-marketing"
                  className="block py-1 text-gray-600 hover:text-accountant-600"
                  onClick={toggleMenu}
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/services/seo-smo"
                  className="block py-1 text-gray-600 hover:text-accountant-600"
                  onClick={toggleMenu}
                >
                  SEO, SMO & Ads
                </Link>
              </div>
            </div>
            <Link
              to="/tools"
              className="block py-2 text-gray-700 hover:text-accountant-600 font-medium"
              onClick={toggleMenu}
            >
              Tools
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-gray-700 hover:text-accountant-600 font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-accountant-600 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-accountant-600 font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md mt-2"
            >
              <Link to="/contact" onClick={toggleMenu}>
                Get Started
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
