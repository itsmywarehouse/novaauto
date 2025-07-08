import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="relative min-h-[85vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Premium JCB Spare Parts <br />
              <span className="text-accent">For Your Heavy Machinery</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Quality components, expert support, and fast delivery to keep your equipment running at peak performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link 
                to="/catalog" 
                className="bg-accent hover:bg-accent-600 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center sm:justify-start"
              >
                Browse Catalog
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-white hover:bg-gray-100 text-primary font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center sm:justify-start"
              >
                Request Quote
              </Link>
            </div>
            
            <div className="mt-12 relative max-w-xl animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-md z-[-1]"></div>
              <div className="bg-white/10 p-6 rounded-md">
                <p className="text-white font-medium mb-4">Quick Search</p>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for parts by name, number or category..." 
                    className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Search size={18} />
                  </div>
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-accent-600 text-white rounded-md px-4 py-1 text-sm font-medium transition-colors">
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