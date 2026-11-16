import React, { useState } from 'react';
import { Github, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

export const Scene5ClimaxContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section
      id="scene-5"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Ferrari-style diagonal split background */}
      <div className="absolute inset-0 z-0">
        {/* Left black side */}
        <div className="absolute inset-0 bg-black" />

        {/* Right RED half — diagonal cut like a Ferrari poster */}
        <div
          className="absolute top-0 right-0 h-full"
          style={{
            width: '65%',
            background: 'linear-gradient(135deg, #cc0000 0%, #ff2200 40%, #ff4400 70%, #ff6600 100%)',
            clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        />

        {/* White/cream accent strip */}
        <div
          className="absolute top-0 h-full"
          style={{
            right: '62%',
            width: '10%',
            background: 'linear-gradient(180deg, #fff 0%, #f0e8d8 50%, #e8dcc8 100%)',
            clipPath: 'polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%)',
            opacity: 0.95,
          }}
        />

        {/* Ferrari logo area */}
        <div
          className="absolute bottom-8 right-8 opacity-20"
          style={{ color: '#ffcc00', fontSize: '48px', fontWeight: 900, fontFamily: 'serif' }}
        >
          🐴
        </div>

        {/* Atmospheric orange fog on red side */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(255,200,50,0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Person leaning on car (SVG representation) */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{ right: '5%', bottom: '0%', width: '45%', maxWidth: '500px' }}
      >
        {/* Stylized person + car composition */}
        <svg viewBox="0 0 400 500" width="100%" className="drop-shadow-2xl">
          {/* Car body outline */}
          <path
            d="M20,350 Q40,290 120,270 L240,250 Q320,245 380,280 L390,350 Q390,420 20,420 Z"
            fill="rgba(180,0,0,0.4)"
            stroke="rgba(255,80,0,0.3)"
            strokeWidth="2"
          />
          {/* Car hood/bonnet */}
          <path
            d="M60,280 Q100,230 200,215 Q280,210 340,250 L380,280 Q300,260 180,255 Q90,255 60,280Z"
            fill="rgba(200,0,0,0.5)"
            stroke="rgba(255,120,0,0.4)"
            strokeWidth="1.5"
          />
          {/* Windshield */}
          <path
            d="M140,255 Q170,210 230,205 Q280,210 320,245 Q270,230 190,235Z"
            fill="rgba(100,100,150,0.3)"
            stroke="rgba(200,200,255,0.3)"
            strokeWidth="1"
          />
          {/* Wheels */}
          <circle cx="100" cy="390" r="45" fill="rgba(20,20,20,0.9)" stroke="rgba(255,100,0,0.4)" strokeWidth="3" />
          <circle cx="100" cy="390" r="25" fill="rgba(50,50,50,0.8)" stroke="rgba(255,120,0,0.6)" strokeWidth="2" />
          <circle cx="310" cy="390" r="45" fill="rgba(20,20,20,0.9)" stroke="rgba(255,100,0,0.4)" strokeWidth="3" />
          <circle cx="310" cy="390" r="25" fill="rgba(50,50,50,0.8)" stroke="rgba(255,120,0,0.6)" strokeWidth="2" />

          {/* Ferrari prancing horse emblem hint */}
          <text x="195" y="265" fontSize="16" fill="rgba(255,220,0,0.4)" textAnchor="middle">🐴</text>

          {/* Person leaning on hood */}
          {/* Head */}
          <ellipse cx="210" cy="130" rx="22" ry="24" fill="#0a0a0a" />
          {/* Hair */}
          <path d="M190,120 Q200,100 215,100 Q228,100 230,118 Q222,110 210,110 Q198,110 190,120Z" fill="#111" />
          {/* Sunglasses */}
          <rect x="197" y="125" width="13" height="7" rx="2.5" fill="#111" stroke="rgba(255,100,0,0.6)" strokeWidth="1" />
          <rect x="212" y="125" width="13" height="7" rx="2.5" fill="#111" stroke="rgba(255,100,0,0.6)" strokeWidth="1" />
          {/* Jacket */}
          <path d="M180,195 L195,155 L210,162 L215,195Z" fill="#080808" stroke="rgba(255,80,0,0.2)" strokeWidth="1" />
          <path d="M240,195 L225,155 L210,162 L215,195Z" fill="#080808" stroke="rgba(255,80,0,0.2)" strokeWidth="1" />
          <path d="M180,195 L185,290 L240,290 L245,195Z" fill="#070707" stroke="rgba(255,60,0,0.15)" strokeWidth="1" />
          {/* Arm resting on car */}
          <path d="M245,195 L290,230 L295,245 L260,240 L240,210Z" fill="#070707" stroke="rgba(255,80,0,0.2)" strokeWidth="1" />
          {/* Hand */}
          <ellipse cx="293" cy="248" rx="9" ry="7" fill="#0a0a0a" />
          {/* Legs */}
          <path d="M185,290 L182,370 L200,370 L210,310 L220,310 L228,370 L246,370 L242,290Z" fill="#060606" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col h-full min-h-screen pt-24 px-6 md:px-12">

        {/* Top cinematic label */}
        <div className="flex flex-col gap-1 mb-auto">
          <p className="font-mono text-[9px] tracking-[0.4em] text-white/30 uppercase">SCENE 05 // CLIMAX</p>
          <p className="font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase">ALL RIGHTS RESERVED</p>
        </div>

        {/* Main title area - bottom left */}
        <div className="mt-auto mb-16 max-w-lg">
          <h2
            className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none text-white mb-2"
            style={{ letterSpacing: '-0.02em' }}
          >
            LET'S
          </h2>
          <h2
            className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
            style={{
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.7))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CREATE
          </h2>

          {/* Contact form */}
          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                required
                className="bg-black/60 border border-white/10 text-white placeholder-white/30 font-mono text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-orange-500/50 backdrop-blur-sm transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                required
                className="bg-black/60 border border-white/10 text-white placeholder-white/30 font-mono text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-orange-500/50 backdrop-blur-sm transition-colors"
              />
              <textarea
                placeholder="Your Message..."
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                required
                rows={3}
                className="bg-black/60 border border-white/10 text-white placeholder-white/30 font-mono text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-orange-500/50 backdrop-blur-sm resize-none transition-colors"
              />
              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 bg-white text-black font-mono text-sm font-bold tracking-widest py-3 px-6 rounded-lg hover:bg-orange-100 transition-colors disabled:opacity-60"
              >
                {sending ? 'SENDING...' : 'SEND MESSAGE'}
                {!sending && <ArrowUpRight className="w-4 h-4" />}
              </button>
            </form>
          ) : (
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 max-w-sm">
              <p className="font-mono text-green-400 text-sm">✓ MESSAGE DELIVERED — I'll be in touch soon!</p>
            </div>
          )}

          {/* Links row */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="https://github.com/2006-Aman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs tracking-widest text-white/60 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-4 py-2 rounded-full"
            >
              <Github className="w-3.5 h-3.5" />
              @2006-AMAN
            </a>
            <a
              href="mailto:amankumar.kumar2006@gmail.com"
              className="flex items-center gap-2 font-mono text-xs tracking-widest text-white/60 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-4 py-2 rounded-full"
            >
              <Mail className="w-3.5 h-3.5" />
              EMAIL
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-[9px] tracking-widest text-white/20 mt-6 uppercase">
            © 2024 AMAN KUMAR — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {/* CRT scanline */}
      <div
        className="absolute inset-0 z-5 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)',
        }}
      />
    </section>
  );
};
