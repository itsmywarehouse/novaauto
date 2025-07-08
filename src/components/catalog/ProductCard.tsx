import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { InfoIcon, ThumbsUp, Truck } from 'lucide-react';

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
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {product.featured && (
          <div className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-medium text-gray-500 uppercase">
              {product.category}
            </span>
            <h3 className="font-semibold text-lg text-primary mt-1 group-hover:text-accent transition-colors">
              <Link to={`/catalog/${product.id}`}>
                {product.name}
              </Link>
            </h3>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="flex flex-col space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium text-gray-800 mr-1">Part #:</span> {product.partNumber}
          </div>
          
          <div className="flex items-center text-sm">
            {product.inStock ? (
              <div className="flex items-center text-green-600">
                <Truck size={16} className="mr-1" />
                <span>In Stock</span>
              </div>
            ) : (
              <div className="flex items-center text-amber-600">
                <InfoIcon size={16} className="mr-1" />
                <span>Available on Order</span>
              </div>
            )}
          </div>
          
          <div className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Compatible with:</span>
            <div className="mt-1">
              {product.compatibleWith.slice(0, 2).map((model, index) => (
                <span key={index} className="inline-block bg-gray-100 text-gray-700 rounded px-2 py-1 text-xs mr-1 mb-1">
                  {model}
                </span>
              ))}
              {product.compatibleWith.length > 2 && (
                <span className="inline-block bg-gray-100 text-gray-700 rounded px-2 py-1 text-xs">
                  +{product.compatibleWith.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-5 flex space-x-2">
          <Link 
            to={`/catalog/${product.id}`}
            className="flex-1 bg-primary hover:bg-primary-600 text-white text-center py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-semibold shadow-md"
          >
            View Details
          </Link>
          <a 
            href={`https://wa.me/918140251789?text=Hi, I'm interested in ${product.name} (Part #: ${product.partNumber}). Can you provide more details?`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-semibold shadow-md"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;