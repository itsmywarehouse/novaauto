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
            className="w-full h-24 sm:h-28 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {product.featured && (
          <div className="absolute top-1 left-1 bg-accent text-white text-xs font-semibold px-1.5 py-0.5 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-2 sm:p-3">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase">
            {product.category}
          </span>
          <h3 className="font-semibold text-xs sm:text-sm text-primary mt-1 group-hover:text-accent transition-colors line-clamp-2">
            <Link to={`/catalog/${product.id}`}>
              {product.name}
            </Link>
          </h3>
        </div>
        
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="space-y-1 mb-2">
          <div className="flex items-center text-xs text-gray-600">
            <span className="font-medium text-gray-800 mr-1">Part #:</span> 
            <span className="truncate text-xs">{product.partNumber}</span>
          </div>
          
          <div className="flex items-center text-xs">
            {product.inStock ? (
              <div className="flex items-center text-green-600">
                <Truck size={12} className="mr-1" />
                <span>In Stock</span>
              </div>
            ) : (
              <div className="flex items-center text-amber-600">
                <InfoIcon size={12} className="mr-1" />
                <span>On Order</span>
              </div>
            )}
          </div>
          
          <div className="text-xs text-gray-600">
            <span className="font-medium text-gray-800">Compatible:</span>
            <div className="mt-1">
              {product.compatibleWith.slice(0, 2).map((model, index) => (
                <span key={index} className="inline-block bg-gray-100 text-gray-700 rounded px-1 py-0.5 text-xs mr-1 mb-1">
                  {model}
                </span>
              ))}
              {product.compatibleWith.length > 2 && (
                <span className="inline-block bg-gray-100 text-gray-700 rounded px-1 py-0.5 text-xs">
                  +{product.compatibleWith.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5">
          <Link 
            to={`/catalog/${product.id}`}
            className="w-full bg-primary hover:bg-primary-600 text-white text-center py-1.5 rounded-md transition-all duration-300 hover:scale-105 text-xs font-semibold shadow-md min-h-[32px] flex items-center justify-center"
          >
            View Details
          </Link>
          <a 
            href={`https://wa.me/918140251789?text=Hi, I'm interested in ${product.name} (Part #: ${product.partNumber}). Can you provide more details?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white text-center py-1.5 rounded-md transition-all duration-300 hover:scale-105 text-xs font-semibold shadow-md min-h-[32px] flex items-center justify-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;