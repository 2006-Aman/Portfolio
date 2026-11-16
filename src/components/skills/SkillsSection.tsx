import React, { useState } from 'react';
import { SKILLS } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { 
  Cpu, 
  Code2, 
  Database, 
  Terminal, 
  Sparkles, 
  Binary, 
  Layers, 
  Check, 
  Zap 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { playClick, playHover } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'frontend', label: 'Frontend & 3D', icon: Code2 },
    { id: 'backend', label: 'Backend & DB', icon: Database },
    { id: 'languages', label: 'Languages', icon: Binary },
    { id: 'devops', label: 'Linux & DevOps', icon: Terminal },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY RADAR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>

          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            From modern component systems and WebGL particle shaders to POSIX shells and backend microservices.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={playHover}
                className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/25 scale-105'
                    : 'glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-cyan-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              onMouseEnter={playHover}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform font-mono text-sm font-bold">
                    &lt;/&gt;
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">
                      {skill.categoryLabel}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono font-bold text-cyan-400">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden mb-4 p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Ecosystem Capability Banner */}
        <div className="mt-16 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full-Stack & Hardware Convergence</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Seamlessly bridging frontend elegance with systems code, hardware specs, and cloud deployment workflows.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/2006-Aman?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2"
            >
              <span>View All Repositories</span>
              <Layers className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
