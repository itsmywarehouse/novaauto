import React from 'react';
import { X, Filter } from 'lucide-react';
import CategorySidebar from './CategorySidebar';
import SubCategoryFilters from './SubCategoryFilters';
import { CategoryFilter } from '../../types';

interface SubCategoryFilter {
  label: string;
  value: string;
  count: number;
}

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: CategoryFilter[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  subCategories: SubCategoryFilter[];
  selectedSubCategories: string[];
  onToggleSubCategory: (subCategory: string) => void;
  onClearSubCategories: () => void;
  selectedCategoryLabel?: string;
}

const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  onSelectCategory,
  subCategories,
  selectedSubCategories,
  onToggleSubCategory,
  onClearSubCategories,
  selectedCategoryLabel
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Drawer */}
      <div className="absolute inset-y-0 left-0 w-80 max-w-[90vw] bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Filter size={20} className="text-primary mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Categories */}
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />

          {/* Subcategories */}
          {subCategories.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Subcategories</h3>
              <div className="space-y-2">
                {subCategories.map((subCategory) => {
                  const isSelected = selectedSubCategories.includes(subCategory.value);
                  
                  return (
                    <button
                      key={subCategory.value}
                      onClick={() => onToggleSubCategory(subCategory.value)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                        isSelected
                          ? 'bg-accent text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{subCategory.label}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : 'bg-white text-gray-600'
                      }`}>
                        {subCategory.count}
                      </span>
                    </button>
                  );
                })}
              </div>
              
              {selectedSubCategories.length > 0 && (
                <button
                  onClick={onClearSubCategories}
                  className="w-full mt-3 p-2 text-center text-red-500 hover:text-red-600 transition-colors text-sm"
                >
                  Clear All Subcategories
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;