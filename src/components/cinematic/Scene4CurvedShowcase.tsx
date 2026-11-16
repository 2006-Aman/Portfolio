import React, { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  subtitle: string;
  tag: string;
  color: string;
  image: string;
}

const PROJECTS: Project[] = [
  { title: 'Timeless\nExperiences', subtitle: 'Product Design', tag: 'UI/UX', color: '#1a1a2e', image: '🎮' },
  { title: 'Build\nWithout\nLimits', subtitle: 'Development', tag: 'FULLSTACK', color: '#0a1628', image: '🌐' },
  { title: 'More\nThan\nA Game', subtitle: 'Gaming Platform', tag: 'PRODUCT', color: '#0d0d0d', image: '🕹️' },
  { title: 'Your Ideas\nIn Motion', subtitle: 'Animation Studio', tag: 'MOTION', color: '#120a1f', image: '✨' },
  { title: 'Small\nSteps,\nBig Change', subtitle: 'Impact App', tag: 'SOCIAL', color: '#0f1a0f', image: '🌱' },
  { title: 'Designing\nA Cleaner\nTomorrow', subtitle: 'Sustainability', tag: 'GREEN', color: '#0a1a0a', image: '♻️' },
  { title: 'Play\nCreate\nRepeat', subtitle: 'Creative Tools', tag: 'TOOLS', color: '#1a0a0a', image: '🎨' },
  { title: 'Driven by\nBetter Design', subtitle: 'Design System', tag: 'DESIGN', color: '#0d0a1a', image: '🏆' },
  { title: 'Find\nYour\nSpace', subtitle: 'Real Estate App', tag: 'SPACE', color: '#0a0d1a', image: '🏠' },
  { title: 'Travel\nExplore\nBelong', subtitle: 'Travel Platform', tag: 'TRAVEL', color: '#0a1210', image: '✈️' },
];

