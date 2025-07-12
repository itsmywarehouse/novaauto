import React from 'react';
import { Award } from 'lucide-react';

const CompanyFooter: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Award size={48} className="text-accent" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Powered by Rapid Technomach</h2>
          <p className="text-xl text-accent font-semibold mb-6">
            Strong and Reliable Earthmoving Parts
          </p>
          <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
            We're not just selling parts — we're building long-term partnerships with our customers by delivering value, consistency, and innovation. Our commitment to excellence drives everything we do, from product sourcing to customer service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyFooter;