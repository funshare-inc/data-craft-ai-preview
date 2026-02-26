
import React from 'react';
import { 
  Search,
  Zap,
  Layout,
  ArrowRight,
  ChevronRight,
  Database,
  Factory,
  Cpu,
  Globe,
  SearchCode,
  MousePointer2,
  BarChart,
  List as ListIcon,
  Move,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Language } from '../App';

interface AICoreDiagramProps {
  language: Language;
}

export const AICoreDiagram: React.FC<AICoreDiagramProps> = ({ language }) => {
  const t = {
    sectionIntro: language === 'ko' ? '이제, 업무는 하나의 흐름으로 이어집니다.' : 'Now, work flows as one seamless stream.',
    titleMain: language === 'ko' ? '데이터는 DataCraft AI가 설계하고,' : 'Data is designed by DataCraft AI,',
    titleSub: language === 'ko' ? '활용은 사용자의 방식으로 완성됩니다.' : 'and usage is completed in the user\'s way.',
    canvas: language === 'ko' ? '인터랙티브 UI 캔버스' : 'Interactive UI Canvas',
  };

  const steps = [
    {
      step: "STEP 1",
      tag: language === 'ko' ? "입력" : "Input",
      title: language === 'ko' ? "AI 문서 학습" : "AI Document Learning",
      subtitle: "RAG AI Analysis",
      imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
      icon: <Search className="text-purple-600" size={32} />,
      color: "border-purple-200 bg-purple-50/30",
      description: language === 'ko' 
        ? "비정형 데이터와 문서를 AI가 스스로 학습하여 지식 베이스를 구축합니다. 사람이 수동으로 분류하던 방식을 넘어 지능형 데이터 자산화를 실현합니다."
        : "AI learns unstructured data and documents by itself to build a knowledge base, realizing intelligent data capitalization beyond manual classification.",
      effect: "scan"
    },
    {
      step: "STEP 2",
      tag: language === 'ko' ? "실행" : "Execute",
      title: language === 'ko' ? "연동 기능 자동 생성" : "Auto Integration Gen",
      subtitle: "MCP Auto Generator",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="text-indigo-600" size={32} />,
      color: "border-indigo-200 bg-indigo-50/30",
      description: language === 'ko'
        ? "ERP, MES, DB 등 파편화된 외부 시스템을 AI Agent가 중심으로 통합합니다. 복잡한 API 코딩 없이 지능형 연동망을 자동으로 구축합니다."
        : "AI Agent integrates fragmented external systems such as ERP, MES, and DB. It automatically builds intelligent integration networks without complex coding.",
      effect: "connect"
    },
    {
      step: "STEP 3",
      tag: language === 'ko' ? "활용" : "Utilize",
      title: language === 'ko' ? "사용자 시각화 서비스" : "Custom Data Service",
      subtitle: "UI Custom Builder",
      imageUrl: "", 
      icon: <Layout className="text-blue-600" size={32} />,
      color: "border-blue-200 bg-blue-50/30",
      description: language === 'ko'
        ? "구축된 데이터를 원하는 형태의 대시보드와 화면으로 구성하여 업무에 활용합니다. 우리 팀만의 전용 업무 도구를 드래그 앤 드롭으로 완성합니다."
        : "Utilize built data by configuring dashboards and screens. Complete your team's own dedicated work tools via intuitive drag-and-drop.",
      effect: "builder"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <style>
        {`
          @keyframes scanline { 0% { top: -10%; } 100% { top: 110%; } }
          .animate-scanline { animation: scanline 3.5s linear infinite; }
          @keyframes orbit { from { transform: rotate(0deg) translateX(70px) rotate(0deg); } to { transform: rotate(360deg) translateX(70px) rotate(-360deg); } }
          .animate-orbit-1 { animation: orbit 12s linear infinite; }
          .animate-orbit-2 { animation: orbit 14s linear infinite reverse; }
          .animate-orbit-3 { animation: orbit 16s linear infinite; }
          .animate-orbit-4 { animation: orbit 10s linear infinite reverse; }
          @keyframes builder-cursor { 0% { transform: translate(180px, 140px); } 15% { transform: translate(45px, 85px); } 25% { transform: translate(45px, 85px) scale(0.85); } 50% { transform: translate(160px, 60px); } 60% { transform: translate(160px, 60px) scale(1); } 80% { transform: translate(220px, 160px); } 100% { transform: translate(180px, 140px); } }
          .animate-builder-cursor { animation: builder-cursor 8s cubic-bezier(0.45, 0, 0.55, 1) infinite; }
          @keyframes floating-widget { 0%, 25% { transform: translate(0, 0) scale(1); opacity: 0; } 26% { opacity: 1; transform: translate(0, 0) scale(1.08); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); } 50% { transform: translate(115px, -25px) scale(1.08); opacity: 1; } 55% { transform: translate(115px, -25px) scale(1); opacity: 0; } 100% { opacity: 0; } }
          .animate-floating-widget { animation: floating-widget 8s cubic-bezier(0.45, 0, 0.55, 1) infinite; }
          @keyframes drop-pulse-bg { 0%, 54% { background: transparent; border-color: #e2e8f0; } 55% { background: #eff6ff; border-color: #3b82f6; transform: scale(1.02); } 65% { background: white; border-color: #e2e8f0; transform: scale(1); } 100% { background: white; border-color: #e2e8f0; } }
          .animate-drop-pulse-bg { animation: drop-pulse-bg 8s ease infinite; }
        `}
      </style>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-black tracking-wide mb-10 shadow-sm">
            <Sparkles size={16} />
            {t.sectionIntro}
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[2] break-keep">
            {t.titleMain} <br />
            <span className="text-purple-600">{t.titleSub}</span>
          </h2>
          <div className="mt-8 h-1.5 w-24 bg-purple-100 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-[1400px] mx-auto">
          <div className="hidden md:block absolute top-[25%] left-[33.3%] -translate-x-1/2 -translate-y-1/2 text-slate-300 z-0">
            <ArrowRight size={40} strokeWidth={2} />
          </div>
          <div className="hidden md:block absolute top-[25%] left-[66.6%] -translate-x-1/2 -translate-y-1/2 text-slate-300 z-0">
            <ArrowRight size={40} strokeWidth={2} />
          </div>

          {steps.map((item, idx) => (
            <div key={idx} className={`relative z-10 border ${item.color} rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)] group flex flex-col h-full`}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl font-black text-slate-950 tracking-[0.05em] mb-1 leading-none">{item.step}</span>
                  <div className="inline-block px-3 py-1 rounded-lg bg-white border border-slate-100 text-[11px] font-black text-slate-500 uppercase tracking-tighter shadow-sm w-fit">
                    [{item.tag}]
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-100 transition-all duration-500">
                  {item.icon}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2 group-hover:text-purple-600 transition-colors leading-normal">{item.title}</h4>
                <p className="text-sm font-bold text-slate-400 tracking-tight italic">{item.subtitle}</p>
              </div>

              <div className="mb-8 relative rounded-[2rem] overflow-hidden aspect-[16/10] border border-white shadow-inner bg-slate-50 group/img">
                {item.effect === 'scan' && (
                  <div className="absolute inset-0 bg-white p-5 select-none overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                    <div className="relative h-full w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
                      <img src={item.imageUrl} className="w-full h-full object-cover opacity-20 grayscale" alt="scan-bg" />
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-scanline z-20" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 space-y-3 z-10">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-2 bg-white rounded-full border border-slate-100 shadow-sm overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: ['0%', '100%', '0%'] }} 
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                              className="h-full bg-purple-500/20" 
                            />
                          </div>
                        ))}
                      </div>
                      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-2 shadow-sm z-30">
                        <SearchCode size={12} className="text-purple-600 animate-pulse" />
                        <span className="text-[8px] text-slate-800 font-black uppercase tracking-widest">RAG ANALYZER</span>
                      </div>
                    </div>
                  </div>
                )}
                {item.effect === 'connect' && (
                  <div className="absolute inset-0 bg-white p-5 select-none overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                    <div className="relative h-full w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
                      <img src={item.imageUrl} className="w-full h-full object-cover opacity-10 grayscale" alt="connect-bg" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-3xl border border-indigo-100 shadow-xl flex flex-col items-center justify-center z-30 animate-pulse">
                        <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center shadow-sm mb-1.5">
                          <Cpu size={20} className="text-indigo-600" />
                        </div>
                        <span className="text-[8px] font-black text-slate-800 uppercase tracking-widest leading-none">AI AGENT</span>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 animate-orbit-1"><div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"><Factory size={14} className="text-slate-400" /><span className="text-[7px] font-black text-slate-600 tracking-tighter uppercase">ERP</span></div></div>
                        <div className="absolute top-1/2 left-1/2 animate-orbit-2" style={{ animationDelay: '-3s' }}><div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"><Cpu size={14} className="text-slate-400" /><span className="text-[7px] font-black text-slate-600 tracking-tighter uppercase">MES</span></div></div>
                        <div className="absolute top-1/2 left-1/2 animate-orbit-3" style={{ animationDelay: '-7s' }}><div className="bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"><Database size={14} className="text-slate-400" /><span className="text-[7px] font-black text-slate-600 tracking-tighter uppercase">DB</span></div></div>
                      </div>
                    </div>
                  </div>
                )}
                {item.effect === 'builder' && (
                  <div className="absolute inset-0 bg-white p-5 select-none overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
                    <div className="relative h-full w-full flex flex-col gap-3">
                      <div className="h-7 w-full bg-slate-50 border border-slate-200 rounded-lg flex items-center px-2 justify-between shrink-0">
                         <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /></div>
                         <div className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[7px] font-black text-slate-400 uppercase">Builder v1.0</div>
                      </div>
                      <div className="flex-1 grid grid-cols-4 gap-3 min-h-0">
                         <div className="col-span-1 flex flex-col gap-2"><div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col gap-2"><div className="w-full h-1 bg-slate-100 rounded-full" /><div className="w-2/3 h-1 bg-slate-50 rounded-full" /></div></div>
                         <div className="col-span-3 bg-slate-50/50 rounded-xl border border-slate-200 relative p-3 flex flex-col gap-3 overflow-hidden">
                            <div className="h-14 w-full bg-white rounded-lg border border-slate-200 shadow-sm animate-drop-pulse-bg relative shrink-0" />
                            <div className="absolute top-[35px] left-[10px] z-40 animate-floating-widget"><div className="p-2.5 bg-white rounded-lg border-2 border-blue-500 shadow-2xl flex items-center gap-2 w-32 scale-90"><BarChart size={12} className="text-blue-600" /><div className="h-1.5 w-12 bg-slate-100 rounded-full" /></div></div>
                            <div className="flex-1 bg-white rounded-lg border border-slate-100 opacity-40" />
                         </div>
                      </div>
                    </div>
                    <div className="absolute animate-builder-cursor z-50 pointer-events-none"><MousePointer2 size={24} className="text-slate-900 fill-white drop-shadow-md" /></div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-30">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                       <span className="text-[9px] font-black text-slate-800 uppercase tracking-widest">{t.canvas}</span>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-slate-600 text-base leading-[1.8] mb-8 break-keep flex-grow">{item.description}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="h-1 bg-white/60 rounded-full overflow-hidden mr-4 flex-1"><div className="h-full bg-purple-500 w-0 group-hover:w-full transition-all duration-1000 ease-out" /></div>
                <div className="flex items-center gap-2 text-slate-300 group-hover:text-purple-400 transition-colors"><span className="text-[10px] font-black whitespace-nowrap">0{idx + 1}</span><ChevronRight size={12} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
