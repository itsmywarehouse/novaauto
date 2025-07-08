import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`font-bold text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
              NOVA<span className="text-accent">AUTO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
              } transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
              } transition-colors`}
            >
              Catalog
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
              } transition-colors`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
              } transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+18001234567" 
              className={`flex items-center ${
                isScrolled ? 'text-primary' : 'text-white'
              } mr-6 transition-colors`}
            >
              <Phone size={18} className="mr-2" />
              <span>1-800-123-4567</span>
            </a>
            <Link 
              to="/contact" 
              className="bg-accent text-white font-medium px-4 py-2 rounded-md hover:bg-accent-600 transition-colors"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-primary' : 'text-white'
              } focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-primary py-2">
                Home
              </Link>
              <Link to="/catalog" className="font-medium text-gray-700 hover:text-primary py-2">
                Catalog
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-primary py-2">
                About Us
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-primary py-2">
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <a 
                  href="tel:+18001234567" 
                  className="flex items-center text-primary py-2"
                >
                  <Phone size={18} className="mr-2" />
                  <span>1-800-123-4567</span>
                </a>
                <Link 
                  to="/contact" 
                  className="bg-accent text-white font-medium px-4 py-2 rounded-md hover:bg-accent-600 transition-colors inline-block mt-2"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;