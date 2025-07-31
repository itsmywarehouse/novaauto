import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:shadow-custom-lg group animate-fade-in h-full flex flex-col">
      <div className="relative overflow-hidden">
        <Link to={`/catalog/${product.id}`}>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        {product.featured && (
          <div className="absolute top-1 left-1 bg-accent text-white text-xs font-semibold px-1.5 py-0.5 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-2 sm:p-3 flex-1 flex flex-col">
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        
        {/* Product Name */}
        <h3 className="font-semibold text-sm sm:text-base text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
          <Link to={`/catalog/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        
        {/* Part Number */}
        <div className="mb-3">
          <div className="text-xs text-gray-600">
            <span className="font-medium text-gray-800">Part #:</span> 
            <span className="ml-1">{product.partNumber}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-1.5 mt-auto">
          <Link 
            to={`/catalog/${product.id}`}
            className="w-full bg-primary hover:bg-primary-600 text-white text-center py-2 rounded-md transition-all duration-300 hover:scale-105 text-xs font-semibold shadow-md min-h-[36px] flex items-center justify-center"
          >
            View Details
          </Link>
          <a 
            href={`https://wa.me/918140251789?text=Hi, I'm interested in ${product.name} (Part #: ${product.partNumber}). Can you provide more details?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-md transition-all duration-300 hover:scale-105 text-xs font-semibold shadow-md min-h-[36px] flex items-center justify-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;