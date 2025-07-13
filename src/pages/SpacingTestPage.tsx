import React, { useEffect } from 'react';
import ResponsiveSpacingDiv from '../components/common/ResponsiveSpacingDiv';

const SpacingTestPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Spacing Test | Nova Auto';
  }, []);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Responsive Spacing Test Page
          </h1>
          <p className="text-white/90 text-lg">
            Demonstrating perfect vertical spacing across all device sizes
          </p>
        </div>
      </div>

      {/* Multiple spacing examples */}
      <ResponsiveSpacingDiv />
      
      {/* Second example with different content */}
      <div className="mt-8 mb-8 sm:mt-12 sm:mb-12 lg:mt-16 lg:mb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg shadow-custom p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Another Spacing Example
          </h2>
          <p className="text-white/90 text-center text-base sm:text-lg leading-relaxed mb-8">
            This demonstrates how the same spacing classes work with different background colors 
            and content types while maintaining perfect vertical rhythm.
          </p>
          <div className="text-center">
            <button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 min-h-[48px]">
              Test Button
            </button>
          </div>
        </div>
      </div>

      {/* Third example - minimal */}
      <div className="mt-8 mb-8 sm:mt-12 sm:mb-12 lg:mt-16 lg:mb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 max-w-2xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
            Minimal Example
          </h3>
          <p className="text-gray-600 mb-6">
            Clean, simple spacing that works everywhere.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SpacingTestPage;