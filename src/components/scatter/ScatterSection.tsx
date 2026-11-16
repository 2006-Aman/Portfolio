import React, { useState } from 'react';
import { ScatterShowcase3D } from '../canvas/ScatterShowcase3D';
import { useTheme } from '../../context/ThemeContext';
import { 
  Layers, 
  Sparkles, 
  Cpu, 
  Workflow, 
  Database, 
  Maximize2, 
  Minimize2, 
  Binary,
  Radio
} from 'lucide-react';

interface InfoShard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  detail: string;
  telemetry: string;
  icon: typeof Cpu;
  defaultOffset: { x: number; y: number; z: number; r: number };
}

const INFO_SHARDS: InfoShard[] = [
  {
    id: "shard-1",
    title: "boardVault Engine",
    subtitle: "Hardware Specification Hub",
    category: "SaaS Core",
    detail: "Parametric comparison index for Raspberry Pi 5, Orange Pi & ESP32. Dynamic pinout graphs and memory benchmark matrices.",
    telemetry: "FREQ: 2.4GHz | GPIO: 40-PIN",
    icon: Cpu,
    defaultOffset: { x: -25, y: -20, z: 40, r: -8 }
  },
  {
    id: "shard-2",
    title: "foodloop.ai Neural Mesh",
    subtitle: "Food Spoilage Forecasting",
    category: "AI & Ecology",
    detail: "Smart waste-diversion model connecting local donor kitchens with verified NGOs through proximity-weighted routing.",
    telemetry: "LATENCY: 42ms | ACCURACY: 94.6%",
    icon: Sparkles,
    defaultOffset: { x: 30, y: -25, z: 60, r: 10 }
  },
  {
    id: "shard-3",
    title: "Kali / Termux Kernel",
    subtitle: "Mobile DevOps & CLI Tools",
    category: "Systems & Security",
    detail: "Headless POSIX-compliant environment with custom Bash pipelines, Python diagnostics, and automated deployment chains.",
    telemetry: "KERNEL: Linux 6.x | SHELL: zsh",
    icon: Binary,
    defaultOffset: { x: -35, y: 30, z: 50, r: -12 }
  },
  {
    id: "shard-4",
    title: "SolFinder Research Portal",
    subtitle: "Enterprise Research Management",
    category: "Web Architecture",
    detail: "High-performance corporate research showcase engineered with pure HTML5, CSS3, and JavaScript ES6+ modules.",
    telemetry: "LIGHTHOUSE: 100/100 | BUNDLE: 0kb",
    icon: Database,
    defaultOffset: { x: 40, y: 35, z: 70, r: 14 }
  }
];

export const ScatterSection: React.FC = () => {
  const { playScatter, playAssemble, playHover, scrollProgress } = useTheme();
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [activeShard, setActiveShard] = useState<string | null>(null);

  const toggleExplode = () => {
    if (!isExploded) {
      playScatter();
      setIsExploded(true);
    } else {
      playAssemble();
      setIsExploded(false);
    }
  };

  return (
    <section id="scatter" className="relative py-28 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>SCROLL-DRIVEN 3D SPATIAL DYNAMICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Quantum <span className="text-gradient">Information</span> Scatter
          </h2>

          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            As you traverse down the website, structured project data and compute nodes disengage,
            scattering across the 3D depth axis before crystallizing into focused architectural components.
          </p>
        </div>

        {/* 3D WebGL Scatter Canvas Showcase */}
        <div className="mb-20">
          <ScatterShowcase3D />
        </div>

        {/* Interactive 3D Exploded Information Cards Matrix */}
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 px-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Workflow className="w-5 h-5 text-cyan-400" />
                <span>Deconstructed Architecture Shards</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                Toggle manual shard displacement or observe scroll-linked 3D physics.
              </p>
            </div>

            <button
              onClick={toggleExplode}
              onMouseEnter={playHover}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs flex items-center gap-2 transition-all duration-300 ${
                isExploded
                  ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                  : 'glass-panel border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-300'
              }`}
            >
              {isExploded ? (
                <>
                  <Minimize2 className="w-4 h-4" /> Reassemble Shards
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" /> Scatter 3D Information Shards
                </>
              )}
            </button>
          </div>

          {/* 3D Perspective Card Container */}
          <div className="relative min-h-[500px] perspective-1000 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {INFO_SHARDS.map((shard) => {
              const Icon = shard.icon;
              const isSelected = activeShard === shard.id;
              
              // Compute dynamic displacement based on explode state and scroll progress
              const dynamicX = isExploded ? shard.defaultOffset.x * 1.5 : 0;
              const dynamicY = isExploded ? shard.defaultOffset.y * 1.5 : 0;
              const dynamicZ = isExploded ? shard.defaultOffset.z * 1.2 : 0;
              const dynamicRotate = isExploded ? shard.defaultOffset.r : 0;

              return (
                <div
                  key={shard.id}
                  onClick={() => {
                    setActiveShard(isSelected ? null : shard.id);
                    playHover();
                  }}
                  onMouseEnter={playHover}
                  style={{
                    transform: `translate3d(${dynamicX}px, ${dynamicY}px, ${dynamicZ}px) rotate(${dynamicRotate}deg)`,
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
                  }}
                  className={`relative p-6 rounded-2xl glass-panel border transition-all cursor-pointer group ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-950/40 shadow-2xl shadow-cyan-500/30'
                      : 'border-white/10 hover:border-cyan-500/50 hover:bg-slate-900/90'
                  }`}
                >
                  {/* Glow overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                          {shard.category}
                        </span>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {shard.title}
                        </h4>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">
                      #{shard.id}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-2 font-mono">{shard.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {shard.detail}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-cyan-400/90">{shard.telemetry}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 group-hover:border-cyan-400/30">
                      {isExploded ? 'SCATTERED' : 'LOCKED'}
                    </span>
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
