import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Download, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect pages with white backgrounds that need dark text
  const isWhiteBackgroundPage = () => {
    const whiteBackgroundPaths = ['/catalog', '/contact', '/about'];
    return whiteBackgroundPaths.some(path => 
      location.pathname === path || location.pathname.startsWith(path)
    );
  };

  const hasWhiteBackground = isWhiteBackgroundPage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset expanded categories when menu closes
    if (isMenuOpen) {
      setExpandedCategories(new Set());
    }
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
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
    setExpandedCategories(new Set());
  }, [location]);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  // Determine if navbar should be solid (scrolled OR on white background pages)
  const shouldBeSolid = isScrolled || hasWhiteBackground;

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          shouldBeSolid ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <div className={`font-bold text-2xl transition-colors duration-300 ${
                shouldBeSolid ? 'text-primary' : 'text-white'
              }`}>
                NOVA<span className="text-accent">AUTO</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isActiveRoute('/') 
                    ? 'text-accent font-semibold'
                    : (shouldBeSolid ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent')
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isActiveRoute('/about') 
                    ? 'text-accent font-semibold'
                    : (shouldBeSolid ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent')
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/catalog" 
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isActiveRoute('/catalog') 
                    ? 'text-accent font-semibold'
                    : (shouldBeSolid ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent')
                }`}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isActiveRoute('/contact') 
                    ? 'text-accent font-semibold'
                    : (shouldBeSolid ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent')
                }`}
              >
                Contact
              </Link>
              <a 
                href="https://drive.google.com/file/d/18psmsUjVd56M8x71f5mivT8QDntspb98/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-all duration-300 hover:scale-105 flex items-center ${
                  shouldBeSolid ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
                }`}
              >
                <Download size={16} className="mr-1" />
                View Catalog
              </a>
            </nav>

            {/* Desktop Call to Action */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:+918140251789" 
                className={`flex items-center transition-all duration-300 hover:scale-105 ${
                  shouldBeSolid ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
                }`}
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">+91 8140251789</span>
              </a>
              <a 
                href="https://wa.me/918140251789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex items-center shadow-lg"
              >
                <MessageCircle size={16} className="mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={toggleMenu}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none ${
                  shouldBeSolid ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[9999] bg-black/50 animate-fade-in" onClick={toggleMenu}>
            <div 
              className="absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto animate-slide-in-right"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10 backdrop-blur-sm">
                <div className="font-bold text-xl text-primary">
                  NOVA<span className="text-accent">AUTO</span>
                </div>
                <button 
                  onClick={toggleMenu}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:rotate-90"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-4">
                <nav className="space-y-4">
                  <Link 
                    to="/" 
                    className={`block py-4 px-4 rounded-lg font-medium transition-all duration-300 text-base transform hover:scale-105 hover:translate-x-2 ${
                      isActiveRoute('/') 
                        ? 'bg-accent text-white shadow-lg scale-105' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary hover:shadow-md'
                    }`}
                  >
                    🏠 Home
                  </Link>
                  <Link 
                    to="/about" 
                    className={`block py-4 px-4 rounded-lg font-medium transition-all duration-300 text-base transform hover:scale-105 hover:translate-x-2 ${
                      isActiveRoute('/about') 
                        ? 'bg-accent text-white shadow-lg scale-105' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary hover:shadow-md'
                    }`}
                  >
                    ℹ️ About Us
                  </Link>
                  
                  {/* Products/Catalog with Dropdown */}
                  <Link 
                    to="/catalog"
                    className={`block py-4 px-4 rounded-lg font-medium transition-all duration-300 text-base transform hover:scale-105 hover:translate-x-2 ${
                      isActiveRoute('/catalog') 
                        ? 'bg-primary text-white shadow-lg scale-105' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary hover:shadow-md'
                    }`}
                  >
                    🛠️ Products / Catalog
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className={`block py-4 px-4 rounded-lg font-medium transition-all duration-300 text-base transform hover:scale-105 hover:translate-x-2 ${
                      isActiveRoute('/contact') 
                        ? 'bg-accent text-white shadow-lg scale-105' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary hover:shadow-md'
                    }`}
                  >
                    📞 Contact
                  </Link>
                  <a 
                    href="https://drive.google.com/file/d/18psmsUjVd56M8x71f5mivT8QDntspb98/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-4 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-primary transition-all duration-300 text-base transform hover:scale-105 hover:translate-x-2 hover:shadow-md"
                  >
                    📥 View Catalog
                  </a>
                </nav>

                {/* Mobile Contact Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:+918140251789" 
                    className="flex items-center justify-center w-full bg-primary hover:bg-primary-600 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 shadow-lg text-base min-h-[48px] transform hover:scale-105 hover:-translate-y-1"
                  >
                    <Phone size={18} className="mr-2" />
                    📞 Call Now
                  </a>
                  <a 
                    href="https://wa.me/918140251789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 shadow-lg text-base min-h-[48px] transform hover:scale-105 hover:-translate-y-1"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    💬 WhatsApp Us
                  </a>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    📍 Rapid Technomat, Shapar-Veraval, Rajkot<br />
                    Gujarat 360024, India
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-3">
                    📧 novaauto@outlook.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* WhatsApp Floating Button - Always Visible */}
      <a 
        href="https://wa.me/918140251789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition-all duration-500 hover:scale-125 hover:shadow-2xl z-[9998] animate-bounce-gentle min-h-[48px] min-w-[48px] flex items-center justify-center hover:rotate-12"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
};

export default Navbar;