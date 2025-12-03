
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const t = translations[language];

  return (
    <div className="flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-4 md:px-0 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-md shadow-brand-500/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">DataCraft<span className="text-brand-600">AI</span></span>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
          <a href="#section1" className="hover:text-brand-600 transition-colors">{t.nav.problems}</a>
          <a href="#section4" className="hover:text-brand-600 transition-colors">{t.nav.solution}</a>
          <a href="#section6" className="hover:text-brand-600 transition-colors">{t.nav.builders}</a>
          <a href="#" className="hover:text-brand-600 transition-colors">{t.nav.advertisement}</a>
          <a href="#section7" className="hover:text-brand-600 transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex gap-4 items-center">
            {/* Language Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1 mr-2">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${language === 'en' ? 'bg-white shadow text-brand-600' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('ko')}
                  className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${language === 'ko' ? 'bg-white shadow text-brand-600' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  KO
                </button>
            </div>

            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block">{t.nav.login}</button>
            <button className="text-sm font-medium bg-brand-900 text-white px-4 py-2 rounded-lg hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/10 whitespace-nowrap">{t.nav.getStarted}</button>
        </div>
      </nav>

      {/* Hero Content */}
      <header className="w-full max-w-5xl text-center py-24 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            {t.hero.tag}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          {t.hero.titlePrefix} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-400">{t.hero.titleHighlight}</span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href="#section6" className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold shadow-xl shadow-brand-600/20 transition-all w-full sm:w-auto">
                {t.hero.ctaPrimary}
             </a>
             <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-semibold shadow-sm transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                {t.hero.ctaSecondary}
             </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
