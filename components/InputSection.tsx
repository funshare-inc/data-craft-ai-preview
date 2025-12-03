
import React, { useState } from 'react';
import Button from './Button';
import { AspectRatio } from '../types';

interface InputSectionProps {
  onGenerate: (prompt: string, aspectRatio: AspectRatio) => void;
  isLoading: boolean;
  defaultPrompt: string;
  labels: {
    title: string;
    placeholder: string;
    viewport: string;
    generate: string;
  };
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerate, isLoading, defaultPrompt, labels }) => {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.LANDSCAPE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt, aspectRatio);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto glass-panel rounded-2xl p-1 relative z-10 -mb-10">
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
             <div className="w-2 h-2 rounded-full bg-brand-500"></div>
             <h3 className="text-sm font-semibold text-brand-600 uppercase tracking-wider">{labels.title}</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all min-h-[100px] resize-none font-mono text-sm"
              placeholder={labels.placeholder}
              disabled={isLoading}
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              {prompt.length} chars
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
            <div className="w-full sm:w-auto">
              <label className="block text-xs font-medium text-gray-500 mb-2">
                {labels.viewport}
              </label>
              <div className="flex gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200">
                {Object.values(AspectRatio).map((ratio) => (
                  <button
                    key={ratio}
                    type="button"
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                      aspectRatio === ratio
                        ? 'bg-white text-brand-700 shadow-sm border border-gray-200'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                    }`}
                    disabled={isLoading}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

             <Button type="submit" isLoading={isLoading} className="w-full sm:w-auto shadow-xl shadow-brand-500/20">
              {labels.generate}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InputSection;
