import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="relative min-h-[100vh] sm:min-h-[85vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-8 mb-8 sm:mt-12 sm:mb-12 lg:mt-16 lg:mb-16">
          <div className="max-w-3xl pt-20 sm:pt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in">
              STRONG AND RELIABLE<br />
              <span className="text-accent">EARTHMOVING PARTS</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
              Rapid Technomach delivers high-performance parts through NOVA and Rapid Bearing, trusted by the construction, industrial, and engineering sectors.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link 
                to="/catalog" 
                className="bg-accent hover:bg-accent-600 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg text-base min-h-[48px]"
              >
                Browse Catalog
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="tel:+918140251789" 
                  className="bg-white hover:bg-gray-100 text-primary font-semibold px-6 sm:px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg text-base min-h-[48px]"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
                
                <a 
                  href="https://wa.me/918140251789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg text-base min-h-[48px]"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12 relative max-w-xl animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-md z-[-1]"></div>
              <div className="bg-white/10 p-4 sm:p-6 rounded-md">
                <p className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">Quick Search</p>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for parts by name, number or category..." 
                    className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-md py-3 pl-10 pr-16 sm:pr-4 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all text-sm sm:text-base"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Search size={18} />
                  </div>
                  <button className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-accent-600 text-white rounded-md px-2 sm:px-4 py-1 text-xs sm:text-sm font-semibold transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;