import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getFeaturedProducts } from '../data/products';
import ProductCard from '../components/catalog/ProductCard';
import { ArrowLeft, CheckCircle, XCircle, Info, ArrowRight, MessageCircle, Phone } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const [activeImage, setActiveImage] = useState<string | undefined>(product?.imageUrl);
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== id).slice(0, 4);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    if (product) {
      document.title = `${product.name} | Nova Auto`;
    } else {
      document.title = 'Product Not Found | Nova Auto';
    }
  }, [product]);

  if (!product) {
    return (
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-custom p-8 max-w-2xl mx-auto text-center">
            <XCircle size={48} className="text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-primary mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">
              We couldn't find the product you're looking for. It may have been removed or the URL might be incorrect.
            </p>
            <Link 
              to="/catalog" 
              className="bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-md transition-colors inline-block"
            >
              Return to Catalog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/catalog" className="text-gray-500 hover:text-primary transition-colors">Catalog</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link 
              to={`/catalog?category=${product.category}`} 
              className="text-gray-500 hover:text-primary transition-colors"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </nav>
        </div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to results
        </button>
        
        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-custom overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="p-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={activeImage || product.imageUrl} 
                  alt={product.name}
                  className="w-full h-96 object-contain p-4"
                />
              </div>
              
              {/* For a real site, we'd have multiple images. This is a placeholder */}
              <div className="flex gap-2 justify-center">
                <button 
                  className={`w-16 h-16 rounded-md border-2 overflow-hidden ${
                    activeImage === product.imageUrl ? 'border-accent' : 'border-gray-200'
                  }`}
                  onClick={() => setActiveImage(product.imageUrl)}
                >
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
                
                {/* Placeholder additional images */}
                {Array.from({ length: 2 }).map((_, index) => (
                  <div 
                    key={index}
                    className="w-16 h-16 rounded-md border-2 border-gray-200 bg-gray-100 flex items-center justify-center text-gray-400"
                  >
                    <Info size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-6 lg:pr-8">
              {product.featured && (
                <div className="inline-block bg-accent text-white text-xs font-semibold px-2 py-1 rounded mb-3">
                  Featured
                </div>
              )}
              
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="font-medium text-gray-800 mr-1">Part #:</span> 
                {product.partNumber}
              </div>
              
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex items-center">
                  {product.inStock ? (
                    <div className="flex items-center text-green-600">
                      <CheckCircle size={18} className="mr-2" />
                      <span className="font-medium">In Stock</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-amber-600">
                      <Info size={18} className="mr-2" />
                      <span className="font-medium">Available on Order</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-primary mb-2">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {product.specifications && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-primary mb-2">Specifications</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex">
                        <span className="text-sm font-medium text-gray-700 min-w-32">{key}:</span>
                        <span className="text-sm text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-primary mb-2">Compatible With</h2>
                <div className="flex flex-wrap gap-2">
                  {product.compatibleWith.map((model, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm"
                    >
                      {model}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href={`https://wa.me/918140251789?text=Hi, I'm interested in ${product.name} (Part #: ${product.partNumber}). Can you provide a quote?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp Quote
                </a>
                
                <a 
                  href="tel:+918140251789"
                  className="bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary">Related Products</h2>
              <Link 
                to="/catalog" 
                className="flex items-center text-accent hover:text-accent-600 transition-colors"
              >
                View All
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;