import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, Layers, Code2, Terminal, Cpu, Database, Binary, Globe } from 'lucide-react';

interface ToolItem {
  name: string;
  category: string;
  tag: string;
  proficiency: number;
  icon: string;
  color: string;
  pos: [number, number, number];
}

const TOOLS: ToolItem[] = [
  { name: "React", category: "Frontend", tag: "SPAs & Hooks", proficiency: 92, icon: "React", color: "#00d8ff", pos: [-16, 6, 8] },
  { name: "TypeScript", category: "Languages", tag: "Strict Types", proficiency: 88, icon: "TS", color: "#3178c6", pos: [-10, -5, 12] },
  { name: "Python", category: "Languages", tag: "AI & Scripts", proficiency: 86, icon: "Python", color: "#ffde57", pos: [12, 8, 6] },
  { name: "Node.js", category: "Backend", tag: "REST APIs", proficiency: 85, icon: "Node", color: "#68a063", pos: [18, -4, 10] },
  { name: "Three.js", category: "3D & WebGL", tag: "Spatial Shaders", proficiency: 84, icon: "3D", color: "#ffffff", pos: [-8, 12, 2] },
  { name: "Kali Linux", category: "Systems", tag: "Terminal & Sec", proficiency: 90, icon: "Linux", color: "#557cda", pos: [8, 14, 2] },
  { name: "Termux", category: "DevOps", tag: "Mobile POSIX", proficiency: 92, icon: "Shell", color: "#22c55e", pos: [-18, -10, 4] },
  { name: "C Language", category: "Languages", tag: "Memory & Arch", proficiency: 80, icon: "C", color: "#a8b9cc", pos: [16, -11, 4] },
  { name: "Tailwind CSS", category: "Frontend", tag: "Glass & Grids", proficiency: 95, icon: "Tailwind", color: "#38bdf8", pos: [-4, -12, 14] },
  { name: "Git & GitHub", category: "DevOps", tag: "Version Control", proficiency: 90, icon: "Git", color: "#f05032", pos: [4, -13, 14] }
];

