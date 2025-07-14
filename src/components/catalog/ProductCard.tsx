import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { InfoIcon, Truck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:shadow-custom-lg group animate-fade-in">
      <div className="relative overflow-hidden">
        <Link to={`/catalog/${product.id}`}>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-32 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {product.featured && (
          <div className="absolute top-2 left-2 bg-accent text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-3 sm:p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase">
            {product.category}
          </span>
          <h3 className="font-semibold text-sm sm:text-base text-primary mt-1 group-hover:text-accent transition-colors line-clamp-2">
            <Link to={`/catalog/${product.id}`}>
              {product.name}
            </Link>
          </h3>
        </div>
        
        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="space-y-2 mb-3">
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <span className="font-medium text-gray-800 mr-1">Part #:</span> 
            <span className="truncate">{product.partNumber}</span>
          </div>
          
          <div className="flex items-center text-xs sm:text-sm">
            {product.inStock ? (
              <div className="flex items-center text-green-600">
                <Truck size={14} className="mr-1" />
                <span>In Stock</span>
              </div>
            ) : (
              <div className="flex items-center text-amber-600">
                <InfoIcon size={14} className="mr-1" />
                <span>On Order</span>
              </div>
            )}
          </div>
          
          <div className="text-xs sm:text-sm text-gray-600">
            <span className="font-medium text-gray-800">Compatible:</span>
            <div className="mt-1">
              {product.compatibleWith.slice(0, 2).map((model, index) => (
                <span key={index} className="inline-block bg-gray-100 text-gray-700 rounded px-1.5 py-0.5 text-xs mr-1 mb-1">
                  {model}
                </span>
              ))}
              {product.compatibleWith.length > 2 && (
                <span className="inline-block bg-gray-100 text-gray-700 rounded px-1.5 py-0.5 text-xs">
                  +{product.compatibleWith.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <Link 
            to={`/catalog/${product.id}`}
            className="w-full bg-primary hover:bg-primary-600 text-white text-center py-2 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-semibold shadow-md min-h-[36px] flex items-center justify-center"
          >
            View Details
          </Link>
          <a 
            href={`https://wa.me/918140251789?text=Hi, I'm interested in ${product.name} (Part #: ${product.partNumber}). Can you provide more details?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-semibold shadow-md min-h-[36px] flex items-center justify-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;