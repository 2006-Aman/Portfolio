import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { Github, Mail, ArrowUp, Heart, Terminal, Sparkles, Layers } from 'lucide-react';

export const Footer: React.FC = () => {
  const { playClick, playHover, setIsTerminalOpen } = useTheme();
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center font-mono font-bold text-cyan-400">
                &lt;AK/&gt;
              </div>
              <span className="font-bold text-white text-lg tracking-wide">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer and B.Tech Computer Science student engineering responsive cloud SaaS platforms, 3D WebGL simulations, and systems tools.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                SYSTEM TIME: <span className="text-cyan-400 font-bold">{timeStr}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-slate-300 font-bold uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">01 // Hyperspace Hero</a>
              </li>
              <li>
                <a href="#scatter" className="hover:text-cyan-400 transition-colors">02 // 3D Scatter Matrix</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">03 // Developer Dossier</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">04 // Technology Stack</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">05 // Featured Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">06 // Transmit Message</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Repositories & Utilities */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-slate-300 font-bold uppercase tracking-wider">Repositories & Shell</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="https://github.com/Aman-kumar2006/boardVault" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  repo: boardVault SaaS
                </a>
              </li>
              <li>
                <a href="https://github.com/Aman-kumar2006/foodloop.ai" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  repo: foodloop.ai
                </a>
              </li>
              <li>
                <a href="https://github.com/Aman-kumar2006/SolFinder-Research" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  repo: SolFinder-Research
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    playClick();
                    setIsTerminalOpen(true);
                  }}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Launch Terminal CLI</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Aman Kumar (<span className="text-cyan-400">@{PERSONAL_INFO.handle}</span>). Built with React, Three.js & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