export const Scene2Universe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useTheme();
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS[0]);

  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 560;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 38);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Glowing Golden Infinity Energy Ribbon (Spline Curve)
    const curvePoints: THREE.Vector3[] = [];
    const numPoints = 120;
    for (let i = 0; i <= numPoints; i++) {
      const t = (i / numPoints) * Math.PI * 2;
      const x = Math.sin(t) * 18;
      const y = Math.sin(t * 2) * 8;
      const z = Math.cos(t) * 12;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(curvePoints, true);
    const tubeGeo = new THREE.TubeGeometry(curve, 160, 0.45, 12, true);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const ribbonMesh = new THREE.Mesh(tubeGeo, tubeMat);
    mainGroup.add(ribbonMesh);

    // Secondary Outer Light Ribbon
    const outerTubeGeo = new THREE.TubeGeometry(curve, 120, 1.2, 8, true);
    const outerTubeMat = new THREE.MeshBasicMaterial({
      color: 0xff4500,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      wireframe: true
    });
    const outerRibbonMesh = new THREE.Mesh(outerTubeGeo, outerTubeMat);
    mainGroup.add(outerRibbonMesh);

    // 3D Glass Tool Blocks
    const toolMeshes: THREE.Mesh[] = [];
    TOOLS.forEach((tool) => {
      const boxGeo = new THREE.BoxGeometry(4.2, 3.2, 0.8);
      const boxMat = new THREE.MeshStandardMaterial({
        color: 0x111625,
        roughness: 0.15,
        metalness: 0.85,
        wireframe: false
      });
      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      boxMesh.position.set(...tool.pos);

      // Glowing Wireframe border on the glass card
      const wireGeo = new THREE.BoxGeometry(4.3, 3.3, 0.85);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffaa00,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      boxMesh.add(wireMesh);

      mainGroup.add(boxMesh);
      toolMeshes.push(boxMesh);
    });

    // Floating Golden Particle Embers
    const pCount = 500;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i += 3) {
      pPositions[i] = (Math.random() - 0.5) * 60;
      pPositions[i + 1] = (Math.random() - 0.5) * 40;
      pPositions[i + 2] = (Math.random() - 0.5) * 35;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.9,
      color: 0xffbb33,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    mainGroup.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffaa00, 1.5);
    dirLight.position.set(0, 15, 20);
    scene.add(dirLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 560;
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

      // Smooth camera parallax
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Ribbon undulation
      ribbonMesh.rotation.y = time * 0.25;
      outerRibbonMesh.rotation.y = time * 0.25;
      ribbonMesh.rotation.z = Math.sin(time * 0.3) * 0.15;

      // Float tool cards
      toolMeshes.forEach((mesh, idx) => {
        mesh.position.y = TOOLS[idx].pos[1] + Math.sin(time * 1.5 + idx) * 0.8;
        mesh.rotation.y = Math.sin(time + idx) * 0.2;
        mesh.rotation.x = Math.cos(time + idx) * 0.1;
      });

      // Embers float
      particles.rotation.y = time * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      outerTubeGeo.dispose();
      outerTubeMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, []);

  return (
    <section id="scene-2" className="relative min-h-screen py-24 bg-[#05060a] overflow-hidden select-none">
      {/* Background Film Marks */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between font-mono text-[11px] text-slate-400 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">SCENE 02</span>
          <span>// THE DEVELOPER UNIVERSE</span>
        </div>
        <div className="hidden sm:block text-slate-400">
          CORE STACK: REACT • TYPESCRIPT • PYTHON • LINUX • THREE.JS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl tracking-wider text-white uppercase mb-2">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">Developer</span> Universe
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-widest uppercase">
            Tools • Code • Architecture • Embedded Hardware • Spatial 3D
          </p>
        </div>

        {/* 3D Canvas Stage */}
        <div className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#0a0d18] via-[#070913] to-[#04050a] border border-white/10 shadow-2xl">
          {/* Three.js Viewport */}
          <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Central Character Silhouette gazing into universe */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none z-10">
            <svg viewBox="0 0 160 260" className="h-48 sm:h-64 w-auto drop-shadow-[0_0_25px_rgba(255,170,0,0.5)]">
              {/* Back illumination aura */}
              <circle cx="80" cy="90" r="50" fill="url(#univ-glow)" opacity="0.4" />
              {/* Head */}
              <circle cx="80" cy="40" r="18" fill="#090a10" stroke="#ffaa00" strokeWidth="1.5" />
              {/* Torso from behind looking in */}
              <path d="M48,80 C50,60 70,55 80,55 C90,55 110,60 112,80 L120,180 L40,180 Z" fill="#090b12" stroke="#ff8800" strokeWidth="1.5" />
              {/* Floor radar ring */}
              <ellipse cx="80" cy="245" rx="70" ry="12" fill="none" stroke="#ffaa00" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
              <defs>
                <radialGradient id="univ-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffaa00" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Interactive Floating Tool Card HUD (Top-Left) */}
          <div className="absolute top-6 left-6 z-20 max-w-xs glass-panel p-4 rounded-2xl border border-yellow-500/30 bg-black/70 backdrop-blur-xl">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
              <span>SELECTED TOOL NODE</span>
              <span className="text-yellow-400 font-bold">{selectedTool.proficiency}% MASTERY</span>
            </div>
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedTool.color }} />
              {selectedTool.name}
            </h4>
            <div className="text-xs font-mono text-yellow-300 mb-2">{selectedTool.tag}</div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full transition-all duration-500"
                style={{ width: `${selectedTool.proficiency}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              CATEGORY: <span className="text-white">{selectedTool.category.toUpperCase()}</span>
            </div>
          </div>

          {/* Tool Quick Selector Pills (Bottom-Right) */}
          <div className="absolute bottom-6 right-6 z-20 hidden sm:flex flex-wrap gap-1.5 max-w-md justify-end">
            {TOOLS.map((tool) => (
              <button
                key={tool.name}
                onClick={() => {
                  playHover();
                  setSelectedTool(tool);
                }}
                className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all ${
                  selectedTool.name === tool.name
                    ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300 font-bold shadow-lg shadow-yellow-500/20'
                    : 'bg-black/50 border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                }`}
              >
                {tool.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
