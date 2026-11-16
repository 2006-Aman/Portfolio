import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'HOME', href: 'scene-1' },
  { label: 'WORK', href: 'scene-4' },
  { label: 'ABOUT', href: 'scene-2' },
  { label: 'JOURNAL', href: 'scene-3' },
  { label: 'CONTACT', href: 'scene-5' },
];

export const CinematicNavbar: React.FC = () => {
  const { playClick } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [timeStr, setTimeStr] = useState('00:00:00:00');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cinematic timecode counter
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const frames = Math.floor((elapsed % 1000) / (1000 / 24));
      const secs = Math.floor(elapsed / 1000) % 60;
      const mins = Math.floor(elapsed / 60000) % 60;
      const hrs = Math.floor(elapsed / 3600000);
      setTimeStr(
        `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(frames).padStart(2, '0')}`
      );
    }, 42); // ~24fps
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8"
      style={{
        height: '52px',
        background: scrolled
          ? 'rgba(5, 2, 2, 0.95)'
          : 'rgba(5, 2, 2, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        transition: 'background 0.4s ease',
      }}
    >
      {/* Left — Brand */}
      <button
        onClick={() => scrollTo('scene-1')}
        className="flex flex-col items-start group"
      >
        <span
          className="font-bebas text-xl leading-none tracking-wider text-white group-hover:text-red-500 transition-colors"
        >
          AMAN
        </span>
        <span className="font-mono text-[7px] tracking-[0.25em] text-white/30 uppercase">
          ARTIST · CREATIVE
        </span>
      </button>

      {/* Center — Nav links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {NAV_ITEMS.map(item => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.href)}
            className="font-mono text-[10px] tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Right — Timecode + GitHub */}
      <div className="flex items-center gap-4">
        {/* Timecode display */}
        <span className="hidden lg:block font-mono text-[9px] tracking-widest text-white/20">
          {timeStr}
        </span>

        {/* Hire Me button */}
        <a
          href="https://github.com/2006-Aman"
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-white/50 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full transition-all uppercase"
        >
          <Github className="w-3 h-3" />
          <span className="hidden sm:block">GITHUB</span>
        </a>
      </div>
    </nav>
  );
};
