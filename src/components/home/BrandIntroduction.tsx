import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Truck, Users } from 'lucide-react';

const BrandIntroduction: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Brand Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-2 mb-6">
            <Award size={16} className="text-accent mr-2" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Trusted Since Day One
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Premium Parts for
            <span className="block text-accent">Heavy Machinery</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Nova Auto by Rapid Technomach delivers genuine, high-performance parts for JCB equipment 
            and industrial bearings. Trusted by professionals across India for unmatched reliability, 
            durability, and exceptional service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalog"
              className="inline-flex items-center bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Browse Catalog
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Shield size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Genuine Quality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every part meets or exceeds OEM specifications for reliable performance
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Truck size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pan-India delivery network ensures quick turnaround times
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Technical guidance from experienced professionals
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Trusted Brand</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Serving 1000+ satisfied customers across India
            </p>
          </div>
        </div>

        {/* Featured Collections */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Featured Collections
            </h3>
            <p className="text-gray-600 text-lg">
              Explore our most popular product categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/catalog?category=jcb-3dx"
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">🚜</div>
              <h4 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                JCB 3DX Series
              </h4>
              <p className="text-gray-600 mb-4">
                Complete range of spare parts for JCB 3DX backhoe loaders
              </p>
              <div className="flex items-center text-accent font-medium">
                Explore Collection
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/catalog?category=jcb-nm"
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                JCB N/M Series
              </h4>
              <p className="text-gray-600 mb-4">
                Latest generation parts for JCB New Model series
              </p>
              <div className="flex items-center text-accent font-medium">
                Explore Collection
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/catalog"
              className="group bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">🛠️</div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                Premium Bearings
              </h4>
              <p className="text-white/90 mb-4">
                High-performance industrial bearings by Rapid Bearing
              </p>
              <div className="flex items-center text-accent font-medium">
                View All Products
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroduction;