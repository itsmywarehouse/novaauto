import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../catalog/ProductCard';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl text-sm sm:text-base leading-relaxed">
              Discover our most popular Bekoloder spare parts and accessories, chosen for their exceptional quality, reliability, and customer satisfaction across India.
            </p>
          </div>
          <Link 
            to="/catalog" 
            className="flex items-center text-accent hover:text-accent-600 font-semibold mt-3 sm:mt-4 md:mt-0 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            View All Products
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;