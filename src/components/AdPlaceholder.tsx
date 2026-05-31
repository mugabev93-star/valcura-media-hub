import React from 'react';
import { Info } from 'lucide-react';

interface AdPlaceholderProps {
  size: 'sidebar' | 'horizontal' | 'multiplex' | 'inline';
  className?: string;
}

export const AdPlaceholder = ({ size, className = '' }: AdPlaceholderProps) => {
  const sizeClasses = {
    sidebar: 'w-full h-[600px] mb-8',
    horizontal: 'w-full h-[120px] my-12',
    multiplex: 'grid grid-cols-2 md:grid-cols-4 gap-4 my-12',
    inline: 'w-full h-[250px] my-8'
  };

  if (size === 'multiplex') {
    return (
      <div className={`${sizeClasses.multiplex} ${className}`}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center p-6 text-center group">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1">
              <Info size={10} />
              Advertisement
            </div>
            <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mb-3"></div>
            <div className="w-20 h-1 bg-slate-100 dark:bg-slate-800/50 rounded-full"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className} bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center text-center px-12 relative overflow-hidden group`}>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 z-10">
        <Info size={12} />
        Advertisement
      </div>
      
      <div className="space-y-4 opacity-40">
        <div className="w-32 h-2 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto"></div>
        <div className="w-48 h-2 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto"></div>
        <div className="w-24 h-2 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto"></div>
      </div>
      
      <div className="mt-8 text-xs font-medium text-slate-400 group-hover:text-slate-500 transition-colors">
        Policy-Safe Ad Placement Zone
      </div>
    </div>
  );
};