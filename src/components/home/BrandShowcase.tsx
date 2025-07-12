import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Brands</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Rapid Technomach operates through two specialized brands, each focused on delivering excellence in their respective domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* NOVA Brand */}
          <div className="bg-gradient-to-br from-primary to-primary-600 rounded-xl p-6 sm:p-8 text-white animate-fade-in">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <Wrench size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">🔧 NOVA</h3>
                <p className="text-white/80 text-sm sm:text-base">Genuine Parts for Backhoe Loaders</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              NOVA is Rapid Technomach's flagship brand focused on delivering premium spare parts for backhoe loaders, including JCB 3D, 3DX, and N/M series.
            </p>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <h4 className="font-semibold text-base sm:text-lg">Our product line includes:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Engine & Transmission Parts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Hydraulic Components</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Axles & Differentials</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Electrical & Body Parts</span>
                </li>
              </ul>
            </div>
            
            <p className="text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Built for durability and engineered with precision, NOVA parts are designed to perform in the harshest conditions, ensuring maximum uptime and minimum maintenance for your machinery.
            </p>

            <p className="text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Whether you're a fleet owner, contractor, or service center — NOVA delivers trusted quality and performance with every part.
            </p>
            
            <Link 
              to="/catalog" 
              className="inline-flex items-center bg-accent hover:bg-accent-600 text-white font-semibold px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base min-h-[44px]"
            >
              Browse NOVA Parts
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          {/* Rapid Bearing Brand */}
          <div className="bg-gradient-to-br from-accent to-accent-600 rounded-xl p-6 sm:p-8 text-white animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <Settings size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">🛠️ Rapid Bearing</h3>
                <p className="text-white/80 text-sm sm:text-base">Your Reliable Bearing Partner</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Rapid Bearing is Rapid Technomach's dedicated brand for high-performance industrial bearings. We serve various industries including construction, agriculture, automotive, and heavy machinery.
            </p>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <h4 className="font-semibold text-base sm:text-lg">We offer:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Ball Bearings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Roller Bearings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Tapered Bearings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Custom & Industrial-Grade Bearing Solutions</span>
                </li>
              </ul>
            </div>
            
            <p className="text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Our bearings are known for long life, low friction, and high load capacity. With strict quality control and technical expertise, Rapid Bearing is the go-to choice for businesses that demand precision and reliability.
            </p>
            
            <a 
              href="tel:+918140251789" 
              className="inline-flex items-center bg-primary hover:bg-primary-600 text-white font-semibold px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base min-h-[44px]"
            >
              Contact for Bearings
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>

        <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We're not just selling parts — we're building long-term partnerships with our customers by delivering value, consistency, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;