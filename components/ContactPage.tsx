
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, ChevronDown, Loader2, CheckCircle2 } from 'lucide-react';
import { Language } from '../App';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '비즈니스 도입 문의',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(language === 'ko' ? '모든 필수 항목(*)을 입력해주세요.' : 'Please fill in all required fields (*).');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.type,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', type: '비즈니스 도입 문의', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };
  const t = {
    badge: "Get in Touch",
    title: language === 'ko' ? "전문가에게 문의하세요" : "Contact Our Experts",
    desc: language === 'ko' 
      ? "비즈니스 혁신을 위한 첫 걸음, DataCraft AI가 함께합니다. 궁금하신 사항을 남겨주시면 담당 전문가가 24시간 이내에 답변 드립니다." 
      : "The first step for innovation, DataCraft AI is here. Leave your inquiry and our experts will respond within 24 hours.",
    cardTitle: language === 'ko' ? "데이터 혁신을 지금 시작하세요" : "Start Data Innovation Now",
    cardDesc: language === 'ko' ? "기업 데이터 통합과 맞춤형 빌더 구축에 대해 궁금하신 점이 있으신가요? 전문가가 직접 답변해 드립니다." : "Questions about enterprise data integration or custom builders? Our experts provide direct answers.",
    supportHours: language === 'ko' ? "평일 09:00 - 18:00 (주말 및 공휴일 제외)" : "Mon-Fri 09:00 - 18:00 (KST)",
    labelName: language === 'ko' ? "성함 *" : "Name *",
    labelEmail: language === 'ko' ? "회사 이메일 *" : "Work Email *",
    labelType: language === 'ko' ? "문의 유형" : "Inquiry Type",
    labelContent: language === 'ko' ? "문의 내용 *" : "Message *",
    btnSend: language === 'ko' ? "메시지 전송하기" : "Send Message",
    faqTitle: language === 'ko' ? "자주 묻는 질문" : "FAQ",
    faqDesc: language === 'ko' ? "문의 전 FAQ를 확인하시면 더 빠르게 도움을 받으실 수 있습니다." : "Check our FAQ for quick answers before contacting us.",
  };

  const faqs = language === 'ko' ? [
    { 
      q: "DataCraft AI는 어떤 기업에 적합한가요?", 
      a: "소규모, 스타트업부터 중견·대기업까지 규모와 산업에 관계없이 데이터를 체계적으로 통합하고 맞춤형 업무 시스템을 구축하고자 하는 모든 기업에 적합합니다." 
    },
    { 
      q: "무료 체험 기간은 어떻게 되나요?", 
      a: "DataCraft AI는 기본 기능을 제한없이 사용할 수 있는 Free 플랜을 제공합니다. 또한, 고급 비지니스 기능은 14일간 무료로 체험하실 수 있으며, 체험 기간 동안 모든 핵심 기능을 자유롭게 이용해보실 수 있습니다." 
    }
  ] : [
    { q: "Which companies is DataCraft AI suitable for?", a: "Suitable for organizations of all sizes, from startups to enterprises, looking to integrate scattered data." },
    { q: "How long is the free trial period?", a: "We offer a 'Free Forever' plan for basic features, and a 14-day free trial for business features." }
  ];

  const options = language === 'ko' 
    ? ["비즈니스 도입 문의", "기술 지원 문의", "제휴 제안", "기타"]
    : ["Business Sales", "Technical Support", "Partnership", "Other"];

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700 bg-white">
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-[0.2em] mb-8">{t.badge}</div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.3]">{t.title}</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed break-keep font-medium">{t.desc}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative border border-slate-800">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />
            <div className="flex-1 p-12 lg:p-20 relative z-10">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight leading-snug whitespace-nowrap">{t.cardTitle}</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">{t.cardDesc}</p>
              <div className="space-y-8">
                <div className="flex items-center gap-5 group"><div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-purple-400"><Mail size={28} /></div><div><p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Email</p><p className="text-white text-lg font-bold">help@funshare.co.kr</p></div></div>
                <div className="flex items-center gap-5 group"><div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-purple-400"><MapPin size={28} /></div><div><p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Office</p><p className="text-white text-lg font-bold">{language === 'ko' ? "대구광역시 달서구 성서공단북로 156, 402호" : "Dalseo-gu, Daegu"}</p></div></div>
              </div>
              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10"><div className="flex items-center gap-3 text-purple-400 mb-2"><Clock size={20} /><span className="font-bold text-sm uppercase tracking-wider">Support Hours</span></div><p className="text-slate-400 text-sm">{t.supportHours}</p></div>
            </div>
            <div className="flex-1 bg-white/[0.02] backdrop-blur-md p-12 lg:p-20 border-l border-white/5 relative z-10">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {language === 'ko' ? '문의가 성공적으로 접수되었습니다' : 'Message Sent Successfully'}
                  </h3>
                  <p className="text-slate-400 mb-8">
                    {language === 'ko' ? '담당자가 확인 후 빠른 시일 내에 답변 드리겠습니다.' : 'Our team will get back to you as soon as possible.'}
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all"
                  >
                    {language === 'ko' ? '새로운 문의하기' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">{t.labelName}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">{t.labelEmail}</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">{t.labelType}</label>
                    <div className="relative">
                      <select 
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 appearance-none transition-all"
                      >
                        {options.map((opt, i) => <option key={i} value={opt} className="bg-slate-900">{opt}</option>)}
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">{t.labelContent}</label>
                    <textarea 
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-purple-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-purple-700 transition-all shadow-xl shadow-purple-900/40 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        {language === 'ko' ? '전송 중...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        {t.btnSend}
                        <Send size={20} />
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-rose-400 text-sm text-center font-bold">
                      {language === 'ko' ? '전송에 실패했습니다. 잠시 후 다시 시도해주세요.' : 'Failed to send. Please try again later.'}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16"><h2 className="text-3xl font-black text-slate-900 mb-4">{t.faqTitle}</h2><p className="text-slate-500 font-medium">{t.faqDesc}</p></div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"><h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3"><span className="text-purple-600 font-black">Q.</span>{faq.q}</h4><p className="text-slate-600 leading-relaxed font-medium pl-8">{faq.a}</p></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
