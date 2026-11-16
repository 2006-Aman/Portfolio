import React, { useEffect, useRef, useState } from 'react';

interface YearData {
  year: string;
  label: string;
  items: string[];
  image?: string;
}

const JOURNEY: YearData[] = [
  {
    year: '2021',
    label: 'BEGINNING',
    items: ['First Code', 'Web Basics', 'HTML/CSS', 'Build Creator'],
  },
  {
    year: '2022',
    label: 'EXPLORATION',
    items: ['React.js', 'Node.js', 'First Projects', 'GitHub Active'],
  },
  {
    year: '2023',
    label: 'GROWTH',
    items: ['Full Stack', 'REST APIs', 'Team Projects', 'Open Source'],
  },
  {
    year: '2024',
    label: 'BREAKTHROUGH',
    items: ['AI Integration', 'SaaS Build', 'Real Alpha', 'Ship Fast'],
  },
  {
    year: '2025',
    label: 'MASTERY',
    items: ['3D/WebGL', 'Cinematic UI', 'Scale Ideas', 'Lead Design'],
  },
  {
    year: '2026',
    label: 'LEGEND',
    items: ['Global Impact', 'Own Company', 'Mentor Others', 'Build Legacy'],
  },
];

// Approximate positions on the arc (from video: left-stacked years rising up and curving right)
const ARC_POSITIONS = [
  { x: 20, y: 70 },  // 2021 - leftmost, low
  { x: 30, y: 56 },  // 2022
  { x: 42, y: 44 },  // 2023
  { x: 55, y: 36 },  // 2024
  { x: 68, y: 30 },  // 2025
  { x: 80, y: 28 },  // 2026 - rightmost, high
];

