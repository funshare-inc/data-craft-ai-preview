
import React, { useState } from 'react';
import Header from './components/Header';
import { Language } from './types';
import { translations } from './translations';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ko'); // Default to Korean as per request context

  const t = translations[language];

  // Visual component for the 4 Builders in Section 6
  const BuilderVisuals = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
      
      {/* 1. Layout Builder */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all group h-[320px] flex flex-col">
        <div className="flex-1 bg-gray-50 rounded-xl mb-6 border border-gray-100 relative overflow-hidden p-4 flex flex-col gap-3">
           <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
           
           {/* Top Bar */}
           <div className="h-6 w-full bg-white border border-gray-200 rounded-md shadow-sm flex items-center px-2">
             <div className="w-12 h-2 bg-gray-200 rounded"></div>
           </div>

           <div className="flex-1 flex gap-3 relative">
              {/* Sidebar */}
              <div className="w-1/4 h-full bg-white border border-gray-200 rounded-md shadow-sm"></div>
              
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-3">
                  {/* Resizing Widget Simulation */}
                  <div className="h-1/2 bg-white border border-brand-200 rounded-md shadow-sm flex items-center justify-center relative overflow-hidden animate-layout-shift">
                      <div className="absolute inset-0 bg-brand-50 opacity-50"></div>
                      <span className="relative text-[10px] text-brand-600 font-bold bg-white px-2 py-1 rounded shadow-sm">Main Widget</span>
                      {/* Resize Handles */}
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-brand-400 cursor-ew-resize"></div>
                  </div>
                  
                  <div className="flex-1 flex gap-3">
                      <div className="flex-1 bg-white border border-gray-200 rounded-md shadow-sm"></div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-md shadow-sm"></div>
                  </div>
              </div>

              {/* Fake Cursor */}
              <div className="absolute top-[30%] right-[30%] w-4 h-4 z-10 pointer-events-none transform translate-x-1/2 translate-y-1/2 animate-bounce">
                  <svg viewBox="0 0 24 24" fill="black" className="w-full h-full drop-shadow-md">
                      <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4z"/>
                  </svg>
              </div>
           </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.section6.builders.layout.title}</h3>
        <p className="text-gray-500">{t.section6.builders.layout.desc}</p>
      </div>

      {/* 2. Form Builder */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all group h-[320px] flex flex-col">
        <div className="flex-1 bg-gray-50 rounded-xl mb-6 border border-gray-100 relative overflow-hidden p-4 flex gap-4">
           {/* Form Canvas */}
           <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-4 space-y-3 relative">
               <div className="text-[10px] text-gray-400 font-bold uppercase mb-2">Registration Form</div>
               <div className="h-8 w-full border border-gray-200 rounded bg-gray-50/50 flex items-center px-2 text-[10px] text-gray-400">Name</div>
               <div className="h-8 w-full border border-gray-200 rounded bg-gray-50/50 flex items-center px-2 text-[10px] text-gray-400">Email</div>
               
               {/* Dropping Element */}
               <div className="h-8 w-full border-2 border-dashed border-brand-400 bg-brand-50 rounded flex items-center justify-center animate-form-drop relative z-10">
                   <span className="text-[10px] font-bold text-brand-600">Department (Dropdown)</span>
               </div>
               
               <div className="h-8 w-1/3 bg-brand-600 rounded flex items-center justify-center text-white text-[10px] font-bold mt-4 shadow-md shadow-brand-200">Submit</div>
           </div>

           {/* Tool Palette */}
           <div className="w-16 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center py-3 gap-2">
               <div className="w-10 h-8 bg-gray-100 rounded border border-gray-200"></div>
               <div className="w-10 h-8 bg-gray-100 rounded border border-gray-200"></div>
               <div className="w-10 h-8 bg-brand-100 border border-brand-300 rounded shadow-inner"></div>
               <div className="w-10 h-8 bg-gray-100 rounded border border-gray-200"></div>
           </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.section6.builders.form.title}</h3>
        <p className="text-gray-500">{t.section6.builders.form.desc}</p>
      </div>

      {/* 3. DataView Builder */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all group h-[320px] flex flex-col">
         <div className="flex-1 bg-gray-50 rounded-xl mb-6 border border-gray-100 relative overflow-hidden p-3">
            
            {/* View 1: Data Grid (Detailed) */}
            <div className="absolute inset-3 bg-white rounded-lg border border-gray-200 flex flex-col shadow-sm animate-view-cycle-1 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-100 p-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-100"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-100"></div>
                </div>
                <div className="p-2">
                    <table className="w-full text-[8px] text-left">
                        <thead className="text-gray-400 border-b border-gray-100">
                            <tr><th className="pb-1">ID</th><th className="pb-1">Name</th><th className="pb-1">Status</th><th className="pb-1">Date</th></tr>
                        </thead>
                        <tbody className="text-gray-600">
                            <tr className="border-b border-gray-50"><td className="py-1">#1024</td><td>P-Valve</td><td className="text-green-600">Active</td><td>2024-03-01</td></tr>
                            <tr className="border-b border-gray-50"><td className="py-1">#1025</td><td>Sensor-A</td><td className="text-red-600">Error</td><td>2024-03-02</td></tr>
                            <tr className="border-b border-gray-50"><td className="py-1">#1026</td><td>Motor-X</td><td className="text-blue-600">Check</td><td>2024-03-02</td></tr>
                            <tr><td className="py-1">#1027</td><td>Belt-V2</td><td className="text-green-600">Active</td><td>2024-03-03</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-gray-800 text-white rounded text-[10px] font-bold shadow-lg">Grid View</div>
            </div>

            {/* View 2: Gantt Chart */}
            <div className="absolute inset-3 bg-white rounded-lg border border-gray-200 flex flex-col shadow-sm animate-view-cycle-2 opacity-0 overflow-hidden">
                <div className="flex h-full">
                    <div className="w-1/4 border-r border-gray-100 bg-gray-50/50 p-2 flex flex-col gap-3 text-[8px] font-bold text-gray-600 pt-6">
                        <div>Design</div>
                        <div>Dev</div>
                        <div>Test</div>
                    </div>
                    <div className="flex-1 relative bg-white p-2">
                        {/* Timeline Grid */}
                        <div className="absolute inset-0 flex justify-between px-2 pt-2 opacity-10">
                            <div className="w-px h-full bg-black"></div>
                            <div className="w-px h-full bg-black"></div>
                            <div className="w-px h-full bg-black"></div>
                            <div className="w-px h-full bg-black"></div>
                        </div>
                        {/* Bars */}
                        <div className="mt-4 ml-2 w-16 h-4 bg-blue-100 border border-blue-200 rounded flex items-center px-1 text-[7px] text-blue-700 shadow-sm">Plan</div>
                        <div className="mt-2 ml-10 w-24 h-4 bg-brand-100 border border-brand-200 rounded flex items-center px-1 text-[7px] text-brand-700 shadow-sm">Implementation</div>
                        <div className="mt-2 ml-28 w-12 h-4 bg-green-100 border border-green-200 rounded flex items-center px-1 text-[7px] text-green-700 shadow-sm">QA</div>
                    </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-brand-600 text-white rounded text-[10px] font-bold shadow-lg">Gantt View</div>
            </div>

            {/* View 3: Kanban Board */}
            <div className="absolute inset-3 bg-white rounded-lg border border-gray-200 flex p-2 gap-2 shadow-sm animate-view-cycle-3 opacity-0 overflow-hidden bg-gray-50">
                <div className="flex-1 flex flex-col gap-2">
                    <div className="text-[8px] font-bold text-gray-500 uppercase">To Do</div>
                    <div className="bg-white p-2 rounded border border-gray-200 shadow-sm text-[8px]">
                        <div className="font-bold text-gray-800 mb-1">UI Design</div>
                        <div className="h-1 w-8 bg-red-100 rounded"></div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 shadow-sm text-[8px]">
                        <div className="font-bold text-gray-800 mb-1">DB Setup</div>
                        <div className="h-1 w-6 bg-blue-100 rounded"></div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <div className="text-[8px] font-bold text-gray-500 uppercase">In Progress</div>
                    <div className="bg-white p-2 rounded border border-gray-200 shadow-sm text-[8px]">
                        <div className="font-bold text-gray-800 mb-1">API Dev</div>
                        <div className="h-1 w-10 bg-yellow-100 rounded"></div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-2 opacity-50">
                    <div className="text-[8px] font-bold text-gray-500 uppercase">Done</div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-orange-500 text-white rounded text-[10px] font-bold shadow-lg">Kanban View</div>
            </div>

            {/* View 4: Chart Dashboard */}
            <div className="absolute inset-3 bg-white rounded-lg border border-gray-200 flex flex-col p-3 shadow-sm animate-view-cycle-4 opacity-0 overflow-hidden">
                <div className="flex items-end justify-between h-3/4 px-4 pb-2 border-b border-gray-200 gap-2">
                    <div className="w-full bg-brand-100 rounded-t h-[40%] relative group">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-gray-500 opacity-0 group-hover:opacity-100">40%</div>
                    </div>
                    <div className="w-full bg-brand-300 rounded-t h-[70%] relative group">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-gray-500 opacity-0 group-hover:opacity-100">70%</div>
                    </div>
                    <div className="w-full bg-brand-500 rounded-t h-[55%] relative group">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-gray-500 opacity-0 group-hover:opacity-100">55%</div>
                    </div>
                    <div className="w-full bg-brand-600 rounded-t h-[90%] relative group">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-gray-500 opacity-0 group-hover:opacity-100">90%</div>
                    </div>
                </div>
                <div className="mt-2 flex justify-between px-4 text-[8px] text-gray-400 font-bold uppercase">
                    <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-teal-500 text-white rounded text-[10px] font-bold shadow-lg">Chart View</div>
            </div>

         </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.section6.builders.dataview.title}</h3>
        <p className="text-gray-500">{t.section6.builders.dataview.desc}</p>
      </div>

      {/* 4. Relation Builder */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all group h-[320px] flex flex-col">
         <div className="flex-1 bg-gray-50 rounded-xl mb-6 border border-gray-100 flex items-center justify-center relative overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 200 120" className="text-gray-300">
               <defs>
                   <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                       <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-200"/>
                   </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#smallGrid)" />

               {/* Connections */}
               {/* 1. Gray -> Teal (Static) */}
               <line x1="60" y1="80" x2="100" y2="40" stroke="#9ca3af" strokeWidth="2" />
               {/* 2. Purple -> Teal (Animated) */}
               <line x1="140" y1="80" x2="100" y2="40" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4" className="animate-relation-link" />
               {/* 3. Gray -> Purple (Simulated New Connection) */}
               <line x1="60" y1="80" x2="140" y2="80" stroke="#d8b4fe" strokeWidth="2" strokeDasharray="4" className="animate-relation-link" style={{animationDelay: '2s'}} />

               {/* Node 1: Top (Teal) */}
               <g transform="translate(100, 40)">
                   <circle r="12" fill="white" stroke="#2dd4bf" strokeWidth="3" className="animate-pulse-node" />
                   <circle r="4" fill="#2dd4bf" />
               </g>

               {/* Node 2: Bottom Left (Gray) */}
               <g transform="translate(60, 80)">
                   <circle r="12" fill="white" stroke="#9ca3af" strokeWidth="3" />
                   <circle r="4" fill="#9ca3af" />
               </g>

               {/* Node 3: Bottom Right (Purple) */}
               <g transform="translate(140, 80)">
                   <circle r="12" fill="white" stroke="#8b5cf6" strokeWidth="3" className="animate-pulse-node" style={{animationDelay: '1s'}} />
                   <circle r="4" fill="#8b5cf6" />
               </g>

               {/* Simulation Particles */}
               <circle r="3" fill="#9ca3af">
                   <animateMotion dur="3s" repeatCount="indefinite" path="M 60 80 L 100 40" />
               </circle>
               <circle r="3" fill="#8b5cf6">
                   <animateMotion dur="3s" repeatCount="indefinite" path="M 140 80 L 100 40" begin="1s" />
               </circle>
            </svg>
            <div className="absolute top-2 left-2 px-2 py-1 bg-white border border-gray-200 rounded shadow-sm">
                <div className="flex items-center gap-1 text-[8px] font-bold text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                    Auto-Mapping...
                </div>
            </div>
         </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.section6.builders.relation.title}</h3>
        <p className="text-gray-500">{t.section6.builders.relation.desc}</p>
      </div>
    </div>
  );

  // Helper for Section 8 Poster Visuals (Using Detailed Vector Style as per user preference from context)
  const FeedVisual = ({ index }: { index: number }) => {
     // 0: Excel Hell (Manager Kim) - Detailed Vector
     if (index === 0) return (
         <div className="w-full h-full bg-[#E8F5E9] flex flex-col items-center justify-center relative p-8 gap-4">
             <div className="flex items-center gap-4">
                 <div className="w-20 h-24 bg-[#1D6F42] rounded-lg shadow-xl flex items-center justify-center text-white text-4xl font-bold">X</div>
                 <div className="text-red-500 text-6xl font-black">X</div>
                 <div className="w-24 h-20 bg-gray-800 rounded-lg shadow-xl flex items-center justify-center text-gray-400">
                     <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>
                 </div>
             </div>
             <div className="text-[#1B5E20] text-3xl font-black text-center leading-tight mt-2 drop-shadow-sm">
                 엑셀 지옥<br/>탈출하세요
             </div>
         </div>
     );
     // 1: IT Team Leader (Distributed Solutions)
     if (index === 1) return (
         <div className="w-full h-full bg-[#E3F2FD] flex flex-col items-center justify-center p-6 overflow-hidden relative">
             <div className="absolute top-4 left-4 w-16 h-16 bg-blue-100 rounded-lg border-2 border-blue-200 flex items-center justify-center text-blue-800 font-bold rotate-12 opacity-50">ERP</div>
             <div className="absolute bottom-12 right-6 w-16 h-16 bg-indigo-100 rounded-lg border-2 border-indigo-200 flex items-center justify-center text-indigo-800 font-bold -rotate-6 opacity-50">MES</div>
             
             <div className="relative z-10 flex flex-col items-center gap-4">
                 <div className="text-6xl">🤯</div>
                 <div className="text-[#0D47A1] text-3xl font-black text-center leading-tight drop-shadow-sm">
                     복잡한 관리<br/>이제 그만
                 </div>
             </div>
         </div>
     );
     // 2: Sales (Inventory)
     if (index === 2) return (
         <div className="w-full h-full bg-[#FFF3E0] flex flex-col items-center justify-center gap-4">
             <div className="w-32 h-32 rounded-full border-4 border-[#FF9800] flex items-center justify-center bg-white relative">
                 <svg className="w-16 h-16 text-[#E65100]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                 <div className="absolute top-0 right-0 w-10 h-10 bg-[#00C853] rounded-full flex items-center justify-center text-white border-4 border-white">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
             </div>
             <div className="text-[#E65100] text-3xl font-black text-center leading-tight drop-shadow-sm">
                 데이터 불일치<br/>해결완료
             </div>
         </div>
     );
     // 3: Planner (UI)
     if (index === 3) return (
         <div className="w-full h-full bg-[#F3E5F5] flex flex-col items-center justify-center p-8 gap-4">
             <div className="flex gap-4 opacity-80">
                 <div className="w-16 h-24 bg-white border-2 border-gray-200 rounded-lg"></div>
                 <div className="w-20 h-32 bg-[#7B1FA2] rounded-xl shadow-xl flex flex-col items-center p-2 relative">
                     <div className="w-10 h-2 bg-white/20 rounded mb-2"></div>
                     <div className="w-full flex-1 bg-white rounded-lg"></div>
                 </div>
             </div>
             <div className="text-[#4A148C] text-3xl font-black text-center leading-tight drop-shadow-sm">
                 클릭으로<br/>화면 수정
             </div>
         </div>
     );
     // 4: CEO (Dashboard)
     if (index === 4) return (
         <div className="w-full h-full bg-[#FAFAFA] flex flex-col items-center justify-center p-8 gap-4">
             <div className="flex items-end gap-2 h-24 opacity-80">
                 <div className="w-8 h-12 bg-gray-300 rounded-t"></div>
                 <div className="w-8 h-16 bg-gray-400 rounded-t"></div>
                 <div className="w-8 h-24 bg-[#212121] rounded-t relative"></div>
             </div>
             <div className="text-[#212121] text-3xl font-black text-center leading-tight drop-shadow-sm">
                 경영 현황<br/>실시간 파악
             </div>
         </div>
     );
     // 5: Startup (Money)
     if (index === 5) return (
         <div className="w-full h-full bg-[#FFEBEE] flex flex-col items-center justify-center gap-2">
             <div className="text-8xl mb-2">💰</div>
             <div className="text-[#B71C1C] text-3xl font-black text-center leading-tight drop-shadow-sm">
                 개발 비용<br/>획기적 절감
             </div>
         </div>
     );
     return null;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none grid-bg">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-200/20 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-500/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <Header language={language} setLanguage={setLanguage} />
        
        <main className="mt-12 space-y-32 pb-32">
          
          {/* SECTION 1: Problem Cards & Insight */}
          <section id="section1" className="scroll-mt-24">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.section1.title}</h2>
               <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* 1. Problem Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center group">
                        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                            📊
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{t.section1.cards.card1.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{t.section1.cards.card1.desc}</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center group">
                         <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                            🧩
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{t.section1.cards.card2.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{t.section1.cards.card2.desc}</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center group">
                        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                            💰
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{t.section1.cards.card3.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{t.section1.cards.card3.desc}</p>
                    </div>
                </div>

                {/* 2. Insight Block */}
                <div className="bg-gray-900 rounded-3xl p-10 md:p-14 text-center text-white mb-10 relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 z-0"></div>
                     <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>
                     <div className="relative z-10">
                         <h3 className="text-2xl md:text-3xl font-bold leading-normal">
                            {t.section1.insight}
                         </h3>
                     </div>
                </div>

                {/* 3. Pre-CTA */}
                <div className="text-center animate-fade-in mb-16">
                    <p className="text-xl md:text-2xl font-bold text-brand-600">
                        {t.section1.preCta}
                    </p>
                    <div className="mt-6">
                        <svg className="w-8 h-8 text-brand-400 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </div>
                </div>

                {/* 4. Solution Block */}
                <div className="mt-16 bg-white rounded-3xl border-2 border-brand-500 p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
                    {/* Tag */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-widest uppercase mb-6">
                        {t.section1.solutionBlock.tag}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {t.section1.solutionBlock.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12 leading-relaxed">
                        {t.section1.solutionBlock.desc}
                    </p>

                    {/* Formula Visualization */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                        {/* Custom Fit */}
                        <div className="flex flex-col items-center gap-3 group">
                            <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shadow-sm border border-gray-200 group-hover:border-brand-200 group-hover:text-brand-500 transition-colors">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                            </div>
                            <span className="text-sm font-bold text-gray-500 group-hover:text-brand-600 transition-colors">{t.section1.solutionBlock.customFit}</span>
                        </div>
                        {/* Plus */}
                        <div className="flex flex-col items-center justify-center h-20">
                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </div>
                        {/* Low Cost */}
                        <div className="flex flex-col items-center gap-3 group">
                            <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shadow-sm border border-gray-200 group-hover:border-brand-200 group-hover:text-brand-500 transition-colors">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="text-sm font-bold text-gray-500 group-hover:text-brand-600 transition-colors">{t.section1.solutionBlock.lowCost}</span>
                        </div>
                        {/* Equals */}
                        <div className="flex flex-col items-center justify-center h-20">
                             <svg className="hidden md:block w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                             <svg className="md:hidden w-8 h-8 text-brand-400 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                        {/* Builder */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-24 h-24 bg-brand-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-xl shadow-brand-500/30 border-4 border-brand-100 ring-4 ring-brand-50 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-700 to-brand-500"></div>
                                <svg className="w-10 h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <span className="text-base font-bold text-brand-700 uppercase tracking-wide">{t.section1.solutionBlock.builder}</span>
                        </div>
                    </div>
                </div>

            </div>
          </section>

          {/* SECTION 2: Problem (Data Silos & Convergence) */}
          <section id="section2" className="scroll-mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.section2.title}</h2>
            </div>
            
            <div className="bg-gray-900 rounded-3xl p-8 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[600px] shadow-2xl">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                {/* Central Hub (Unified System) */}
                <div className="relative z-20 w-40 h-40 bg-brand-600 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(124,58,237,0.6)] animate-pulse">
                    <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-0 border-4 border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] scale-110"></div>
                    <div className="text-center">
                        <span className="text-white font-bold text-2xl block">AI Core</span>
                        <span className="text-brand-200 text-xs font-mono">Unified</span>
                    </div>
                </div>

                {/* Orbiting Data Nodes */}
                {/* 1. ERP */}
                <div className="absolute top-[20%] left-[20%] animate-[float_6s_ease-in-out_infinite]">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-gray-800 rounded-xl border-2 border-gray-600 flex items-center justify-center text-gray-300 font-bold shadow-lg relative group">
                            ERP
                            <div className="absolute -bottom-2 px-2 py-0.5 bg-gray-700 rounded text-[10px] text-gray-400 border border-gray-600">Finance</div>
                        </div>
                    </div>
                </div>
                {/* 2. MES */}
                <div className="absolute bottom-[20%] right-[20%] animate-[float_5s_ease-in-out_infinite_1s]">
                    <div className="flex flex-col items-center gap-2">
                         <div className="w-20 h-20 bg-gray-800 rounded-xl border-2 border-gray-600 flex items-center justify-center text-gray-300 font-bold shadow-lg relative">
                            MES
                            <div className="absolute -bottom-2 px-2 py-0.5 bg-gray-700 rounded text-[10px] text-gray-400 border border-gray-600">Factory</div>
                         </div>
                    </div>
                </div>
                {/* 3. Excel */}
                 <div className="absolute top-[25%] right-[15%] animate-[float_7s_ease-in-out_infinite_2s]">
                    <div className="flex flex-col items-center gap-2">
                         <div className="w-16 h-16 bg-green-900/40 rounded-xl border border-green-700 flex items-center justify-center text-green-100 font-bold text-sm shadow-lg backdrop-blur-sm">
                            Excel
                         </div>
                    </div>
                </div>
                {/* 4. Legacy */}
                 <div className="absolute bottom-[25%] left-[15%] animate-[float_4s_ease-in-out_infinite_0.5s]">
                    <div className="flex flex-col items-center gap-2">
                         <div className="w-16 h-16 bg-gray-800 rounded-xl border border-gray-600 flex items-center justify-center text-gray-400 font-bold text-sm shadow-lg">
                            Legacy
                         </div>
                    </div>
                </div>
                {/* 5. CRM */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 animate-[float_8s_ease-in-out_infinite_1.5s]">
                    <div className="flex flex-col items-center gap-2">
                         <div className="w-16 h-16 bg-blue-900/40 rounded-xl border border-blue-700 flex items-center justify-center text-blue-100 font-bold text-sm shadow-lg backdrop-blur-sm relative">
                            CRM
                         </div>
                    </div>
                </div>
                {/* 6. IoT */}
                <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 animate-[float_6s_ease-in-out_infinite_2.5s]">
                    <div className="flex flex-col items-center gap-2">
                         <div className="w-16 h-16 bg-orange-900/40 rounded-xl border border-orange-700 flex items-center justify-center text-orange-100 font-bold text-sm shadow-lg backdrop-blur-sm relative">
                            IoT
                         </div>
                    </div>
                </div>
                 {/* 7. Cloud */}
                 <div className="absolute top-1/2 right-[10%] -translate-y-1/2 animate-[float_9s_ease-in-out_infinite_0.8s]">
                    <div className="flex flex-col items-center gap-2">
                         <div className="w-14 h-14 bg-purple-900/40 rounded-full border border-purple-700 flex items-center justify-center text-purple-100 font-bold text-xs shadow-lg backdrop-blur-sm">
                            Cloud
                         </div>
                    </div>
                </div>
                {/* 8. Docs */}
                 <div className="absolute top-1/2 left-[10%] -translate-y-1/2 animate-[float_5s_ease-in-out_infinite_3s]">
                    <div className="flex flex-col items-center gap-2">
                         <div className="w-14 h-14 bg-gray-800 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 font-bold text-xs shadow-lg">
                            Docs
                         </div>
                    </div>
                </div>

                {/* Connecting Lines (SVG) with Animated Arrows */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
                        </marker>
                    </defs>
                    
                    {/* Paths for convergence */}
                    <path d="M 25% 25% L 50% 50%" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" strokeDasharray="6,6" />
                    <circle r="4" fill="#a78bfa"><animateMotion dur="3s" repeatCount="indefinite" path="M 25% 25% L 50% 50%" /></circle>
                    
                    <path d="M 75% 75% L 50% 50%" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" strokeDasharray="6,6" />
                     <circle r="4" fill="#a78bfa"><animateMotion dur="2.5s" repeatCount="indefinite" path="M 75% 75% L 50% 50%" /></circle>

                    <path d="M 80% 30% L 50% 50%" stroke="rgba(124,58,237,0.3)" strokeWidth="1" strokeDasharray="4,4" />
                     <circle r="3" fill="#a78bfa"><animateMotion dur="4s" repeatCount="indefinite" path="M 80% 30% L 50% 50%" /></circle>

                    <path d="M 20% 70% L 50% 50%" stroke="rgba(124,58,237,0.3)" strokeWidth="1" strokeDasharray="4,4" />
                     <circle r="3" fill="#a78bfa"><animateMotion dur="3.5s" repeatCount="indefinite" path="M 20% 70% L 50% 50%" /></circle>

                    <path d="M 50% 20% L 50% 50%" stroke="rgba(124,58,237,0.3)" strokeWidth="1" strokeDasharray="4,4" />
                     <circle r="3" fill="#60a5fa"><animateMotion dur="3.2s" repeatCount="indefinite" path="M 50% 20% L 50% 50%" /></circle>

                    <path d="M 50% 80% L 50% 50%" stroke="rgba(124,58,237,0.3)" strokeWidth="1" strokeDasharray="4,4" />
                     <circle r="3" fill="#fdba74"><animateMotion dur="2.8s" repeatCount="indefinite" path="M 50% 80% L 50% 50%" /></circle>

                    <path d="M 85% 50% L 50% 50%" stroke="rgba(124,58,237,0.3)" strokeWidth="1" strokeDasharray="4,4" />
                     <circle r="3" fill="#d8b4fe"><animateMotion dur="3.8s" repeatCount="indefinite" path="M 85% 50% L 50% 50%" /></circle>

                    <path d="M 15% 50% L 50% 50%" stroke="rgba(124,58,237,0.3)" strokeWidth="1" strokeDasharray="4,4" />
                     <circle r="3" fill="#9ca3af"><animateMotion dur="4.2s" repeatCount="indefinite" path="M 15% 50% L 50% 50%" /></circle>
                </svg>

            </div>
          </section>

          {/* SECTION 5 (INTEGRATED WORKFLOW): Replaces old Section 4 & 5 */}
          <section id="section5" className="scroll-mt-24">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-gray-900">{t.section5.title}</h2>
                 <p className="text-gray-500 mt-2">{t.section5.subtitle}</p>
             </div>
             
             {/* Integrated Workflow Container (Dark Purple) */}
             <div className="bg-[#2e1065] rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden max-w-7xl mx-auto border border-[#4c1d95]">
                 {/* Background Glows */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/20 blur-[100px] rounded-full"></div>
                 <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-500/20 blur-[100px] rounded-full"></div>

                 <div className="relative z-10 flex flex-col gap-12">
                     
                     {/* STEP 1: Top Center */}
                     <div className="flex justify-center">
                         <div className="bg-[#4c1d95]/50 backdrop-blur-sm border border-[#6d28d9] rounded-2xl p-8 max-w-lg w-full text-center relative group hover:border-brand-400 transition-colors">
                             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8b5cf6] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">{t.section5.step1.tag}</div>
                             <div className="mb-4 flex justify-center">
                                 {/* Dynamic Scanning Animation */}
                                 <div className="relative w-20 h-24 bg-white/10 rounded-lg border border-white/20 overflow-hidden flex flex-col gap-2 p-3 group-hover:border-brand-400 transition-colors">
                                    {/* Doc Lines */}
                                    <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                                    <div className="w-full h-2 bg-white/20 rounded"></div>
                                    <div className="w-5/6 h-2 bg-white/20 rounded"></div>
                                    <div className="w-full h-2 bg-white/20 rounded"></div>
                                    <div className="w-2/3 h-2 bg-white/20 rounded"></div>
                                    
                                    {/* Scanning Beam */}
                                    <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-400 to-transparent shadow-[0_0_15px_rgba(167,139,250,0.8)] animate-scan"></div>
                                 </div>
                             </div>
                             <h3 className="text-xl font-bold text-white mb-2">{t.section5.step1.title}</h3>
                             <p className="text-brand-100 text-sm leading-relaxed">{t.section5.step1.desc}</p>
                         </div>
                     </div>

                     {/* Connecting Arrow Down */}
                     <div className="flex justify-center -my-6">
                         <div className="w-px h-16 bg-gradient-to-b from-[#6d28d9] to-[#8b5cf6]"></div>
                         <div className="absolute mt-14 w-3 h-3 bg-[#8b5cf6] rounded-full animate-pulse shadow-[0_0_10px_#8b5cf6]"></div>
                     </div>

                     {/* Bottom Row: Step 2 & Step 3 */}
                     <div className="grid lg:grid-cols-2 gap-8 items-stretch relative">
                         
                         {/* STEP 2: Left (MCP Server) */}
                         <div className="bg-[#4c1d95]/30 backdrop-blur-sm border border-[#5b21b6] rounded-2xl p-6 relative group hover:border-brand-500 transition-colors flex flex-col">
                             <div className="absolute top-4 right-4 text-[#8b5cf6] text-xs font-bold">{t.section5.step2.tag}</div>
                             <div className="flex items-center gap-4 mb-6">
                                 <div className="w-10 h-10 bg-[#7c3aed] rounded-lg flex items-center justify-center text-white">
                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" /></svg>
                                 </div>
                                 <div>
                                     <h3 className="text-lg font-bold text-white">{t.section5.step2.title}</h3>
                                     <p className="text-brand-200 text-xs">{t.section5.step2.desc}</p>
                                 </div>
                             </div>
                             
                             <div className="flex-1 bg-[#1e1b4b]/50 rounded-xl border border-[#4c1d95] p-4 relative min-h-[200px] flex items-center justify-center overflow-hidden group-hover:border-brand-500/50 transition-colors">
                                {/* Background Radial Gradient */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]"></div>

                                {/* Orbiting Ring Container */}
                                <div className="relative w-48 h-48 animate-[spin_15s_linear_infinite]">
                                    {/* Dashed Orbit Path */}
                                    <div className="absolute inset-0 rounded-full border border-dashed border-brand-500/30"></div>
                                    
                                    {/* Node 1: ERP (Top) */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg border border-blue-400 animate-[spin_15s_linear_infinite_reverse]">
                                            ERP
                                        </div>
                                    </div>

                                    {/* Node 2: DB (Right) */}
                                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                                        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg border border-orange-400 animate-[spin_15s_linear_infinite_reverse]">
                                            DB
                                        </div>
                                    </div>

                                    {/* Node 3: MES (Bottom) */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg border border-green-400 animate-[spin_15s_linear_infinite_reverse]">
                                            MES
                                        </div>
                                    </div>

                                    {/* Node 4: API (Left) */}
                                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg border border-gray-400 animate-[spin_15s_linear_infinite_reverse]">
                                            API
                                        </div>
                                    </div>
                                </div>

                                {/* Central AI Agent */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.6)] z-10">
                                    <div className="absolute inset-0 bg-brand-400/20 animate-ping rounded-2xl"></div>
                                    <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    <div className="absolute -bottom-6 text-[10px] font-bold text-brand-300 tracking-wider">AI AGENT</div>
                                </div>
                            </div>
                         </div>

                         {/* AUTO INTEGRATION Arrow (Centered in Grid Gap) */}
                         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center hidden lg:flex">
                             <div className="bg-[#4c1d95] border border-[#7c3aed] text-[#c4b5fd] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                                 {t.section5.autoIntegration}
                             </div>
                             <svg className="w-8 h-8 text-[#8b5cf6] mt-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                         </div>
                         {/* Mobile Arrow */}
                         <div className="lg:hidden flex flex-col items-center justify-center py-4">
                              <div className="bg-[#4c1d95] border border-[#7c3aed] text-[#c4b5fd] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                 {t.section5.autoIntegration}
                             </div>
                             <svg className="w-6 h-6 text-[#8b5cf6] mt-2 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                         </div>

                         {/* STEP 3: Right (Web Builder) */}
                         <div className="bg-[#4c1d95]/30 backdrop-blur-sm border border-[#5b21b6] rounded-2xl p-6 relative group hover:border-brand-500 transition-colors flex flex-col">
                             <div className="absolute top-4 right-4 text-[#8b5cf6] text-xs font-bold">{t.section5.step3.tag}</div>
                             <div className="flex items-center gap-4 mb-6">
                                 <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center text-white">
                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                 </div>
                                 <div>
                                     <h3 className="text-lg font-bold text-white">{t.section5.step3.title}</h3>
                                     <p className="text-brand-200 text-xs">{t.section5.step3.desc}</p>
                                 </div>
                             </div>
                             
                             {/* Visual: UI Builder Customization Simulation */}
                            <div className="flex-1 bg-[#1e1b4b]/50 rounded-xl border border-[#4c1d95] p-3 relative min-h-[200px] flex gap-2 overflow-hidden">
                                {/* Toolbar */}
                                <div className="w-10 bg-[#2e1065] rounded border border-[#5b21b6] flex flex-col gap-2 p-1.5 z-10">
                                    <div className="w-full aspect-square bg-[#4c1d95] rounded border border-[#6d28d9] hover:bg-[#5b21b6] transition-colors cursor-pointer group relative">
                                        <div className="absolute inset-1 border border-dashed border-white/20 rounded"></div>
                                    </div>
                                    <div className="w-full aspect-square bg-[#4c1d95] rounded border border-[#6d28d9]"></div>
                                    <div className="w-full aspect-square bg-[#4c1d95] rounded border border-[#6d28d9]"></div>
                                </div>
                                
                                {/* Canvas */}
                                <div className="flex-1 flex flex-col gap-2 relative">
                                    {/* Header Area */}
                                    <div className="h-8 bg-[#2e1065] border border-[#5b21b6] rounded flex items-center px-2 gap-2">
                                        <div className="w-4 h-4 rounded bg-[#4c1d95]"></div>
                                        <div className="w-20 h-2 rounded bg-[#4c1d95]"></div>
                                    </div>
                                    
                                    {/* Main Workspace */}
                                    <div className="flex-1 bg-[#2e1065]/50 border border-dashed border-[#5b21b6] rounded relative p-2">
                                        {/* Existing Widget */}
                                        <div className="w-full h-16 bg-[#4c1d95] rounded border border-[#6d28d9] mb-2 relative group">
                                            <div className="absolute top-1 right-1 w-2 h-2 bg-[#8b5cf6] rounded-full opacity-0 group-hover:opacity-100"></div>
                                        </div>
                                        
                                        {/* New Widget Being Dropped */}
                                        <div className="w-full h-24 bg-[#5b21b6]/80 border-2 border-brand-400 border-dashed rounded flex items-center justify-center animate-widget-appear">
                                            <span className="text-xs text-brand-300 font-mono">Chart Widget</span>
                                        </div>

                                        {/* Animated Cursor & Drag Element */}
                                        <div className="absolute top-10 left-[-40px] z-50 pointer-events-none animate-cursor-drag">
                                            {/* Draggable Item Proxy */}
                                            <div className="w-8 h-8 bg-brand-500/80 rounded shadow-lg absolute -top-4 -left-4 backdrop-blur-sm border border-white/20"></div>
                                            {/* Cursor SVG */}
                                            <svg className="w-6 h-6 text-white drop-shadow-md relative translate-x-2 translate-y-2" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>

                     </div>

                 </div>
             </div>
          </section>

          {/* SECTION 6: Builders */}
          <section id="section6" className="scroll-mt-24">
             <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.section6.title}</h2>
                 <p className="text-gray-500 text-lg">{t.section6.subtitle}</p>
             </div>

             <BuilderVisuals />
          </section>

          {/* SECTION 7: Contact / Inquiry */}
          <section id="section7" className="scroll-mt-24">
              <div className="bg-brand-950 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="grid md:grid-cols-2 gap-12 relative z-10">
                      {/* Left: Info */}
                      <div className="text-white flex flex-col justify-between">
                          <div>
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.section7.title}</h2>
                              <p className="text-brand-200 text-lg mb-8 leading-relaxed">
                                  {t.section7.subtitle}
                              </p>
                              
                              <div className="space-y-6">
                                  <div>
                                      <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">Email</h4>
                                      <a href={`mailto:${t.section7.contactInfo.email}`} className="text-xl font-medium hover:text-brand-300 transition-colors">{t.section7.contactInfo.email}</a>
                                  </div>
                                  <div>
                                      <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">Office</h4>
                                      <p className="text-lg">{t.section7.contactInfo.address}</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Right: Form */}
                      <div className="bg-white rounded-2xl p-8 shadow-2xl">
                          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                              <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.section7.form.name}</label>
                                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all" />
                              </div>
                              <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.section7.form.email}</label>
                                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all" />
                              </div>
                              <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-0.5">
                                  {t.section7.form.submit}
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECTION 8: 6 Reasons (Poster Style Feeds) */}
          <section id="section8" className="scroll-mt-24">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.section8.title}</h2>
               <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                 {t.section8.feeds.map((feed: any, index: number) => (
                     <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col group h-[500px]">
                         {/* Header */}
                         <div className="p-4 flex items-center gap-3 border-b border-gray-100 bg-white z-10">
                             <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                                 index % 3 === 0 ? 'bg-green-600' : index % 3 === 1 ? 'bg-blue-600' : 'bg-purple-600'
                             }`}>
                                 {feed.name.charAt(0)}
                             </div>
                             <div className="flex-1">
                                 <h4 className="text-sm font-bold text-gray-900 leading-tight">{feed.name}</h4>
                                 <span className="text-xs text-gray-400">Sponsored</span>
                             </div>
                             <div className="flex gap-1">
                                 <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                 <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                 <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                             </div>
                         </div>
                         
                         {/* Visual (Poster Style) */}
                         <div className="flex-1 relative overflow-hidden bg-gray-50">
                             <FeedVisual index={index} />
                         </div>

                         {/* Footer / Caption */}
                         <div className="p-5 bg-white border-t border-gray-100 flex flex-col gap-3">
                             {/* Actions */}
                             <div className="flex gap-4 text-gray-600">
                                 <svg className="w-6 h-6 hover:text-red-500 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                 <svg className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.6 8.6 0 01-5.938-2.345 1.552 1.552 0 00-2.385.205c-.412.51-.87.975-1.366 1.385-.494.408-1.164.246-1.463-.296l-1.636-2.924a1.553 1.553 0 01.378-1.874 1.553 1.553 0 00.134-2.126A8.6 8.6 0 012 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" /></svg>
                                 <svg className="w-6 h-6 hover:text-gray-900 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                             </div>
                             
                             {/* Caption Text */}
                             <p className="text-gray-800 font-medium whitespace-pre-line text-lg leading-snug">
                                 {feed.content}
                             </p>
                             
                             <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-brand-600 font-bold">{feed.tags}</span>
                                <button className="text-xs font-bold text-gray-400 hover:text-brand-600 uppercase tracking-wider">Learn More</button>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
          </section>

        </main>

        <footer className="border-t border-gray-100 py-12 mt-12 text-center text-sm text-gray-500">
            <div className="flex justify-center gap-8 mb-4">
                <a href="#" className="hover:text-brand-600">{t.footer.contact}</a>
                <a href="#" className="hover:text-brand-600">{t.footer.docs}</a>
                <a href="#" className="hover:text-brand-600">{t.footer.privacy}</a>
            </div>
            <p>{t.footer.copyright}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
