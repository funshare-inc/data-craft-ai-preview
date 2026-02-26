
import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import { Language } from '../App';

interface PricingPageProps {
  language: Language;
}

export const PricingPage: React.FC<PricingPageProps> = ({ language }) => {
  const t = {
    badge: language === 'ko' ? 'Pricing Strategy' : 'Pricing Strategy',
    title: language === 'ko' ? '비즈니스 규모에 맞는 최적의 플랜' : 'Optimal Plan for Your Scale',
    desc: language === 'ko' 
      ? '체험부터 엔터프라이즈 구축까지, DataCraft AI가 성장의 동력이 됩니다.' 
      : 'From trial to enterprise deployment, DataCraft AI drives your growth.',
    cta: language === 'ko' ? '지금 시작하기' : 'Get Started',
    contact: language === 'ko' ? '별도 문의' : 'Contact Us',
  };

  const plans = [
    {
      category: language === 'ko' ? "체험 기업" : "Trial Teams",
      name: "Free Plan",
      price: language === 'ko' ? "무료" : "Free",
      target: language === 'ko' ? "API 통합 및 데이터 관리 기능을 본격적으로 사용하고자 하는 고객" : "Customers exploring API & Data Management",
      features: language === 'ko' 
        ? ["페이지 개수 3개 제한", "폼 개수 3개 제한", "등록 사용자 5인 제한", "데이터 저장기간 최대 3개월", "100MB 스토리지 제한", "회당 10MB 업로드 용량 제한"]
        : ["Max 3 Pages", "Max 3 Forms", "Up to 5 Registered Users", "3 Months Data Retention", "100MB Storage Limit", "10MB Upload Limit per Session"],
      borderColor: "border-purple-200",
      isFree: true
    },
    {
      category: language === 'ko' ? "중소/스타트업 기업" : "SMB / Startups",
      name: "Pro Plan",
      price: language === 'ko' ? "월 9,900원" : "9,900 KRW / mo",
      subPrice: language === 'ko' ? "/ 사용자당" : "/ per user",
      target: language === 'ko' ? "DataCraft AI의 데이터 관리 기능을 본격적으로 사용하고자 하는 고객" : "Teams scaling their data operations with AI",
      features: language === 'ko' 
        ? ["사용자별 과금 구조", "AI 데이터 연동 기능 제공", "데이터 저장기간 최대 1년", "Guest (보기 권한) 무제한", "회당 10MB 업로드 용량 제한"]
        : ["Per-user Billing Structure", "AI Data Integration Support", "1 Year Data Retention", "Unlimited Guest Viewers", "10MB Upload Limit per Session"],
      borderColor: "border-purple-300",
      isPro: true
    },
    {
      category: language === 'ko' ? "공/중견/대기업" : "Enterprise / Gov",
      name: "Enterprise Plan",
      price: language === 'ko' ? "별도 문의" : "Custom",
      target: language === 'ko' ? "데이터의 규모가 커서 On-Premise 형태의 설치가 필요한 경우" : "For large scale data & On-premise installation needs",
      features: language === 'ko' 
        ? ["DataCraft AI의 모든 기능", "사내 서버 구축", "커스텀 기능 추가 개발", "DataCraft Edge 필요 고객 (50만원 / 1EA)"]
        : ["All DataCraft AI Features", "On-Premise Server Setup", "Custom Feature Development", "DataCraft Edge Available (500k KRW)"],
      borderColor: "border-indigo-200",
      isEnterprise: true
    }
  ];

  return (
    <div className="pt-40 pb-32 bg-slate-50/50 animate-in fade-in duration-700">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Area */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-[0.2em] mb-8">
            {t.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.3]">
            {t.title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.desc}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {plans.map((plan, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* Category Badge (Top) */}
              <div className="mb-6 text-center">
                <div className="inline-block px-10 py-3 bg-purple-600 text-white rounded-full text-lg font-black shadow-lg shadow-purple-200">
                  {plan.category}
                </div>
              </div>

              {/* Card Main Body */}
              <div className={`flex-1 relative bg-white border-2 ${plan.borderColor} rounded-[2.5rem] p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col`}>
                
                {plan.isEnterprise && (
                   <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 transform rotate-45 translate-x-24 translate-y-24 pointer-events-none" />
                )}

                <div className="mb-8">
                  <p className="text-slate-400 font-bold text-lg mb-1">{plan.name}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className={`text-4xl font-black ${plan.isPro ? 'text-purple-600' : 'text-slate-900'}`}>
                      {plan.price}
                    </h3>
                    {plan.subPrice && <span className="text-slate-400 font-bold text-lg">{plan.subPrice}</span>}
                  </div>
                </div>

                <div className="mb-10 min-h-[4rem]">
                  <p className="text-slate-700 font-medium leading-relaxed break-keep">
                    {plan.target}
                  </p>
                </div>

                <div className="h-[1px] bg-slate-100 mb-10" />

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${plan.isEnterprise && fIdx === 3 ? 'bg-purple-600' : 'bg-slate-300'}`} />
                      <span className={`text-base font-medium ${plan.isEnterprise && fIdx === 3 ? 'text-purple-600 font-black' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                  plan.isPro 
                    ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-xl shadow-purple-100' 
                    : 'bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100'
                }`}>
                  {plan.isEnterprise ? t.contact : t.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description Section */}
        <div className="mt-32 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px]" />
            <div className="flex-1 relative z-10">
              <h4 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-snug">
                {language === 'ko' ? '도입 전 무료 상담이 필요하신가요?' : 'Need Free Consulting Before Trial?'}
              </h4>
              <p className="text-slate-400 text-lg font-medium leading-relaxed break-keep whitespace-pre-line">
                {language === 'ko' 
                  ? "우리 조직의 데이터 구조에 맞는 최적의 플랜을 전문가가 직접 제안해 드립니다.\n구축 사례와 함께 구체적인 로드맵을 확인하세요." 
                  : "Our experts will propose the best plan for your organization's data structure.\nCheck out concrete roadmaps and case studies."}
              </p>
            </div>
            <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-purple-50 transition-all shadow-xl whitespace-nowrap">
              {language === 'ko' ? '무료 컨설팅 신청' : 'Apply for Consulting'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
