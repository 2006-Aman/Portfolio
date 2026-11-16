import React from 'react';
import { Project } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Terminal, 
  Sparkles,
  Flame,
  Globe
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { playClick, playHover } = useTheme();

  if (!project) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-cyan-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      default: return <Terminal className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => {
          playClick();
          onClose();
        }}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl glass-panel-glow border border-cyan-500/30 rounded-3xl overflow-hidden bg-slate-950 shadow-2xl z-10 animate-fade-in my-8">
        {/* Top Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.bannerGradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-md">
                {renderIcon(project.iconName)}
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-semibold">
                  {project.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              onMouseEnter={playHover}
              className="p-2 rounded-xl bg-black/50 hover:bg-black/80 text-white/80 hover:text-white transition-colors border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="relative z-10 text-xs sm:text-sm text-slate-200 font-mono mt-3 max-w-xl">
            {project.tagline}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              System Architecture & Mission
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                Key Technical Highlights
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                Stack Implementation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/20 text-cyan-300 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-900/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400">
            Repository: <span className="text-white">Aman-kumar2006/{project.id}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="px-4 py-2.5 rounded-xl glass-panel border border-white/15 text-white hover:border-cyan-400 text-xs font-mono flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Source Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-xs font-mono hover:bg-cyan-400 transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
