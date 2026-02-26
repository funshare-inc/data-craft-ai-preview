
import React from 'react';
import { Plus, Settings, Monitor, Zap } from 'lucide-react';

export const BuilderFlow: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">DATACRAFT AI</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-4">DataCraft Web Builder</h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            우리는 '데이터 관리 빌더'를 만들었습니다. 복잡한 개발없이도, 우리 회사 업무 방식에 맞는 데이터 구조와 화면을 사용자가 스스로 빠르고 합리적인 비용으로 만들어 사용할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 py-10">
          <div className="w-full lg:w-48 p-8 rounded-2xl border border-slate-100 flex flex-col items-center gap-4 bg-white shadow-sm">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
              <Settings className="text-slate-400" size={32} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Custom Fit</span>
          </div>

          <Plus className="text-slate-300 hidden lg:block" />

          <div className="w-full lg:w-48 p-8 rounded-2xl border border-slate-100 flex flex-col items-center gap-4 bg-white shadow-sm">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
              <Zap className="text-slate-400" size={32} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Low Cost</span>
          </div>

          <div className="h-12 w-[2px] bg-slate-100 lg:h-[2px] lg:w-20 hidden md:block" />

          <div className="w-full lg:w-64 p-10 rounded-[2rem] bg-purple-600 text-white flex flex-col items-center gap-4 shadow-xl shadow-purple-200 relative">
             <div className="absolute -top-3 -right-3 bg-indigo-400 p-2 rounded-lg shadow-lg">
                <Zap size={16} fill="white" />
             </div>
             <div className="bg-white/20 p-4 rounded-2xl">
                <Monitor size={40} />
             </div>
             <span className="text-lg font-bold">BUILDER</span>
          </div>
        </div>
      </div>
    </section>
  );
};
