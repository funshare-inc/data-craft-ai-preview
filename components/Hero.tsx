
import React from 'react';
import { 
  ArrowRight, 
  Users, 
  Factory, 
  Code, 
  Briefcase, 
  Settings2, 
  Megaphone,
  Check
} from 'lucide-react';
import { Language } from '../App';

interface HeroProps {
  language: Language;
  onNavigate?: (page: 'home' | 'company' | 'pricing' | 'contact') => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onNavigate }) => {
  const t = {
    badge: language === 'ko' ? 'Next-Gen Work OS' : 'Next-Gen Work OS',
    titleMain: language === 'ko' ? '흩어진 모든 데이터를' : 'All Scattered Data into',
    titleGradient: language === 'ko' ? '하나의 지능형 통합 플랫폼으로' : 'One Intelligent Unified Platform',
    desc: language === 'ko' 
      ? '기존의 틀에 우리 업무를 맞추는 시대는 끝났습니다. DataCraft AI는 당신의 데이터 구조와 워크플로우를 분석하여 팀의 효율을 10배 이상 끌어올리는 전용 시스템을 즉시 구축합니다.' 
      : 'The era of fitting work into rigid tools is over. DataCraft AI analyzes your data structure and workflow to instantly build a dedicated system that boosts team efficiency by over 10x.',
    btn: language === 'ko' ? '지금 시작하기' : 'Start Now',
    free: language === 'ko' ? 'Free Forever' : 'Free Forever',
    freeDesc: language === 'ko' ? '카드 등록 없이 바로 시작하세요' : 'Start without a credit card',
    question: language === 'ko' ? '무엇을 관리하고 싶으신가요?' : 'What do you want to manage?',
  };

  const categories = [
    { label: language === 'ko' ? '인사 관리' : 'HR Management', icon: <Users size={28} />, color: 'bg-pink-500', shadow: 'shadow-pink-100' },
    { label: language === 'ko' ? '제조 실행' : 'MES', icon: <Factory size={28} />, color: 'bg-amber-500', shadow: 'shadow-amber-100' },
    { label: language === 'ko' ? '소프트웨어 개발' : 'Software Dev', icon: <Code size={28} />, color: 'bg-indigo-500', shadow: 'shadow-indigo-100' },
    { label: language === 'ko' ? '금융 자산' : 'Finance', icon: <Briefcase size={28} />, color: 'bg-emerald-500', shadow: 'shadow-emerald-100' },
    { label: language === 'ko' ? '운영 관리' : 'Operations', icon: <Settings2 size={28} />, color: 'bg-blue-500', shadow: 'shadow-blue-100' },
    { label: language === 'ko' ? '마케팅' : 'Marketing', icon: <Megaphone size={28} />, color: 'bg-purple-500', shadow: 'shadow-purple-100' },
  ];

  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-50 rounded-full blur-[120px] -z-10 opacity-60" />
      
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-[55%] text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
              {t.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4.25rem] font-black text-slate-900 leading-[1.35] mb-10 tracking-tight break-keep">
              {t.titleMain} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">{t.titleGradient}</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 mb-12 max-w-2xl leading-[1.8] font-medium break-keep">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button 
                onClick={() => onNavigate?.('pricing')}
                className="px-10 py-5 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-700 transition-all shadow-2xl shadow-purple-200 flex items-center gap-3 group"
              >
                {t.btn}
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-base">{t.free}</span>
                <span className="text-slate-400 text-sm font-medium">{t.freeDesc}</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="bg-slate-50/80 p-8 lg:p-14 rounded-[3.5rem] border border-slate-100 relative shadow-inner">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full border border-slate-200 shadow-md whitespace-nowrap z-20">
                <p className="text-sm font-black text-slate-700 uppercase tracking-[0.15em] text-center">{t.question}</p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-4">
                {categories.map((cat, idx) => (
                  <button 
                    key={idx}
                    
                    className="group relative flex flex-col items-center gap-4 p-6 rounded-[2rem] border border-slate-100 bg-white hover:border-purple-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 ${cat.color} text-white rounded-2xl flex items-center justify-center shadow-lg ${cat.shadow} group-hover:scale-110 transition-transform duration-500`}>
                      {cat.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors text-center leading-relaxed">{cat.label}</span>
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
                      <Check size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
