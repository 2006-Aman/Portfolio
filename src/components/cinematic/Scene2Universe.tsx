import React, { useEffect, useRef, useState } from 'react';

interface Tool {
  name: string;
  icon: string;
  color: string;
  x: number;
  y: number;
  size: number;
}

const TOOLS: Tool[] = [
  { name: 'Figma', icon: '🎨', color: '#f24e1e', x: 15, y: 40, size: 72 },
  { name: 'Ae', icon: '✦', color: '#9999ff', x: 32, y: 60, size: 56 },
  { name: 'Pr', icon: '▶', color: '#9999ff', x: 22, y: 72, size: 52 },
  { name: 'Claude', icon: '🧠', color: '#d4a76a', x: 68, y: 22, size: 60 },
  { name: 'ChatGPT', icon: '◎', color: '#10a37f', x: 56, y: 60, size: 56 },
  { name: 'Midjourney', icon: '⛵', color: '#fff', x: 80, y: 42, size: 60 },
  { name: 'Spline', icon: '◈', color: '#6dd5ed', x: 75, y: 65, size: 52 },
  { name: 'Notion', icon: '📄', color: '#fff', x: 25, y: 85, size: 52 },
  { name: 'Lr', icon: '◫', color: '#31a8ff', x: 42, y: 82, size: 48 },
  { name: 'Framer', icon: '⬡', color: '#05f', x: 60, y: 80, size: 52 },
  { name: 'Webflow', icon: 'W', color: '#4353ff', x: 72, y: 80, size: 52 },
];

