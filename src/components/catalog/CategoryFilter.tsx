import React, { useState } from 'react';
import { Settings, Wrench, Zap, ChevronDown, ChevronRight, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryFilter } from '../../types';
import { getAllCategories } from '../../data/categories';
import { getSubCategoriesWithCounts } from '../../data/products';

interface Props {
  categories: CategoryFilter[];
  selectedCategory: string | null;
  selectedSubCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onSelectSubCategory: (subCategory: string | null) => void;
  onCloseMobile?: () => void; // For mobile drawer close
}

const icons: Record<string, JSX.Element> = {
  'jcb-3dx': <Wrench size={16} className="text-gray-600" />,
  'jcb-3d': <Settings size={16} className="text-gray-600" />,
  'jcb-nm': <Zap size={16} className="text-gray-600" />,
  'rapid-bearing': <Settings size={16} className="text-gray-600" />,
};

const CategoryFilterComponent: React.FC<Props> = ({
  categories,
  selectedCategory,
  selectedSubCategory,
  onSelectCategory,
  onSelectSubCategory,
  onCloseMobile
}) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const categoryData = getAllCategories();
  const subCategories = getSubCategoriesWithCounts(selectedCategory as any);

  // Smooth scroll to top of the whole page
  const scrollToTop = () => {
    const scrollElement = document.scrollingElement || document.documentElement;
    scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelect = (category: string | null, subCategory: string | null = null) => {
    onSelectCategory(category);
    onSelectSubCategory(subCategory);

    // Only on subcategory selection: close dropdown and close mobile drawer
    if (subCategory) {
      setExpanded(null);
      if (onCloseMobile) {
        setTimeout(() => {
          onCloseMobile();
        }, 200); // allow animation to finish if needed
      }
    }
  };

  const toggleCategory = (id: string) => {
    setExpanded(prev => (prev === id ? null : id));
  };

  const clearFilters = () => {
    onSelectCategory(null);
    onSelectSubCategory(null);
    setExpanded(null);
    scrollToTop();
  };

  const allCount = categories.reduce((sum, c) => sum + c.count, 0);

  return (
    <div className="space-y-4 text-sm">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex items-center text-gray-800 font-medium">
          <Filter size={16} className="mr-2 text-gray-500" />
          Filters
        </div>

        <button
          onClick={clearFilters}
          disabled={!selectedCategory && !selectedSubCategory}
          className={`flex items-center text-xs px-2 py-1 rounded transition-all
            ${selectedCategory || selectedSubCategory
              ? 'text-red-600 hover:text-white hover:bg-red-600 border border-red-300'
              : 'text-gray-400 border border-gray-200 cursor-not-allowed'}
          `}
        >
          <X size={12} className="mr-1" /> Clear All
        </button>
      </div>

      {/* All Products */}
      <button
        onClick={() => handleSelect(null, null)}
        className={`w-full px-3 py-2 text-left rounded-md border shadow-sm transition-all duration-200 ${
          selectedCategory === null
            ? 'bg-gray-800 text-white border-gray-800 shadow-md'
            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500 hover:shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">All Products</span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded transition-colors ${
            selectedCategory === null ? 'bg-white text-gray-800' : 'bg-gray-100 text-gray-700'
          }`}>{allCount}</span>
        </div>
        <div className={`text-xs mt-0.5 ${selectedCategory === null ? 'text-gray-200' : 'text-gray-500'}`}>
          Browse complete catalog
        </div>
      </button>

      {/* Categories */}
      <div className="space-y-2">
        {categories.map(category => {
          const isSelected = selectedCategory === category.value;
          const isExpanded = expanded === category.value;
          const catInfo = categoryData.find(c => c.id === category.value);

          return (
            <div 
              key={category.value} 
              className={`border rounded-md overflow-hidden bg-white shadow-sm transition-shadow duration-200 ${
                isSelected ? 'shadow-md' : 'hover:shadow-sm'
              }`}
            >
              {/* Category header */}
              <button
                onClick={() => {
                  handleSelect(category.value, null);
                  toggleCategory(category.value);
                }}
                className={`flex items-center justify-between w-full px-3 py-2 transition-all duration-300 text-left transform hover:scale-[1.02] ${
                  isSelected ? 'bg-gray-800 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-800 hover:shadow-md'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-7 h-7 flex items-center justify-center rounded mr-3 transition-all duration-300 ${
                    isSelected ? 'bg-white/20 scale-110' : 'bg-gray-100 hover:scale-110'
                  }`}>
                    {icons[category.value] || <Filter size={14} className="text-gray-500" />}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{category.label}</div>
                    {catInfo?.description && (
                      <div className={`text-xs ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                        {catInfo.description}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700'
                  }`}>{category.count}</span>
                  <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={14} />
                  </div>
                </div>
              </button>

              {/* Subcategories */}
              <AnimatePresence initial={false}>
                {isExpanded && catInfo && (
                  <motion.div
                    key="subcategories"
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="border-t bg-gray-50 overflow-hidden"
                  >
                    <div className="p-2 grid gap-1">
                      {catInfo.subcategories.map((sub, idx) => {
                        const subVal = sub.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                        const count = subCategories.find(s => s.value === subVal)?.count || 0;
                        const isSubSel = selectedSubCategory === subVal && isSelected;

                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelect(category.value, subVal)}
                            className={`flex justify-between items-center w-full px-2 py-1.5 text-left rounded text-xs transition-all duration-300 transform hover:scale-105 ${
                              isSubSel
                                ? 'bg-gray-800 text-white shadow-md scale-105'
                                : 'hover:bg-white hover:shadow-md text-gray-700 hover:translate-x-1'
                            }`}
                          >
                            <span className="font-medium">{sub.name}</span>
                            {count > 0 && (
                              <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                                isSubSel ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'
                              }`}>{count}</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilterComponent;