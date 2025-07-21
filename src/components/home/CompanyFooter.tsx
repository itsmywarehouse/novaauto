import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const CompanyFooter: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary-600 to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
              <Award size={40} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Powered by
            <span className="block text-accent">Rapid Technomach</span>
          </h2>
          <p className="text-2xl font-light text-white/90 mb-8">
            Strong and Reliable Earthmoving Parts
          </p>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We're not just selling parts — we're building long-term partnerships with our customers 
            by delivering value, consistency, and innovation. Our commitment to excellence drives 
            everything we do, from product sourcing to customer service.
          </p>
        </div>
        
        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users size={28} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">1000+</div>
            <div className="text-white/80 font-medium">Happy Customers</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award size={28} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-white/80 font-medium">Quality Parts</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe size={28} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">Pan-India</div>
            <div className="text-white/80 font-medium">Delivery Network</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp size={28} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-white/80 font-medium">Support Available</div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold text-accent mb-3">🏆 Industry Leader</h4>
              <p className="text-white/90">
                Recognized as a trusted name in the heavy equipment parts industry across India.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-accent mb-3">🔧 Technical Expertise</h4>
              <p className="text-white/90">
                Our team of experts provides unmatched technical support and guidance.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-accent mb-3">🚀 Future Ready</h4>
              <p className="text-white/90">
                Continuously innovating to meet the evolving needs of modern industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyFooter;