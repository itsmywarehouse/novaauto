import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { CategoryFilter } from '../../types';
import { getAllCategories } from '../../data/categories';

interface CategoryFilterProps {
  categories: CategoryFilter[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilterComponent: React.FC<CategoryFilterProps> = ({ 
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['power-parts']));
  const categoryData = getAllCategories();

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleCategoryClick = (categoryId: string | null) => {
    onSelectCategory(categoryId);
  };

  const handleSubcategoryClick = (categoryId: string, subcategoryName: string) => {
    // For now, we'll just select the main category
    // In a more advanced implementation, you could filter by subcategory
    onSelectCategory(categoryId);
  };

  return (
    <div className="bg-white rounded-lg shadow-custom p-5">
      <h3 className="font-semibold text-lg text-primary mb-4">Categories</h3>
      
      <div className="space-y-2">
        {/* All Products Button */}
        <button
          onClick={() => handleCategoryClick(null)}
          className={`w-full text-left px-3 py-2 rounded transition-colors flex justify-between items-center ${
            selectedCategory === null 
              ? 'bg-primary text-white font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>All Products</span>
          <span className={`text-sm rounded-full px-2 py-0.5 ${
            selectedCategory === null 
              ? 'bg-white text-primary' 
              : 'bg-gray-100 text-gray-700'
          }`}>
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </span>
        </button>
        
        {/* Category Dropdowns */}
        {categories.map((category) => {
          const categoryInfo = categoryData.find(cat => cat.id === category.value);
          const isExpanded = expandedCategories.has(category.value);
          const isSelected = selectedCategory === category.value;
          
          return (
            <div key={category.value} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Main Category Header */}
              <div className="flex">
                <button
                  onClick={() => handleCategoryClick(category.value)}
                  className={`flex-1 text-left px-3 py-3 transition-colors flex justify-between items-center ${
                    isSelected 
                      ? 'bg-primary text-white font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{category.label}</span>
                    {category.value === 'drive-motion' && (
                      <span className={`text-xs font-bold ${
                        isSelected ? 'text-accent' : 'text-accent'
                      }`}>
                        🔩 Includes Rapid Bearing Products
                      </span>
                    )}
                  </div>
                  <span className={`text-sm rounded-full px-2 py-0.5 ${
                    isSelected 
                      ? 'bg-white text-primary' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </button>
                
                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleCategory(category.value)}
                  className={`px-3 py-3 transition-colors border-l ${
                    isSelected 
                      ? 'bg-primary text-white border-white/20' 
                      : 'text-gray-500 hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
              </div>
              
              {/* Subcategories Dropdown */}
              {isExpanded && categoryInfo && (
                <div className="bg-gray-50 border-t border-gray-200">
                  <ul className="py-2">
                    {categoryInfo.subcategories.map((subcategory, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleSubcategoryClick(category.value, subcategory.name)}
                          className="w-full text-left px-6 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                          {subcategory.name === '🔩 Bearings – Taper, Ball, Needle' ? (
                            <div>
                              <div className="font-medium">{subcategory.name}</div>
                              <div className="text-xs text-accent font-bold">
                                🛠️ Powered by ✨ Rapid Bearing
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="font-medium">{subcategory.name}</div>
                              {subcategory.description && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {subcategory.description}
                                </div>
                              )}
                            </div>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilterComponent;