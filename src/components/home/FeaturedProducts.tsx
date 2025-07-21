import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../catalog/ProductCard';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-2 mb-6 shadow-md">
            <Star size={16} className="text-accent mr-2" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Featured Products</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Most Popular
            <span className="block text-accent">Spare Parts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular Backhoe Loader spare parts and accessories, chosen for their 
            exceptional quality, reliability, and customer satisfaction across India.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Need Something Specific?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete catalog with over 500+ genuine parts and accessories 
            for all JCB models and series.
          </p>
          <Link 
            to="/catalog" 
            className="group inline-flex items-center bg-accent hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
          >
            View Complete Catalog
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;