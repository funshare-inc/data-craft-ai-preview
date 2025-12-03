
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { GeneratedImage, ViewMode } from '../types';

interface ResultSectionProps {
  images: GeneratedImage[];
  isLoading: boolean;
  error: string | null;
}

const ResultSection: React.FC<ResultSectionProps> = ({ images, isLoading, error }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [columns, setColumns] = useState(3);
  const [showGridLines, setShowGridLines] = useState(false);

  // Trigger grid line animation when layout changes
  useEffect(() => {
    setShowGridLines(true);
    const timer = setTimeout(() => setShowGridLines(false), 1200);
    return () => clearTimeout(timer);
  }, [viewMode, columns, images.length]);

  const handleDownload = (src: string, id: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `datacraft-asset-${id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const BlueprintGrid = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-xl">
      {/* Horizontal Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div 
          key={`h-${i}`} 
          className="absolute left-0 bg-brand-500/10 h-[1px] w-full animate-draw-h"
          style={{ top: `${(i + 1) * 12.5}%`, animationDelay: `${i * 0.05}s` }}
        />
      ))}
      {/* Vertical Lines */}
      {Array.from({ length: columns }).map((_, i) => (
        <div 
          key={`v-${i}`} 
          className="absolute top-0 bg-brand-500/10 w-[1px] h-full animate-draw-v"
          style={{ left: `${((i + 1) / columns) * 100}%`, animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );

  const SimulationPlayer = () => (
    <div className="absolute inset-0 overflow-hidden rounded-2xl flex items-center justify-center pointer-events-none">
      <div className="w-full h-full max-w-2xl max-h-[400px] relative opacity-90">
        
        {/* Animated Grid Lines */}
        <div className="absolute top-[50%] left-0 h-[1px] bg-brand-300/50 animate-sim-draw-h w-0"></div>
        <div className="absolute top-0 left-[50%] w-[1px] bg-brand-300/50 animate-sim-draw-v h-0"></div>

        {/* HR Card 1 (Employee) - White Card style */}
        <div className="absolute top-[5%] left-[5%] w-[42%] h-[40%] rounded-xl border border-gray-200 bg-white animate-sim-pop-1 opacity-0 flex flex-col p-4 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">MES</div>
                <div>
                    <div className="w-24 h-2.5 bg-gray-200 rounded mb-1.5"></div>
                    <div className="w-16 h-2 bg-gray-100 rounded"></div>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-50 rounded mb-2"></div>
            <div className="w-[80%] h-2 bg-gray-50 rounded"></div>
            <div className="mt-auto flex gap-2">
                <div className="px-2 py-1 rounded bg-indigo-50 text-indigo-600 text-[10px] font-mono border border-indigo-100">Production</div>
                <div className="px-2 py-1 rounded bg-green-50 text-green-600 text-[10px] font-mono border border-green-100">Syncing</div>
            </div>
        </div>
        
        {/* HR Card 2 (Employee) */}
        <div className="absolute top-[5%] left-[53%] w-[42%] h-[40%] rounded-xl border border-gray-200 bg-white animate-sim-pop-2 opacity-0 flex flex-col p-4 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 border border-brand-100 flex items-center justify-center text-brand-600 font-bold text-xs">ERP</div>
                <div>
                    <div className="w-20 h-2.5 bg-gray-200 rounded mb-1.5"></div>
                    <div className="w-12 h-2 bg-gray-100 rounded"></div>
                </div>
            </div>
            <div className="w-full h-2 bg-gray-50 rounded mb-2"></div>
            <div className="w-[70%] h-2 bg-gray-50 rounded"></div>
            <div className="mt-auto flex gap-2">
                <div className="px-2 py-1 rounded bg-brand-50 text-brand-600 text-[10px] font-mono border border-brand-100">Finance</div>
                <div className="px-2 py-1 rounded bg-green-50 text-green-600 text-[10px] font-mono border border-green-100">Syncing</div>
            </div>
        </div>

        {/* HR Table/List (Bottom) */}
        <div className="absolute top-[55%] left-[5%] w-[90%] h-[40%] rounded-xl border border-gray-200 bg-white animate-sim-pop-3 opacity-0 p-4 flex flex-col gap-3 shadow-xl">
             <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                 <div className="w-24 h-3 bg-gray-200 rounded"></div>
                 <div className="flex gap-2">
                     <div className="w-4 h-4 rounded bg-gray-100"></div>
                     <div className="w-4 h-4 rounded bg-gray-100"></div>
                 </div>
             </div>
             <div className="w-full h-8 bg-gray-50 rounded flex items-center px-3 gap-4 border border-gray-50">
                 <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                 <div className="w-32 h-2 bg-gray-200 rounded"></div>
             </div>
             <div className="w-full h-8 bg-gray-50 rounded flex items-center px-3 gap-4 border border-gray-50">
                 <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                 <div className="w-24 h-2 bg-gray-200 rounded"></div>
             </div>
        </div>

        {/* Cursor with Dynamic Data Input Label */}
        <div className="absolute w-6 h-6 z-50 animate-sim-cursor opacity-0">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#7c3aed" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          
          {/* Typing Tooltip */}
          <div className="absolute top-0 left-6 ml-2 bg-gray-900 text-white text-[10px] font-mono rounded px-2 py-1 shadow-lg whitespace-nowrap">
             <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                <span className="opacity-0 animate-[fadeInOut_8s_linear_infinite_0s] absolute">Connecting: MES Protocol</span>
                <span className="opacity-0 animate-[fadeInOut_8s_linear_infinite_3.5s] absolute">Connecting: ERP API</span>
                <span className="opacity-0 animate-[fadeInOut_8s_linear_infinite_5.5s] absolute">Building DataView...</span>
                <span className="invisible">Placeholder for width</span>
             </div>
          </div>
        </div>

        {/* Label */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
             <span className="text-xs font-mono text-gray-600 bg-white/80 border border-gray-200 px-3 py-1 rounded-full animate-pulse flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                AI Agent: Integrating Enterprise Data...
             </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full animate-fade-in relative z-0">
      
      {/* Toolbar / Control Panel */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 glass-panel p-2 pl-6 pr-2 rounded-xl">
        <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20"></div>
            <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
            <h2 className="text-sm font-semibold text-gray-700">DataCraft Builder Preview</h2>
        </div>

        <div className="flex items-center gap-4">
            {/* View Mode Control */}
            <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200">
                <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1.5 rounded flex items-center gap-2 text-xs font-medium transition-all ${
                        viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                    }`}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    Grid
                </button>
                <button
                    onClick={() => setViewMode('masonry')}
                    className={`px-3 py-1.5 rounded flex items-center gap-2 text-xs font-medium transition-all ${
                        viewMode === 'masonry' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                    }`}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7v7H3z"/><path d="M14 3h7v11H14z"/><path d="M3 14h7v7H3z"/><path d="M14 18h7v3H14z"/></svg>
                    Masonry
                </button>
                <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1.5 rounded flex items-center gap-2 text-xs font-medium transition-all ${
                        viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                    }`}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    List
                </button>
            </div>

             {/* Column Control */}
             {viewMode !== 'list' && (
                <div className="hidden sm:flex items-center gap-2 px-2 border-l border-gray-200">
                    <span className="text-xs text-gray-400 uppercase font-bold">Grid</span>
                    <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200">
                        {[2, 3, 4, 5].map(num => (
                            <button
                                key={num}
                                onClick={() => setColumns(num)}
                                className={`w-6 h-6 rounded flex items-center justify-center text-xs font-medium transition-all ${
                                    columns === num 
                                    ? 'bg-brand-600 text-white shadow-sm' 
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                                }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="relative min-h-[500px] bg-gray-50/80 rounded-2xl border border-gray-200 p-8 transition-all duration-300 overflow-hidden shadow-inner">
        
        {/* Simulation Video / Empty State */}
        {images.length === 0 && !isLoading && !error && (
            <SimulationPlayer />
        )}

        {/* Grid Blueprint Visualization */}
        {showGridLines && viewMode !== 'list' && <BlueprintGrid />}

        {/* Loading Indicator (Overlaid) */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl">
             <div className="relative w-24 h-24 mb-6">
                <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-100 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-t-2 border-brand-600 rounded-full animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-600 rounded-full shadow-lg shadow-brand-600/50 animate-pulse"></div>
             </div>
             <p className="text-gray-600 font-mono text-sm tracking-widest uppercase">Compiling Assets...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-center text-red-600">
            {error}
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
            <div 
                className="grid gap-6 transition-all duration-500"
                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
                {images.map((img) => (
                    <div key={img.id} className="group relative aspect-square bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-300 transition-all cursor-pointer">
                        <img src={img.src} alt="Generated" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        
                        {/* Overlay UI */}
                        <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                             <span className="text-xs font-mono text-gray-500 mb-2">COMPONENT PREVIEW</span>
                             <div className="flex gap-2">
                                <Button variant="primary" onClick={() => handleDownload(img.src, img.id)} className="!py-2 !px-4 !text-xs !h-8 shadow-none">
                                    Export
                                </Button>
                                <Button variant="outline" className="!py-2 !px-4 !text-xs !h-8 bg-white">
                                    Edit Code
                                </Button>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Masonry View */}
        {viewMode === 'masonry' && (
            <div 
                className="columns-1 gap-6 space-y-6"
                style={{ columnCount: columns }}
            >
                {images.map((img) => (
                    <div key={img.id} className="break-inside-avoid relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all mb-6 group">
                         <img src={img.src} alt="Generated" className="w-full h-auto block" />
                         <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs text-gray-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100">
                            {img.aspectRatio}
                         </div>
                    </div>
                ))}
            </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
            <div className="space-y-4 max-w-4xl mx-auto">
                {images.map((img) => (
                    <div key={img.id} className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md hover:border-brand-300 transition-all group">
                        <div className="sm:w-48 aspect-video sm:aspect-[4/3] relative">
                             <img src={img.src} alt="Generated" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Generated Component #{img.id.slice(0, 6)}</h4>
                                    <p className="text-gray-500 text-xs font-mono line-clamp-1">{img.prompt}</p>
                                </div>
                                <span className="text-xs text-gray-400 font-mono">
                                    {new Date(img.timestamp).toLocaleTimeString()}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100">
                                <button onClick={() => handleDownload(img.src, img.id)} className="text-xs text-brand-600 hover:text-brand-800 transition-colors font-medium">Download Asset</button>
                                <div className="w-[1px] h-3 bg-gray-300"></div>
                                <button className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Copy CSS</button>
                                <div className="w-[1px] h-3 bg-gray-300"></div>
                                <button className="text-xs text-gray-500 hover:text-gray-900 transition-colors">Inspect</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}

      </div>
    </section>
  );
};

export default ResultSection;
