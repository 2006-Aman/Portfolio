import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { 
  User, 
  Terminal, 
  Cpu, 
  GraduationCap, 
  Code, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ExternalLink,
  Mail,
  Copy
} from 'lucide-react';

export const About: React.FC = () => {
  const { playClick, playHover, playSuccess } = useTheme();
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      title: "Full-Stack Web Architecture",
      desc: "Engineering scalable SPAs with React, TypeScript, Node.js, and modern CSS systems. Deep focus on modularity, high accessibility, and crisp rendering performance.",
      icon: Code,
      badge: "MERN + TS"
    },
    {
      title: "Interactive 3D & WebGL",
      desc: "Transforming traditional 2D web layouts into dynamic spatial experiences using Three.js, particle physics shaders, and scroll-linked coordinate transforms.",
      icon: Sparkles,
      badge: "WebGL / Three.js"
    },
    {
      title: "Linux, Termux & DevOps",
      desc: "Comfortable in headless terminal environments, maintaining Kali Linux distributions, crafting Bash automation pipelines, and configuring Android Termux developer rigs.",
      icon: Terminal,
      badge: "POSIX / Shell"
    },
    {
      title: "SBC & Hardware Systems",
      desc: "Fascinated by edge hardware: benchmarking Single Board Computers (Raspberry Pi, Orange Pi) and programming microcontrollers (ESP32) through custom SaaS hubs like boardVault.",
      icon: Cpu,
      badge: "IoT / Hardware"
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>DEVELOPER DOSSIER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            About <span className="text-gradient">Aman Kumar</span>
          </h2>

          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            A developer balancing Computer Science fundamentals with production-grade web engineering
            and creative spatial graphics.
          </p>
        </div>

        {/* Grid Layout: Left Bio & Specs, Right Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Developer Card & Terminal Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            {/* Identity Card */}
            <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-500/25 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-mono text-2xl font-bold text-cyan-400">
                    AK
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">
                    {PERSONAL_INFO.subRole}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-slate-300 underline hover:text-cyan-400">@{PERSONAL_INFO.handle}</a>
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {PERSONAL_INFO.bio}
              </p>

              {/* Verified Details Matrix */}
              <div className="space-y-2.5 font-mono text-xs pt-4 border-t border-white/10">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Focus Degree:</span>
                  <span className="text-white flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> B.Tech CSE
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Current Status:</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Open for Roles
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Operating System:</span>
                  <span className="text-cyan-300">Kali Linux / Ubuntu / Termux</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Quick Contact Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={copyEmail}
                  onMouseEnter={playHover}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 hover:border-cyan-400 transition-all"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{copied ? "Copied Email!" : "Copy Email"}</span>
                  <Copy className="w-3 h-3 text-slate-500" />
                </button>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="p-2.5 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
                  title="Open GitHub Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={playHover}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 relative"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