export const Scene2Universe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Golden ribbon canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      timeRef.current += 0.008;
      const t = timeRef.current;

      // Draw the glowing golden energy ribbon
      for (let layer = 0; layer < 4; layer++) {
        const alpha = 0.6 - layer * 0.12;
        const lineWidth = 3 - layer * 0.5;
        const offset = layer * 8;

        ctx.beginPath();
        ctx.lineWidth = lineWidth;

        for (let i = 0; i <= 200; i++) {
          const p = i / 200;
          // Figure-8 / lemniscate-like ribbon shape
          const angle = p * Math.PI * 2;
          const rx = width * 0.38;
          const ry = height * 0.22;

          const x = width / 2 + rx * Math.sin(angle + t * 0.6) + Math.sin(angle * 2 + t) * rx * 0.2;
          const y = height / 2 + ry * Math.sin(angle * 2 + t * 0.4) + Math.cos(angle + t * 0.8) * ry * 0.3 + offset;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, `rgba(255, 140, 0, ${alpha})`);
        grad.addColorStop(0.3, `rgba(255, 200, 50, ${alpha * 1.2})`);
        grad.addColorStop(0.6, `rgba(255, 100, 0, ${alpha})`);
        grad.addColorStop(1, `rgba(255, 160, 20, ${alpha})`);

        ctx.strokeStyle = grad;
        ctx.shadowBlur = 20 + layer * 5;
        ctx.shadowColor = 'rgba(255, 140, 0, 0.8)';
        ctx.stroke();
      }

      // Bright glowing particles along the ribbon
      for (let i = 0; i < 15; i++) {
        const p = ((i / 15) + t * 0.1) % 1;
        const angle = p * Math.PI * 2;
        const rx = width * 0.38;
        const ry = height * 0.22;

        const x = width / 2 + rx * Math.sin(angle + t * 0.6) + Math.sin(angle * 2 + t) * rx * 0.2;
        const y = height / 2 + ry * Math.sin(angle * 2 + t * 0.4) + Math.cos(angle + t * 0.8) * ry * 0.3;

        const particleGrad = ctx.createRadialGradient(x, y, 0, x, y, 6);
        particleGrad.addColorStop(0, 'rgba(255, 220, 100, 1)');
        particleGrad.addColorStop(1, 'rgba(255, 140, 0, 0)');

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = particleGrad;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 200, 0, 1)';
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Scroll-based entrance
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (rect.height + window.innerHeight)));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="scene-2"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Deep space background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0500] to-black" />
        {/* Starfield */}
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.8 ? 2 : 1,
              height: Math.random() > 0.8 ? 2 : 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `pulse ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        {/* Orange-amber atmospheric glow at center */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: '60vw',
            height: '60vw',
            background: 'radial-gradient(circle, rgba(255,100,0,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Golden ribbon canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Center content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">

        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-mono text-[9px] tracking-[0.4em] text-white/30 uppercase mb-2">SCENE OF</p>
          <h2 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white mb-1">
            THE CRE<span className="text-orange-400">A</span>TIVE
          </h2>
          <h2 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white mb-4">
            UNIVERSE
          </h2>
          <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">
            TOOLS · IDEAS · PEOPLE · IMPACT
          </p>
        </div>

        {/* Person silhouette at center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <svg viewBox="0 0 120 280" width="90" height="250" style={{ filter: 'drop-shadow(0 0 30px rgba(255,120,0,0.6))' }}>
            <ellipse cx="60" cy="35" rx="18" ry="20" fill="#050505" />
            <path d="M40,90 L50,58 L60,65 L70,58 L80,90 L85,200 L35,200Z" fill="#050505" />
            <path d="M40,90 L25,160 L40,165 L48,100Z" fill="#050505" />
            <path d="M80,90 L95,160 L80,165 L72,100Z" fill="#050505" />
            <path d="M48,200 L45,275 L65,275 L62,210 L58,210 L55,275 L75,275 L72,200Z" fill="#040404" />
            <ellipse cx="55" cy="276" rx="10" ry="4" fill="#060606" />
            <ellipse cx="70" cy="276" rx="10" ry="4" fill="#060606" />
          </svg>
        </div>

        {/* Floating tool cards */}
        {TOOLS.map((tool, i) => {
          const delay = i * 0.1;
          const floatY = Math.sin(Date.now() * 0.001 + i) * 8;
          return (
            <div
              key={tool.name}
              className="absolute z-30 cursor-pointer transition-all duration-300"
              style={{
                left: `${tool.x}%`,
                top: `${tool.y}%`,
                transform: `translate(-50%, -50%) translateY(${floatY}px)`,
                animation: `float ${3 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                opacity: hoveredTool === tool.name ? 1 : 0.85,
                scale: hoveredTool === tool.name ? '1.15' : '1',
              }}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div
                className="relative rounded-2xl flex flex-col items-center justify-center gap-1 backdrop-blur-sm"
                style={{
                  width: tool.size,
                  height: tool.size,
                  background: 'rgba(15, 10, 5, 0.75)',
                  border: `1px solid rgba(255, 160, 50, 0.2)`,
                  boxShadow: hoveredTool === tool.name
                    ? `0 0 30px rgba(255,160,50,0.4), inset 0 0 15px rgba(255,120,0,0.1)`
                    : `0 0 15px rgba(0,0,0,0.5), inset 0 0 5px rgba(255,80,0,0.05)`,
                  transition: 'all 0.3s ease',
                }}
              >
                <span className="text-2xl leading-none">{tool.icon}</span>
                <span
                  className="font-bold text-center leading-tight"
                  style={{
                    fontSize: tool.size > 60 ? '11px' : '9px',
                    color: tool.color,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {tool.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* Right side text */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 font-mono text-[9px] tracking-widest text-white/25 text-right border-r border-orange-900/30 pr-3">
          <span className="text-white/50">BETTER</span>
          <span>INTERFACE</span>
          <span>A BRIGHTER</span>
          <span>TOMORROW</span>
        </div>

        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 font-mono text-[9px] tracking-widest text-white/25 border-l border-orange-900/30 pl-3">
          <span className="text-white/50">AS</span>
          <span>DESIGN</span>
          <span>OLD</span>
          <span>BEAT</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
      `}</style>
    </section>
  );
};
