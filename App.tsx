
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AICoreDiagram } from './components/AICoreDiagram';
import { FeatureGrid } from './components/FeatureGrid';
import { Footer } from './components/Footer';
import { CompanyIntro } from './components/CompanyIntro';
import { ContactPage } from './components/ContactPage';
import { PricingPage } from './components/PricingPage';

export type Language = 'ko' | 'en';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'company' | 'pricing' | 'contact'>('home');
  const [language, setLanguage] = useState<Language>('ko');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-purple-200 selection:text-purple-900 bg-white">
      <Navbar 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        language={language} 
        setLanguage={setLanguage} 
      />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero language={language} onNavigate={setCurrentPage} />
            <AICoreDiagram language={language} />
            <FeatureGrid language={language} onNavigate={setCurrentPage} />
          </>
        )}
        {currentPage === 'company' && <CompanyIntro language={language} />}
        {currentPage === 'pricing' && <PricingPage language={language} />}
        {currentPage === 'contact' && <ContactPage language={language} />}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;
