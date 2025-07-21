import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, Search } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80 z-10"></div>
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Premium
                <span className="block text-accent font-light">Earthmoving Parts</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
                Trusted by professionals across India for unmatched reliability, 
                durability, and quality in heavy machinery components.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-white/90 font-medium">Quality Parts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-white/90 font-medium">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-2">Pan-India</div>
                <div className="text-white/90 font-medium">Delivery Network</div>
              </div>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link 
                to="/catalog" 
                className="group bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-xl text-lg min-h-[56px]"
              >
                Explore Catalog
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+918140251789" 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-white/30 text-lg min-h-[56px]"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
                
                <a 
                  href="https://wa.me/918140251789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-xl text-lg min-h-[56px]"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
            
            {/* Quick Search */}
            <div className="max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4 text-lg">Quick Part Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search by part name, number, or JCB model..." 
                    className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all text-gray-800 placeholder-gray-500"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Search size={20} />
                  </div>
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-accent-600 text-white rounded-lg px-6 py-2 font-semibold transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;