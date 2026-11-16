import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { ExternalLink, Github, Maximize2, MoveHorizontal, Sparkles, Layers } from 'lucide-react';

interface Scene4CurvedShowcaseProps {
  onSelectProject: (p: Project) => void;
}

export const Scene4CurvedShowcase: React.FC<Scene4CurvedShowcaseProps> = ({ onSelectProject }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { playClick, playHover } = useTheme();
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const rotationRef = useRef<number>(0);

  const activeProject = PROJECTS[activeProjectIdx] || PROJECTS[0];

  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 560;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 4, 32);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const theaterGroup = new THREE.Group();
    scene.add(theaterGroup);

    // Reflective Circular Stage Floor
    const floorGeo = new THREE.CircleGeometry(26, 64);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x070912,
      roughness: 0.1,
      metalness: 0.9
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -6;
    theaterGroup.add(floor);

    // Glowing Concentric Gold Rings on the Floor
    const ringGeo = new THREE.RingGeometry(14, 14.3, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffb703,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -5.95;
    theaterGroup.add(ring);

    const outerRingGeo = new THREE.RingGeometry(22, 22.2, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0xff5722,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = -Math.PI / 2;
    outerRing.position.y = -5.95;
    theaterGroup.add(outerRing);

    // Multi-tier Curved Cylindrical Screens
    // Upper Tier Banners: "BUILD WITHOUT LIMITS", "TIMELESS EXPERIENCES", "DRIVEN BY CODE"
    const upperCardsCount = 5;
    const upperRadius = 24;
    for (let i = 0; i < upperCardsCount; i++) {
      const angle = (i / upperCardsCount) * Math.PI * 0.9 - Math.PI * 0.45;
      const x = Math.sin(angle) * upperRadius;
      const z = Math.cos(angle) * upperRadius - 10;

      const cardGeo = new THREE.PlaneGeometry(9, 4.2);
      const cardMat = new THREE.MeshBasicMaterial({
        color: 0x151b2e,
        wireframe: true,
        side: THREE.DoubleSide
      });
      const card = new THREE.Mesh(cardGeo, cardMat);
      card.position.set(x, 7.5, z);
      card.rotation.y = angle + Math.PI;
      theaterGroup.add(card);
    }

    // Middle Tier Screens: Featured Project Screens
    const midCardsCount = PROJECTS.length;
    const midRadius = 20;
    const projectMeshes: THREE.Mesh[] = [];

    PROJECTS.forEach((proj, idx) => {
      const angle = (idx / midCardsCount) * Math.PI * 1.2 - Math.PI * 0.6;
      const x = Math.sin(angle) * midRadius;
      const z = Math.cos(angle) * midRadius - 8;

      const pGeo = new THREE.PlaneGeometry(8, 5);
      const pMat = new THREE.MeshBasicMaterial({
        color: idx === 0 ? 0xff3b1f : 0x22304d,
        wireframe: true,
        side: THREE.DoubleSide
      });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.position.set(x, 1.5, z);
      pMesh.rotation.y = angle + Math.PI;

      theaterGroup.add(pMesh);
      projectMeshes.push(pMesh);
    });

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const centerLight = new THREE.PointLight(0xffb703, 2, 40);
    centerLight.position.set(0, 10, 0);
    scene.add(centerLight);

    // Interactive Drag Rotation
    let isDragging = false;
    let prevMouseX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      rotationRef.current += deltaX * 0.006;
      prevMouseX = e.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support
    domEl.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      rotationRef.current += deltaX * 0.006;
      prevMouseX = e.touches[0].clientX;
    }, { passive: true });

    window.addEventListener('touchend', () => { isDragging = false; });

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth rotate toward target
      theaterGroup.rotation.y += (rotationRef.current - theaterGroup.rotation.y) * 0.1;

      // Gentle auto-hover
      camera.position.y = 4 + Math.sin(Date.now() * 0.001) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, []);

  const handleSelectCard = (idx: number) => {
    playClick();
    setActiveProjectIdx(idx);
    // Rotate 3D theater to face this project
    const midCardsCount = PROJECTS.length;
    const targetAngle = -((idx / midCardsCount) * Math.PI * 1.2 - Math.PI * 0.6);
    rotationRef.current = targetAngle;
  };

  return (
    <section id="scene-4" className="relative min-h-screen py-24 bg-[#05060b] overflow-hidden select-none">
      {/* Top Scene Marker */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between font-mono text-[11px] text-slate-400 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-cinematic-red">SCENE 04</span>
          <span>// THE CURVED PANORAMIC THEATER</span>
        </div>
        <div className="hidden sm:block text-slate-400">
          3D AMPHITHEATER SHOWCASE // ROTATABLE SCREEN STADIUM
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-wider text-white uppercase mb-2">
            Curved <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">Panoramic</span> Theater
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-widest uppercase">
            Click &amp; Drag in 3D to Rotate • Select Projects to Inspect
          </p>
        </div>

        {/* 3D Curved Theater Stage */}
        <div className="relative w-full h-[540px] sm:h-[640px] rounded-3xl bg-gradient-to-b from-[#0c0f1c] via-[#080a13] to-[#040509] border border-white/10 overflow-hidden shadow-2xl">
          {/* Canvas */}
          <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Drag Hint Top Overlay */}
          <div className="absolute top-6 inset-x-0 flex justify-center pointer-events-none z-20">
            <div className="glass-panel px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
              <MoveHorizontal className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>DRAG HORIZONTALLY TO ROTATE 3D THEATER DOME</span>
            </div>
          </div>

          {/* Focused Project Card Overlay (Bottom Left) */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-20 glass-panel-glow p-6 rounded-2xl border border-cinematic-red/40 bg-black/85 backdrop-blur-xl shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
              <span className="text-cinematic-red font-bold">THEATER SCREEN #{activeProjectIdx + 1}</span>
              <span className="text-slate-300 uppercase">{activeProject.categoryLabel}</span>
            </div>

            <h3 className="text-2xl font-black text-white">{activeProject.title}</h3>
            <p className="text-xs font-mono text-amber-400 mb-2">{activeProject.tagline}</p>
            <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
              {activeProject.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {activeProject.techStack.map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  playClick();
                  onSelectProject(activeProject);
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-cinematic-red hover:bg-red-600 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-cinematic-red/30"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Inspect Specs</span>
              </button>

              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                title="View Code on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="p-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold"
                  title="Open Live Deployment"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Project Carousel Pills (Bottom Right) */}
          <div className="absolute bottom-6 right-6 z-20 hidden md:flex flex-col gap-1.5 items-end">
            <span className="text-[10px] font-mono text-slate-500 uppercase">Select Screen</span>
            {PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => handleSelectCard(idx)}
                onMouseEnter={playHover}
                className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all ${
                  activeProjectIdx === idx
                    ? 'bg-cinematic-red text-white font-bold border-cinematic-red shadow-lg shadow-cinematic-red/30'
                    : 'bg-black/60 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
