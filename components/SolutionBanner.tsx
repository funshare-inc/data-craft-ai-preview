
import React from 'react';
import { Language } from '../App';

interface SolutionBannerProps {
  language: Language;
  onNavigate: (page: 'home' | 'company' | 'contact') => void;
}

export const SolutionBanner: React.FC<SolutionBannerProps> = ({ language, onNavigate }) => {
  const t = {
    titleMain: language === 'ko' ? '모든 업무와 워크플로우를' : 'All Tasks and Workflows',
    titleHighlight: language === 'ko' ? 'DataCraft AI' : 'DataCraft AI',
    desc: language === 'ko'
      ? '업무 환경에 맞춰 설계되어 도입 즉시 활용할 수 있습니다.'
      : 'Designed to fit your work environment, ready for immediate use from day one.',
    btn: language === 'ko' ? '자세히 알아보기' : 'Learn More',
    suffix: language === 'ko' ? '에서 통합 관리하세요.' : 'Integrated Management.',
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-[1440px] mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 rounded-[3rem] py-12 px-8 lg:py-16 lg:px-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
        
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 leading-[1.3] tracking-tight">
            {t.titleMain} <br className="hidden sm:block" />
            <span className="inline-block bg-white text-indigo-600 px-5 py-1.5 my-1.5 rounded-2xl shadow-lg transform -rotate-1">{t.titleHighlight}</span> {t.suffix}
          </h2>
          
          <p className="text-lg lg:text-2xl text-white/90 font-medium max-w-3xl mx-auto mb-10 leading-relaxed break-keep">
            {t.desc}
          </p>

          <button 
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl active:scale-95 border-b-4 border-slate-200/50"
          >
            <span className="text-center">{t.btn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
