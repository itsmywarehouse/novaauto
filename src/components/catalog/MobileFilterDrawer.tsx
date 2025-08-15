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
    <div className="fixed inset-0 z-50 lg:hidden animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Drawer */}
      <div className="absolute inset-y-0 left-0 w-80 max-w-[90vw] bg-white shadow-xl overflow-y-auto animate-slide-in-left">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Filter size={20} className="text-primary mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:rotate-90"
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
            <SubCategoryFilters
              subCategories={subCategories}
              selectedSubCategories={selectedSubCategories}
              onToggleSubCategory={onToggleSubCategory}
              onClearAll={onClearSubCategories}
              selectedCategoryLabel={selectedCategoryLabel}
              onChangeCategory={onSelectCategory}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;