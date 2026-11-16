import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const Scene1Hero: React.FC = () => {
  const { playClick } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    playClick();
    document.getElementById('scene-2')?.scrollIntoView({ behavior: 'smooth' });
  };

  const parallaxY = scrollY * 0.4;

  return (
    <section
      id="scene-1"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-black select-none"
      style={{ cursor: 'none' }}
    >
      {/* Cinematic top bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-4 border-b border-white/5">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest">
          <span className="text-red-500 animate-pulse font-bold">● REC</span>
          <span className="text-white/40">00:00:01:24</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest text-white/30">
          <span>SCENE 01</span>
          <span>ISO 800</span>
          <span>24fps</span>
        </div>
      </div>

      {/* Background smoke/fog effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] via-black to-black" />
        {/* Red atmospheric glow behind the text */}
        <div
          className="absolute inset-x-0 top-1/4 h-96 opacity-20"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #ff2200, transparent)',
            transform: `translateY(${-parallaxY * 0.3}px)`,
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main centered content */}
      <div className="relative flex-1 flex flex-col items-center justify-center z-10"
        style={{ transform: `translateY(${-parallaxY * 0.2}px)` }}>

        {/* Welcome subtitle */}
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] text-white/60 uppercase">
            ••• WELCOME TO MY WORLD •••
          </span>
        </div>

        {/* Giant AMAN text with person silhouette on top */}
        <div className="relative w-full flex items-center justify-center">
          {/* Background giant name — parallax slower */}
          <h1
            className="font-bebas text-[42vw] sm:text-[38vw] md:text-[32vw] leading-[0.82] tracking-tight select-none"
            style={{
              background: 'linear-gradient(180deg, #ff4500 0%, #cc2200 40%, #880000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 60px rgba(255, 60, 0, 0.5))',
              transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`,
              transition: 'transform 0.12s ease-out',
            }}
          >
            AMAN
          </h1>

          {/* Person silhouette — foreground, parallax faster */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
            style={{
              transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
              transition: 'transform 0.08s ease-out',
            }}
          >
            <div className="relative" style={{ height: '70vh', maxHeight: '600px' }}>
              {/* Person SVG silhouette */}
              <svg
                viewBox="0 0 220 500"
                className="h-full w-auto"
                style={{ filter: 'drop-shadow(0 0 40px rgba(255, 100, 30, 0.7)) drop-shadow(0 0 80px rgba(255, 60, 0, 0.3))' }}
              >
                {/* Orange/amber rim light aura behind */}
                <ellipse cx="110" cy="350" rx="40" ry="90" fill="rgba(255,120,0,0.12)" />

                {/* Head */}
                <ellipse cx="110" cy="68" rx="30" ry="34" fill="#0a0a0a" />
                {/* Hair */}
                <path d="M82,55 Q90,30 110,30 Q130,30 138,55 Q130,45 110,43 Q90,43 82,55Z" fill="#111" />

                {/* Sunglasses - iconic red */}
                <rect x="93" y="62" width="17" height="9" rx="3" fill="#cc1100" />
                <rect x="114" y="62" width="17" height="9" rx="3" fill="#cc1100" />
                <line x1="110" y1="66" x2="114" y2="66" stroke="#cc1100" strokeWidth="2" />
                {/* Earpieces */}
                <line x1="93" y1="66" x2="88" y2="66" stroke="#888" strokeWidth="1.5" />
                <line x1="131" y1="66" x2="136" y2="66" stroke="#888" strokeWidth="1.5" />

                {/* Neck */}
                <rect x="103" y="100" width="14" height="20" fill="#0d0d0d" />

                {/* Body - blazer/jacket */}
                <path d="M55,165 L85,118 L105,125 L110,160 L115,125 L135,118 L165,165 L170,320 L50,320 Z"
                  fill="#080808"
                  stroke="rgba(255,80,0,0.3)"
                  strokeWidth="1"
                />
                {/* Lapels */}
                <path d="M85,118 L105,125 L100,165 Z" fill="#0f0f0f" stroke="rgba(255,80,0,0.2)" strokeWidth="1" />
                <path d="M135,118 L115,125 L120,165 Z" fill="#0f0f0f" stroke="rgba(255,80,0,0.2)" strokeWidth="1" />

                {/* Shirt under blazer */}
                <path d="M100,125 L120,125 L118,230 L102,230Z" fill="#121212" />

                {/* Arms */}
                <path d="M55,165 L40,280 L60,285 L75,180Z" fill="#0a0a0a" stroke="rgba(255,70,0,0.2)" strokeWidth="1" />
                <path d="M165,165 L180,280 L160,285 L145,180Z" fill="#0a0a0a" stroke="rgba(255,70,0,0.2)" strokeWidth="1" />

                {/* Hands */}
                <ellipse cx="50" cy="290" rx="10" ry="12" fill="#0d0d0d" />
                <ellipse cx="170" cy="290" rx="10" ry="12" fill="#0d0d0d" />

                {/* Legs */}
                <path d="M70,320 L80,480 L105,480 L110,350 L115,480 L140,480 L150,320Z"
                  fill="#070707"
                  stroke="rgba(255,60,0,0.15)"
                  strokeWidth="1"
                />

                {/* Feet */}
                <ellipse cx="92" cy="484" rx="13" ry="6" fill="#090909" />
                <ellipse cx="128" cy="484" rx="13" ry="6" fill="#090909" />

                {/* Orange rim lighting on edges */}
                <path d="M55,165 L40,280" stroke="rgba(255,120,30,0.5)" strokeWidth="1.5" fill="none" />
                <path d="M165,165 L180,280" stroke="rgba(255,120,30,0.5)" strokeWidth="1.5" fill="none" />
                <path d="M82,55 Q70,80 55,165" stroke="rgba(255,100,20,0.3)" strokeWidth="1" fill="none" />
                <path d="M138,55 Q150,80 165,165" stroke="rgba(255,100,20,0.3)" strokeWidth="1" fill="none" />

                {/* Floor glow/shadow */}
                <ellipse cx="110" cy="490" rx="55" ry="8" fill="rgba(255,80,0,0.15)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scene markers on sides */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1.5 font-mono text-[9px] tracking-widest text-white/25 border-l border-red-800/50 pl-3">
          <span className="text-white/60">ARTIST // GIREESH</span>
          <span>CREATIVE</span>
          <span>STORYTELLER</span>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1.5 font-mono text-[9px] tracking-widest text-white/25 border-r border-red-800/50 pr-3 text-right">
          <span className="text-red-500/80">◄ LEGEND ►</span>
          <div className="flex flex-col gap-1 mt-2">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="flex justify-end gap-0.5">
                {[1,2,3,4,5,6,7,8].map(j => (
                  <div key={j} className="w-1 h-1 rounded-full bg-white/20" />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Left film strip arrow markers */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
          {[0,1,2,3,4].map(i => (
            <div key={i} className="text-white/20 font-mono text-xs">▶</div>
          ))}
        </div>
      </div>

      {/* Bottom scroll CTA */}
      <div className="relative z-20 flex flex-col items-center pb-8 gap-3">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors group"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent group-hover:h-16 transition-all duration-300" />
        </button>
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* CRT scanline effect */}
      <div
        className="absolute inset-0 z-5 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)',
        }}
      />
    </section>
  );
};