export const Scene4CurvedShowcase: React.FC<{ onSelectProject?: (p: any) => void }> = ({ onSelectProject }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotationOffset, setRotationOffset] = useState(0);
  const dragRef = useRef({ isDragging: false, startX: 0, startOffset: 0 });

  // Curved platform canvas (the circular glowing rings)
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

      const cx = width / 2;
      const cy = height * 0.72; // platform is in lower portion

      // Draw concentric elliptical rings (the arena platform)
      for (let ring = 0; ring < 7; ring++) {
        const rx = width * (0.15 + ring * 0.055);
        const ry = rx * 0.28; // flat perspective
        const alpha = Math.max(0, 0.5 - ring * 0.065) + Math.sin(t * 2 + ring) * 0.03;

        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);

        const grad = ctx.createLinearGradient(cx - rx, cy, cx + rx, cy);
        grad.addColorStop(0, `rgba(255, 100, 0, ${alpha * 0.3})`);
        grad.addColorStop(0.5, `rgba(255, 160, 30, ${alpha})`);
        grad.addColorStop(1, `rgba(255, 100, 0, ${alpha * 0.3})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = ring === 0 ? 2.5 : 1.5;
        ctx.shadowBlur = ring < 3 ? 15 : 5;
        ctx.shadowColor = 'rgba(255, 140, 0, 0.8)';
        ctx.stroke();
      }

      // Floor reflection glow
      const floorGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.4);
      floorGrad.addColorStop(0, 'rgba(255, 100, 0, 0.12)');
      floorGrad.addColorStop(0.5, 'rgba(255, 60, 0, 0.05)');
      floorGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.beginPath();
      ctx.ellipse(cx, cy, width * 0.42, width * 0.12, 0, 0, Math.PI * 2);
      ctx.fillStyle = floorGrad;
      ctx.shadowBlur = 0;
      ctx.fill();

      ctx.shadowBlur = 0;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Mouse drag for rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    dragRef.current = { isDragging: true, startX: e.clientX, startOffset: rotationOffset };
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.isDragging) return;
    const delta = (e.clientX - dragRef.current.startX) * 0.5;
    setRotationOffset(dragRef.current.startOffset + delta);
  };
  const handleMouseUp = () => { dragRef.current.isDragging = false; };

  // Compute card positions in a curved arc (dome panorama)
  const getCardTransform = (index: number, total: number) => {
    const normalizedAngle = ((index / total) * 180 - 90 + rotationOffset) * (Math.PI / 180);
    const arcRadius = 420; // pixels radius of the dome
    const x = Math.sin(normalizedAngle) * arcRadius;
    const z = Math.cos(normalizedAngle) * arcRadius; // depth
    // Perspective scale: front = 1, side = 0.6
    const scale = 0.5 + (z / arcRadius) * 0.5;
    const opacity = Math.max(0.2, 0.4 + (z / arcRadius) * 0.6);
    return { x, z, scale, opacity, angle: normalizedAngle };
  };

  // Sort by z (depth) for correct layering
  const projectsWithTransform = PROJECTS.map((p, i) => ({
    ...p,
    index: i,
    ...getCardTransform(i, PROJECTS.length),
  })).sort((a, b) => a.z - b.z);

  return (
    <section
      id="scene-4"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080308] to-black" />
        <div
          className="absolute bottom-1/3 left-1/2 -translate-x-1/2"
          style={{
            width: '80vw',
            height: '50vh',
            background: 'radial-gradient(ellipse at center, rgba(255,80,0,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Circular platform canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full min-h-screen">

        {/* Top bar */}
        <div className="flex items-start justify-between px-8 pt-16 pb-4">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">REAL</p>
            <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">PROJECTS</p>
            <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">REAL</p>
            <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">STORIES</p>
          </div>
        </div>

        {/* Curved card theater */}
        <div
          className="relative flex-1 flex items-center justify-center"
          style={{ perspective: '1000px', cursor: 'grab' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Person silhouette at center of arena */}
          <div className="absolute z-20 pointer-events-none" style={{ bottom: '28%', left: '50%', transform: 'translateX(-50%)' }}>
            <svg viewBox="0 0 80 180" width="55" height="130"
              style={{ filter: 'drop-shadow(0 0 25px rgba(255,100,0,0.6)) drop-shadow(0 10px 20px rgba(0,0,0,0.8))' }}>
              <ellipse cx="40" cy="22" rx="12" ry="14" fill="#060606" />
              <path d="M22,55 L32,36 L40,42 L48,36 L58,55 L62,135 L18,135Z" fill="#060606" />
              <path d="M22,55 L10,110 L22,114 L28,65Z" fill="#060606" />
              <path d="M58,55 L70,110 L58,114 L52,65Z" fill="#060606" />
              <path d="M28,135 L26,178 L40,178 L38,145 L36,145 L34,178 L48,178 L46,135Z" fill="#050505" />
            </svg>
          </div>

          {/* Project cards in curved arc */}
          <div className="relative w-full" style={{ height: '450px' }}>
            {projectsWithTransform.map((project) => {
              const isHovered = hoveredIndex === project.index;
              const cardWidth = 130;
              const cardHeight = 170;

              return (
                <div
                  key={project.index}
                  className="absolute transition-all duration-200"
                  style={{
                    left: `calc(50% + ${project.x}px - ${cardWidth / 2}px)`,
                    top: `calc(50% - ${cardHeight / 2}px - ${Math.abs(project.x) * 0.1}px)`,
                    width: cardWidth,
                    height: cardHeight,
                    transform: `scale(${isHovered ? project.scale * 1.08 : project.scale}) rotateY(${-project.angle * 15}deg)`,
                    opacity: project.opacity,
                    zIndex: Math.round(project.z + 500),
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredIndex(project.index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => onSelectProject?.(project)}
                >
                  <div
                    className="w-full h-full rounded-xl overflow-hidden relative"
                    style={{
                      background: project.color,
                      border: `1px solid ${isHovered ? 'rgba(255, 160, 50, 0.6)' : 'rgba(255, 80, 0, 0.15)'}`,
                      boxShadow: isHovered
                        ? '0 0 30px rgba(255, 120, 0, 0.5), 0 20px 40px rgba(0,0,0,0.6)'
                        : '0 10px 30px rgba(0,0,0,0.5)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Top section — colored gradient */}
                    <div
                      className="absolute top-0 left-0 right-0 h-2/3 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, rgba(0,0,0,0.8))`,
                      }}
                    >
                      <span className="text-4xl opacity-60">{project.image}</span>
                      {/* Orange highlight ring */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,120,0,0.6), transparent)' }}
                      />
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/80">
                      <p className="font-bebas text-sm text-white leading-tight whitespace-pre-line">
                        {project.title}
                      </p>
                      <p className="font-mono text-[7px] text-orange-400/60 mt-0.5">{project.tag}</p>
                      {isHovered && (
                        <button className="mt-1 w-full font-mono text-[8px] tracking-widest bg-orange-500/20 border border-orange-500/40 text-orange-300 py-1 rounded-sm hover:bg-orange-500/40 transition-colors">
                          VIEW →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Drag hint */}
        <div className="flex justify-center pb-8 z-20">
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">
            ← DRAG TO EXPLORE →
          </span>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)' }}
      />
    </section>
  );
};
