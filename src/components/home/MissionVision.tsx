import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-custom animate-fade-in">
            <div className="flex items-center mb-6">
              <Target size={32} className="text-accent mr-4" />
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide reliable, high-performance components that keep industries running — safely, efficiently, and affordably.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-custom animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-6">
              <Eye size={32} className="text-accent mr-4" />
              <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become India's leading multi-brand solution provider for heavy machinery parts and bearing systems — built on trust, quality, and customer-first service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;