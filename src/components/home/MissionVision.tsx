import React from 'react';
import { Target, Eye, Lightbulb, Heart } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-2 mb-6">
            <Lightbulb size={16} className="text-accent mr-2" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Our Purpose</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Driven by Purpose,
            <span className="block text-accent">Guided by Values</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-600 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-10 text-white transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                To provide reliable, high-performance components that keep industries running — 
                safely, efficiently, and affordably.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Our Commitment:</strong> Every product we deliver 
                  is backed by our unwavering commitment to quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          
          {/* Vision */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-600 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative bg-gradient-to-br from-accent to-accent-600 rounded-3xl p-10 text-white transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                To become India's leading multi-brand solution provider for heavy machinery parts 
                and bearing systems — built on trust, quality, and customer-first service.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-primary">Our Future:</strong> Leading the industry through 
                  innovation, sustainability, and building lasting partnerships with our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Quality Excellence</h4>
              <p className="text-gray-600 leading-relaxed">
                Uncompromising commitment to delivering products that exceed industry standards 
                and customer expectations.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Customer First</h4>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships through exceptional service, support, and 
                understanding of our customers' unique needs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Innovation</h4>
              <p className="text-gray-600 leading-relaxed">
                Continuously evolving our products and services to meet the changing needs 
                of the industry and our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;