import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { ArrowDown, Github, Terminal, Sparkles, Play } from 'lucide-react';

export const Scene1Hero: React.FC = () => {
  const { playClick, playHover, setIsTerminalOpen } = useTheme();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="scene-1"
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#060609] pt-24 pb-12 select-none"
    >
      {/* Top Film Reel Marks */}
      <div className="w-full max-w-7xl px-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400 border-b border-white/10 pb-3 z-20">
        <div className="flex items-center gap-3">
          <span className="text-cinematic-red font-bold animate-pulse">● REC</span>
          <span>SCENE 01 // THE PROTAGONIST</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>FPS: 60.00</span>
          <span>SHUTTER: 180°</span>
          <span>ISO: 800</span>
          <span className="text-white font-bold">@2006-Aman</span>
        </div>
      </div>

      {/* Cinematic Centerpiece */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center text-center my-auto z-10 px-4">
        {/* Subtitle Header */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.35em] text-slate-300 uppercase mb-4 animate-fade-in">
          <span className="text-cinematic-red">•••</span>
          <span>WELCOME TO MY WORLD</span>
          <span className="text-cinematic-red">•••</span>
        </div>

        {/* The Giant Bold Red Typography Layer with Parallax */}
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
          {/* Giant Background Text: AMAN */}
          <h1
            style={{
              transform: `translate3d(${-mouseOffset.x * 0.5}px, ${-mouseOffset.y * 0.5}px, 0)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="font-bebas text-[28vw] sm:text-[24vw] md:text-[22vw] leading-[0.8] tracking-tighter font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff4500] via-[#e63946] to-[#7f1d1d] select-none drop-shadow-[0_20px_50px_rgba(255,59,31,0.45)]"
          >
            AMAN
          </h1>

          {/* Central Character Silhouette layered over the text */}
          <div
            style={{
              transform: `translate3d(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px, 0)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          >
            {/* Highly stylized cinematic developer silhouette with glowing rim lighting */}
            <div className="relative h-[340px] sm:h-[460px] md:h-[540px] w-auto aspect-[1/2] flex items-end justify-center">
              {/* Silhouette Graphics using SVG vector with sunglasses & sleek jacket */}
              <svg
                viewBox="0 0 200 400"
                className="h-full w-auto drop-shadow-[0_0_35px_rgba(255,100,50,0.6)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Back Rim Lighting Aura */}
                <ellipse cx="100" cy="180" rx="65" ry="120" fill="url(#hero-glow)" opacity="0.4" />
                
                {/* Head and Hair */}
                <path
                  d="M80,75 C70,60 90,30 110,32 C125,34 135,45 130,65 C135,62 140,75 132,82 C125,90 120,95 105,95 C90,95 82,88 80,75 Z"
                  fill="#0c0e17"
                  stroke="#ff5722"
                  strokeWidth="1.5"
                />

                {/* Sunglasses */}
                <rect x="88" y="60" width="16" height="8" rx="2" fill="#ff3b1f" opacity="0.9" />
                <rect x="108" y="60" width="16" height="8" rx="2" fill="#ff3b1f" opacity="0.9" />
                <line x1="104" y1="63" x2="108" y2="63" stroke="#ff3b1f" strokeWidth="2" />

                {/* Neck & Collar */}
                <path d="M92,90 L92,105 L118,105 L118,90 Z" fill="#141724" />

                {/* Stylish Jacket / Shoulders */}
                <path
                  d="M45,150 C50,115 80,105 105,105 C130,105 160,115 165,150 L180,240 C175,250 160,250 155,230 L145,155 L135,260 L75,260 L65,155 L55,230 C50,250 35,250 30,240 Z"
                  fill="#090a10"
                  stroke="#ff6b35"
                  strokeWidth="1.5"
                />

                {/* Chest & Shirt */}
                <path d="M85,115 L125,115 L118,220 L92,220 Z" fill="#171926" />
                <line x1="105" y1="120" x2="105" y2="215" stroke="#ff3b1f" strokeWidth="1.5" opacity="0.6" />

                {/* Trousers & Legs */}
                <path
                  d="M75,260 L135,260 L145,390 L115,390 L108,290 L102,290 L95,390 L65,390 Z"
                  fill="#06070a"
                  stroke="#ff5722"
                  strokeWidth="1"
                />

                {/* Gradient Definition */}
                <defs>
                  <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ff4500" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#ff1e00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Film Scene Markers on Sides */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 font-mono text-[10px] text-slate-500 uppercase tracking-widest border-l-2 border-cinematic-red pl-3 text-left">
          <span className="text-white font-bold">ARTIST // ARCHITECT</span>
          <span>AMAN KUMAR</span>
          <span>B.TECH CSE</span>
          <span>INDIA</span>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 font-mono text-[10px] text-slate-500 uppercase tracking-widest border-r-2 border-cinematic-red pr-3 text-right">
          <span className="text-white font-bold">LEGENDARY REPOS</span>
          <span>BOARDVAULT SAAS</span>
          <span>FOODLOOP.AI</span>
          <span className="text-cinematic-red">GITHUB: 2006-AMAN</span>
        </div>

        {/* Call to Actions Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 z-30">
          <button
            onClick={() => scrollTo('scene-2')}
            onMouseEnter={playHover}
            className="group px-8 py-3.5 rounded-full bg-cinematic-red hover:bg-red-600 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-cinematic-red/40 hover:scale-105 flex items-center gap-2"
          >
            <span>ENTER THE UNIVERSE</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <a
            href="https://github.com/2006-Aman"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            onMouseEnter={playHover}
            className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-cinematic-red" />
            <span>GITHUB @2006-AMAN</span>
          </a>

          <button
            onClick={() => {
              playClick();
              setIsTerminalOpen(true);
            }}
            onMouseEnter={playHover}
            className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>LAUNCH CLI</span>
          </button>
        </div>
      </div>

      {/* Bottom Film Slate Footer */}
      <div className="w-full max-w-7xl px-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400 border-t border-white/10 pt-3 z-20">
        <div className="flex items-center gap-2">
          <span className="text-cinematic-red">TAKE 01</span>
          <span>// DIRECTED BY AMAN KUMAR</span>
        </div>
        <button
          onClick={() => scrollTo('scene-2')}
          className="flex items-center gap-1.5 text-slate-300 hover:text-cinematic-red transition-colors animate-bounce"
        >
          <span>SCROLL TO ADVANCE</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
