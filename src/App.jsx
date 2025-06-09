import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header2 from './component/utility/header2/Header2';
import Footer from './component/utility/Footer/Footer';
import WhatsAppButton from './component/utility/WhatsButton/WhatsAppButton';


// Lazy Loading for pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
// const ProductsPage = lazy(() => import('./pages/OtherProductsPage'));
const GrainsPage = lazy(() => import('./pages/GrainsPage'));
const SpicesPage = lazy(() => import('./pages/SpicesPage'));
const OtherProductsPage = lazy(() => import('./pages/OtherProductsPage'));

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);
     

function App() {
  return (
    <LanguageProvider>

    <BrowserRouter>
     
      <Header2/>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/otherproducts" element={<OtherProductsPage/>} />
          <Route path="/spices" element={<SpicesPage />} />
          <Route path="/grains" element={<GrainsPage/>} />
        </Routes>
      </Suspense>
      <WhatsAppButton/>
      <Footer/>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
