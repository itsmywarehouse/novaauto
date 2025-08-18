import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { getAllCategories } from '../../data/categories';

const Footer: React.FC = () => {
  // Smooth scroll to SearchBar on Catalog page if present
  const handleCategoryClick = (catId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only run on client
    if (window.location.pathname.startsWith('/catalog')) {
      setTimeout(() => {
        const searchBar = document.querySelector('input[placeholder="Search for parts or categories..."]');
        if (searchBar) {
          (searchBar as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200); // allow route to update
    }
  };
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-bold text-2xl mb-6">NOVA<span className="text-accent">AUTO</span></div>
            <p className="text-gray-300 mb-6">
              Nova Auto – Premium Supplier of Bekoloder Spare Parts & Accessories
Trusted by professionals across India for unmatched reliability, durability, and quality

            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nova.auto.2025" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/nova_auto.parts" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-accent transition-colors">Catalog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-accent transition-colors">Request Quote</Link>
              </li>
            </ul>
          </div>

          {/* Product Categories (Dynamic) */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              {getAllCategories().map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/catalog?category=${cat.id}`}
                    className="text-gray-300 hover:text-accent transition-colors"
                    onClick={handleCategoryClick(cat.id)}
                  >
                    {cat.name}
                  </Link>
                  {cat.id === 'rapid-bearing' && (
                    <>
                      <div className="text-accent font-medium text-sm mt-2">All Models: Premium Bearings</div>
                      <div className="text-gray-400 text-xs">Powered by Rapid Bearing</div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Rapid Technomat, Shapar-Veraval, Rajkot, Gujarat 360024, India</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-accent mr-3 flex-shrink-0" />
                <div className="space-y-1">
                  <div>
                    <a href="tel:+918155018518" className="text-gray-300 hover:text-accent transition-colors">
                      +91 8155018518
                    </a>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Rapid Bearing: <a href="tel:+917211175160" className="text-gray-300 hover:text-accent transition-colors">7211175160</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-accent mr-3 flex-shrink-0" />
                <a href="mailto:novaauto@outlook.in" className="text-gray-300 hover:text-accent transition-colors">
                  novaauto@outlook.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Nova Auto. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;