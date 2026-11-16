import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowUp, Activity } from 'lucide-react';

export const ScrollProgressHUD: React.FC = () => {
  const { scrollProgress, playClick, playHover } = useTheme();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const percentage = Math.round(scrollProgress * 100);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3">
      {/* Cyber Telemetry Pill */}
      <div className="glass-panel px-3.5 py-2 rounded-2xl border border-white/10 flex items-center gap-2.5 font-mono text-[11px] text-slate-300 shadow-xl backdrop-blur-xl">
        <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span className="text-slate-500">Z_DEPTH:</span>
        <span className="text-cyan-400 font-bold w-9">{percentage}%</span>
        {/* Progress Mini Bar */}
        <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Warp to Top */}
      {percentage > 15 && (
        <button
          onClick={scrollToTop}
          onMouseEnter={playHover}
          className="p-2.5 rounded-2xl glass-panel-glow border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-300 transition-all hover:scale-110 shadow-lg animate-fade-in"
          title="Warp to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
