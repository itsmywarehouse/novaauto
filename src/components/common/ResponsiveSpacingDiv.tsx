import React from 'react';

const ResponsiveSpacingDiv: React.FC = () => {
  return (
    <div className="mt-8 mb-8 sm:mt-12 sm:mb-12 lg:mt-16 lg:mb-16 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-custom p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Perfect Vertical Spacing
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            This div demonstrates responsive vertical spacing using Tailwind CSS with balanced 
            top and bottom margins that adapt to different screen sizes.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Mobile First</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Starts with mt-8 mb-8 (32px) for optimal mobile spacing.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Tablet Optimized</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Scales to mt-12 mb-12 (48px) on small screens and up.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-primary mb-3">Desktop Perfect</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Expands to mt-16 mb-16 (64px) on large screens for ideal desktop spacing.
            </p>
          </div>
        </div>

        {/* Spacing Demonstration */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-center">
            Spacing Breakdown
          </h2>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-blue-50 p-4 rounded">
              <span className="font-medium text-primary">Mobile (default):</span>
              <code className="text-sm bg-white px-2 py-1 rounded mt-2 sm:mt-0">mt-8 mb-8 (32px)</code>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-green-50 p-4 rounded">
              <span className="font-medium text-primary">Small screens (640px+):</span>
              <code className="text-sm bg-white px-2 py-1 rounded mt-2 sm:mt-0">sm:mt-12 sm:mb-12 (48px)</code>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-orange-50 p-4 rounded">
              <span className="font-medium text-primary">Large screens (1024px+):</span>
              <code className="text-sm bg-white px-2 py-1 rounded mt-2 sm:mt-0">lg:mt-16 lg:mb-16 (64px)</code>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 min-h-[48px]">
            Primary Action
          </button>
          <button className="bg-accent hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 min-h-[48px]">
            Secondary Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSpacingDiv;