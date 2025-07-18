import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';
import { useLoading } from './hooks/useLoading';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SpacingTestPage from './pages/SpacingTestPage';

function App() {
  const isLoading = useLoading(1500); // Show loading for minimum 1.5 seconds

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/spacing-test" element={<SpacingTestPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;