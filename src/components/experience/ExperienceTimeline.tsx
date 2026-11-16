import React from 'react';
import { TIMELINE } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { GraduationCap, Briefcase, GitBranch, Sparkles, Calendar, CheckCircle } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { playHover } = useTheme();

  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return GraduationCap;
      case 'project': return Briefcase;
      case 'opensource': return GitBranch;
      default: return Sparkles;
    }
  };

  return (
    <section id="timeline" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>TRAJECTORY & MILESTONES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Engineering <span className="text-gradient">Journey</span>
          </h2>

          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic milestones, project launches, and systems exploration shaping my developer skillset.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical glowing line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent opacity-40" />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => {
              const Icon = getIcon(item.type);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  onMouseEnter={playHover}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Node Badge in center */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-10 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 uppercase">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <h4 className="text-xs font-mono text-cyan-400 mb-3">
                        {item.organization}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-4">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                        {item.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
