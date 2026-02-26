
import React from 'react';
import { 
  Layout, FormInput, BarChart3, Share2, ArrowUpRight, CheckCircle2, Sparkles, 
  MousePointer2, Plus, Calendar as CalendarIcon, MoreHorizontal, Settings, 
  Table, Columns, ShieldCheck, Zap, Trash2, Type, Upload, Smartphone, X, 
  ArrowLeftRight, Network, FileText, Image as ImageIcon, ChevronRight, 
  ChevronDown, MousePointerClick, AlignLeft, AlignCenter, AlignRight, Square, MousePointer, LayoutGrid, ToggleRight,
  GanttChart, LayoutDashboard, Search, Filter, Download, Printer, List, Save, Move, GripVertical, Home, Maximize2, MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area 
} from 'recharts';
import { Language } from '../App';
import { Logo } from './Logo';

interface FeatureGridProps { 
  language: Language; 
  onNavigate?: (page: 'home' | 'company' | 'pricing' | 'contact') => void; 
}

/**
 * Layout Builder Animation (Liquid & Unbreakable v3)
 * 모든 수치를 %와 flex-ratio로 관리하여 화면 크기에 관계없이 완벽한 비율을 유지합니다.
 */
// Layout Builder 애니메이션 (카메라 뷰포트 + 마우스 드래그 시뮬레이션)
const LayoutBuilderAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#f1f3f5] overflow-hidden group/layout select-none font-sans rounded-2xl border border-slate-200 shadow-inner">
      {/* Camera Viewport Wrapper */}
      <div className="w-full h-full animate-[layout-v3-camera_15s_infinite] origin-center">
        {/* High Resolution Scale Wrapper */}
        <div className="w-[118%] h-[118%] -translate-x-[7.5%] -translate-y-[7.5%] scale-[0.85] bg-white flex origin-center border-[2px] border-slate-400 shadow-2xl overflow-hidden rounded-3xl">
          {/* 1. Left Sidebar (Navigation) */}
          <div className="w-[16%] bg-[#f8f9fa] border-r border-slate-200 flex flex-col shrink-0">
            <div className="p-4 border-b border-slate-200 flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <Layout size={14} className="text-white" />
              </div>
              <span className="text-[11px] font-black text-slate-800 tracking-tight whitespace-nowrap">DataCraft AI</span>
            </div>
            <div className="flex-1 py-4 px-2 space-y-1">
              <div className="px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-3 text-slate-400">
                <Layout size={14} />
                <span className="text-[10px] font-bold whitespace-nowrap">대시보드</span>
              </div>
              <div className="px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 flex items-center gap-3 border border-indigo-100">
                <FileText size={14} />
                <span className="text-[10px] font-black whitespace-nowrap">생산 품목 관리</span>
              </div>
              <div className="pl-4 py-1.5 text-[9px] font-bold text-indigo-500 border-l-2 border-indigo-200 ml-2 whitespace-nowrap">금일 생산 품목</div>
              <div className="pl-4 py-1.5 text-[9px] font-bold text-slate-400 ml-2 whitespace-nowrap">전체 생산 품목</div>
              <div className="px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-3 text-slate-400">
                <Settings size={14} />
                <span className="text-[10px] font-bold whitespace-nowrap">생산 공정 관리</span>
              </div>
            </div>
          </div>

          {/* 2. Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#f1f3f5]">
            {/* Top Bar */}
            <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[8px] text-slate-400 font-bold whitespace-nowrap">
                  <Home size={8} /> <span>&gt;</span> <span>생산 품목 관리</span> <span>&gt;</span> <span>금일 생산 품목</span>
                </div>
                <h2 className="text-xs font-black text-slate-800 whitespace-nowrap">금일 생산 품목</h2>
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
                    <button className="p-1.5 bg-white rounded shadow-sm text-slate-600"><Plus size={12} /></button>
                    <button className="p-1.5 text-slate-400"><MoreVertical size={12} /></button>
                 </div>
                 <button className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] font-black flex items-center gap-2 shadow-lg shadow-slate-200 animate-[layout-v3-save-btn_15s_infinite] whitespace-nowrap">
                    <Save size={12} />
                    저장
                 </button>
              </div>
            </div>

            {/* Section Toolbar */}
            <div className="px-6 py-3 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-4 shadow-sm">
                <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-slate-50 rounded text-[9px] font-bold text-slate-500 border border-slate-100 whitespace-nowrap animate-[layout-v3-add-btn_15s_infinite]">
                  <Plus size={10} /> 섹션 추가
                </button>
                <div className="w-px h-4 bg-slate-200" />
                <div className="flex items-center gap-2 px-2 py-1 bg-indigo-50 rounded border border-indigo-100 text-[9px] font-black text-indigo-600 whitespace-nowrap">
                  <GripVertical size={10} className="text-indigo-300" /> 섹션 #2
                </div>
                <div className="w-px h-4 bg-slate-200" />
                <div className="flex items-center gap-3">
                  <Columns size={12} className="text-slate-400" />
                  <Maximize2 size={12} className="text-slate-400" />
                  <Trash2 size={12} className="text-rose-400" />
                </div>
              </div>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 p-6 pt-0 relative overflow-hidden">
              <div className="w-full h-full bg-white rounded-2xl border-2 border-dashed border-slate-200 relative overflow-hidden flex flex-col">
                {/* Grid Layout Simulation */}
                <div className="flex-1 flex gap-0 p-6 relative">
                  {/* Left Section (Morning/Afternoon) */}
                  <div className="flex flex-col gap-4 animate-[layout-v3-canvas-left_15s_infinite] border-r-2 border-indigo-400/30 relative z-10 bg-white pr-4">
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-slate-400 whitespace-nowrap">오전</div>
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-[10px] font-bold text-slate-400 whitespace-nowrap">오후</div>
                    {/* Drag Handle Indicator */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg opacity-0 animate-[layout-v3-drag-handle_15s_infinite] z-20">
                      <GripVertical size={10} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Main Section (Grid) */}
                  <div className="flex-1 bg-slate-50 border-2 border-indigo-200 rounded-xl relative overflow-hidden flex flex-col ml-4 animate-[layout-v3-canvas-main_15s_infinite]">
                    <div className="p-3 border-b border-indigo-100 bg-white flex items-center gap-2">
                      <ChevronDown size={12} className="text-indigo-400" />
                      <span className="text-[10px] font-black text-slate-800 whitespace-nowrap">Main Grid</span>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="w-full h-full border border-slate-200 rounded bg-white flex flex-col overflow-hidden">
                        <div className="h-8 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
                          <div className="w-8 h-2 bg-slate-200 rounded shrink-0" />
                          <div className="flex-1 h-2 bg-slate-200 rounded" />
                          <div className="w-16 h-2 bg-slate-200 rounded shrink-0" />
                        </div>
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="h-8 border-b border-slate-50 flex items-center px-4 gap-4 shrink-0">
                            <div className="w-8 h-1.5 bg-slate-100 rounded shrink-0" />
                            <div className="flex-1 h-1.5 bg-slate-100 rounded" />
                            <div className="w-16 h-1.5 bg-slate-100 rounded shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Overlay for Design modification */}
                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 animate-[layout-v3-design-overlay_15s_infinite]" />
                  </div>
                </div>

                {/* Widget Selection Popup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 opacity-0 scale-95 pointer-events-none animate-[layout-v3-widget-menu_15s_infinite]">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">위젯 선택</span>
                    <X size={12} className="text-slate-300" />
                  </div>
                  <div className="p-2 space-y-1">
                    <div className="px-3 py-1.5 text-[8px] font-black text-slate-300 uppercase whitespace-nowrap">일반 위젯</div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500"><Type size={16} /></div>
                      <div className="flex flex-col"><span className="text-[10px] font-black text-slate-700 whitespace-nowrap">텍스트</span><span className="text-[7px] text-slate-400 whitespace-nowrap">일반 텍스트 및 제목</span></div>
                    </div>
                    <div className="px-3 py-1.5 text-[8px] font-black text-slate-300 uppercase pt-2 whitespace-nowrap">데이터 위젯</div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-indigo-600 text-white shadow-lg animate-[layout-v3-widget-select_15s_infinite]">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"><Table size={16} /></div>
                      <div className="flex flex-col"><span className="text-[10px] font-black whitespace-nowrap">데이터 뷰</span><span className="text-[7px] text-white/70 whitespace-nowrap">그리드, 칸반, 캘린더 등</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Right Sidebar (Widget Settings & Design) */}
          <div className="w-[20%] bg-white border-l border-slate-200 flex flex-col shrink-0 relative overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-[11px] font-black text-slate-800 uppercase whitespace-nowrap">위젯 설정</h3>
              <X size={14} className="text-slate-300" />
            </div>
            
            {/* Tabs */}
            <div className="flex border-b border-slate-100">
              <div className="flex-1 py-2.5 text-center text-[10px] font-black relative cursor-pointer animate-[layout-v3-tab-settings_15s_infinite] whitespace-nowrap">
                위젯 설정
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 animate-[layout-v3-tab-settings-line_15s_infinite]" />
              </div>
              <div className="flex-1 py-2.5 text-center text-[10px] font-black text-slate-400 relative cursor-pointer animate-[layout-v3-tab-design_15s_infinite] whitespace-nowrap">
                디자인
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 opacity-0 animate-[layout-v3-tab-design-line_15s_infinite]" />
              </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1 overflow-y-auto p-5 relative">
              {/* Widget Settings Tab Content */}
              <div className="space-y-6 animate-[layout-v3-content-settings_15s_infinite]">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase whitespace-nowrap leading-relaxed">1. 원하시는 위젯을 선택하여 주세요.</label>
                  <div className="h-9 w-full border-2 border-indigo-600 rounded-xl px-3 flex items-center justify-between bg-indigo-50/30">
                    <span className="text-[10px] font-black text-indigo-600 whitespace-nowrap">데이터 뷰</span>
                    <ChevronDown size={14} className="text-indigo-400" />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-50">
                  <label className="text-[9px] font-black text-slate-400 uppercase whitespace-nowrap leading-relaxed">2. 선택한 위젯의 속성값을 설정하여 주세요.</label>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-500 whitespace-nowrap">위젯 타입</span>
                      <div className="h-8 w-full border border-slate-200 rounded-lg px-2 flex items-center justify-between text-[9px] font-bold text-slate-700 bg-white">
                        <span className="whitespace-nowrap">단일 항목 선택버튼</span> <ChevronDown size={12} className="text-slate-300" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-500 whitespace-nowrap">버튼 타입</span>
                      <div className="h-8 w-full border border-slate-200 rounded-lg px-2 flex items-center justify-between text-[9px] font-bold text-slate-700 bg-white animate-[layout-v3-setting-change_15s_infinite]">
                        <span className="whitespace-nowrap">토글 버튼</span> <ChevronDown size={12} className="text-slate-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Tab Content */}
              <div className="absolute inset-0 p-5 space-y-6 opacity-0 pointer-events-none animate-[layout-v3-content-design_15s_infinite]">
                <div className="space-y-4">
                   <span className="text-[9px] font-black text-slate-400 uppercase whitespace-nowrap">텍스트 설정</span>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <span className="text-[8px] font-bold text-slate-400 whitespace-nowrap">크기 (px)</span>
                        <div className="h-8 border border-slate-200 rounded-lg px-2 flex items-center text-[10px] font-bold whitespace-nowrap">14</div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] font-bold text-slate-400 whitespace-nowrap">굵기</span>
                        <div className="h-8 border border-slate-200 rounded-lg px-2 flex items-center text-[10px] font-bold whitespace-nowrap">보통</div>
                      </div>
                   </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-50">
                   <span className="text-[9px] font-black text-slate-400 uppercase whitespace-nowrap">위젯 디자인</span>
                   <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold text-slate-500 whitespace-nowrap">정렬</span>
                        <div className="flex gap-1">
                           <div className="w-6 h-6 border border-indigo-200 bg-indigo-50 rounded flex items-center justify-center text-indigo-600"><AlignLeft size={12} /></div>
                           <div className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center text-slate-400"><AlignCenter size={12} /></div>
                           <div className="w-6 h-6 border border-slate-200 rounded flex items-center justify-center text-slate-400"><AlignRight size={12} /></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[9px] font-bold text-slate-500 block whitespace-nowrap">안쪽 여백 (Padding)</span>
                        <div className="relative w-32 h-32 mx-auto bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                           <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] font-black text-indigo-500 animate-[layout-v3-padding-val_15s_infinite]">12</div>
                           <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-black text-indigo-500 animate-[layout-v3-padding-val_15s_infinite]">12</div>
                           <div className="w-16 h-16 bg-white border-2 border-indigo-400 rounded-lg shadow-lg flex items-center justify-center animate-[layout-v3-padding-box_15s_infinite]">
                              <span className="text-[10px] font-black text-indigo-600">P</span>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mouse Simulation */}
        <div className="absolute z-[100] pointer-events-none animate-[layout-v3-mouse_15s_infinite]">
          <div className="relative">
            <MousePointer2 size={24} className="text-slate-900 fill-white drop-shadow-xl" />
            <div className="absolute top-0 left-0 w-12 h-12 bg-indigo-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 animate-[layout-v3-ripple_15s_infinite]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes layout-v3-camera {
          0%, 100% { transform: scale(1) translate(0, 0); }
          5%, 25% { transform: scale(1.3) translate(10%, 10%); } /* 1. 레이아웃 구성 */
          35%, 45% { transform: scale(1.6) translate(0%, 0%); }   /* 2. 위젯 선택 */
          55%, 65% { transform: scale(1.4) translate(-15%, 5%); } /* 3. 위젯 설정 */
          75%, 85% { transform: scale(1.4) translate(-15%, -15%); } /* 4. 디자인 설정 */
          90%, 98% { transform: scale(1.4) translate(-15%, 25%); } /* 5. 저장 */
        }

        @keyframes layout-v3-mouse {
          0% { transform: translate(50%, 50%); opacity: 0; }
          2% { opacity: 1; }
          5% { transform: translate(50%, 15%); } /* 섹션 추가 버튼 이동 */
          7% { transform: translate(50%, 15%) scale(0.9); } /* 클릭 */
          12% { transform: translate(25%, 50%); } /* 경계선 이동 */
          14% { transform: translate(25%, 50%) scale(0.9); } /* 클릭 */
          18% { transform: translate(35%, 50%); } /* 드래그 조정 */
          20% { transform: translate(35%, 50%) scale(1); } /* 드롭 */
          30% { transform: translate(60%, 50%); } /* 2. 빈 영역 이동 */
          32% { transform: translate(60%, 50%) scale(0.9); } /* 클릭 */
          38% { transform: translate(50%, 65%); } /* 위젯 메뉴 선택 */
          40% { transform: translate(50%, 65%) scale(0.9); }
          50% { transform: translate(88%, 45%); } /* 3. 설정값 변경 */
          52% { transform: translate(88%, 45%) scale(0.9); }
          60% { transform: translate(88%, 20%); } /* 4. 디자인 탭 이동 */
          62% { transform: translate(88%, 20%) scale(0.9); }
          70% { transform: translate(88%, 80%); } /* 패널 설정 변경 */
          72% { transform: translate(88%, 80%) scale(0.9); }
          90% { transform: translate(92%, 5%); } /* 5. 저장 버튼 이동 */
          92% { transform: translate(92%, 5%) scale(0.9); }
          100% { transform: translate(50%, 50%); opacity: 0; }
        }

        @keyframes layout-v3-ripple { 0%, 6%, 8%, 13%, 15%, 19%, 21%, 31%, 33%, 39%, 41%, 51%, 53%, 61%, 63%, 71%, 73%, 91%, 93%, 100% { transform: scale(0); opacity: 0; } 7%, 14%, 20%, 32%, 40%, 52%, 62%, 72%, 92% { transform: scale(1.5); opacity: 1; } }
        
        @keyframes layout-v3-add-btn { 0%, 6% { background: transparent; } 7%, 100% { background: #f8fafc; } }
        @keyframes layout-v3-drag-handle { 0%, 12% { opacity: 0; transform: translateY(-50%) scale(0.5); } 14%, 25% { opacity: 1; transform: translateY(-50%) scale(1); } 26%, 100% { opacity: 0; } }
        @keyframes layout-v3-canvas-left { 0%, 12% { width: 25%; } 18%, 100% { width: 35%; } }
        @keyframes layout-v3-canvas-main { 0%, 15% { transform: translateY(0); } 20%, 100% { transform: translateY(5px); } }
        
        @keyframes layout-v3-widget-menu { 0%, 32% { opacity: 0; transform: translate(-50%, -45%) scale(0.95); } 35%, 42% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 44%, 100% { opacity: 0; transform: translate(-50%, -55%) scale(0.9); } }
        @keyframes layout-v3-widget-select { 0%, 38% { background: white; color: inherit; } 40%, 100% { background: #4f46e5; color: white; } }
        
        @keyframes layout-v3-tab-settings { 0%, 62% { color: #4f46e5; } 64%, 100% { color: #94a3b8; } }
        @keyframes layout-v3-tab-settings-line { 0%, 62% { opacity: 1; } 64%, 100% { opacity: 0; } }
        @keyframes layout-v3-tab-design { 0%, 62% { color: #94a3b8; } 64%, 100% { color: #4f46e5; } }
        @keyframes layout-v3-tab-design-line { 0%, 62% { opacity: 0; } 64%, 100% { opacity: 1; } }
        
        @keyframes layout-v3-content-settings { 0%, 62% { opacity: 1; transform: translateX(0); } 64%, 100% { opacity: 0; transform: translateX(-20px); } }
        @keyframes layout-v3-content-design { 0%, 62% { opacity: 0; transform: translateX(20px); } 64%, 100% { opacity: 1; transform: translateX(0); pointer-events: auto; } }
        
        @keyframes layout-v3-setting-change { 0%, 52% { background: white; } 54%, 100% { background: #f5f3ff; border-color: #4f46e5; } }
        @keyframes layout-v3-padding-val { 0%, 72% { opacity: 0; } 75%, 100% { opacity: 1; } }
        @keyframes layout-v3-padding-box { 0%, 72% { padding: 4px; } 75%, 100% { padding: 12px; } }
        @keyframes layout-v3-design-overlay { 0%, 72% { opacity: 0; } 75%, 100% { opacity: 1; } }
        
        @keyframes layout-v3-save-btn { 0%, 92% { transform: scale(1); } 93%, 97% { transform: scale(0.95); background: #4f46e5; } 98%, 100% { transform: scale(1); } }
      `}</style>
    </div>
  );
};

// Form Builder 애니메이션 (입력폼 관리 모달 스타일 - 고해상도 스케일 및 레이아웃 최적화)
const FormBuilderAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden group/builder select-none flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#6366f1] rounded-lg flex items-center justify-center shadow-md shadow-indigo-100">
            <div className="w-4 h-4 border-[1.5px] border-white rounded-sm flex flex-col items-center justify-center gap-0.5">
              <div className="w-2 h-[1px] bg-white rounded-full" />
              <div className="w-2 h-[1px] bg-white rounded-full" />
              <div className="w-2 h-[1px] bg-white rounded-full" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900 leading-none mb-0.5 whitespace-nowrap">입력폼 관리</h3>
            <p className="text-[9px] font-bold text-slate-400 whitespace-nowrap">사용자 입력폼을 생성하고 관리합니다.</p>
          </div>
        </div>
        <button className="p-1.5 hover:bg-slate-50 rounded-md transition-colors">
          <X size={14} className="text-slate-400" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 flex min-h-0">
        {/* Left: Form List */}
        <div className="w-[20%] border-r border-slate-100 p-4 flex flex-col gap-3">
          <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-wider whitespace-nowrap">폼 목록</h4>
          <div className="space-y-1.5 flex-1">
            <div className="px-2.5 py-2 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-between group/item">
              <span className="text-[10px] font-black text-indigo-600 whitespace-nowrap">직원 목록</span>
              <List size={10} className="text-indigo-400" />
            </div>
            <div className="px-2.5 py-2 hover:bg-slate-50 border border-transparent rounded-lg flex items-center justify-between transition-colors">
              <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">부서 목록</span>
              <List size={10} className="text-slate-300" />
            </div>
          </div>
        </div>

        {/* Center: Add Item */}
        <div className="w-[32%] border-r border-slate-100 p-4 flex flex-col gap-4 bg-slate-50/20">
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase whitespace-nowrap">폼 이름</label>
            <div className="h-7 w-full bg-white border border-slate-200 rounded-md px-2 flex items-center text-[10px] font-bold text-slate-700 whitespace-nowrap">직원 목록</div>
          </div>

          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h4 className="text-[10px] font-black text-slate-900 whitespace-nowrap">새 항목 추가</h4>
            
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-500 whitespace-nowrap">위젯 타입 <span className="text-rose-500">*</span></label>
              <div className="h-7 w-full bg-white border-2 border-indigo-100 rounded-md px-2 flex items-center justify-between relative group/select cursor-pointer animate-[form-v8-select_12s_infinite]">
                <div className="relative h-full w-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[200%] flex flex-col animate-[form-v8-select-text_12s_infinite]">
                    <div className="h-1/2 flex items-center"><span className="text-[10px] font-bold text-slate-700 whitespace-nowrap">텍스트 입력</span></div>
                    <div className="h-1/2 flex items-center"><span className="text-[10px] font-bold text-indigo-600 whitespace-nowrap">날짜선택</span></div>
                  </div>
                </div>
                <ChevronDown size={12} className="text-slate-400" />
                
                {/* Dropdown Simulation */}
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg z-50 py-1 opacity-0 scale-95 pointer-events-none animate-[form-v8-dropdown_12s_infinite]">
                  {['숫자 입력', '체크박스', '스위치', '날짜선택', '이미지 업로더'].map((opt, i) => (
                    <div key={i} className={`px-2 py-1 text-[9px] font-bold whitespace-nowrap ${i === 3 ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600'}`}>{opt}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-500 whitespace-nowrap">항목이름 <span className="text-rose-500">*</span></label>
              <div className="h-7 w-full bg-white border border-slate-200 rounded-md px-2 flex items-center text-[10px] font-bold text-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col animate-[form-v8-name-text_12s_infinite]">
                  <div className="h-full flex items-center px-2"><span className="text-slate-300 whitespace-nowrap">항목 이름을 입력하세요</span></div>
                  <div className="h-full flex items-center px-2"><span className="whitespace-nowrap">입사일</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Preview */}
        <div className="flex-1 p-4 bg-slate-50/40 flex flex-col gap-2.5 overflow-y-auto relative">
          <div className="flex flex-col gap-2.5 animate-[form-v8-reorder_12s_infinite]">
            {/* Photo Widget */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm relative group/widget order-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-slate-800 whitespace-nowrap">사진</span>
                <div className="flex items-center gap-1">
                  <span className="px-1 py-0.5 bg-orange-50 text-orange-500 text-[7px] font-black rounded border border-orange-100 whitespace-nowrap">저장필요</span>
                  <X size={8} className="text-slate-300" />
                </div>
              </div>
              <div className="h-8 w-full border border-dashed border-slate-100 rounded-md flex items-center px-2 gap-2 bg-slate-50/50">
                <ImageIcon size={12} className="text-slate-300" />
                <span className="text-[9px] font-bold text-slate-400 whitespace-nowrap">파일 선택 선택한 파일 없음</span>
              </div>
            </div>

            {/* Name Widget */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm relative order-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-slate-800 whitespace-nowrap">이름 <span className="text-rose-500">*</span></span>
                <div className="flex items-center gap-1">
                  <span className="px-1 py-0.5 bg-orange-50 text-orange-500 text-[7px] font-black rounded border border-orange-100 whitespace-nowrap">저장필요</span>
                  <X size={8} className="text-slate-300" />
                </div>
              </div>
              <div className="h-8 w-full border border-slate-200 rounded-md px-2 flex items-center bg-white">
                <span className="text-[9px] font-bold text-slate-300 whitespace-nowrap">직원의 이름을 입력하여 주세요</span>
              </div>
            </div>

            {/* Department Widget */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm relative order-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-slate-800 whitespace-nowrap">근무 부서 <span className="text-rose-500">*</span></span>
                <div className="flex items-center gap-1">
                  <span className="px-1 py-0.5 bg-orange-50 text-orange-500 text-[7px] font-black rounded border border-orange-100 whitespace-nowrap">저장필요</span>
                  <X size={8} className="text-slate-300" />
                </div>
              </div>
              <div className="h-8 w-full border border-slate-200 rounded-md px-2 flex items-center justify-between bg-white">
                <span className="text-[9px] font-bold text-slate-400 whitespace-nowrap">선택안함</span>
                <ChevronDown size={12} className="text-slate-300" />
              </div>
            </div>

            {/* New Widget: 입사일 */}
            <div className="opacity-0 animate-[form-v8-new-widget_12s_infinite] order-4">
              <div className="bg-white border-2 border-indigo-500 rounded-lg p-3 shadow-lg relative animate-[form-v8-drag_12s_infinite]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Move size={10} className="text-slate-300 cursor-move" />
                    <span className="text-[10px] font-black text-indigo-600 whitespace-nowrap">입사일 <span className="text-rose-500">*</span></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="px-1 py-0.5 bg-indigo-500 text-white text-[7px] font-black rounded shadow-sm whitespace-nowrap">NEW</span>
                  </div>
                </div>
                <div className="h-8 w-full border border-indigo-100 rounded-md px-2 flex items-center gap-2 bg-indigo-50/30">
                  <CalendarIcon size={12} className="text-indigo-400" />
                  <span className="text-[9px] font-bold text-indigo-400 whitespace-nowrap">날짜를 선택하세요</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 bg-white flex shrink-0">
        {/* Left Footer */}
        <div className="w-[20%] border-r border-slate-100 px-4 py-3 flex items-center justify-between">
          <button className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-md transition-colors border border-rose-100">
            <Trash2 size={12} />
          </button>
          <button className="p-1.5 text-slate-400 hover:bg-slate-50 rounded-md transition-colors border border-slate-200">
            <Plus size={12} />
          </button>
        </div>
        {/* Center Footer */}
        <div className="w-[32%] border-r border-slate-100 px-4 py-3 flex items-center">
          <button className="w-full py-2 bg-slate-400 text-white rounded-lg text-[10px] font-black shadow-md shadow-slate-100 animate-[form-v8-btn_12s_infinite] whitespace-nowrap">추가 &gt;</button>
        </div>
        {/* Right Footer */}
        <div className="flex-1 px-5 py-3 flex items-center justify-end gap-2">
          <button className="px-4 py-1.5 text-[10px] font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200 whitespace-nowrap">취소</button>
          <button className="px-4 py-1.5 text-[10px] font-black bg-slate-900 text-white rounded-lg shadow-md shadow-slate-200 flex items-center gap-1.5 whitespace-nowrap">
            <Save size={12} />
            저장
          </button>
        </div>
      </div>

      <style>{`
        @keyframes form-v8-select {
          0%, 12% { border-color: #e2e8f0; background: white; }
          13%, 35% { border-color: #6366f1; background: #eef2ff; }
          36%, 100% { border-color: #e2e8f0; background: white; }
        }
        @keyframes form-v8-select-text {
          0%, 28% { transform: translateY(0); }
          32%, 100% { transform: translateY(-50%); }
        }
        @keyframes form-v8-dropdown {
          0%, 14% { opacity: 0; transform: translateY(0) scale(0.95); }
          18%, 32% { opacity: 1; transform: translateY(0) scale(1); }
          36%, 100% { opacity: 0; transform: translateY(0) scale(0.95); }
        }
        @keyframes form-v8-name-text {
          0%, 42% { transform: translateY(0); }
          48%, 100% { transform: translateY(-50%); }
        }
        @keyframes form-v8-btn {
          0%, 58% { background: #94a3b8; transform: scale(1); }
          60%, 65% { background: #4f46e5; transform: scale(0.95); }
          66%, 100% { background: #4f46e5; transform: scale(1); }
        }
        @keyframes form-v8-new-widget {
          0%, 62% { opacity: 0; transform: translateY(15px); }
          66%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes form-v8-drag {
          0%, 75% { transform: translateY(0); z-index: 10; }
          85% { transform: translateY(-300px); z-index: 50; box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.1); }
          95%, 100% { transform: translateY(-300px); z-index: 10; }
        }
        @keyframes form-v8-reorder {
          0%, 90% { transform: translateY(0); }
          95%, 100% { transform: translateY(110px); }
        }
      `}</style>
    </div>
  );
};

// DataView Builder 애니메이션
const UltimateViewAnimation: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'grid' | 'kanban' | 'gantt' | 'calendar' | 'dashboard'>('grid');
  const [selectedDay, setSelectedDay] = React.useState<number | null>(6);
  const [timer, setTimer] = React.useState(0);
  const [gridInput, setGridInput] = React.useState("");

  const dashboardStats = [
    { label: '총 직원 수', value: '20', unit: '명' },
    { label: '평균 연봉', value: '5,400', unit: '만원' },
    { label: '평균 평가', value: '4', unit: '점' },
    { label: '평균 근속', value: '4.6', unit: '년' },
  ];

  const pieData = [
    { name: 'Dev', value: 45, color: '#4f46e5' },
    { name: 'Design', value: 25, color: '#10b981' },
    { name: 'Marketing', value: 15, color: '#f59e0b' },
    { name: 'Sales', value: 15, color: '#ef4444' },
  ];
  
  // 자동 탭 전환 및 타이머 로직
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (timer % 60 === 0) {
      const tabOrder: ('grid' | 'kanban' | 'gantt' | 'calendar' | 'dashboard')[] = ['grid', 'kanban', 'gantt', 'calendar', 'dashboard'];
      const currentIndex = tabOrder.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % tabOrder.length;
      setActiveTab(tabOrder[nextIndex]);
    }
    
    // Grid typing simulation
    if (activeTab === 'grid') {
      const phase = timer % 60;
      if (phase > 10 && phase < 40) {
        const fullText = "신규 마케팅 캠페인 기획안";
        const charCount = Math.floor((phase - 10) / 1.5);
        setGridInput(fullText.substring(0, charCount));
      } else {
        setGridInput("");
      }
    }
  }, [timer, activeTab]);

  const tabs = [
    { id: 'grid', icon: <Table size={12} />, label: '그리드' },
    { id: 'kanban', icon: <Columns size={12} />, label: '칸반' },
    { id: 'gantt', icon: <GanttChart size={12} />, label: '간트' },
    { id: 'calendar', icon: <CalendarIcon size={12} />, label: '캘린더' },
    { id: 'dashboard', icon: <LayoutDashboard size={12} />, label: '대시보드' },
  ];

  const getMousePos = () => {
    const phase = timer % 60;
    if (activeTab === 'grid') {
      if (phase < 10) return { x: '30%', y: '45%' };
      if (phase < 40) return { x: '35%', y: '45%' }; // Typing position
      return { x: '80%', y: '20%' };
    }
    if (activeTab === 'kanban') {
      if (phase < 30) return { x: '15%', y: '35%' };
      return { x: '45%', y: '55%' };
    }
    if (activeTab === 'gantt') return { x: `${20 + phase}%`, y: '40%' };
    if (activeTab === 'calendar') return { x: '35%', y: '55%' };
    return { x: '75%', y: '65%' };
  };

  const mousePos = getMousePos();

  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-col font-sans border border-slate-200 rounded-2xl shadow-2xl">
      {/* Simulated Mouse Cursor */}
      <motion.div 
        animate={{ left: mousePos.x, top: mousePos.y }}
        transition={{ type: 'spring', damping: 25, stiffness: 100 }}
        className="absolute z-[100] pointer-events-none"
      >
        <MousePointer2 size={20} className="text-slate-900 fill-white drop-shadow-xl" />
        {timer % 30 === 0 && (
          <motion.div initial={{ scale: 0, opacity: 1 }} animate={{ scale: 2, opacity: 0 }} className="absolute top-0 left-0 w-6 h-6 bg-indigo-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        )}
      </motion.div>

      {/* Top Bar */}
      <div className="h-8 bg-white border-b border-slate-100 px-4 flex items-center justify-between z-50 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center"><CheckCircle2 size={8} className="text-white" /></div>
          <span className="text-[8px] font-bold text-slate-400">저장 완료</span>
        </div>
        <div className="flex items-center gap-2">
          <Printer size={12} className="text-slate-300" />
          <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="h-10 bg-white border-b border-slate-100 px-4 flex items-center justify-between z-40 shrink-0">
        <div className="flex items-center gap-0.5 bg-slate-50 p-0.5 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-2 py-1 rounded-md flex items-center gap-1.5 transition-all relative ${
                activeTab === tab.id ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.icon}
              <span className="text-[9px] font-black uppercase tracking-tighter">{tab.label}</span>
              {activeTab === tab.id && <motion.div layoutId="activeTabGlow" className="absolute inset-0 bg-indigo-500/5 rounded-md -z-10" />}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-50 rounded-md px-2 py-0.5 border border-slate-200">
            <Search size={10} className="text-slate-400 mr-1.5" />
            <input type="text" disabled className="bg-transparent border-none outline-none text-[9px] w-16" placeholder="Search..." />
          </div>
          <button className="p-1 bg-indigo-600 text-white rounded-md"><Plus size={12} /></button>
        </div>
      </div>

      {/* View Content */}
      <div className="flex-1 relative overflow-hidden bg-[#F8FAFC]">
        <AnimatePresence mode="wait">
          {activeTab === 'grid' && (
            <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col">
              <div className="p-2 border-b border-slate-100 flex items-center gap-2 bg-white/50">
                <div className="h-6 px-2 bg-white border border-slate-200 rounded flex items-center gap-1.5 shadow-sm"><Filter size={10} className="text-slate-400" /><span className="text-[8px] font-bold text-slate-500">필터</span></div>
                <div className="h-6 px-2 bg-white border border-slate-200 rounded flex items-center gap-1.5 shadow-sm ml-auto"><Download size={10} className="text-slate-400" /><span className="text-[8px] font-bold text-slate-500">Export</span></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <table className="w-full text-left border-collapse table-fixed">
                  <thead className="bg-slate-50/80">
                    <tr>
                      <th className="w-8 px-4 py-2 text-[8px] font-black text-slate-400 uppercase border-b border-slate-100">No</th>
                      <th className="px-4 py-2 text-[8px] font-black text-slate-400 uppercase border-b border-slate-100">프로젝트명</th>
                      <th className="w-24 px-4 py-2 text-[8px] font-black text-slate-400 uppercase border-b border-slate-100">담당자</th>
                      <th className="w-20 px-4 py-2 text-[8px] font-black text-slate-400 uppercase border-b border-slate-100">우선순위</th>
                      <th className="w-20 px-4 py-2 text-[8px] font-black text-slate-400 uppercase border-b border-slate-100">상태</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {[
                      { id: 1, title: "AI 엔진 고도화 프로젝트", owner: "김철수", priority: "긴급", status: "progress" },
                      { id: 2, title: "데이터 시각화 모듈 개발", owner: "이영희", priority: "높음", status: "review" },
                      { id: 3, title: "보안 시스템 인프라 구축", owner: "박지민", priority: "긴급", status: "done" },
                      { id: 4, title: "고객 지원 챗봇 연동", owner: "최다은", priority: "보통", status: "todo" },
                      { id: 5, title: gridInput || "새로운 작업을 입력하세요...", owner: "사용자", priority: "높음", status: "todo", isInput: true },
                      { id: 6, title: "클라우드 마이그레이션", owner: "정우성", priority: "보통", status: "progress" },
                      { id: 7, title: "신규 UI 가이드라인", owner: "한소희", priority: "긴급", status: "done" },
                      { id: 8, title: "API 성능 최적화", owner: "강동원", priority: "높음", status: "review" },
                      { id: 9, title: "모바일 앱 베타 테스트", owner: "송혜교", priority: "보통", status: "todo" },
                      { id: 10, title: "백엔드 리팩토링", owner: "이정재", priority: "높음", status: "progress" },
                    ].map((row) => (
                      <tr key={row.id} className={`border-b border-slate-50 ${row.isInput ? 'bg-indigo-50/30' : ''}`}>
                        <td className="px-4 py-2 text-[9px] font-bold text-slate-300">{row.id}</td>
                        <td className="px-4 py-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-black ${row.isInput && !gridInput ? 'text-slate-300 italic' : 'text-slate-700'}`}>{row.title}</span>
                            {row.isInput && <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 h-3 bg-indigo-500" />}
                          </div>
                        </td>
                        <td className="px-4 py-2"><div className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-200" /><span className="text-[9px] font-bold text-slate-500">{row.owner}</span></div></td>
                        <td className="px-4 py-2"><span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${row.priority === '긴급' ? 'bg-rose-50 text-rose-500' : row.priority === '높음' ? 'bg-amber-50 text-amber-500' : 'bg-slate-50 text-slate-400'}`}>{row.priority}</span></td>
                        <td className="px-4 py-2"><div className={`text-[8px] font-black px-2 py-0.5 rounded uppercase text-center ${row.status === 'progress' ? 'bg-blue-50 text-blue-500' : row.status === 'done' ? 'bg-emerald-50 text-emerald-500' : row.status === 'review' ? 'bg-purple-50 text-purple-500' : 'bg-slate-100 text-slate-400'}`}>{row.status}</div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'kanban' && (
            <motion.div key="kanban" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 p-3 flex gap-3 overflow-hidden">
              {[
                { id: 'todo', title: '대기', color: 'bg-blue-500', count: 12 },
                { id: 'progress', title: '진행중', color: 'bg-pink-500', count: 8 },
                { id: 'review', title: '검토중', color: 'bg-emerald-500', count: 4 },
                { id: 'done', title: '완료', color: 'bg-indigo-500', count: 15 },
                { id: 'backlog', title: '백로그', color: 'bg-slate-400', count: 20 }
              ].map((col) => (
                <div key={col.id} className="flex-1 min-w-0 flex flex-col gap-2">
                  <div className={`h-7 ${col.color} rounded-lg flex items-center justify-between px-3 shadow-sm`}>
                    <span className="text-[9px] font-black text-white">{col.title}</span>
                    <span className="text-[8px] font-bold text-white/70">{col.count}</span>
                  </div>
                  <div className="flex-1 space-y-2 overflow-hidden">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
                        <div className="flex gap-1 mb-1.5"><div className="w-1.5 h-1.5 rounded-full bg-rose-400" /><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /></div>
                        <h6 className="text-[9px] font-black text-slate-700 leading-tight mb-2">업무 샘플 데이터 #{i}</h6>
                        <div className="flex items-center justify-between pt-1.5 border-t border-slate-50">
                          <div className="w-4 h-4 rounded-full bg-slate-100" />
                          <span className="text-[7px] font-bold text-slate-300">1월 {i}일</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'gantt' && (
            <motion.div key="gantt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col bg-white">
              <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4">
                <div className="text-[8px] font-black text-slate-400 uppercase w-32">Task Name</div>
                <div className="flex-1 flex justify-between px-2 border-l border-slate-200">
                  {Array.from({ length: 20 }).map((_, i) => <span key={i} className="text-[7px] font-black text-slate-300">{i + 1}</span>)}
                </div>
              </div>
              <div className="flex-1 flex overflow-hidden">
                <div className="w-32 border-r border-slate-100 p-2 space-y-4">
                  {["기획", "디자인", "개발", "테스트", "배포", "유지보수", "고도화", "마케팅"].map((t, idx) => (
                    <div key={idx} className="text-[9px] font-black text-slate-600 truncate flex items-center gap-1.5"><ChevronRight size={10} className="text-slate-300" />{t}</div>
                  ))}
                </div>
                <div className="flex-1 relative bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px)] bg-[size:5%_100%] p-2 space-y-4">
                  <div className="h-3 w-[30%] bg-indigo-500 rounded-full" />
                  <div className="h-3 w-[40%] ml-[20%] bg-emerald-500 rounded-full" />
                  <div className="h-3 w-[50%] ml-[40%] bg-blue-500 rounded-full" />
                  <div className="h-3 w-[35%] ml-[55%] bg-purple-500 rounded-full" />
                  <div className="h-3 w-[20%] ml-[75%] bg-rose-500 rounded-full" />
                  <div className="h-3 w-[45%] ml-[10%] bg-amber-500 rounded-full" />
                  <div className="h-3 w-[30%] ml-[60%] bg-teal-500 rounded-full" />
                  <div className="h-3 w-[25%] ml-[30%] bg-slate-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'calendar' && (
            <motion.div key="calendar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 p-4 flex gap-4">
              <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                <div className="h-10 border-b border-slate-50 flex items-center justify-between px-4">
                  <h5 className="text-[10px] font-black text-slate-800">2026. 01</h5>
                  <div className="flex gap-1"><button className="p-1 bg-slate-50 rounded"><ChevronRight className="rotate-180" size={12} /></button><button className="p-1 bg-slate-50 rounded"><ChevronRight size={12} /></button></div>
                </div>
                <div className="flex-1 grid grid-cols-7">
                  {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} className={`p-1 text-center text-[8px] font-black border-b border-slate-50 ${i===0?'text-rose-400':i===6?'text-blue-400':'text-slate-300'}`}>{d}</div>)}
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 3;
                    return (
                      <div key={i} className={`p-1 border-r border-b border-slate-50 min-h-[40px] relative ${day===6?'bg-indigo-50/30':''}`}>
                        {day > 0 && day <= 31 && (
                          <>
                            <span className="text-[8px] font-bold text-slate-300">{day}</span>
                            {day === 1 && <div className="mt-0.5 h-2 bg-emerald-500 rounded-[2px]" />}
                            {day === 12 && <div className="mt-0.5 h-2 bg-pink-500 rounded-[2px]" />}
                            {day === 24 && <div className="mt-0.5 h-2 bg-rose-500 rounded-[2px]" />}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-48 bg-white rounded-xl border border-slate-100 p-4 flex flex-col">
                <h6 className="text-[9px] font-black text-slate-800 mb-4">Upcoming Events</h6>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex gap-2 items-start"><div className="w-1 h-6 bg-indigo-500 rounded-full" /><div className="flex flex-col"><span className="text-[8px] font-black text-slate-700">이벤트 제목 #{i}</span><span className="text-[7px] font-bold text-slate-300">오후 2:00</span></div></div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'dashboard' && (
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 p-4 flex flex-col gap-4 overflow-hidden">
              <div className="grid grid-cols-4 gap-3">
                {dashboardStats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-[7px] font-black text-slate-400 uppercase mb-1">{stat.label}</span>
                    <div className="text-lg font-black text-slate-800 leading-none">{stat.value}<span className="text-[8px] ml-0.5 text-slate-400">{stat.unit}</span></div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                <div className="col-span-4 bg-white p-3 rounded-xl border border-slate-100 flex flex-col">
                  <h6 className="text-[8px] font-black text-slate-800 uppercase mb-4">리소스 배분</h6>
                  <div className="flex-1 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart><Pie data={pieData} innerRadius={30} outerRadius={45} paddingAngle={2} dataKey="value">{pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}</Pie></PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-2 space-y-1">
                    {pieData.map(item => (
                      <div key={item.name} className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} /><span className="text-[8px] font-bold text-slate-500">{item.name}</span></div><span className="text-[8px] font-black text-slate-800">{item.value}%</span></div>
                    ))}
                  </div>
                </div>
                <div className="col-span-8 bg-white p-3 rounded-xl border border-slate-100 flex flex-col">
                  <h6 className="text-[8px] font-black text-slate-800 uppercase mb-4">성과 추이</h6>
                  <div className="flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={[{n:'1',s:60,t:40},{n:'2',s:45,t:65},{n:'3',s:75,t:50},{n:'4',s:30,t:80},{n:'5',s:90,t:60}]}>
                        <defs><linearGradient id="cScore" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/><stop offset="95%" stopColor="#6366f1" stopOpacity={0}/></linearGradient></defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <Area type="monotone" dataKey="s" stroke="#6366f1" fill="url(#cScore)" strokeWidth={2} />
                        <Area type="monotone" dataKey="t" stroke="#10b981" fillOpacity={0} strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Relation Builder 애니메이션
const RelationBuilderAnimation: React.FC = () => {
  const [timer, setTimer] = React.useState(0);
  const [showBurst, setShowBurst] = React.useState(false);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        const next = (prev + 1) % 180;
        if (next === 120) setShowBurst(true);
        if (next === 140) setShowBurst(false);
        if (next === 0) setShowBurst(false);
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Smooth mouse movement with easing and curved paths
  const getMousePos = () => {
    const t = timer;
    if (t < 20) return { x: '45%', y: '50%' }; // Hovering over Add
    if (t < 25) return { x: '45%', y: '50%' }; // Click
    if (t < 45) {
      const progress = (t - 25) / 20;
      const ease = progress * progress * (3 - 2 * progress);
      return { x: '45%', y: `${50 - 5 * ease}%` }; // Move to Menu Item 1
    }
    if (t < 50) return { x: '45%', y: '45%' }; // Click Item 1
    if (t < 70) {
      const progress = (t - 50) / 20;
      const ease = progress * progress * (3 - 2 * progress);
      return { x: '45%', y: `${45 + 10 * ease}%` }; // Move to Menu Item 2
    }
    if (t < 75) return { x: '45%', y: '55%' }; // Click Item 2
    if (t < 95) {
      const progress = (t - 75) / 20;
      const ease = progress * progress * (3 - 2 * progress);
      return { x: `${45 - 10 * ease}%`, y: `${55 - 7 * ease}%` }; // Move to Card 1 Field
    }
    if (t < 120) {
      const progress = (t - 95) / 25;
      const startX = 35;
      const startY = 48;
      const endX = 55;
      const endY = 63;
      
      // Curved path for dragging
      const ease = progress * progress * (3 - 2 * progress);
      const curve = Math.sin(progress * Math.PI) * 5; // Add a slight arc
      return { 
        x: `${startX + (endX - startX) * ease}%`, 
        y: `${startY + (endY - startY) * ease + curve}%` 
      };
    }
    if (t < 150) {
      const progress = (t - 120) / 30;
      const ease = progress * progress * (3 - 2 * progress);
      return { x: `${55 + 30 * ease}%`, y: `${63 - 48 * ease}%` }; // Move to Save
    }
    return { x: '85%', y: '15%' };
  };

  const mousePos = getMousePos();
  const isMenuOpen = timer >= 25 && timer < 80;
  const isCard1Visible = timer >= 50;
  const isCard2Visible = timer >= 75;
  const isDragging = timer >= 95 && timer < 120;
  const isNearTarget = timer >= 110 && timer < 120;
  const isConnected = timer >= 120;
  const isClicking = [20, 21, 22, 45, 46, 47, 70, 71, 72, 145, 146, 147].includes(timer);

  return (
    <div className="relative w-full h-full bg-[#F8FAFC] overflow-hidden flex flex-col font-sans border border-slate-200 rounded-2xl shadow-2xl select-none">
      {/* Simulated Mouse */}
      <motion.div 
        animate={{ 
          left: mousePos.x, 
          top: mousePos.y,
          scale: isClicking ? 0.85 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 120 }}
        className="absolute z-[100] pointer-events-none"
      >
        <MousePointer2 size={20} className="text-slate-900 fill-white drop-shadow-xl" />
        {isClicking && (
          <motion.div 
            initial={{ scale: 0, opacity: 1 }} 
            animate={{ scale: 2.5, opacity: 0 }} 
            className="absolute top-0 left-0 w-8 h-8 bg-indigo-500/40 rounded-full -translate-x-1/2 -translate-y-1/2" 
          />
        )}
      </motion.div>

      {/* Header */}
      <div className="h-10 bg-white border-b border-slate-100 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center shadow-sm">
            <Network size={12} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-800 leading-none">데이터 연결 관리자</span>
            <span className="text-[6px] font-bold text-slate-400">데이터 그룹간의 연결성을 시각적으로 디자인하고 관리합니다.</span>
          </div>
        </div>
        <X size={12} className="text-slate-300 hover:text-slate-500 transition-colors cursor-pointer" />
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-32 bg-white border-r border-slate-100 flex flex-col shrink-0">
          <div className="p-2 border-b border-slate-50 flex gap-2">
            <span className="text-[7px] font-black text-indigo-600 border-b-2 border-indigo-600 pb-1">단일 데이터</span>
            <span className="text-[7px] font-bold text-slate-400">다중 데이터</span>
          </div>
          <div className="p-2 space-y-1 flex-1 overflow-y-auto scrollbar-hide">
            {['사용자 목록', '관리자 정보', '부서 목록', '기기 목록', '장소 목록', '로그 기록'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-slate-50 rounded-lg group transition-colors cursor-pointer">
                <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors" />
                <span className="text-[8px] font-bold text-slate-500 group-hover:text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 relative bg-[#F8FAFC] p-4 overflow-hidden">
          {/* Top Info Bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="h-7 w-56 bg-white border border-slate-200 rounded-lg px-3 flex items-center text-[9px] font-black text-slate-700 shadow-sm">부서 인원 목록</div>
              <span className="text-[7px] font-bold text-slate-400 max-w-md">데이터 그룹을 서로 연결해보세요. 항목 이름이 같고 해당 항목이 유효항목이면 자동으로 연결됩니다.</span>
            </div>
            <motion.button 
              animate={{ backgroundColor: timer >= 135 ? '#4f46e5' : '#0f172a' }}
              className="px-4 py-1.5 text-white rounded-lg text-[9px] font-black flex items-center gap-2 shadow-lg shadow-slate-200"
            >
              <FileText size={12} /> 저장하기
            </motion.button>
          </div>

          {/* Data Selection Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-24 left-40 w-44 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 z-50 p-3 space-y-1"
              >
                <p className="text-[8px] font-black text-slate-300 px-2 uppercase mb-2 tracking-widest">데이터 소스 선택</p>
                {[
                  { id: 'user', label: '사용자 목록', active: timer >= 45 && timer < 50 },
                  { id: 'dept', label: '부서 목록', active: timer >= 70 && timer < 75 },
                  { id: 'admin', label: '관리자 정보' },
                  { id: 'device', label: '기기 목록' }
                ].map((item) => (
                  <div key={item.id} className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all ${item.active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'hover:bg-slate-50 text-slate-600'}`}>
                    <span className="text-[10px] font-black">{item.label}</span>
                    {item.active && <CheckCircle2 size={12} />}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
              </marker>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Dragging Line */}
            {isDragging && (
              <motion.path 
                d={`M 35% 48% C 45% 48%, 45% ${mousePos.y}, ${mousePos.x} ${mousePos.y}`}
                stroke="#6366f1" strokeWidth="2" strokeDasharray="6,4" fill="none"
              />
            )}

            {/* Final Connection Line */}
            {isConnected && (
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                d="M 35% 48% C 45% 48%, 45% 63%, 55% 63%" 
                stroke="#6366f1" strokeWidth="2.5" fill="none"
                markerEnd="url(#arrowhead)"
                filter="url(#glow)"
              />
            )}

            {/* Connection Nodes */}
            {(isDragging || isConnected) && (
              <>
                <circle cx="35%" cy="48%" r="4" fill="#6366f1" className="animate-pulse" />
                {isConnected && <circle cx="55%" cy="63%" r="4" fill="#6366f1" />}
              </>
            )}
          </svg>

          {/* Cards Container */}
          <div className="flex gap-8 items-start">
            {/* Card 1 (User List) */}
            <AnimatePresence>
              {isCard1Visible && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="w-44 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden shrink-0 z-10"
                >
                  <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]" /><span className="text-[9px] font-black text-slate-700">사용자 목록</span></div>
                    <Trash2 size={12} className="text-slate-300 hover:text-rose-400 transition-colors cursor-pointer" />
                  </div>
                  <div className="p-2 space-y-1.5">
                    {['사용자 ID', '이름', '부서', '이메일', '연락처'].map((field, i) => (
                      <div key={i} className={`flex items-center justify-between p-2 rounded-lg transition-all ${field === '부서' && isDragging ? 'bg-indigo-50 border border-indigo-200 scale-[1.03] shadow-sm' : 'hover:bg-slate-50'}`}>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded border transition-colors flex items-center justify-center ${i < 3 ? 'bg-slate-900 border-slate-900' : 'border-slate-200'}`}>
                            {i < 3 && <CheckCircle2 size={8} className="text-white" />}
                          </div>
                          <span className={`text-[9px] font-bold ${field === '부서' && isDragging ? 'text-indigo-600' : 'text-slate-600'}`}>{field}</span>
                        </div>
                        <div className="relative">
                          <Network size={10} className={`${field === '부서' && isDragging ? 'text-indigo-500' : 'text-slate-300'}`} />
                          {field === '부서' && isDragging && <motion.div animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 bg-indigo-400 rounded-full" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Placeholder Card */}
            <motion.div 
              animate={{ 
                scale: timer >= 20 && timer < 25 ? 0.95 : 1,
                backgroundColor: timer >= 20 && timer < 25 ? '#f5f3ff' : 'rgba(255,255,255,0.3)'
              }}
              className={`w-44 h-56 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-3 shrink-0 transition-all duration-300 ${timer >= 20 && timer < 25 ? 'border-indigo-400 shadow-inner' : 'border-slate-200'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${timer >= 20 && timer < 25 ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-300'}`}><Plus size={20} /></div>
              <span className={`text-[9px] font-black uppercase tracking-widest transition-colors ${timer >= 20 && timer < 25 ? 'text-indigo-600' : 'text-slate-400'}`}>새 데이터 그룹 추가</span>
            </motion.div>
          </div>

          {/* Card 2 (Dept List) - Appears at bottom or right */}
          <AnimatePresence>
            {isCard2Visible && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                className="absolute bottom-6 left-48 w-44 bg-white rounded-xl border border-indigo-200 shadow-2xl overflow-hidden z-20"
              >
                <div className="p-3 border-b border-indigo-100 flex justify-between items-center bg-indigo-50/50">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]" /><span className="text-[9px] font-black text-indigo-600">부서 목록</span></div>
                  <Trash2 size={12} className="text-indigo-300 hover:text-rose-400 transition-colors cursor-pointer" />
                </div>
                <div className="p-2 space-y-1.5">
                  {['부서 ID', '부서 이름', '관리자', '생성일'].map((field, i) => (
                    <div key={i} className={`flex items-center justify-between p-2 rounded-lg transition-all ${field === '부서 이름' && (isConnected || isNearTarget) ? 'bg-indigo-50 scale-[1.03] border border-indigo-100 shadow-sm' : 'hover:bg-slate-50'}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full border-2 transition-all ${i === 1 && (isConnected || isNearTarget) ? 'bg-indigo-600 border-indigo-600 scale-110' : 'border-slate-200'}`} />
                        <span className={`text-[9px] font-bold ${i === 1 && (isConnected || isNearTarget) ? 'text-indigo-600 font-black' : 'text-slate-400'}`}>{field}</span>
                      </div>
                      {i === 1 && isConnected && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.6)]" />}
                      {i === 1 && isNearTarget && <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }} transition={{ repeat: Infinity }} className="w-2.5 h-2.5 bg-indigo-300 rounded-full" />}
                      {i === 1 && showBurst && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          {[...Array(6)].map((_, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                              animate={{ 
                                scale: [0, 1, 0],
                                x: Math.cos(idx * 60 * Math.PI / 180) * 20,
                                y: Math.sin(idx * 60 * Math.PI / 180) * 20,
                                opacity: 0
                              }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const FeatureGrid: React.FC<FeatureGridProps> = ({ language, onNavigate }) => {
  const t = {
    badge: language === 'ko' ? 'Core Technology' : 'Core Technology',
    titleMain: language === 'ko' ? '4가지 핵심 Builder 기술로 ' : 'Built with 4 Core Technologies',
    desc: language === 'ko' ? '우리 회사 맞춤형 Work OS' : 'Custom Operating Systems Tailored for Your Business',
    btnDetail: language === 'ko' ? '자세히 보기' : 'Learn More',
    preview: language === 'ko' ? '실시간 동기화 시뮬레이션' : 'Real-time Sync Active',
    finalTitle: language === 'ko' ? '지금 즉시 만들어보고 결정하세요' : 'Build instantly and decide',
    finalDesc: language === 'ko' ? '코드 없이 완성되는 지능형 업무 환경' : 'Intelligent work environment without code',
    btnStart: language === 'ko' ? '무료로 시작하기' : 'Start for Free',
    btnInquiry: language === 'ko' ? '도입 문의하기' : 'Contact Us',
  };

  const features = [
    {
      title: "Layout Builder",
      subTitle: language === 'ko' ? "브랜드와 업무 흐름에 맞게 화면을 설계하는 레이아웃 빌더" : "Layout Builder that designs screens to fit your brand and workflow",
      icon: <Layout size={24} />,
      longDesc: language === 'ko' 
        ? "회사의 로고부터 메뉴 구성, 화면 레이아웃, 스타일, 버튼 액션까지 자사 환경에 맞게 유연하게 디자인할 수 있는 빌더 입니다. 대시보드, 리포트, 관리 페이지 등 어떤 화면이든 5분 안에 구축할 수 있습니다."
        : "A builder that allows you to flexibly design everything from logos to menus, layouts, styles, and button actions. Build dashboards, reports, and admin pages in under 5 minutes.",
      benefits: language === 'ko' 
        ? ["사용자가 간편하게 화면을 구성", "자유로운 드래그 앤 드롭 편집", "로고, 메뉴, 레이아웃, 스타일 통합 관리", "어떤 복잡한 화면이라도 빠른 시각화 구축"]
        : ["Create User custom page", "Free Drag-and-Drop Editing", "Unified Logo, Menu, Style Management", "Rapid visualization for any complex screen"],
      customPreview: <LayoutBuilderAnimation />,
      accent: "text-purple-600",
      accentBg: "bg-purple-600",
      bgColor: "bg-purple-50/50",
      borderColor: "border-purple-200",
      glowColor: "from-purple-500/10"
    },
    {
      title: "Form Builder",
      subTitle: language === 'ko' ? "업무 흐름에 맞게 설계하는 입력 폼 빌더" : "Input Form Builder designed to fit your business workflow",
      icon: <FormInput size={24} />,
      longDesc: language === 'ko'
        ? "현장과 조직마다 필요한 입력 항목은 다릅니다. Form Builder는 데이터 입력 구조를 직접 설계할 수 있도록 돕습니다. 텍스트, 숫자, 선택형 항목부터 조건부 노출까지 업무에 맞는 입력 화면을 코드 없이 구성합니다."
        : "Required input items vary by field and organization. Form Builder helps you design data input structures directly. From text, numbers, and selection items to conditional exposure, configure input screens suitable for work without code.",
      benefits: language === 'ko'
        ? ["다양한 입력 타입과 항목 조합", "조건에 따른 항목 표시 및 검증 설정", "필수값·기본값 등 입력 규칙 관리", "데이터 저장 구조와 자동 연동"]
        : ["Various Input Types & Item Combinations", "Conditional Display & Validation Settings", "Required & Default Value Rules Management", "Auto-integration with Data Storage Structures"],
      customPreview: <FormBuilderAnimation />,
      accent: "text-emerald-600",
      accentBg: "bg-emerald-600",
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-200",
      glowColor: "from-emerald-500/10"
    },
    {
      title: "DataView Builder",
      subTitle: language === 'ko' ? "다양한 형태의 데이터를 시각화하는 뷰 빌더" : "View builder for visualizing various types of data",
      icon: <BarChart3 size={24} />,
      longDesc: language === 'ko'
        ? "데이터는 보는 방식에 따라 가치가 달라집니다. 그리드, 칸반, 그리고 일정을 관리하는 대시보드까지, 하나의 데이터를 수만 가지 관점으로 변환하여 확인하세요."
        : "Data value changes by view. From grids and Kanban boards to Dashboards, transform one data set into thousands of perspectives.",
      benefits: language === 'ko'
        ? ["그리드, 칸반, 대시보드 통합 뷰", "조건별 필터링과 정렬로 데이터 제어", "사용자·권한·화면별 데이터 뷰 설정", "복잡한 정보도 한눈에 파악하는 시각화 지원"]
        : ["Integrated views of Grid, Kanban, and Dashboard", "Data control with filtering and sorting", "Data view settings by user and permission", "Visualization to grasp complex info at a glance"],
      customPreview: <UltimateViewAnimation />,
      accent: "text-blue-600",
      accentBg: "bg-blue-600",
      bgColor: "bg-blue-50/50",
      borderColor: "border-blue-200",
      glowColor: "from-blue-500/10"
    },
    {
      title: "Relation Builder",
      subTitle: language === 'ko' ? "흩어진 데이터를 연결하는 데이터 관계 빌더" : "Data Relation Builder that connects scattered data",
      icon: <Share2 size={24} />,
      longDesc: language === 'ko'
        ? "데이터는 서로 연결될 때 더 큰 의미를 가집니다. Data Relation Builder는 서로 다른 데이터 간의 관계를 정의하고, 업무 흐름에 맞는 연결 구조를 시각적으로 설계할 수 있도록 합니다."
        : "Data is more meaningful when connected. Data Relation Builder allows you to define relationships between different data and visually design connection structures that fit your business workflow.",
      benefits: language === 'ko'
        ? ["데이터 간 1:1, 1:N 관계 시각적 설정", "연결된 데이터 자동 참조 및 확장", "관계 기반 화면 구성 및 데이터 조회", "복잡한 데이터 구조를 직관적으로 관리"]
        : ["1:1, 1:N Visual Relationship Settings", "Automatic Reference & Expansion of Linked Data", "Relationship-based Screen Config & Lookup", "Intuitive Management of Complex Data Structures"],
      customPreview: <RelationBuilderAnimation />,
      accent: "text-pink-600",
      accentBg: "bg-pink-600",
      bgColor: "bg-pink-50/50",
      borderColor: "border-pink-200",
      glowColor: "from-pink-500/10"
    }
  ];

  return (
    <section className="pt-32 pb-0 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">{t.badge}</div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 leading-[1.4] tracking-tight mb-6 break-keep">
            {t.titleMain}
          </h2>
          <p className="text-purple-600 text-2xl lg:text-[2.75rem] max-w-4xl mx-auto leading-[1.6] break-keep font-black tracking-tight">{t.desc}</p>
        </div>

        <div className="space-y-40">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
              <div className="w-full lg:w-[45%]">
                <div className={`inline-flex items-center justify-center p-3 rounded-xl ${feature.bgColor} ${feature.accent} mb-8 border ${feature.borderColor}`}>
                  {feature.icon}
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.45]"> {feature.title}</h3>
                {feature.subTitle && (
                  <p className={`text-lg lg:text-xl font-bold ${feature.accent} mb-8 leading-[1.7] break-keep`}>{feature.subTitle}</p>
                )}
                <p className="text-xl lg:text-2xl text-slate-600 mb-10 leading-[1.9] break-keep font-medium">{feature.longDesc}</p>
                <div className="space-y-6 mb-12">
                  {feature.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full ${feature.bgColor} flex items-center justify-center`}>
                        <CheckCircle2 size={20} className={feature.accent} />
                      </div>
                      <span className="text-lg lg:text-xl font-bold text-slate-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-lg flex items-center gap-3 hover:bg-slate-800 transition-all group hover:-translate-y-1 shadow-xl"
                >
                  {t.btnDetail}
                  <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
              <div className="w-full lg:w-[55%] relative group">
                <div className={`absolute -inset-10 bg-gradient-to-tr ${feature.glowColor} to-transparent rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[1px] border-slate-200 aspect-[16/10] bg-slate-100 transition-transform duration-700 group-hover:scale-[1.01]">
                  {feature.customPreview ? (
                    feature.customPreview
                  ) : (
                    <div className="w-full h-full bg-slate-200" />
                  )}
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="mt-32 w-full max-w-[1240px] mx-auto mb-24 px-6">
          <div className="bg-slate-50/80 backdrop-blur-md rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-200 transition-all duration-500 hover:shadow-purple-900/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] pointer-events-none" />
            <div className="relative z-10 text-center lg:text-left flex-1 lg:max-w-[65%]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-600 text-[11px] font-black uppercase tracking-[0.25em] mb-8">
                <span className="animate-pulse"><Sparkles size={14} /></span>
                Instant Deployment
              </div>
              <h4 className="text-3xl md:text-4xl lg:text-[3.25rem] font-black text-slate-900 mb-6 tracking-tight leading-[1.35] lg:whitespace-nowrap">{t.finalTitle}</h4>
              <p className="text-slate-600 text-xl lg:text-2xl font-medium mb-12 break-keep opacity-90 max-w-2xl">{t.finalDesc}</p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button onClick={() => onNavigate?.('pricing')} className="px-14 py-6 bg-purple-600 text-white rounded-2xl font-black text-xl hover:bg-purple-700 transition-all shadow-2xl shadow-purple-200/50 active:scale-95 whitespace-nowrap">{t.btnStart}</button>
                <button onClick={() => onNavigate?.('contact')} className="px-14 py-6 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-black text-xl hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 whitespace-nowrap">{t.btnInquiry}</button>
              </div>
            </div>
            <div className="relative mt-20 lg:mt-0 flex-1 flex justify-center lg:justify-end items-center max-w-[420px]">
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="relative w-full h-full transform -rotate-6 group-hover:rotate-0 transition-transform duration-700">
                  <div className="absolute top-0 right-0 w-[72%] h-[72%] bg-indigo-100/50 backdrop-blur-md rounded-[3rem] border border-white shadow-xl animate-float" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute top-[12%] right-[12%] w-[72%] h-[72%] bg-purple-100/50 backdrop-blur-md rounded-[3rem] border border-white shadow-xl animate-float" style={{ animationDelay: '0.9s' }} />
                  <div className="absolute top-[24%] right-[24%] w-[72%] h-[72%] bg-slate-900 rounded-[3rem] border border-purple-500/30 shadow-2xl animate-float p-6 flex flex-col gap-4">
                     <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-700" /><div className="w-2.5 h-2.5 rounded-full bg-slate-700" /></div>
                     <div className="h-3 w-1/3 bg-slate-800 rounded-full mb-3" />
                     <div className="flex-1 bg-slate-950/50 rounded-[2rem] border border-slate-800/50 p-5 flex flex-col gap-3">
                        <div className="h-2.5 w-full bg-slate-800 rounded-full" />
                        <div className="h-2.5 w-5/6 bg-slate-800 rounded-full" />
                        <div className="mt-auto h-10 w-full bg-purple-600/40 rounded-xl flex items-center justify-center border border-purple-500/20"><div className="w-10 h-1.5 bg-white/20 rounded-full" /></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
