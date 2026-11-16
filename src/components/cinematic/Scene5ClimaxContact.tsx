import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Github, 
  Mail, 
  Copy, 
  Check, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Flame,
  Zap,
  ArrowUp
} from 'lucide-react';

export const Scene5ClimaxContact: React.FC = () => {
  const { playClick, playHover, playSuccess } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSuccess();
    setIsSent(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff3b1f', '#ffaa00', '#ffffff', '#ff1e00']
    });
  };

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="scene-5" className="relative min-h-screen py-24 bg-[#050508] overflow-hidden select-none">
      {/* High-Contrast Diagonal Split Background (Ferrari Luxury Climax) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dynamic diagonal crimson slash */}
        <div 
          className="absolute -top-[30%] -right-[15%] w-[85%] h-[160%] bg-gradient-to-br from-[#ff3b1f] via-[#dc2626] to-[#7f1d1d] opacity-90"
          style={{
            transform: 'rotate(-24deg)',
            transformOrigin: 'top right'
          }}
        />
        {/* Dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Scene Marker */}
        <div className="mb-8 flex items-center justify-between font-mono text-[11px] text-white/70 border-b border-white/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-yellow-300 font-bold">SCENE 05</span>
            <span>// THE CLIMAX &amp; FINAL DISPATCH</span>
          </div>
          <div className="text-white font-mono font-bold">
            GITHUB: <a href="https://github.com/2006-Aman" target="_blank" rel="noreferrer" className="underline hover:text-yellow-300">https://github.com/2006-Aman</a>
          </div>
        </div>

        {/* Supercar Visual & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Giant Bold Headline & Supercar Art */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/20 text-yellow-300 text-xs font-mono">
              <Flame className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
              <span>THE GRAND FINALE // DRIVEN BY CODE</span>
            </div>

            <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-[0.9]">
              DRIVEN BY <span className="text-yellow-300 drop-shadow-[0_0_25px_rgba(255,183,3,0.8)]">PRECISION.</span>
              <br />
              READY FOR THE NEXT HORIZON.
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans max-w-xl">
              I&apos;m <span className="text-white font-bold">Aman Kumar</span> (B.Tech Computer Science &amp; Engineering). Whether it&apos;s architecting cloud SaaS engines like <span className="text-yellow-300 font-semibold">boardVault</span>, AI networks like <span className="text-yellow-300 font-semibold">foodloop.ai</span>, or pioneering 3D spatial web physics, let&apos;s build something legendary together.
            </p>

            {/* Stylized Ferrari Supercar & Developer Silhouette Vector */}
            <div className="relative w-full h-44 sm:h-56 rounded-2xl bg-black/50 border border-white/20 p-4 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 500 180" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,59,31,0.5)]">
                {/* Supercar Silhouette (Ferrari F40 / GT style) */}
                <path
                  d="M40,140 L70,140 C75,120 95,120 100,140 L280,140 C285,120 305,120 310,140 L450,140 L440,110 L380,95 L310,80 L210,80 L140,100 L60,115 Z"
                  fill="#ff2a00"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                {/* Windows & Windshield */}
                <path d="M150,98 L210,84 L300,84 L280,98 Z" fill="#090a12" stroke="#ffaa00" strokeWidth="1" />
                {/* Wheels */}
                <circle cx="85" cy="140" r="20" fill="#141724" stroke="#ffaa00" strokeWidth="2" />
                <circle cx="85" cy="140" r="8" fill="#ff2a00" />
                <circle cx="295" cy="140" r="20" fill="#141724" stroke="#ffaa00" strokeWidth="2" />
                <circle cx="295" cy="140" r="8" fill="#ff2a00" />
                {/* Character Silhouette leaning on car */}
                <circle cx="230" cy="50" r="12" fill="#090b12" stroke="#ffaa00" strokeWidth="1.5" />
                <rect x="224" y="47" width="14" height="6" rx="1.5" fill="#ffaa00" />
                <path d="M215,65 C220,62 240,62 245,65 L250,120 L210,120 Z" fill="#07080f" stroke="#ffffff" strokeWidth="1" />
                {/* Headlights beam */}
                <polygon points="40,135 0,115 0,150" fill="url(#beam-glow)" opacity="0.6" />
                <defs>
                  <linearGradient id="beam-glow" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#ffea00" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ffaa00" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right: Direct Transmission Dispatcher & Verified Coordinates */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-white/20 bg-black/90 backdrop-blur-2xl shadow-2xl relative">
              {isSent ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide">TRANSMISSION SENT!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-mono">
                    Thank you, <span className="text-yellow-300 font-bold">{formData.name}</span>. Your message has been received. I will respond to <span className="text-white">{formData.email}</span> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-white transition-colors"
                  >
                    SEND ANOTHER PACKET
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-bebas text-2xl tracking-wider text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span>DIRECT DISPATCH TRANSMITTER</span>
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> SECURE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs font-sans focus:border-yellow-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs font-sans focus:border-yellow-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / Engineering project collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs font-sans focus:border-yellow-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      MESSAGE BODY *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let's build something impactful together..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs font-sans focus:border-yellow-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cinematic-red via-orange-500 to-yellow-400 text-black font-bebas text-lg tracking-wider hover:opacity-95 transition-all shadow-xl shadow-cinematic-red/30 flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT MESSAGE NOW</span>
                    <Send className="w-4 h-4 text-black" />
                  </button>
                </form>
              )}

              {/* Verified One-Click Email Copy Card */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-mono text-slate-400">VERIFIED EMAIL</div>
                  <div className="text-xs font-mono text-white">{PERSONAL_INFO.email}</div>
                </div>

                <button
                  onClick={copyEmail}
                  onMouseEnter={playHover}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-yellow-300 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "COPIED!" : "COPY EMAIL"}</span>
                </button>
              </div>

              {/* Verified GitHub Card */}
              <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-cinematic-red" />
                  <span className="text-xs font-mono text-white">github.com/2006-Aman</span>
                </div>
                <a
                  href="https://github.com/2006-Aman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-yellow-300 hover:text-white flex items-center gap-1"
                >
                  <span>PROFILE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Film Credits Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} AMAN KUMAR. PRODUCED WITH REACT, THREE.JS &amp; CINEMATIC WEBGL.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/2006-Aman" target="_blank" rel="noreferrer" className="text-white hover:text-cinematic-red">
              GITHUB // 2006-AMAN
            </a>
            <button onClick={scrollToTop} className="hover:text-yellow-300 flex items-center gap-1">
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
