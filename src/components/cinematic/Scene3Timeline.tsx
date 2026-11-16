import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Compass, Calendar, CheckCircle2, ChevronRight, ChevronLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface TimelineYear {
  year: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  angleDeg: number; // position on radial arc
  highlights: string[];
  tech: string[];
  repoUrl?: string;
  imageAccent: string;
}

const TIMELINE_DATA: TimelineYear[] = [
  {
    year: "2021",
    title: "The Genesis: C & Terminal Curiosity",
    tagline: "First lines of C, memory pointers, and exploring UNIX logic",
    category: "FOUNDATIONS",
    angleDeg: -50,
    description: "Driven by curiosity about how software interacts with hardware memory. Began coding foundational algorithms in C, writing CLI utilities, and studying OS architecture.",
    highlights: ["First algorithmic C scripts", "Mastered pointer manipulation", "POSIX command line basics"],
    tech: ["C", "GCC", "Linux CLI", "Git"],
    imageAccent: "from-amber-600 to-red-900"
  },
  {
    year: "2022",
    title: "POSIX & Mobile Lab: Kali & Termux",
    tagline: "Converting Android into a full headless Linux developer rig",
    category: "SYSTEMS",
    angleDeg: -30,
    description: "Configured a complete portable developer workstation inside Android Termux with Kali Linux toolsets, compiling packages on ARM and mastering shell pipelines.",
    highlights: ["Configured Termux development rig", "Automated Bash pipelines", "Linux networking tools"],
    tech: ["Kali Linux", "Termux", "Bash", "Python", "SSH"],
    imageAccent: "from-emerald-600 to-teal-950"
  },
  {
    year: "2023",
    title: "The Modern Full-Stack Leap",
    tagline: "Mastering React, TypeScript, and responsive system design",
    category: "FULL-STACK",
    angleDeg: -10,
    description: "Expanded into production web engineering. Engineered component-driven user interfaces in React with strict TypeScript contracts and REST backend integrations.",
    highlights: ["MERN stack architectures", "Modern responsive CSS systems", "Clean asynchronous workflows"],
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    imageAccent: "from-blue-600 to-indigo-950"
  },
  {
    year: "2024",
    title: "SaaS Platforms: boardVault & foodloop.ai",
    tagline: "Building hardware benchmarking & AI sustainability platforms",
    category: "PRODUCTION SAAS",
    angleDeg: 10,
    description: "Created and launched boardVault to benchmark Single Board Computers (Raspberry Pi, Orange Pi) and ESP32s, alongside foodloop.ai to fight community food waste with AI.",
    highlights: ["Launched boardVault SaaS hub", "Built foodloop.ai surplus food routing", "50+ hardware boards indexed"],
    tech: ["React", "TypeScript", "AI APIs", "SBC Hardware", "Netlify"],
    repoUrl: "https://github.com/Aman-kumar2006/boardVault",
    imageAccent: "from-cyan-600 to-blue-900"
  },
  {
    year: "2025",
    title: "3D Spatial WebGL & Particle Physics",
    tagline: "Breaking 2D boundaries with Three.js & real-time audio synthesis",
    category: "SPATIAL 3D",
    angleDeg: 30,
    description: "Elevated web development into immersive 3D spatial computing. Programmed scroll-linked particle scatter physics, 3D WebGL scenes, and zero-asset Web Audio sound synthesis.",
    highlights: ["Three.js particle scatter engine", "Custom browser sound synthesizer", "3D perspective deconstruction"],
    tech: ["Three.js", "WebGL", "Web Audio API", "Shaders"],
    imageAccent: "from-purple-600 to-pink-950"
  },
  {
    year: "2026",
    title: "The B.Tech CSE Frontier & Global Impact",
    tagline: "High-impact engineering, open source, and software internships",
    category: "HORIZON",
    angleDeg: 50,
    description: "Pursuing B.Tech Computer Science & Engineering with deep focus on algorithms, distributed architecture, and actively collaborating on world-class software engineering roles.",
    highlights: ["15+ GitHub repositories", "Active DSA problem solving", "Open for SWE internships"],
    tech: ["Algorithms", "Full-Stack Web", "Linux", "Three.js"],
    repoUrl: "https://github.com/2006-Aman",
    imageAccent: "from-amber-500 to-orange-700"
  }
];

