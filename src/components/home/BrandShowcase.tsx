import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Settings, CheckCircle, ArrowRight, Star } from 'lucide-react';

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-2 mb-6">
            <Star size={16} className="text-accent mr-2" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Our Brands</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Two Specialized Brands,
            <span className="block text-accent">One Commitment to Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rapid Technomach operates through two specialized brands, each focused on delivering 
            excellence in their respective domains with unmatched quality and service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* NOVA Brand */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-600 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-8 sm:p-10 text-white transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
              {/* Brand Header */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Wrench size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">NOVA</h3>
                  <p className="text-white/80 text-lg">Genuine Backhoe Loader Parts</p>
                </div>
              </div>
              
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                NOVA is our flagship brand focused on delivering premium spare parts for backhoe loaders, 
                including JCB 3D, 3DX, and N/M series with uncompromising quality standards.
              </p>
              
              {/* Product Categories */}
              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-xl text-accent mb-4">Our Product Range:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-white/90">Engine & Transmission</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-white/90">Hydraulic Components</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-white/90">Axles & Differentials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-white/90">Electrical & Body Parts</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <p className="text-white/90 text-sm leading-relaxed">
                  <strong className="text-accent">Built for Durability:</strong> Every NOVA part is engineered 
                  with precision to perform in the harshest conditions, ensuring maximum uptime and minimum 
                  maintenance for your machinery.
                </p>
              </div>
              
              <Link 
                to="/catalog" 
                className="group inline-flex items-center bg-accent hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Browse NOVA Parts
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Rapid Bearing Brand */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-600 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-gradient-to-br from-accent to-accent-600 rounded-3xl p-8 sm:p-10 text-white transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
              {/* Brand Header */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Settings size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Rapid Bearing</h3>
                  <p className="text-white/80 text-lg">Your Reliable Bearing Partner</p>
                </div>
              </div>
              
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Our dedicated brand for high-performance industrial bearings, serving construction, 
                agriculture, automotive, and heavy machinery industries with precision solutions.
              </p>
              
              {/* Product Categories */}
              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-xl text-primary mb-4">We Specialize In:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-white/90">Ball Bearings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-white/90">Roller Bearings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-white/90">Tapered Bearings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-white/90">Custom Solutions</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <p className="text-white/90 text-sm leading-relaxed">
                  <strong className="text-primary">Precision Engineering:</strong> Known for long life, 
                  low friction, and high load capacity. Our bearings are the go-to choice for businesses 
                  that demand precision and reliability.
                </p>
              </div>
              
              <a 
                href="tel:+918140251789" 
                className="group inline-flex items-center bg-primary hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Contact for Bearings
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Building Long-Term Partnerships
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're not just selling parts — we're building long-term partnerships with our customers 
            by delivering value, consistency, and innovation across every interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;