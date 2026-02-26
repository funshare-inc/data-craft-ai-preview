
import React from 'react';
import { 
  Sparkles,
  ArrowDown,
  FileText,
  Award,
  Shapes,
  UserCheck,
  TrendingUp,
  Target,
  Quote,
  Command,
  ChevronRight
} from 'lucide-react';
import { Language } from '../App';

interface CompanyIntroProps {
  language: Language;
}

const certificates = [
  { id: 1, title: '식품 안전 관리 솔루션 시스템 특허', category: '특허증', img: '/assets/cert/1. 특허증_식품안전관리솔루션_(주)펀셰어_1.png' },
  { id: 2, title: '캠핑 소셜 네트워크 서비스 플랫폼 특허', category: '특허증', img: '/assets/cert/2. 특허증_캠핑소셜_1.png' },
  { id: 3, title: '기업부설연구소 인정서', category: '인증서', img: '/assets/cert/3. 기업부설연구소인정서_(주)펀셰어_1.png' },
  { id: 4, title: '신용보증기금 Start-up NEST 수료', category: '인증서', img: '/assets/cert/4. 네스트 수료증_펀셰어_1.png' },
  { id: 5, title: '초기창업패키지 선정 확인서', category: '인증서', img: '/assets/cert/5. 선정확인서_초기창업패키지_1.png' },
  { id: 6, title: '비대면 스타트업 육성사업 선정', category: '인증서', img: '/assets/cert/6. 선정확인서_비대면스타트업_1.png' },
  { id: 7, title: '예비창업패키지 선정 확인서', category: '인증서', img: '/assets/cert/7. 선정확인서_예비창업패키지_1.png' },
  { id: 8, title: '예비·초기 관광벤처사업 선정', category: '인증서', img: '/assets/cert/8. 선정확인서_예비초기관광벤처사업_1.png' },
  { id: 9, title: '중소기업 확인서 (소상공인)', category: '인증서', img: '/assets/cert/9. 중소기업확인서(2025-04-01~2026-03-31)_(주)펀셰어_1.png' },
  { id: 10, title: '직무발명보상우수기업 인증서', category: '인증서', img: '/assets/cert/10. 직무발명보상우수기업 인증서_주식회사 펀셰어_1.png' }
];

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ language }) => {
  return (
    <div className="pt-20 bg-white selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      
      {/* 1. Hero: Strategic Vision & Manifesto */}
      <section className="relative min-h-[95vh] flex items-center px-8 lg:px-24 overflow-hidden border-b border-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-15" />
        
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-slate-200">
              <Command size={14} className="text-purple-400" />
              Corporate Manifesto
            </div>
            
            <div className="space-y-10">
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-slate-900 leading-[1.4] tracking-tight break-keep">
                데이터의 가치를 넘어,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">사람의 판단을 더합니다.</span>
              </h1>
              
              <div className="space-y-8 text-xl lg:text-2xl text-slate-500 font-medium leading-[1.85] break-keep max-w-2xl">
                <p>
                  기업은 매일 수많은 데이터를 만들어냅니다.<br />
                  하지만 데이터가 많아질수록 일은 더 단순해지기보다 <br />
                  오히려 복잡해집니다.
                </p>
                <p>
                  툴은 늘어나고, 화면은 많아지고,<br />
                  업무는 시스템에 맞춰 흩어집니다.
                </p>
              </div>
            </div>

            <div className="pt-10 space-y-8 border-t border-slate-100 max-w-2xl">
               <div className="space-y-5">
                 <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs">The Question</p>
                 <p className="text-2xl lg:text-4xl font-black text-slate-900 leading-[1.6] break-keep">
                   “우리는 그 질문에서 시작했습니다. 왜 기업은 여전히 도구에 맞춰 일해야 할까?”
                 </p>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[1px] border-slate-100 aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="Professional Workspace" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-xs font-black uppercase tracking-[0.3em] mb-2 text-purple-300">Foundation</p>
                <p className="text-2xl font-bold leading-relaxed">상상을 현실로 만드는<br/>기술적 토대</p>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-50 rounded-full -z-10 blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full -z-10 blur-2xl opacity-40" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-300">
          <div className="w-[1px] h-16 bg-gradient-to-b from-slate-200 to-transparent" />
        </div>
      </section>

      {/* 2. The Mission: Structure Builder */}
      <section className="py-40 px-8 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-widest shadow-sm">
              <Shapes size={16} />
              Our Identity
            </div>
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.55] break-keep">
              우리는 ‘기능’을 만드는 <br />회사가 아닙니다.
            </h3>
            <div className="space-y-8 text-xl lg:text-2xl text-slate-500 font-medium leading-[1.9] break-keep">
              <p>DataCraft AI is more than just a screen <br />or a single solution builder.</p>
              <p className="text-purple-600 font-bold">우리는 기업이 스스로 자신의 운영 방식을 <br />설계할 수 있는 구조를 만듭니다.</p>
              <p>데이터를 단순히 저장하는 것이 아니라 연결하고, 관계를 만들고, 확장 가능한 기반으로 재구성합니다.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Modern Architecture" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy: Uniqueness */}
      <section className="py-40 px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full" />
          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.6] break-keep">
            기업마다 일하는 방식은 다릅니다.<br />
            그래서 시스템도 달라야 한다고 믿습니다.
          </h3>
        </div>
      </section>

      {/* 4. Technology: AI for Humans */}
      <section className="py-40 px-8 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Team Collaboration" />
            </div>
          </div>
          <div className="space-y-12 order-1 lg:order-2">
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.55] break-keep">
              기술은 사람을 <br />대체하지 않습니다.
            </h3>
            <div className="space-y-8 text-xl lg:text-2xl text-slate-500 font-medium leading-[1.9] break-keep">
              <p>AI는 사람을 대신하기 위해 존재하는 것이 아니라 <span className="text-slate-900 font-bold">사람의 판단을 더 명확하게 만들기 위해</span> 존재합니다.</p>
              <p>우리는 복잡한 기술을 숨기고, 직관적인 사용 경험을 드러냅니다.</p>
              <p className="text-slate-900 font-bold">누구나 이해할 수 있고, 설계할 수 있으며, 확장할 수 있는 플랫폼. <br />그것이 우리가 추구하는 기술의 모습입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Future: The Dream */}
      <section className="py-40 px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex justify-center mb-8">
            <Target className="text-purple-600" size={48} />
          </div>
          <h3 className="text-3xl lg:text-6xl font-black text-slate-900 tracking-tight break-keep leading-[1.35]">
            우리가 꿈꾸는 미래
          </h3>
          <div className="space-y-10 text-xl lg:text-3xl text-slate-500 font-medium leading-[1.8] break-keep">
            <p>우리는 기업이 더 이상 툴을 배우는 데 시간을 쓰지 않고, <br /> 자신의 방향을 설계하는 데 시간을 쓰는 세상을 꿈꿉니다.</p>
            <p className="text-slate-900 font-black">흩어진 시스템을 연결하고, 데이터가 자연스럽게 흐르며,<br /> 사람의 판단이 더 강해지는 환경.</p>
            <p className="text-purple-600 font-black">DataCraft AI는 그 변화를 만드는 기반 기술이 되겠습니다.</p>
          </div>
        </div>
      </section>

      {/* 6. Trust: Certificates */}
      <section className="py-40 bg-slate-50/50">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.45]">지식재산과 기술 인증</h2>
            </div>
            <p className="text-xl text-slate-400 font-medium max-w-md leading-relaxed">DataCraft AI의 진심은 공식적인 기록으로 남습니다.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="group">
                <div className="relative w-full aspect-[3/4] bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:border-purple-200 p-4">
                  <img src={cert.img} alt={cert.title} className="w-full h-full object-contain transition-all duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm shadow-sm p-2.5 rounded-xl border border-slate-100">
                    {cert.category === "특허증" ? <FileText size={18} className="text-purple-600" /> : <Award size={18} className="text-purple-600" />}
                  </div>
                </div>
                <div className="mt-6 text-center px-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">{cert.category}</span>
                  <p className="text-sm font-bold text-slate-700 group-hover:text-purple-600 transition-colors leading-relaxed">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