export const Scene3Timeline: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeYear, setActiveYear] = useState(5); // 2026 active by default (highlighted in video)
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Radial timeline canvas
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
      timeRef.current += 0.01;
      const t = timeRef.current;

      // Draw the radial arc (a large circle arc from bottom-left sweeping up to top-right)
      // The arc center is below and to the right of center
      const arcCenterX = width * 0.5;
      const arcCenterY = height * 1.2;
      const arcRadius = height * 1.0;

      // Outer decorative arc rings
      for (let ring = 0; ring < 5; ring++) {
        const r = arcRadius - ring * (height * 0.06);
        const alpha = 0.05 - ring * 0.008;
        ctx.beginPath();
        ctx.arc(arcCenterX, arcCenterY, r, Math.PI * 1.1, Math.PI * 1.9, false);
        ctx.strokeStyle = `rgba(255, 160, 30, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Main arc line (golden)
      const arcGrad = ctx.createLinearGradient(0, 0, width, 0);
      arcGrad.addColorStop(0, 'rgba(255, 140, 0, 0.6)');
      arcGrad.addColorStop(0.5, 'rgba(255, 200, 50, 0.9)');
      arcGrad.addColorStop(1, 'rgba(255, 140, 0, 0.6)');

      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, arcRadius, Math.PI * 1.08, Math.PI * 1.92, false);
      ctx.strokeStyle = arcGrad;
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(255, 180, 0, 0.6)';
      ctx.stroke();

      // Tick marks and year dot positions on the arc
      const years = ['2021', '2022', '2023', '2024', '2025', '2026'];
      const angleStart = Math.PI * 1.08;
      const angleEnd = Math.PI * 1.92;
      const angleRange = angleEnd - angleStart;

      years.forEach((year, i) => {
        const angle = angleStart + (i / (years.length - 1)) * angleRange;
        const dotX = arcCenterX + arcRadius * Math.cos(angle);
        const dotY = arcCenterY + arcRadius * Math.sin(angle);

        const isActive = i === activeYear;

        // Tick line outward
        const outerX = arcCenterX + (arcRadius + 15) * Math.cos(angle);
        const outerY = arcCenterY + (arcRadius + 15) * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(dotX, dotY);
        ctx.lineTo(outerX, outerY);
        ctx.strokeStyle = isActive ? 'rgba(255, 200, 50, 1)' : 'rgba(255, 160, 30, 0.4)';
        ctx.lineWidth = isActive ? 2 : 1;
        ctx.shadowBlur = isActive ? 10 : 0;
        ctx.shadowColor = 'rgba(255, 200, 0, 1)';
        ctx.stroke();

        // Dot on arc
        ctx.beginPath();
        ctx.arc(dotX, dotY, isActive ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? 'rgba(255, 220, 50, 1)' : 'rgba(255, 160, 30, 0.6)';
        ctx.shadowBlur = isActive ? 20 : 5;
        ctx.shadowColor = 'rgba(255, 200, 0, 1)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Laser pointer line from active year dot to a point (like a compass needle)
      const activeAngle = angleStart + (activeYear / (years.length - 1)) * angleRange;
      const activeDotX = arcCenterX + arcRadius * Math.cos(activeAngle);
      const activeDotY = arcCenterY + arcRadius * Math.sin(activeAngle);

      // Draw the "laser" line from a focal point to the active year
      const focalX = width * 0.5;
      const focalY = height * 0.72;

      const laserGrad = ctx.createLinearGradient(focalX, focalY, activeDotX, activeDotY);
      laserGrad.addColorStop(0, 'rgba(255, 240, 100, 0)');
      laserGrad.addColorStop(0.5, 'rgba(255, 220, 50, 0.8)');
      laserGrad.addColorStop(1, 'rgba(255, 200, 30, 1)');

      ctx.beginPath();
      ctx.moveTo(focalX, focalY);
      ctx.lineTo(activeDotX, activeDotY);
      ctx.strokeStyle = laserGrad;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(255, 220, 0, 0.9)';
      ctx.stroke();

      // Animated glow pulse on laser
      const pulseSize = 8 + Math.sin(t * 3) * 4;
      ctx.beginPath();
      ctx.arc(activeDotX, activeDotY, pulseSize, 0, Math.PI * 2);
      const pulseGrad = ctx.createRadialGradient(activeDotX, activeDotY, 0, activeDotX, activeDotY, pulseSize);
      pulseGrad.addColorStop(0, 'rgba(255, 240, 100, 0.8)');
      pulseGrad.addColorStop(1, 'rgba(255, 200, 0, 0)');
      ctx.fillStyle = pulseGrad;
      ctx.shadowBlur = 0;
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [activeYear]);

  return (
    <section
      id="scene-3"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background gradient - warm amber/dark */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0500] to-[#050200]" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/3"
          style={{
            background: 'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(255,100,0,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Atmospheric orange glow at bottom center (simulates arena lighting) */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '60vw',
            height: '30vh',
            background: 'radial-gradient(ellipse at center bottom, rgba(255,80,0,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Arc canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />

      {/* Content overlay */}
      <div className="relative z-20 flex flex-col h-full min-h-screen pt-24 px-4 md:px-8">

        {/* Section header - left aligned, small */}
        <div className="flex flex-col gap-1 mb-8">
          <p className="font-mono text-[9px] tracking-[0.4em] text-orange-400/50 uppercase">SCENE 03 //</p>
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white/80 tracking-wider">
            A JOURNEY THROUGH TIME
          </h2>
        </div>

        {/* Year labels along the implied arc path */}
        <div className="relative flex-1">
          {JOURNEY.map((item, i) => {
            const isActive = i === activeYear;
            // Position years in a rising diagonal pattern matching the arc
            const leftPercent = 10 + i * 12;
            const topPercent = 70 - i * 8;

            return (
              <button
                key={item.year}
                className="absolute flex flex-col items-start cursor-pointer group"
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setActiveYear(i)}
              >
                <span
                  className="font-bebas transition-all duration-300"
                  style={{
                    fontSize: isActive ? '28px' : '18px',
                    color: isActive ? '#ffcc00' : 'rgba(255, 160, 30, 0.5)',
                    textShadow: isActive ? '0 0 20px rgba(255, 220, 0, 0.8)' : 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.year}
                </span>
              </button>
            );
          })}

          {/* Year photo cards — positioned below each year label */}
          {JOURNEY.map((item, i) => {
            const leftPercent = 10 + i * 12;
            const topPercent = 82 - i * 3;
            const isActive = i === activeYear;

            return (
              <div
                key={`card-${item.year}`}
                className="absolute transition-all duration-500"
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                  transform: `translate(-50%, 0) scale(${isActive ? 1.1 : 0.9})`,
                  opacity: isActive ? 1 : 0.6,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <div
                  className="rounded-lg overflow-hidden border"
                  style={{
                    width: isActive ? '130px' : '90px',
                    height: isActive ? '90px' : '65px',
                    background: 'rgba(20, 10, 0, 0.9)',
                    borderColor: isActive ? 'rgba(255, 200, 50, 0.6)' : 'rgba(255, 100, 0, 0.2)',
                    boxShadow: isActive ? '0 0 20px rgba(255, 180, 0, 0.3)' : 'none',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {/* Simulated dark photo */}
                  <div className="w-full h-full relative flex flex-col items-start justify-end p-2"
                    style={{
                      background: `linear-gradient(135deg, #1a0a00, #0a0500)`,
                    }}>
                    {/* Abstract workspace scene lines */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-2 left-2 right-2 h-px bg-orange-500/30" />
                      <div className="absolute top-4 left-2 w-1/2 h-px bg-orange-500/20" />
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-orange-500/10" />
                      {/* Monitor silhouettes */}
                      <div className="absolute right-2 top-2 w-8 h-5 border border-orange-500/30 rounded-sm" />
                      <div className="absolute right-4 top-6 w-6 h-4 border border-orange-500/20 rounded-sm" />
                    </div>
                    <span className="font-bebas text-[11px] text-orange-300/70 z-10">{item.year}</span>
                    <span className="font-mono text-[7px] text-white/40 z-10">{item.label}</span>
                  </div>
                </div>
                {/* Info for active card */}
                {isActive && (
                  <div className="mt-2 bg-black/70 border border-orange-500/20 rounded p-2 w-full">
                    {item.items.map((it, j) => (
                      <p key={j} className="font-mono text-[7px] text-orange-300/70 leading-4">
                        · {it}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Person silhouette at bottom center */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-5"
            style={{ bottom: '-20px' }}
          >
            <svg viewBox="0 0 80 180" width="60" height="135"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255,100,0,0.5))' }}>
              <ellipse cx="40" cy="22" rx="12" ry="13" fill="#050505" />
              <path d="M25,55 L33,38 L40,42 L47,38 L55,55 L58,130 L22,130Z" fill="#050505" />
              <path d="M25,55 L15,105 L25,108 L30,65Z" fill="#050505" />
              <path d="M55,55 L65,105 L55,108 L50,65Z" fill="#050505" />
              <path d="M30,130 L28,178 L42,178 L40,140 L38,140 L36,178 L50,178 L48,130Z" fill="#040404" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none" />
    </section>
  );
};
