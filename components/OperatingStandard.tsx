
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '../App';

interface OperatingStandardProps {
  language: Language;
}

export const OperatingStandard: React.FC<OperatingStandardProps> = ({ language }) => {
  const t = {
    badge: language === 'ko' ? '운영의 기준이 되는 시스템' : 'System that sets the Standard',
    title: language === 'ko' ? '업무가 바뀔 때마다\n툴을 바꾸지 않아도 됩니다.' : 'No need to switch tools\nevery time your work evolves.',
    desc: language === 'ko' 
      ? '조직의 일하는 방식을 기준으로 계속 확장되는 구조를 만듭니다.' 
      : 'We build a structure that scales seamlessly based on how your organization actually works.',
    footer: 'A Work OS built around how you work'
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-50/60 blur-[120px] rounded-full opacity-70" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-slate-50/50 backdrop-blur-sm rounded-[3.5rem] border border-slate-100 p-12 lg:p-24 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.03)] hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 group relative overflow-hidden text-center">
            
            {/* Top Badge [메인] */}
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-purple-100 text-purple-600 text-sm font-black tracking-widest mb-16 shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles size={16} className="text-purple-500" />
              {t.badge}
            </div>

            {/* Content Body [본문] */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-[4.25rem] font-black text-slate-950 leading-[1.35] tracking-tight mb-12 break-keep whitespace-pre-line">
                {t.title}
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-12 opacity-40" />

              <p className="text-2xl lg:text-3xl text-slate-600 font-bold leading-[1.8] max-w-3xl mx-auto break-keep mb-16">
                {t.desc}
              </p>
            </div>

            {/* Footer Badge [푸터] */}
            <div className="mt-8 flex justify-center">
              <div className="inline-block px-10 py-5 bg-slate-900 rounded-3xl shadow-2xl shadow-slate-200 group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-white text-base lg:text-lg font-black tracking-tight uppercase whitespace-nowrap">
                  {t.footer}
                </span>
              </div>
            </div>

            {/* Decorative Inner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/5 rounded-full blur-3xl -ml-32 -mb-32" />
          </div>
        </div>
      </div>
    </section>
  );
};
