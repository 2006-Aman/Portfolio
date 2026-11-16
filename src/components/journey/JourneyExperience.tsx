import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { JOURNEY_CHAPTERS } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { 
  ChevronRight, 
  ChevronLeft, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Layers, 
  Zap, 
  Play, 
  Pause, 
  ExternalLink, 
  CheckCircle2, 
  RotateCw,
  Compass
} from 'lucide-react';
import { JourneyChapter } from '../../types';

// In-place 3D Morphing Canvas for the Journey
const Journey3DViewport: React.FC<{ chapter: JourneyChapter }> = ({ chapter }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const currentShapeRef = useRef(chapter.shape3D);

  useEffect(() => {
    currentShapeRef.current = chapter.shape3D;
  }, [chapter.shape3D]);

  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const themeColors: Record<string, number> = {
      emerald: 0x10b981,
      amber: 0xf59e0b,
      cyan: 0x00f2fe,
      purple: 0xc084fc,
      sapphire: 0x38bdf8
    };

    const activeColor = new THREE.Color(themeColors[chapter.theme] || 0x00f2fe);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Ambient and Point Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(themeColors[chapter.theme] || 0x00f2fe, 2, 50);
    pointLight.position.set(10, 10, 15);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 50);
    pointLight2.position.set(-10, -10, -15);
    scene.add(pointLight2);

    // 1. Cube (Terminal Roots)
    const cubeGeo = new THREE.BoxGeometry(9, 9, 9, 3, 3, 3);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: activeColor,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.9
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);

    // 2. Chip (Embedded SBCs & boardVault)
    const chipGroup = new THREE.Group();
    const chipBaseGeo = new THREE.BoxGeometry(11, 1.5, 11);
    const chipBaseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 });
    const chipBase = new THREE.Mesh(chipBaseGeo, chipBaseMat);
    chipGroup.add(chipBase);

    const chipDieGeo = new THREE.BoxGeometry(5, 2.2, 5);
    const chipDieMat = new THREE.MeshStandardMaterial({ color: activeColor, metalness: 0.9, wireframe: true });
    const chipDie = new THREE.Mesh(chipDieGeo, chipDieMat);
    chipGroup.add(chipDie);

    const ringGeo = new THREE.TorusGeometry(8, 0.25, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: activeColor, wireframe: true });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    chipGroup.add(ringMesh);

    // 3. Neural AI (foodloop.ai)
    const neuralGroup = new THREE.Group();
    const sphereGeo = new THREE.IcosahedronGeometry(7.5, 2);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: activeColor,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    neuralGroup.add(sphereMesh);

    const innerSphereGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const innerSphereMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    neuralGroup.add(innerSphere);

    // 4. Scatter Knot (3D WebGL Dimensions)
    const knotGeo = new THREE.TorusKnotGeometry(5.5, 1.6, 100, 16);
    const knotMat = new THREE.MeshStandardMaterial({
      color: activeColor,
      wireframe: true,
      metalness: 0.9,
      roughness: 0.1
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);

    // 5. Portal (Current Horizon & B.Tech CSE)
    const portalGroup = new THREE.Group();
    for (let r = 0; r < 4; r++) {
      const pTorusGeo = new THREE.TorusGeometry(4 + r * 2.2, 0.2, 16, 64);
      const pTorusMat = new THREE.MeshBasicMaterial({
        color: activeColor,
        transparent: true,
        opacity: 0.8 - r * 0.18,
        wireframe: true
      });
      const pTorus = new THREE.Mesh(pTorusGeo, pTorusMat);
      pTorus.rotation.x = (r * Math.PI) / 6;
      pTorus.rotation.y = (r * Math.PI) / 8;
      portalGroup.add(pTorus);
    }

    // Floating orbital dust particles
    const dustCount = 200;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 35;
      dustPos[i + 1] = (Math.random() - 0.5) * 35;
      dustPos[i + 2] = (Math.random() - 0.5) * 35;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.7,
      color: activeColor,
      transparent: true,
      opacity: 0.6
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    mainGroup.add(dust);

    let activeMesh: THREE.Object3D;
    const updateShapeMesh = (shape: string) => {
      mainGroup.remove(cubeMesh);
      mainGroup.remove(chipGroup);
      mainGroup.remove(neuralGroup);
      mainGroup.remove(knotMesh);
      mainGroup.remove(portalGroup);

      switch (shape) {
        case 'cube':
          activeMesh = cubeMesh;
          break;
        case 'chip':
          activeMesh = chipGroup;
          break;
        case 'neural':
          activeMesh = neuralGroup;
          break;
        case 'scatter':
          activeMesh = knotMesh;
          break;
        case 'portal':
          activeMesh = portalGroup;
          break;
        default:
          activeMesh = cubeMesh;
      }
      activeMesh.scale.set(0.1, 0.1, 0.1);
      mainGroup.add(activeMesh);
    };

    updateShapeMesh(chapter.shape3D);

    // Mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Check if shape changed
      if (currentShapeRef.current !== chapter.shape3D) {
        updateShapeMesh(chapter.shape3D);
        currentShapeRef.current = chapter.shape3D;
      }

      // Smooth scale up morphing
      if (activeMesh && activeMesh.scale.x < 1) {
        activeMesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }

      // Rotation
      if (activeMesh) {
        activeMesh.rotation.y = time * 0.5 + mouseX * 0.5;
        activeMesh.rotation.x = Math.sin(time * 0.4) * 0.3 + mouseY * 0.5;
      }

      dust.rotation.y = -time * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      chipBaseGeo.dispose();
      chipBaseMat.dispose();
      chipDieGeo.dispose();
      chipDieMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, [chapter.theme, chapter.shape3D]);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-500 bg-slate-950/70 px-2.5 py-1 rounded-full border border-white/10 pointer-events-none">
        3D Core: {chapter.shape3D.toUpperCase()} MESH
      </div>
    </div>
  );
};

