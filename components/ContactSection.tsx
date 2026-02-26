
import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="pt-12 pb-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative border border-slate-800">
          {/* Purple Glow Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />
          
          <div className="flex-1 p-12 lg:p-24 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-10 tracking-tight leading-tight whitespace-nowrap">데이터 혁신을 지금 시작하세요</h2>
            <p className="text-slate-400 text-xl mb-16 max-w-md leading-relaxed">기업 데이터 통합과 맞춤형 빌더 구축에 대해 궁금하신 점이 있으신가요? 전문가가 직접 답변해 드립니다.</p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-2">Email Inquiry</p>
                  <p className="text-white text-xl font-bold">help@funshare.co.kr</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-2">Our Office</p>
                  <p className="text-white text-xl font-bold">대구광역시 달서구 성서공단북로 156, 402호</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white/[0.02] backdrop-blur-md p-12 lg:p-24 border-l border-white/5 relative z-10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">성함</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">연락처</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all" placeholder="010-0000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">회사용 이메일</label>
                <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all" placeholder="name@company.com" />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">문의 내용</label>
                <textarea rows={5} className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all resize-none" placeholder="어떤 도움이 필요하신가요?"></textarea>
              </div>
              <button className="w-full bg-purple-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-purple-700 transition-all shadow-xl shadow-purple-900/40 text-lg">
                문의하기
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
