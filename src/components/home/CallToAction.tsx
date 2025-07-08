import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
            }}
          ></div>
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
          
          <div className="relative z-20 py-16 px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Keep Your Equipment Running at Peak Performance?
              </h2>
              
              <p className="text-white/90 text-lg mb-8">
                Contact our team today for expert advice on the right JCB parts for your specific machinery and requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/catalog"
                  className="bg-accent hover:bg-accent-600 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center"
                >
                  Browse Our Catalog
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-primary font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;