export const JourneyExperience: React.FC = () => {
  const { setTheme, playClick, playHover, playScatter, playSuccess } = useTheme();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const activeChapter = JOURNEY_CHAPTERS[currentIdx];

  // In-place theme synchronization when chapter changes!
  useEffect(() => {
    setTheme(activeChapter.theme);
  }, [currentIdx, activeChapter.theme, setTheme]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % JOURNEY_CHAPTERS.length);
      playScatter();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, playScatter]);

  const handleSelectChapter = (idx: number) => {
    playClick();
    setCurrentIdx(idx);
  };

  const handleNext = () => {
    playScatter();
    setCurrentIdx((prev) => (prev + 1) % JOURNEY_CHAPTERS.length);
  };

  const handlePrev = () => {
    playClick();
    setCurrentIdx((prev) => (prev - 1 + JOURNEY_CHAPTERS.length) % JOURNEY_CHAPTERS.length);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      default: return <Zap className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="journey" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4 animate-float-slow">
            <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>ORIGIN & DEVELOPER EVOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
            The Developer <span className="text-gradient">Odyssey</span>
          </h2>

          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            From the raw terminal shells of 2006 to single-board computer benchmarking, production AI platforms, and 3D WebGL dimensions.
          </p>
        </div>

        {/* Chapter Stepper Navigation Pills (Morph in-place) */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {JOURNEY_CHAPTERS.map((chap, idx) => {
            const isActive = currentIdx === idx;
            return (
              <button
                key={chap.id}
                onClick={() => handleSelectChapter(idx)}
                onMouseEnter={playHover}
                className={`flex-1 min-w-[150px] p-3 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? 'glass-panel-glow border-cyan-400 bg-cyan-950/40 shadow-xl shadow-cyan-500/20'
                    : 'glass-panel border-white/10 hover:border-white/30 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    PHASE {chap.chapterNumber}
                  </span>
                  <span className="w-2 h-2 rounded-full transition-transform" style={{
                    backgroundColor: isActive ? 'var(--accent-primary)' : 'rgba(255,255,255,0.2)'
                  }} />
                </div>
                <div className="text-xs font-bold text-white truncate">
                  {chap.title.split(':')[1]?.trim() || chap.title}
                </div>
                <div className="text-[10px] font-mono text-slate-500 truncate mt-0.5">
                  {chap.yearBadge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Stage: In-place 3D Object + Storytelling Card */}
        <div className="glass-panel-glow rounded-3xl border border-white/15 bg-slate-950/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-500">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-700" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: 3D Morphing Canvas */}
            <div className="lg:col-span-5 relative rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden shadow-inner">
              <Journey3DViewport chapter={activeChapter} />
            </div>

            {/* Right Column: Story & Achievements Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center">
                    {renderIcon(activeChapter.iconName)}
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-cyan-300 border border-white/15 font-semibold">
                      {activeChapter.yearBadge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      {activeChapter.title}
                    </h3>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
                  {activeChapter.metricsBadge}
                </div>
              </div>

              {/* Tagline & Deep Narrative */}
              <div>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 mb-2 font-medium">
                  &gt; {activeChapter.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeChapter.description}
                </p>
              </div>

              {/* Milestones / Achievements */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Key Technical Milestones
                </div>
                {activeChapter.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeChapter.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Navigation Controls & Project Link */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    onMouseEnter={playHover}
                    className="p-2.5 rounded-xl bg-slate-900 border border-white/15 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={handleNext}
                    onMouseEnter={playHover}
                    className="p-2.5 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-mono shadow-lg shadow-cyan-500/20"
                  >
                    <span>Next Phase</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      playClick();
                      setIsAutoPlaying(!isAutoPlaying);
                    }}
                    onMouseEnter={playHover}
                    title={isAutoPlaying ? "Pause Story Tour" : "Auto-Play Story Tour"}
                    className={`p-2.5 rounded-xl border text-xs font-mono transition-colors flex items-center gap-1.5 ${
                      isAutoPlaying
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-900 border-white/15 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isAutoPlaying ? "Auto-Play ON" : "Auto Tour"}</span>
                  </button>
                </div>

                {activeChapter.projectLink && (
                  <a
                    href={activeChapter.projectLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-1.5 transition-colors underline underline-offset-4"
                  >
                    <span>{activeChapter.projectLink.label}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
