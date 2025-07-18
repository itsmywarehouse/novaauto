import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, List, Filter, X } from 'lucide-react';
import { products, getCategoriesWithCounts } from '../data/products';
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

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as ProductCategory | null;
  const initialSearch = searchParams.get('search') || '';

  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortOption, setSortOption] = useState('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories = getCategoriesWithCounts();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Product Catalog | Nova Auto';
    
    // Filter and sort products
    filterAndSortProducts();
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (searchQuery) params.set('search', searchQuery);
    setSearchParams(params);
  }, [selectedCategory, searchQuery, sortOption]);

  const filterAndSortProducts = () => {
    let filteredProducts = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => 
        product.category === selectedCategory
      );
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
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
        // For this demo, we'll just reverse the array to simulate newest first
        filteredProducts.reverse();
        break;
      default:
        // Default sorting - featured items first, then alphabetically
        filteredProducts.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
        });
    }
    
    setDisplayedProducts(filteredProducts);
  };

  const handleCategorySelect = (category: ProductCategory | null) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 py-8 bg-gray-50 rounded-lg px-6">
            <h1 className="text-3xl font-bold text-primary mb-4">JCB Spare Parts Catalog</h1>
            <p className="text-gray-600 max-w-3xl">
              Browse our extensive collection of high-quality JCB spare parts and accessories. 
              Use the filters and search to find exactly what you need for your machinery.
            </p>
          </div>
          
        </div>
      </div>
    
      <div className="bg-gray-50 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={toggleFilterSidebar}
              className="flex items-center bg-primary text-white px-4 py-2 rounded-md"
            >
              {isFilterOpen ? (
                <>
                  <X size={18} className="mr-2" />
                  Close Filters
                </>
              ) : (
                <>
                  <Filter size={18} className="mr-2" />
                  Show Filters
                </>
              )}
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5">
              <div className="sticky top-24">
                <CategoryFilterComponent 
                  categories={categories} 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={handleCategorySelect} 
                />
              </div>
            </div>
            
            {/* Mobile Filters */}
            {isFilterOpen && (
              <div className="md:hidden">
                <CategoryFilterComponent 
                  categories={categories} 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={handleCategorySelect} 
                />
              </div>
            )}
            
            {/* Product Listing */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className="bg-white rounded-lg shadow-custom p-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                      <SortOptions 
                        options={sortOptions} 
                        selectedOption={sortOption} 
                        onSelectOption={handleSortChange} 
                      />
                    </div>
                    
                    <div className="hidden sm:flex items-center border-l border-gray-300 pl-4">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded ${viewMode === 'grid' ? 'text-accent' : 'text-gray-500 hover:text-gray-700'}`}
                        aria-label="Grid view"
                      >
                        <Grid size={18} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded ${viewMode === 'list' ? 'text-accent' : 'text-gray-500 hover:text-gray-700'}`}
                        aria-label="List view"
                      >
                        <List size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Sort Options */}
                <div className="sm:hidden mt-4">
                  <SortOptions 
                    options={sortOptions} 
                    selectedOption={sortOption} 
                    onSelectOption={handleSortChange} 
                  />
                </div>
              </div>
              
              {/* Results Info */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {displayedProducts.length} {displayedProducts.length === 1 ? 'product' : 'products'}
                  {selectedCategory && (
                    <> in <span className="font-medium">{selectedCategory}</span></>
                  )}
                  {searchQuery && (
                    <> matching <span className="font-medium">"{searchQuery}"</span></>
                  )}
                </p>
              </div>
              
              {/* No Results */}
              {displayedProducts.length === 0 && (
                <div className="bg-white rounded-lg shadow-custom p-8 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">No Products Found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery('');
                      setSortOption('default');
                    }}
                    className="bg-primary hover:bg-primary-600 text-white font-medium px-4 py-2 rounded-md transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
              
              {/* Product Grid/List */}
              {displayedProducts.length > 0 && (
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4'
                  : 'space-y-4'
                }>
                  {displayedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;