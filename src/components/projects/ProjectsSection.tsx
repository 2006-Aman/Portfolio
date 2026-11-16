import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Cpu, 
  Flame, 
  Terminal, 
  Globe, 
  Maximize2 
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (p: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { playClick, playHover } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'SaaS Platforms' },
    { id: 'ai', label: 'AI & Sustainability' },
    { id: 'frontend', label: 'Interactive Web' },
    { id: 'devops', label: 'DevOps & CLI' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      default: return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>DEPLOYED SOFTWARE & REPOSITORIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world software built by Aman Kumar with public repositories, live deployments, and modular architectures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                playClick();
                setActiveFilter(f.id);
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeFilter === f.id
                  ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={playHover}
              className="glass-panel rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-2 flex flex-col overflow-hidden relative"
            >
              {/* Card Banner */}
              <div className={`h-44 bg-gradient-to-br ${project.bannerGradient} relative p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] group-hover:bg-black/25 transition-colors" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-950/70 border border-white/20 flex items-center justify-center backdrop-blur-md">
                    {renderIcon(project.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/60 border border-white/20 text-cyan-300">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                  {project.metrics && (
                    <span className="text-[11px] font-mono text-cyan-300 block mt-0.5">
                      ★ {project.metrics}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs font-mono text-cyan-400 mb-2 font-medium line-clamp-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-cyan-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      playClick();
                      onSelectProject(project);
                    }}
                    onMouseEnter={playHover}
                    className="text-xs font-mono text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 py-1.5 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClick}
                      onMouseEnter={playHover}
                      className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        onMouseEnter={playHover}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all text-xs font-mono font-bold flex items-center gap-1.5"
                        title="Live Demo"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
