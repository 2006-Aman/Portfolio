import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Volume2, VolumeX, Terminal, Github, Clapperboard, Sparkles } from 'lucide-react';

export const CinematicNavbar: React.FC = () => {
  const { soundEnabled, toggleSound, playClick, playHover, setIsTerminalOpen } = useTheme();
  const [activeScene, setActiveScene] = useState('hero');
  const [timecode, setTimecode] = useState('00:00:01:00');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const h = window.innerHeight;
      const secIdx = Math.min(Math.floor((scrollY + h * 0.3) / h), 4);
      const sceneIds = ['scene-1', 'scene-2', 'scene-3', 'scene-4', 'scene-5'];
      setActiveScene(sceneIds[secIdx] || 'scene-1');

      // Update cinematic timecode
      const frames = Math.floor((scrollY % 1000) / 33);
      const seconds = Math.floor(scrollY / 100) % 60;
      const minutes = Math.floor(scrollY / 6000) % 60;
      setTimecode(`00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(frames).padStart(2, '0')}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: "PROLOGUE", id: "scene-1" },
    { label: "UNIVERSE", id: "scene-2" },
    { label: "JOURNEY", id: "scene-3" },
    { label: "THEATER", id: "scene-4" },
    { label: "CONTACT", id: "scene-5" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-8 bg-black/40 backdrop-blur-xl border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Branding: Cinematic Logo */}
        <a
          href="#scene-1"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('scene-1');
          }}
          onMouseEnter={playHover}
          className="flex items-center gap-3 group"
        >
          <div className="relative font-bebas text-2xl sm:text-3xl tracking-widest text-white group-hover:text-cinematic-red transition-colors flex items-center gap-2">
            <span className="text-cinematic-red text-xl">■</span>
            <span>AMAN</span>
          </div>
          <div className="hidden sm:block h-4 w-[1px] bg-white/20" />
          <div className="hidden md:block text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            FULL-STACK ARCHITECT // 3D EXPLORER
          </div>
        </a>

        {/* Center: Scene Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item, idx) => {
            const isActive = activeScene === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={playHover}
                className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all ${
                  isActive
                    ? 'bg-cinematic-red text-white font-bold shadow-lg shadow-cinematic-red/40 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {String(idx + 1).padStart(2, '0')}. {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Timecode + Audio + Terminal + GitHub */}
        <div className="flex items-center gap-3">
          {/* Timecode */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-[11px] font-mono text-slate-400">
            <Clapperboard className="w-3.5 h-3.5 text-cinematic-red animate-pulse" />
            <span className="text-white font-semibold">{timecode}</span>
          </div>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={playHover}
            className={`p-2 rounded-xl border text-xs transition-all ${
              soundEnabled
                ? 'bg-cinematic-red/20 border-cinematic-red text-cinematic-red'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
            title={soundEnabled ? "Mute audio" : "Enable futuristic sound"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              playClick();
              setIsTerminalOpen(true);
            }}
            onMouseEnter={playHover}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>CLI</span>
          </button>

          {/* GitHub Profile Button */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            onMouseEnter={playHover}
            className="px-3.5 py-2 rounded-xl bg-cinematic-red hover:bg-red-600 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-cinematic-red/30 flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">2006-Aman</span>
          </a>
        </div>
      </div>
    </header>
  );
};
