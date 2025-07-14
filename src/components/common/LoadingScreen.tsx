import React from 'react';
import { Settings } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      {/* Loading Animation Container */}
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Spinning Gear Animation */}
        <div className="relative">
          {/* Outer Gear */}
          <div className="animate-spin-slow">
            <Settings size={64} className="text-primary" />
          </div>
          
          {/* Inner Gear - Counter Rotating */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin-reverse">
            <Settings size={32} className="text-accent" />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
            Loading NOVA Parts...
          </h2>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 sm:w-80 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-progress"></div>
        </div>
        
        {/* Brand Text */}
        <p className="text-sm text-gray-600 font-medium">
          Powered by <span className="text-primary font-semibold">Rapid Technomach</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;