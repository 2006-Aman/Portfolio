import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ScrollProgressHUD: React.FC = () => {
  const { scrollProgress } = useTheme();
  const percentage = Math.round(scrollProgress * 100);

  // Determine current scene
  const scene = percentage < 20 ? '01' : percentage < 40 ? '02' : percentage < 60 ? '03' : percentage < 80 ? '04' : '05';

  return (
    <>
      {/* Thin progress line at top of page */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-px pointer-events-none">
        <div
          className="h-full transition-all duration-150"
          style={{
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, #ff3b1f, #ffb703)',
          }}
        />
      </div>

      {/* Scene indicator — bottom right */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-1">
        <span className="font-mono text-[8px] tracking-[0.3em] text-white/20 uppercase">SCENE</span>
        <span
          className="font-bebas text-3xl leading-none"
          style={{ color: 'rgba(255, 59, 31, 0.6)' }}
        >
          {scene}
        </span>
        <div className="flex flex-col gap-0.5 mt-1">
          {['01','02','03','04','05'].map(s => (
            <div
              key={s}
              className="w-10 h-px transition-all duration-300"
              style={{
                background: s === scene ? '#ff3b1f' : 'rgba(255,255,255,0.1)',
                transform: s === scene ? 'scaleX(1)' : 'scaleX(0.6)',
                transformOrigin: 'right',
              }}
            />
          ))}
        </div>
      </div>

      {/* Back to top — appears after 20% */}
      {percentage > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 font-mono text-[8px] tracking-[0.2em] text-white/25 hover:text-white/70 transition-colors uppercase flex flex-col items-center gap-1 group"
        >
          <span className="w-px h-8 bg-gradient-to-t from-white/25 to-transparent group-hover:h-12 transition-all duration-300" />
          <span>TOP</span>
        </button>
      )}
    </>
  );
};