export const Scene3Timeline: React.FC = () => {
  const { playClick, playHover } = useTheme();
  const [selectedIdx, setSelectedIdx] = useState<number>(3); // 2024 active by default

  const activeItem = TIMELINE_DATA[selectedIdx];

  const handleSelectYear = (idx: number) => {
    playClick();
    setSelectedIdx(idx);
  };

  const handleNext = () => {
    playClick();
    setSelectedIdx((prev) => (prev + 1) % TIMELINE_DATA.length);
  };

  const handlePrev = () => {
    playClick();
    setSelectedIdx((prev) => (prev - 1 + TIMELINE_DATA.length) % TIMELINE_DATA.length);
  };

  // Calculate laser pointer angle (between -50deg and +50deg)
  const laserAngle = activeItem.angleDeg;

  return (
    <section id="scene-3" className="relative min-h-screen py-24 bg-[#050508] overflow-hidden select-none">
      {/* Top Scene Marker */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between font-mono text-[11px] text-slate-400 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-amber-400">SCENE 03</span>
          <span>// A JOURNEY THROUGH TIME</span>
        </div>
        <div className="hidden sm:block text-slate-400">
          CHRONOLOGICAL CODE ARCHIVES: 2021 — 2026
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-wider text-white uppercase mb-2">
            A Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Through Time</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-widest uppercase">
            Curiosity • Experiments • Production SaaS • 3D Frontiers
          </p>
        </div>

        {/* The Giant Arched Radial Timeline Dial & Laser Spotlight */}
        <div className="relative w-full h-[580px] sm:h-[660px] rounded-3xl bg-gradient-to-b from-[#0c0d16] via-[#08080f] to-[#040407] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 flex flex-col justify-between">
          {/* Laser Pointer Origin at Top Apex */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
            {/* Glowing Emitter Orb */}
            <div className="w-5 h-5 rounded-full bg-amber-400 border-2 border-white shadow-[0_0_20px_#ffb703] animate-pulse" />
            
            {/* Laser Beam Rotating toward selected year */}
            <div
              style={{
                transform: `rotate(${laserAngle}deg)`,
                transformOrigin: 'top center',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="w-1 h-[280px] sm:h-[320px] bg-gradient-to-b from-amber-300 via-orange-400 to-transparent shadow-[0_0_25px_#ff9e00] pointer-events-none opacity-90"
            />
          </div>

          {/* Arched Radial Gauge Line SVG across the top */}
          <div className="absolute top-6 left-0 right-0 h-44 pointer-events-none z-10 flex justify-center">
            <svg viewBox="0 0 1000 300" className="w-full max-w-4xl h-full opacity-60">
              <path
                d="M 100,240 Q 500,20 900,240"
                fill="none"
                stroke="#ffaa00"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M 120,260 Q 500,50 880,260"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeDasharray="2 10"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Year Buttons Aligned along the Curve */}
          <div className="relative z-20 flex justify-between items-center max-w-3xl mx-auto w-full pt-16 sm:pt-20 px-4">
            {TIMELINE_DATA.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={item.year}
                  onClick={() => handleSelectYear(idx)}
                  onMouseEnter={playHover}
                  className={`flex flex-col items-center group transition-all duration-300 ${
                    isSelected ? 'scale-125 z-30' : 'opacity-60 hover:opacity-100 hover:scale-110'
                  }`}
                >
                  <span
                    className={`font-bebas text-2xl sm:text-4xl tracking-wider transition-colors ${
                      isSelected
                        ? 'text-transparent bg-clip-text bg-gradient-to-t from-yellow-400 to-white drop-shadow-[0_0_15px_rgba(255,183,3,0.8)]'
                        : 'text-slate-400 group-hover:text-white'
                    }`}
                  >
                    {item.year}
                  </span>
                  <div
                    className={`w-3 h-3 rounded-full mt-1 transition-all ${
                      isSelected
                        ? 'bg-amber-400 ring-4 ring-amber-400/40 shadow-[0_0_12px_#ffb703]'
                        : 'bg-white/20 group-hover:bg-white/60'
                    }`}
                  />
                  <span className="text-[10px] font-mono text-slate-500 mt-1 hidden sm:block uppercase">
                    {item.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card & Central Silhouette Stage */}
          <div className="relative z-20 mt-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left: Milestone Narrative Card */}
            <div className="lg:col-span-8 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-black/80 backdrop-blur-2xl shadow-2xl animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bebas text-3xl text-amber-400 tracking-wider">
                    {activeItem.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase">
                    {activeItem.category}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  STEP {selectedIdx + 1} OF {TIMELINE_DATA.length}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {activeItem.title}
              </h3>
              <p className="text-xs font-mono text-amber-400/90 mb-3">
                &gt; {activeItem.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {activeItem.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                {activeItem.highlights.map((h, i) => (
                  <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>

              {/* Footer controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.tech.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-[11px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    onMouseEnter={playHover}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    onMouseEnter={playHover}
                    className="p-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Character Standing with Floor Radar Rings */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-end relative h-64">
              {/* Concentric radar rings on glossy dark floor */}
              <div className="absolute bottom-0 w-64 h-16 pointer-events-none">
                <div className="w-full h-full rounded-[100%] border border-amber-400/40 animate-ping opacity-30" />
                <div className="absolute inset-2 rounded-[100%] border border-amber-400/60" />
                <div className="absolute inset-6 rounded-[100%] border border-yellow-300/80 shadow-[0_0_15px_#ffb703]" />
              </div>

              {/* Character Silhouette */}
              <svg viewBox="0 0 120 200" className="h-48 w-auto relative z-10 drop-shadow-[0_0_20px_rgba(255,183,3,0.6)]">
                <circle cx="60" cy="30" r="14" fill="#0c0e17" stroke="#ffb703" strokeWidth="1.5" />
                <path d="M35,65 C40,48 55,44 60,44 C65,44 80,48 85,65 L92,150 L28,150 Z" fill="#090a12" stroke="#ff9e00" strokeWidth="1.5" />
                <path d="M42,150 L50,195 L70,195 L78,150 Z" fill="#06070a" stroke="#ffb703" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
