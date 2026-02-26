
import React from 'react';
import { Language } from '../App';
import { Logo } from './Logo';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = {
    privacy: language === 'ko' ? '개인정보처리방침' : 'Privacy Policy',
    terms: language === 'ko' ? '이용약관' : 'Terms of Service',
    support: language === 'ko' ? '고객지원' : 'Support',
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Logo Section - SVG Component */}
            <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo className="h-7 w-auto opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-slate-400 text-sm font-medium">
              © 2026 DataCraft AI Inc. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-sm font-bold hover:text-purple-600 transition-colors">{t.privacy}</a>
            <a href="#" className="text-slate-500 text-sm font-bold hover:text-purple-600 transition-colors">{t.terms}</a>
            <a href="#" className="text-slate-500 text-sm font-bold hover:text-purple-600 transition-colors">{t.support}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
