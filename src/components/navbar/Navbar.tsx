import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  Volume2, 
  VolumeX, 
  Terminal as TerminalIcon, 
  Github, 
  Menu, 
  X, 
  Layers, 
  Sparkles, 
  Code2, 
  Send, 
  Compass,
  User, 
  Cpu
} from 'lucide-react';
import { ThemeColor } from '../../types';

export const Navbar: React.FC = () => {
  const { 
    theme, 
    setTheme, 
    soundEnabled, 
    toggleSound, 
    playClick, 
    playHover, 
    isTerminalOpen, 
    setIsTerminalOpen 
  } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'journey', 'scatter', 'about', 'skills', 'projects', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero", id: "hero", icon: Sparkles },
    { label: "Odyssey", href: "#journey", id: "journey", icon: Compass },
    { label: "3D Scatter", href: "#scatter", id: "scatter", icon: Layers },
    { label: "About", href: "#about", id: "about", icon: User },
    { label: "Skills", href: "#skills", id: "skills", icon: Cpu },
    { label: "Projects", href: "#projects", id: "projects", icon: Code2 },
    { label: "Contact", href: "#contact", id: "contact", icon: Send },
  ];

  const themes: { id: ThemeColor; label: string; color: string }[] = [
    { id: 'cyan', label: 'Cyan Cyber', color: 'bg-cyan-400' },
    { id: 'purple', label: 'Neon Violet', color: 'bg-purple-500' },
    { id: 'emerald', label: 'Emerald Matrix', color: 'bg-emerald-400' },
    { id: 'amber', label: 'Solar Amber', color: 'bg-amber-400' },
    { id: 'sapphire', label: 'Electric Sapphire', color: 'bg-sky-400' },
  ];

  const handleNavClick = (href: string) => {
    playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            onMouseEnter={playHover}
            className="group flex items-center gap-3 select-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-base text-cyan-400 group-hover:text-white transition-colors">
                &lt;AK/&gt;
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-wider text-base sm:text-lg">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
              <p className="hidden md:block text-[11px] font-mono text-slate-400">
                @{PERSONAL_INFO.handle} • B.Tech CSE
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={playHover}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium font-sans flex items-center gap-1.5 transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme switcher */}
            <div className="flex items-center gap-1 bg-slate-900/70 p-1 rounded-full border border-white/10">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  onMouseEnter={playHover}
                  title={`Theme: ${t.label}`}
                  className={`w-5 h-5 rounded-full ${t.color} transition-transform ${
                    theme === t.id ? 'scale-110 ring-2 ring-white' : 'opacity-50 hover:opacity-100 hover:scale-105'
                  }`}
                />
              ))}
            </div>

            {/* Sound FX Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={playHover}
              title={soundEnabled ? "Mute futuristic audio effects" : "Enable futuristic sound effects"}
              className={`p-2 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
                soundEnabled
                  ? 'bg-cyan-500/15 border-cyan-400/50 text-cyan-300 shadow-md shadow-cyan-500/15'
                  : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="hidden xl:inline text-[11px]">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-500" />
                  <span className="hidden xl:inline text-[11px]">SFX OFF</span>
                </>
              )}
            </button>

            {/* Terminal Toggle Button */}
            <button
              onClick={() => {
                playClick();
                setIsTerminalOpen(!isTerminalOpen);
              }}
              onMouseEnter={playHover}
              className={`px-3 py-2 rounded-xl border font-mono text-xs transition-all flex items-center gap-1.5 ${
                isTerminalOpen
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                  : 'bg-slate-900/80 border-white/15 text-slate-300 hover:text-white hover:border-cyan-400/50'
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Terminal</span>
            </button>

            {/* GitHub Profile Button */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="px-3 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-white/15 text-white hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/15 font-mono text-xs flex items-center gap-1.5 transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className={`p-2 rounded-lg border text-xs ${
                soundEnabled ? 'text-cyan-400 border-cyan-400/50' : 'text-slate-400 border-white/10'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-white hover:border-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-white/10 glass-panel rounded-2xl p-5 space-y-4 animate-fade-in shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-left text-xs font-mono text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400">Color Matrix:</span>
              <div className="flex items-center gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`w-6 h-6 rounded-full ${t.color} ${
                      theme === t.id ? 'ring-2 ring-white scale-110' : 'opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsTerminalOpen(true);
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono text-xs flex items-center justify-center gap-2"
              >
                <TerminalIcon className="w-4 h-4" />
                Terminal
              </button>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-cyan-500 text-black font-bold font-mono text-xs flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
