
import React from 'react';
import { Search, Server, UserCheck, ChevronRight, Sparkles } from 'lucide-react';

export const WorkflowSteps: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "RAG AI Data Analysis",
      desc: "비정형 문서, API 가이드, 레거시 DB까지 AI가 스스로 읽고 최적화된 데이터 스키마를 설계합니다. 사람이 수주간 고민할 설계를 단 몇 초 만에 완성합니다.",
      icon: <Search className="text-purple-600" size={32} />,
      tag: "Intelligence",
      glow: "group-hover:shadow-purple-200"
    },
    {
      num: "02",
      title: "MCP Engine Generation",
      desc: "설계된 데이터를 바탕으로 Model Context Protocol(MCP) 기반의 전용 서버 인프라를 자동 배포합니다. 복잡한 서버 코딩 없이 데이터 통로가 즉시 개설됩니다.",
      icon: <Server className="text-indigo-600" size={32} />,
      tag: "Infrastructure",
      glow: "group-hover:shadow-indigo-200"
    },
    {
      num: "03",
      title: "Builder Orchestration",
      desc: "완성된 인프라 위에서 4대 핵심 빌더가 활성화됩니다. 이제 사용자는 준비된 환경에서 비즈니스 로직에만 집중하여 솔루션을 구성할 수 있습니다.",
      icon: <UserCheck className="text-blue-600" size={32} />,
      tag: "Execution",
      glow: "group-hover:shadow-blue-200"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200" />
      
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-purple-600 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <Sparkles size={14} />
            The Foundation of Builders
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            빌더를 가능하게 하는 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-black">초자동화 워크플로우</span>
          </h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
            시스템 스스로가 인프라를 설계하고 구축합니다. <br />
            DataCraft의 워크플로우는 상상을 현실로 만드는 기술적 토대입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector Arrows for Desktop */}
          <div className="hidden lg:block absolute top-[110px] left-[30.5%] text-slate-200">
            <ChevronRight size={50} strokeWidth={1.5} />
          </div>
          <div className="hidden lg:block absolute top-[110px] left-[63.8%] text-slate-200">
            <ChevronRight size={50} strokeWidth={1.5} />
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className={`h-full bg-white border border-slate-200 rounded-[3rem] p-12 transition-all duration-500 hover:border-purple-200 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-3`}>
                {/* Step Badge */}
                <div className="flex justify-between items-start mb-10">
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                     {step.icon}
                   </div>
                   <div className="text-right">
                     <span className="text-6xl font-black text-slate-100 group-hover:text-purple-100 transition-colors">
                       {step.num}
                     </span>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest -mt-4">{step.tag}</p>
                   </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 group-hover:text-purple-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  {step.desc}
                </p>

                {/* Progress Indicator */}
                <div className="mt-10 flex items-center gap-4">
                   <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-1000" />
                   </div>
                   <span className="text-[10px] font-bold text-slate-300 group-hover:text-purple-600 transition-colors uppercase tracking-widest">
                     {idx === 2 ? 'Final Launch' : `Phase 0${idx + 1} Done`}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
