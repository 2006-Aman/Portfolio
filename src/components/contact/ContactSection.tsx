import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
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

    // Blast celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#4facfe', '#a855f7', '#10b981']
    });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION TRANSMITTER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Initialize <span className="text-gradient">Contact</span>
          </h2>

          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an internship opening, ambitious web project, or open-source collaboration in mind?
            Drop me a transmission below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Info & Social Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Direct Channels</span>
              </h3>

              {/* Verified Email Card */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>PRIMARY TRANSMISSION EMAIL</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
                <div className="text-sm font-mono text-white select-all break-all">
                  {PERSONAL_INFO.email}
                </div>
                <button
                  onClick={copyEmail}
                  onMouseEnter={playHover}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-colors font-mono text-xs flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> One-Click Copy Address
                    </>
                  )}
                </button>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">LOCATION</div>
                    <div>{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">TIMEZONE</div>
                    <div>IST (UTC +5:30) • Active Daily</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 mb-3">PUBLIC REPOSITORIES & SOCIAL:</div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>2006-Aman</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.githubAltUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>Aman-kumar2006</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Transmitter Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-500/25 relative">
              {isSent ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Recorded!</h3>
                  <p className="text-sm text-slate-400 max-w-md font-mono">
                    Thank you, <span className="text-cyan-300 font-bold">{formData.name}</span>. Your message was formatted and logged. I will respond to <span className="text-white">{formData.email}</span> shortly.
                  </p>
                  <div className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-300">
                    PACKET_ID: TX_{Math.random().toString(36).substring(2, 9).toUpperCase()}
                  </div>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-slate-900 border border-white/20 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-cyan-400 outline-none transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-cyan-400 outline-none transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      TRANSMISSION SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity / Project inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-cyan-400 outline-none transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      TRANSMISSION BODY *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or project requirements here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-cyan-400 outline-none transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-black font-bold font-mono text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
