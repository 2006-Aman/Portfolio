import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { 
  ArrowRight, 
  Terminal, 
  Github, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ChevronDown, 
  Cpu, 
  Code
} from 'lucide-react';

const TYPED_TITLES = [
  "Full-Stack Web Architect",
  "3D WebGL & Creative Engineer",
  "SaaS Platform Creator (boardVault)",
  "B.Tech Computer Science Engineer",
  "Kali Linux & Termux Power User"
];

export const Hero: React.FC = () => {
  const { playClick, playHover, setIsTerminalOpen, playScatter } = useTheme();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    const current = TYPED_TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TYPED_TITLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        {/* Futuristic Status Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 shadow-lg shadow-cyan-950/40 animate-float-slow">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="tracking-widest uppercase font-semibold">2006-Aman // QUANTUM PORTFOLIO</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300 hidden sm:inline">3D Dimension Loaded</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase">
          Crafting <span className="text-gradient">Immersive</span>
          <br />
          <span className="text-gradient-accent">3D Digital</span> Worlds
        </h1>

        {/* Typing Subtitle Badge */}
        <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl font-mono text-slate-300 mb-8 min-h-[40px]">
          <span className="text-cyan-400 font-bold">&gt;</span>
          <span className="text-white border-b-2 border-cyan-400 pb-0.5">
            {displayText}
          </span>
          <span className="inline-block w-2.5 h-6 bg-cyan-400 animate-pulse" />
        </div>

        {/* Short Bio Tagline */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed mb-10">
          Hi, I&apos;m <span className="text-white font-semibold">Aman Kumar</span> (GitHub: <a href="https://github.com/2006-Aman" target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4 decoration-cyan-500/40 hover:text-white">@2006-Aman</a>).
          B.Tech CSE student passionate about responsive architectures, intelligent SaaS apps like <span className="text-cyan-300">boardVault</span> & <span className="text-cyan-300">foodloop.ai</span>, and next-gen 3D spatial web physics.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo('journey')}
            onMouseEnter={playHover}
            className="group relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-black font-bold font-mono text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105 flex items-center gap-2.5"
          >
            <Sparkles className="w-4 h-4 text-black animate-spin-slow" />
            <span>Begin Developer Odyssey</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollTo('projects')}
            onMouseEnter={playHover}
            className="px-6 py-3.5 rounded-2xl glass-panel border border-white/10 text-slate-300 hover:text-white font-mono text-sm hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <span>Explore Projects</span>
          </button>

          <button
            onClick={() => {
              playScatter();
              scrollTo('scatter');
            }}
            onMouseEnter={playHover}
            className="px-6 py-3.5 rounded-2xl glass-panel-glow border border-cyan-400/40 text-cyan-300 hover:text-white font-mono text-sm hover:border-cyan-300 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan-950/40"
          >
            <Layers className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>3D Scatter Engine</span>
          </button>

          <button
            onClick={() => {
              playClick();
              setIsTerminalOpen(true);
            }}
            onMouseEnter={playHover}
            className="px-6 py-3.5 rounded-2xl glass-panel border border-white/10 text-slate-300 hover:text-white font-mono text-sm hover:border-white/30 transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Launch CLI</span>
          </button>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="px-5 py-3.5 rounded-2xl glass-panel border border-white/10 text-slate-300 hover:text-white font-mono text-sm hover:border-white/30 transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Quick Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              onMouseEnter={playHover}
              className="glass-panel p-4 rounded-2xl border border-white/10 text-center hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-xs font-mono text-slate-500">
          <span className="tracking-widest uppercase text-[11px] text-cyan-400/80">Scroll to Scatter Matrix</span>
          <button
            onClick={() => scrollTo('scatter')}
            className="p-2 rounded-full border border-cyan-500/20 text-cyan-400 hover:border-cyan-400 transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
