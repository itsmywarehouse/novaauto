import { useState, useEffect } from 'react';

export const useLoading = (minimumLoadTime: number = 1500) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Ensure minimum loading time for better UX
      setTimeout(() => {
        setIsLoading(false);
      }, minimumLoadTime);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Wait for page to load
      window.addEventListener('load', handleLoad);
      
      // Fallback timeout in case load event doesn't fire
      const fallbackTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimeout);
      };
    }
  }, [minimumLoadTime]);

  return isLoading;
};