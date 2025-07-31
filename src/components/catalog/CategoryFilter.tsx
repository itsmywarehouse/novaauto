import React, { useState } from 'react';
import { Settings, Wrench, Zap, ChevronDown, ChevronRight, Filter, X } from 'lucide-react';
import { CategoryFilter } from '../../types';
import { getAllCategories } from '../../data/categories';
import { getSubCategoriesWithCounts } from '../../data/products';

interface CategoryFilterProps {
  categories: CategoryFilter[];
  selectedCategory: string | null;
  selectedSubCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onSelectSubCategory: (subCategory: string | null) => void;
}

const CategoryFilterComponent: React.FC<CategoryFilterProps> = ({ 
  categories,
  selectedCategory,
  selectedSubCategory,
  onSelectCategory,
  onSelectSubCategory
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const categoryData = getAllCategories();
  const subCategories = getSubCategoriesWithCounts(selectedCategory as any);

  const handleCategoryClick = (categoryId: string | null) => {
    onSelectCategory(categoryId);
    if (categoryId !== selectedCategory) {
      onSelectSubCategory(null);
    }
  };

  const handleSubCategoryClick = (subCategoryId: string | null) => {
    onSelectSubCategory(subCategoryId);
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return <Wrench size={20} className="text-blue-600" />;
      case 'jcb-3d': return <Settings size={20} className="text-green-600" />;
      case 'jcb-nm': return <Zap size={20} className="text-purple-600" />;
      case 'rapid-bearing': return <Settings size={20} className="text-orange-600" />;
      default: return <Filter size={20} className="text-gray-600" />;
    }
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return 'border-blue-200 bg-blue-50 hover:bg-blue-100';
      case 'jcb-3d': return 'border-green-200 bg-green-50 hover:bg-green-100';
      case 'jcb-nm': return 'border-purple-200 bg-purple-50 hover:bg-purple-100';
      case 'rapid-bearing': return 'border-orange-200 bg-orange-50 hover:bg-orange-100';
      default: return 'border-gray-200 bg-gray-50 hover:bg-gray-100';
    }
  };

  const getSelectedCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return 'border-blue-500 bg-blue-500 text-white shadow-lg';
      case 'jcb-3d': return 'border-green-500 bg-green-500 text-white shadow-lg';
      case 'jcb-nm': return 'border-purple-500 bg-purple-500 text-white shadow-lg';
      case 'rapid-bearing': return 'border-orange-500 bg-orange-500 text-white shadow-lg';
      default: return 'border-primary bg-primary text-white shadow-lg';
    }
  };

  const clearAllFilters = () => {
    handleCategoryClick(null);
    handleSubCategoryClick(null);
    setExpandedCategories(new Set());
  };

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Filter size={24} className="mr-3" />
            <h3 className="font-bold text-xl">Filter Products</h3>
          </div>
          {(selectedCategory || selectedSubCategory) && (
            <button
              onClick={clearAllFilters}
              className="flex items-center text-white/80 hover:text-white transition-colors text-sm"
            >
              <X size={16} className="mr-1" />
              Clear All
            </button>
          )}
        </div>
        <p className="text-white/90 text-sm">
          Find the perfect JCB parts for your machinery
        </p>
      </div>

      {/* All Products Button */}
      <div className="bg-white rounded-xl shadow-custom border-2 border-gray-100 overflow-hidden">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`w-full p-4 transition-all duration-300 flex justify-between items-center ${
            selectedCategory === null 
              ? 'bg-primary text-white border-primary' 
              : 'text-gray-700 hover:bg-gray-50 border-transparent hover:border-primary'
          }`}
        >
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
              selectedCategory === null ? 'bg-white/20' : 'bg-gray-100'
            }`}>
              <Filter size={20} className={selectedCategory === null ? 'text-white' : 'text-gray-600'} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">All Products</div>
              <div className={`text-sm ${selectedCategory === null ? 'text-white/80' : 'text-gray-500'}`}>
                Browse complete catalog
              </div>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-full font-bold text-sm ${
            selectedCategory === null 
              ? 'bg-white text-primary' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </div>
        </button>
      </div>

      {/* Main Categories */}
      <div className="space-y-4">
        <h4 className="font-bold text-lg text-gray-800 flex items-center">
          <Settings size={20} className="mr-2 text-primary" />
          Product Categories
        </h4>
        
        {categories.map((category) => {
          const isSelected = selectedCategory === category.value;
          const isExpanded = expandedCategories.has(category.value);
          const categoryInfo = categoryData.find(cat => cat.id === category.value);
          
          return (
            <div key={category.value} className="bg-white rounded-xl shadow-custom border-2 overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* Category Header */}
              <div className={`border-2 transition-all duration-300 ${
                isSelected 
                  ? getSelectedCategoryColor(category.value)
                  : getCategoryColor(category.value)
              }`}>
                <div className="flex items-center">
                  <button
                    onClick={() => handleCategoryClick(category.value)}
                    className="flex-1 p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        isSelected ? 'bg-white/20' : 'bg-white shadow-sm'
                      }`}>
                        {getCategoryIcon(category.value)}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-lg">{category.label}</div>
                        <div className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-600'}`}>
                          {categoryInfo?.description}
                        </div>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full font-bold text-sm ${
                      isSelected 
                        ? 'bg-white/20 text-white' 
                        : 'bg-white text-gray-700 shadow-sm'
                    }`}>
                      {category.count}
                    </div>
                  </button>
                  
                  <button
                    onClick={() => toggleCategory(category.value)}
                    className={`p-4 transition-colors ${
                      isSelected ? 'text-white hover:text-white/80' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                </div>
              </div>

              {/* Sub-categories */}
              {isExpanded && categoryInfo && (
                <div className="bg-gray-50 border-t border-gray-200 p-4 animate-fade-in">
                  <div className="grid grid-cols-1 gap-2">
                    {categoryInfo.subcategories.map((subcategory, index) => {
                      const subCatValue = subcategory.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
                      const subCatCount = subCategories.find(sub => sub.value === subCatValue)?.count || 0;
                      const isSubSelected = selectedSubCategory === subCatValue && selectedCategory === category.value;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            handleCategoryClick(category.value);
                            handleSubCategoryClick(subCatValue);
                          }}
                          className={`p-3 rounded-lg text-left transition-all duration-200 flex justify-between items-center ${
                            isSubSelected
                              ? 'bg-accent text-white shadow-md transform scale-105'
                              : 'bg-white hover:bg-gray-100 border border-gray-200 hover:border-accent hover:shadow-sm'
                          }`}
                        >
                          <div>
                            <div className={`font-medium ${isSubSelected ? 'text-white' : 'text-gray-800'}`}>
                              {subcategory.name}
                            </div>
                            {subcategory.description && (
                              <div className={`text-xs mt-1 ${isSubSelected ? 'text-white/80' : 'text-gray-500'}`}>
                                {subcategory.description}
                              </div>
                            )}
                          </div>
                          {subCatCount > 0 && (
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                              isSubSelected 
                                ? 'bg-white text-accent' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {subCatCount}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Filters Summary */}
      {(selectedCategory || selectedSubCategory) && (
        <div className="bg-white rounded-xl shadow-custom border border-accent/20 p-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
            <Filter size={16} className="mr-2 text-accent" />
            Active Filters
          </h5>
          <div className="space-y-2">
            {selectedCategory && (
              <div className="flex items-center justify-between bg-primary/10 rounded-lg p-2">
                <span className="text-sm font-medium text-primary">
                  {categories.find(c => c.value === selectedCategory)?.label}
                </span>
                <button
                  onClick={() => handleCategoryClick(null)}
                  className="text-primary hover:text-primary-600"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {selectedSubCategory && (
              <div className="flex items-center justify-between bg-accent/10 rounded-lg p-2">
                <span className="text-sm font-medium text-accent">
                  {subCategories.find(s => s.value === selectedSubCategory)?.label}
                </span>
                <button
                  onClick={() => handleSubCategoryClick(null)}
                  className="text-accent hover:text-accent-600"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Help Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
        <h5 className="font-semibold text-gray-800 mb-2">Need Help?</h5>
        <p className="text-sm text-gray-600 mb-3">
          Can't find the right part? Our experts are here to help!
        </p>
        <div className="flex flex-col gap-2">
          <a 
            href="tel:+918140251789" 
            className="text-center bg-primary hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            📞 Call +91 8140251789
          </a>
          <a 
            href="https://wa.me/918140251789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            💬 WhatsApp Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterComponent;