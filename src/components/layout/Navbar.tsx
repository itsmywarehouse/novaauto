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
          <div className="lg:hidden fixed inset-0 z-[9999] bg-black/50" onClick={toggleMenu}>
            <div 
              className="absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                <div className="font-bold text-xl text-primary">
                  NOVA<span className="text-accent">AUTO</span>
                </div>
                <button 
                  onClick={toggleMenu}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
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
                    className={`block py-4 px-4 rounded-lg font-medium transition-all duration-300 text-base ${
                      isActiveRoute('/') 
                        ? 'bg-accent text-white shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    }`}
                  >
                    🏠 Home
                  </Link>
                  <Link 
                    to="/about" 
                    className={`block py-4 px-4 rounded-lg font-medium transition-all duration-300 text-base ${
                      isActiveRoute('/about') 
                        ? 'bg-accent text-white shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    }`}
                  >
                    ℹ️ About Us
                  </Link>
                  
                  {/* Products/Catalog with Dropdown */}
                  <div 
                    className={`block py-4 px-4 rounded-lg font-medium transition-all duration-300 text-base ${
                      isActiveRoute('/catalog') 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    }`}
                  >
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <Link to="/catalog" className="flex-1 flex items-center">
                          <span>🛠️ Products / Catalog</span>
                        </Link>
                        <button
                          onClick={() => toggleCategory('products')}
                          className="ml-2 p-1 rounded transition-transform duration-200"
                        >
                          {expandedCategories.has('products') ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </button>
                      </div>
                      
                      {expandedCategories.has('products') && (
                        <div className="mt-3 pl-4 space-y-2 animate-fade-in">
                          {/* Power Parts */}
                          <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="flex items-center justify-between">
                              <Link 
                                to="/catalog?category=power-parts"
                                className="flex-1 p-3 text-sm font-medium bg-primary/5 hover:bg-primary/10 transition-colors flex items-center text-primary"
                              >
                                ⚡ Power Parts
                              </Link>
                              <button
                                onClick={() => toggleCategory('power-parts')}
                                className="p-3 bg-primary/5 hover:bg-primary/10 transition-colors text-primary"
                              >
                                {expandedCategories.has('power-parts') ? (
                                  <ChevronDown size={14} />
                                ) : (
                                  <ChevronRight size={14} />
                                )}
                              </button>
                            </div>
                            {expandedCategories.has('power-parts') && (
                              <ul className="p-2 text-xs space-y-1 bg-white animate-fade-in">
                                <li>• Hydraulic Rams</li>
                                <li>• Hydraulic Pumps</li>
                                <li>• Ram Repair Kits (Piston, Rod, Gland)</li>
                                <li>• Seal Kits & O-Rings</li>
                                <li>• Lubricants & Grease</li>
                                <li>• Hydraulic Hoses & Fittings</li>
                              </ul>
                            )}
                          </div>
                          
                          {/* Drive & Motion */}
                          <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="flex items-center justify-between">
                              <Link 
                                to="/catalog?category=drive-motion"
                                className="flex-1 p-3 text-sm font-medium bg-primary/5 hover:bg-primary/10 transition-colors flex items-center text-primary"
                              >
                                🚜 Drive & Motion
                              </Link>
                              <button
                                onClick={() => toggleCategory('drive-motion')}
                                className="p-3 bg-primary/5 hover:bg-primary/10 transition-colors text-primary"
                              >
                                {expandedCategories.has('drive-motion') ? (
                                  <ChevronDown size={14} />
                                ) : (
                                  <ChevronRight size={14} />
                                )}
                              </button>
                            </div>
                            {expandedCategories.has('drive-motion') && (
                              <ul className="p-2 text-xs space-y-1 bg-white animate-fade-in">
                                <li>• Axle Parts – Crown Pinion, Differential, Shafts</li>
                                <li>• Transmission – Gears, Clutch Plates, Torque Converter</li>
                                <li>• Pin & Bush Kits</li>
                                <li>• Shims & Thrust Washers</li>
                                <li>
                                  • Bearings – Taper, Ball, Needle<br />
                                  <span className="text-accent font-bold text-xs">🔧 Powered by Rapid Bearing</span>
                                </li>
                              </ul>
                            )}
                          </div>
                          
                          {/* Tools & Attachments */}
                          <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="flex items-center justify-between">
                              <Link 
                                to="/catalog?category=tools-attachments"
                                className="flex-1 p-3 text-sm font-medium bg-primary/5 hover:bg-primary/10 transition-colors flex items-center text-primary"
                              >
                                🔨 Tools & Attachments
                              </Link>
                              <button
                                onClick={() => toggleCategory('tools-attachments')}
                                className="p-3 bg-primary/5 hover:bg-primary/10 transition-colors text-primary"
                              >
                                {expandedCategories.has('tools-attachments') ? (
                                  <ChevronDown size={14} />
                                ) : (
                                  <ChevronRight size={14} />
                                )}
                              </button>
                            </div>
                            {expandedCategories.has('tools-attachments') && (
                              <ul className="p-2 text-xs space-y-1 bg-white animate-fade-in">
                                <li>• Buckets, Forks, Quick Couplers</li>
                                <li>• Hydraulic Breaker Parts – Chisels, Seal Kits, Pistons</li>
                                <li>• GET (Ground Engaging Tools) – Teeth, Side Cutters</li>
                                <li>• Wear Parts – Cutting Edges, Liners</li>
                                <li>• Control & Throttle Cables</li>
                                <li>• Assembly Kits – Hose, Pins, Cylinders</li>
                              </ul>
                            )}
                          </div>
                          
                          {/* Body & Maintenance */}
                          <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="flex items-center justify-between">
                              <Link 
                                to="/catalog?category=body-maintenance"
                                className="flex-1 p-3 text-sm font-medium bg-primary/5 hover:bg-primary/10 transition-colors flex items-center text-primary"
                              >
                                🛡️ Body & Maintenance
                              </Link>
                              <button
                                onClick={() => toggleCategory('body-maintenance')}
                                className="p-3 bg-primary/5 hover:bg-primary/10 transition-colors text-primary"
                              >
                                {expandedCategories.has('body-maintenance') ? (
                                  <ChevronDown size={14} />
                                ) : (
                                  <ChevronRight size={14} />
                                )}
                              </button>
                            </div>
                            {expandedCategories.has('body-maintenance') && (
                              <ul className="p-2 text-xs space-y-1 bg-white animate-fade-in">
                                <li>• Cabin, Bonnet, Mudguard, Glass</li>
                                <li>• Electrical – Wiring, Lights, Switches, Sensors</li>
                                <li>• Filters – Oil, Fuel, Hydraulic, Air</li>
                                <li>• Fasteners – Nuts, Bolts, U-Clamps</li>
                                <li>• Fabrication – Boom/Dipper Repair, Custom Metal</li>
                                <li>• Misc. – Rubber Parts, Seats, Paints</li>
                              </ul>
                            )}
                          </div>
                          
                          {/* Case Parts */}
                          <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="flex items-center justify-between">
                              <Link 
                                to="/catalog?category=case-parts"
                                className="flex-1 p-3 text-sm font-medium bg-primary/5 hover:bg-primary/10 transition-colors flex items-center text-primary"
                              >
                                🧱 Case Parts
                              </Link>
                              <button
                                onClick={() => toggleCategory('case-parts')}
                                className="p-3 bg-primary/5 hover:bg-primary/10 transition-colors text-primary"
                              >
                                {expandedCategories.has('case-parts') ? (
                                  <ChevronDown size={14} />
                                ) : (
                                  <ChevronRight size={14} />
                                )}
                              </button>
                            </div>
                            {expandedCategories.has('case-parts') && (
                              <ul className="p-2 text-xs space-y-1 bg-white animate-fade-in">
                                <li>• Transmission Casing</li>
                                <li>• Axle Housing</li>
                                <li>• Hydraulic Tank</li>
                                <li>• Gearbox Housing</li>
                                <li>• Boom & Dipper Body</li>
                              </ul>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className={`block py-4 px-4 rounded-lg font-medium transition-all duration-300 text-base ${
                      isActiveRoute('/contact') 
                        ? 'bg-accent text-white shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    }`}
                  >
                    📞 Contact
                  </Link>
                  <a 
                    href="https://drive.google.com/file/d/18psmsUjVd56M8x71f5mivT8QDntspb98/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-4 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-primary transition-all duration-300 text-base"
                  >
                    📥 View Catalog
                  </a>
                </nav>

                {/* Mobile Contact Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:+918140251789" 
                    className="flex items-center justify-center w-full bg-primary hover:bg-primary-600 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 shadow-lg text-base min-h-[48px]"
                  >
                    <Phone size={18} className="mr-2" />
                    📞 Call Now
                  </a>
                  <a 
                    href="https://wa.me/918140251789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 shadow-lg text-base min-h-[48px]"
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
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-[9998] animate-bounce-gentle min-h-[48px] min-w-[48px] flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
};

export default Navbar;