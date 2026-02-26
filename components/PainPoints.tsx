
import React from 'react';
import { Layout, ShieldAlert, Cpu } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Layout className="text-rose-500" size={40} />,
      title: "협업의 단절",
      desc: "이메일, 메신저, 엑셀에 흩어진 데이터들. 이제 하나의 공유된 보드에서 실시간으로 소통하고 결론을 내리세요."
    },
    {
      icon: <ShieldAlert className="text-amber-500" size={40} />,
      title: "경직된 시스템",
      desc: "고정된 기능의 SaaS는 우리 팀의 성장을 방해합니다. 필요할 때마다 필드를 추가하고 뷰를 바꾸는 유연함을 경험하세요."
    },
    {
      icon: <Cpu className="text-blue-500" size={40} />,
      title: "비효율적 반복 업무",
      desc: "단순 반복 작업은 AI에게 맡기세요. 데이터 상태 변화에 따른 자동 알림과 업무 할당으로 핵심에 집중할 수 있습니다."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        {/* Social Proof Bar */}
        <div className="text-center mb-32">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-12">전 세계 200,000개 이상의 혁신 기업이 선택했습니다</p>
          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-2xl lg:text-3xl font-black tracking-tighter">Hulu</span>
            <span className="text-2xl lg:text-3xl font-black tracking-tighter">Canva</span>
            <span className="text-2xl lg:text-3xl font-black tracking-tighter">CocaCola</span>
            <span className="text-2xl lg:text-3xl font-black tracking-tighter">Lionsgate</span>
            <span className="text-2xl lg:text-3xl font-black tracking-tighter">BD</span>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">팀의 잠재력을 가로막는 장애물을 제거하세요</h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">우리는 도구의 한계가 아닌, 상상력의 한계에 도전합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((point, idx) => (
            <div key={idx} className="p-12 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{point.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
