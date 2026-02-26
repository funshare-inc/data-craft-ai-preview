
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../App';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'company' | 'pricing' | 'contact') => void;
  currentPage: 'home' | 'company' | 'pricing' | 'contact';
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'company' | 'pricing' | 'contact') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const t = {
    home: language === 'ko' ? '서비스 소개' : 'Product',
    company: language === 'ko' ? '회사소개' : 'Company',
    pricing: language === 'ko' ? '가격' : 'Pricing',
    contact: language === 'ko' ? '문의하기' : 'Contact',
    start: language === 'ko' ? '시작하기' : 'Get Started',
  };

  const navItems: { id: 'home' | 'company' | 'pricing' | 'contact'; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'company', label: t.company },
    { id: 'pricing', label: t.pricing },
    { id: 'contact', label: t.contact },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Section - Left Aligned */}
        <div 
          className="flex items-center group cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
          onClick={() => handleNavClick('home')}
        >
          <Logo variant="text" className="h-9 md:h-11 lg:h-12 w-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-base font-bold transition-all hover:scale-105 ${
                currentPage === item.id ? 'text-purple-600 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-slate-100/80 p-1 rounded-2xl mr-2 border border-slate-200/50 backdrop-blur-sm shadow-inner">
            <div className="px-2 text-slate-400">
              <Globe size={14} strokeWidth={2.5} />
            </div>
            <button 
              onClick={() => setLanguage('ko')}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-black tracking-wider transition-all duration-300 ${
                language === 'ko' 
                  ? 'bg-white text-purple-600 shadow-sm scale-100' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              KO
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-black tracking-wider transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-white text-purple-600 shadow-sm scale-100' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              EN
            </button>
          </div>
          <button 
            onClick={() => handleNavClick('pricing')}
            className="text-base font-extrabold bg-purple-600 text-white px-7 py-3 rounded-full hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 hover:-translate-y-1 active:scale-95"
          >
            {t.start}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-purple-600 bg-purple-50 rounded-lg border border-purple-100"
          >
            <Globe size={14} />
            <span className="text-[10px] font-black uppercase tracking-tighter">{language === 'ko' ? 'EN' : 'KO'}</span>
          </button>
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg font-bold text-left transition-colors ${currentPage === item.id ? 'text-purple-600' : 'text-slate-800'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] bg-slate-100" />
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => handleNavClick('pricing')}
                className="w-full bg-purple-600 text-white py-4 rounded-xl text-base font-black shadow-lg shadow-purple-100"
              >
                {t.start}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
