import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, List, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { products, getCategoriesWithCounts, getSubCategoriesWithCounts } from '../data/products';
import ProductCard from '../components/catalog/ProductCard';
import CategoryFilterComponent from '../components/catalog/CategoryFilter';
import SearchBar from '../components/catalog/SearchBar';
import SortOptions from '../components/catalog/SortOptions';
import { Product, ProductCategory } from '../types';

const sortOptions = [
  { label: 'Default Sorting', value: 'default' },
  { label: 'Name (A-Z)', value: 'name-asc' },
  { label: 'Name (Z-A)', value: 'name-desc' },
  { label: 'Newest First', value: 'newest' }
];

const PRODUCTS_PER_PAGE = 12;

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as ProductCategory | null;
  const initialSubCategory = searchParams.get('subcategory') || null;
  const initialSearch = searchParams.get('search') || '';
  const initialPage = parseInt(searchParams.get('page') || '1');

  const [allFilteredProducts, setAllFilteredProducts] = useState<Product[]>(products);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(initialSubCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories = getCategoriesWithCounts();
  const totalPages = Math.ceil(allFilteredProducts.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Product Catalog | Nova Auto';
  }, []);

  useEffect(() => {
    // Filter and sort products
    filterAndSortProducts();
  }, [selectedCategory, selectedSubCategory, searchQuery, sortOption]);

  useEffect(() => {
    // Update displayed products when page changes
    updateDisplayedProducts();
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedSubCategory) params.set('subcategory', selectedSubCategory);
    if (searchQuery) params.set('search', searchQuery);
    if (currentPage > 1) params.set('page', currentPage.toString());
    setSearchParams(params);
  }, [currentPage, allFilteredProducts]);

  const filterAndSortProducts = () => {
    let filteredProducts = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => 
        product.category === selectedCategory
      );
    }
    
    // Apply sub-category filter
    if (selectedSubCategory) {
      filteredProducts = filteredProducts.filter(product => {
        if (!product.subCategory) return false;
        const normalizedSubCategory = product.subCategory.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        return normalizedSubCategory === selectedSubCategory;
      });
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(query)) ||
        product.partNumber.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        filteredProducts.reverse();
        break;
      default:
        filteredProducts.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
        });
    }
    
    setAllFilteredProducts(filteredProducts);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const updateDisplayedProducts = () => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    setDisplayedProducts(allFilteredProducts.slice(startIndex, endIndex));
  };

  const handleCategorySelect = (category: ProductCategory | null) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null); // Reset sub-category when main category changes
  };

  const handleSubCategorySelect = (subCategory: string | null) => {
    setSelectedSubCategory(subCategory);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Product Catalog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our extensive range of genuine JCB parts and premium bearings
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={toggleFilterSidebar}
            className="flex items-center bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-600 transition-colors w-full sm:w-auto justify-center"
          >
            <Filter size={18} className="mr-2" />
            Filters & Categories
            {(selectedCategory || selectedSubCategory) && (
              <span className="ml-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-bold">
                {(selectedCategory ? 1 : 0) + (selectedSubCategory ? 1 : 0)}
              </span>
            )}
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <CategoryFilterComponent
                categories={categories}
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                onSelectCategory={handleCategorySelect}
                onSelectSubCategory={handleSubCategorySelect}
              />
            </div>
          </div>
          
          {/* Mobile Filter Overlay */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute inset-y-0 left-0 w-80 max-w-[90vw] bg-white shadow-xl overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <CategoryFilterComponent
                    categories={categories}
                    selectedCategory={selectedCategory}
                    selectedSubCategory={selectedSubCategory}
                    onSelectCategory={handleCategorySelect}
                    onSelectSubCategory={handleSubCategorySelect}
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Search and Sort Controls */}
            <div className="bg-white rounded-xl shadow-custom p-6 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-grow max-w-2xl">
                  <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="min-w-48">
                    <SortOptions 
                      options={sortOptions} 
                      selectedOption={sortOption} 
                      onSelectOption={handleSortChange} 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results Info */}
            <div className="mb-6" id="products-section">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-gray-600">
                  Showing {displayedProducts.length} of {allFilteredProducts.length} products
                  {selectedCategory && (
                    <> in <span className="font-medium text-primary">
                      {categories.find(c => c.value === selectedCategory)?.label}
                    </span></>
                  )}
                  {selectedSubCategory && (
                    <> → <span className="font-medium text-accent">
                      {selectedSubCategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span></>
                  )}
                </p>
                
                {totalPages > 1 && (
                  <p className="text-sm text-gray-500">
                    Page {currentPage} of {totalPages}
                  </p>
                )}
              </div>
            </div>
            
            {/* No Results */}
            {allFilteredProducts.length === 0 && (
              <div className="bg-white rounded-xl shadow-custom p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter size={24} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubCategory(null);
                    setSearchQuery('');
                    setSortOption('default');
                  }}
                  className="bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
            
            {/* Product Grid - Responsive 4x3 desktop, 2x3 mobile */}
            {displayedProducts.length > 0 && (
              <>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                  {displayedProducts.map((product, index) => (
                    <div 
                      key={product.id} 
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="bg-white rounded-xl shadow-custom p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      {/* Page Info */}
                      <div className="text-sm text-gray-600">
                        Showing {((currentPage - 1) * PRODUCTS_PER_PAGE) + 1} to {Math.min(currentPage * PRODUCTS_PER_PAGE, allFilteredProducts.length)} of {allFilteredProducts.length} products
                      </div>
                      
                      {/* Pagination Controls */}
                      <div className="flex items-center gap-2">
                        {/* Previous Button */}
                        <button
                          onClick={handlePrevPage}
                          disabled={currentPage === 1}
                          className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === 1
                              ? 'text-gray-400 cursor-not-allowed'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                          }`}
                        >
                          <ChevronLeft size={16} className="mr-1" />
                          Previous
                        </button>
                        
                        {/* Page Numbers */}
                        <div className="hidden sm:flex items-center gap-1">
                          {getPageNumbers().map((page, index) => (
                            <React.Fragment key={index}>
                              {page === '...' ? (
                                <span className="px-3 py-2 text-gray-400">...</span>
                              ) : (
                                <button
                                  onClick={() => handlePageChange(page as number)}
                                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    currentPage === page
                                      ? 'bg-primary text-white shadow-md'
                                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                                  }`}
                                >
                                  {page}
                                </button>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                        
                        {/* Mobile Page Indicator */}
                        <div className="sm:hidden px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg">
                          {currentPage} / {totalPages}
                        </div>
                        
                        {/* Next Button */}
                        <button
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                          className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === totalPages
                              ? 'text-gray-400 cursor-not-allowed'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                          }`}
                        >
                          Next
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Quick Jump (Desktop Only) */}
                    {totalPages > 10 && (
                      <div className="hidden lg:flex items-center justify-center mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>Jump to page:</span>
                          <select
                            value={currentPage}
                            onChange={(e) => handlePageChange(parseInt(e.target.value))}
                            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                              <option key={page} value={page}>
                                {page}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;