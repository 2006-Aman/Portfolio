import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, Maximize2, RotateCcw, Zap, Compass, Activity } from 'lucide-react';

interface NodeData {
  title: string;
  category: string;
  code: string;
}

const SHARD_NODES: NodeData[] = [
  { title: "boardVault SaaS", category: "SBC / MCU Hub", code: "SBC_COMPUTE_MATRIX" },
  { title: "foodloop.ai", category: "AI Redistribution", code: "AI_SPOILAGE_NET" },
  { title: "SolFinder Research", category: "Enterprise Portal", code: "TECH_PUB_V2" },
  { title: "Kali & Termux", category: "Systems & Security", code: "KERNEL_SHELL_OPS" },
  { title: "React & TypeScript", category: "Core Frontend", code: "VIRTUAL_DOM_V19" },
  { title: "Three.js WebGL", category: "Spatial Graphics", code: "SHADERS_SCATTER_3D" },
  { title: "Node.js REST", category: "Backend Architecture", code: "ASYNC_WORKER_POOL" },
  { title: "B.Tech CSE", category: "Algorithmic Base", code: "DSA_OPTIMIZATION" }
];

export const ScatterShowcase3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme, playScatter, playAssemble, playClick, playHover } = useTheme();
  
  const [scatterState, setScatterState] = useState<'assembled' | 'scattered' | 'vortex' | 'orbit'>('assembled');
  const [dispersionLevel, setDispersionLevel] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(SHARD_NODES[0]);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);

  // References to communicate with animation loop
  const modeRef = useRef<'assembled' | 'scattered' | 'vortex' | 'orbit'>('assembled');
  const dispersionRef = useRef<number>(0);

  useEffect(() => {
    modeRef.current = scatterState;
    dispersionRef.current = dispersionLevel;
  }, [scatterState, dispersionLevel]);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 48);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    // Color theme
    const themeHex = {
      cyan: 0x00f2fe,
      purple: 0xc084fc,
      emerald: 0x34d399,
      amber: 0xfbbf24
    }[theme] || 0x00f2fe;

    const mainColor = new THREE.Color(themeHex);
    const subColor = new THREE.Color(0xffffff);

    // Group holding the 3D shards
    const group = new THREE.Group();
    scene.add(group);

    // Add Central Core Wireframe Sphere
    const coreGeo = new THREE.IcosahedronGeometry(7, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: mainColor,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(3.5, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Create 8 main data shard meshes representing projects and technical nodes
    interface ShardMeshInfo {
      mesh: THREE.Mesh;
      initialPos: THREE.Vector3;
      scatterPos: THREE.Vector3;
      orbitAngle: number;
      orbitRadius: number;
      rotationSpeed: THREE.Vector3;
      nodeIndex: number;
    }

    const shardList: ShardMeshInfo[] = [];

    // Outer orbiting data nodes (octahedrons & crystalline boxes)
    SHARD_NODES.forEach((node, i) => {
      const phi = Math.acos(-1 + (2 * i) / SHARD_NODES.length);
      const theta = Math.sqrt(SHARD_NODES.length * Math.PI) * phi;
      const initialRadius = 12;

      const initX = initialRadius * Math.cos(theta) * Math.sin(phi);
      const initY = initialRadius * Math.sin(theta) * Math.sin(phi);
      const initZ = initialRadius * Math.cos(phi);

      const scatterRadius = 30 + Math.random() * 12;
      const scatX = scatterRadius * Math.cos(theta * 1.5) * Math.sin(phi);
      const scatY = scatterRadius * Math.sin(theta * 1.5) * Math.sin(phi) + (Math.random() - 0.5) * 15;
      const scatZ = scatterRadius * Math.cos(phi * 1.5);

      const geo = i % 2 === 0 
        ? new THREE.OctahedronGeometry(2.4, 0)
        : new THREE.BoxGeometry(2.8, 2.8, 2.8);

      const mat = new THREE.MeshStandardMaterial({
        color: mainColor,
        roughness: 0.2,
        metalness: 0.85,
        wireframe: true
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(initX, initY, initZ);
      group.add(mesh);

      // Add a small light inside each node
      const pointLight = new THREE.PointLight(themeHex, 0.8, 15);
      mesh.add(pointLight);

      shardList.push({
        mesh,
        initialPos: new THREE.Vector3(initX, initY, initZ),
        scatterPos: new THREE.Vector3(scatX, scatY, scatZ),
        orbitAngle: (i / SHARD_NODES.length) * Math.PI * 2,
        orbitRadius: 16 + (i % 3) * 4,
        rotationSpeed: new THREE.Vector3(
          0.01 + Math.random() * 0.02,
          0.01 + Math.random() * 0.02,
          0.01
        ),
        nodeIndex: i
      });
    });

    // Connecting Energy Lines between nodes and core
    const lineMaterial = new THREE.LineBasicMaterial({
      color: mainColor,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    const lineGeometries: THREE.BufferGeometry[] = [];
    const lineMeshes: THREE.Line[] = [];

    shardList.forEach(() => {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0)
      ]);
      const line = new THREE.Line(lineGeo, lineMaterial);
      group.add(line);
      lineGeometries.push(lineGeo);
      lineMeshes.push(line);
    });

    // Particle Swarm floating around
    const particlesCount = 450;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particlesCount * 3);
    const pOrigPos = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const r = 18 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const px = r * Math.sin(phi) * Math.cos(theta);
      const py = r * Math.sin(phi) * Math.sin(theta);
      const pz = r * Math.cos(phi);

      pPos[i] = px;
      pPos[i + 1] = py;
      pPos[i + 2] = pz;
      pOrigPos[i] = px;
      pOrigPos[i + 1] = py;
      pOrigPos[i + 2] = pz;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.8,
      color: subColor,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(20, 30, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(themeHex, 1.5);
    dirLight2.position.set(-20, -30, -20);
    scene.add(dirLight2);

    // Mouse drag rotation handling
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const domEl = renderer.domElement;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      group.rotation.y += deltaX * 0.008;
      group.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      group.rotation.y += deltaX * 0.008;
      group.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Core rotation
      coreMesh.rotation.x = time * 0.3;
      coreMesh.rotation.y = time * 0.4;
      innerMesh.rotation.y = -time * 0.2;

      // Group auto-rotate
      if (isAutoRotate && !isDragging) {
        group.rotation.y += 0.0035;
      }

      const currentMode = modeRef.current;
      const sliderDispersion = dispersionRef.current; // 0 to 1

      // Update each shard position based on mode
      shardList.forEach((item, idx) => {
        const { mesh, initialPos, scatterPos, rotationSpeed } = item;

        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;

        let target = new THREE.Vector3();

        if (currentMode === 'assembled') {
          // Assembled into structured polyhedron
          target.copy(initialPos);
          // Apply manual slider if user moves it
          target.lerp(scatterPos, sliderDispersion);
        } else if (currentMode === 'scattered') {
          // Exploded out in space
          target.copy(scatterPos);
          target.x += Math.sin(time * 2 + idx) * 3;
          target.y += Math.cos(time * 2 + idx) * 3;
          target.z += Math.sin(time + idx * 0.5) * 3;
        } else if (currentMode === 'vortex') {
          // Spiraling vortex
          const vAngle = time * 1.5 + (idx / SHARD_NODES.length) * Math.PI * 4;
          const vRadius = 8 + (idx * 3.5);
          const vY = Math.sin(time + idx) * 16;
          target.set(
            Math.cos(vAngle) * vRadius,
            vY,
            Math.sin(vAngle) * vRadius
          );
        } else if (currentMode === 'orbit') {
          // Flat planetary ring
          const oAngle = time * 0.8 + item.orbitAngle;
          const oRadius = item.orbitRadius;
          target.set(
            Math.cos(oAngle) * oRadius,
            Math.sin(time * 2 + idx) * 2,
            Math.sin(oAngle) * oRadius
          );
        }

        // Smoothly interpolate current mesh position to target
        mesh.position.lerp(target, 0.08);

        // Update connecting beam line to center
        const lineGeo = lineGeometries[idx];
        const positionsArr = new Float32Array([
          0, 0, 0,
          mesh.position.x, mesh.position.y, mesh.position.z
        ]);
        lineGeo.setAttribute('position', new THREE.BufferAttribute(positionsArr, 3));
      });

      // Update particles
      const pPositions = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        const scatterFactor = currentMode === 'scattered' ? 2.2 : (1 + sliderDispersion);
        const ox = pOrigPos[i];
        const oy = pOrigPos[i + 1];
        const oz = pOrigPos[i + 2];

        pPositions[i] = ox * scatterFactor + Math.sin(time + oy * 0.1) * 1.2;
        pPositions[i + 1] = oy * scatterFactor + Math.cos(time + ox * 0.1) * 1.2;
        pPositions[i + 2] = oz * scatterFactor;
      }
      pGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      lineMaterial.dispose();
      lineGeometries.forEach(g => g.dispose());
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
    };
  }, [theme, isAutoRotate]);

  const handleModeChange = (newMode: 'assembled' | 'scattered' | 'vortex' | 'orbit') => {
    if (newMode === 'scattered') {
      playScatter();
      setDispersionLevel(1);
    } else if (newMode === 'assembled') {
      playAssemble();
      setDispersionLevel(0);
    } else {
      playClick();
    }
    setScatterState(newMode);
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-panel-glow border border-cyan-500/20 bg-gradient-to-b from-[#060b19]/90 via-[#0a1226]/80 to-[#040713]/95 shadow-2xl">
      {/* Top HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-slate-950/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> 3D Quantum Coordinate Matrix
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            Three.js WebGL Real-time
          </span>
        </div>

        {/* State Mode Controls */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => handleModeChange('assembled')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              scatterState === 'assembled'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" /> Assembled
          </button>
          <button
            onClick={() => handleModeChange('scattered')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              scatterState === 'scattered'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" /> Scatter Burst
          </button>
          <button
            onClick={() => handleModeChange('vortex')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              scatterState === 'vortex'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" /> Vortex
          </button>
          <button
            onClick={() => handleModeChange('orbit')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              scatterState === 'orbit'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> Orbit Ring
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative h-[480px] sm:h-[560px] w-full cursor-grab active:cursor-grabbing select-none">
        <div ref={mountRef} className="absolute inset-0 w-full h-full" />

        {/* Floating Quick Node Tags on Hover/Click */}
        <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs pointer-events-none">
          {selectedNode && (
            <div className="glass-panel p-4 rounded-2xl border border-cyan-500/30 bg-slate-950/75 backdrop-blur-xl animate-fade-in pointer-events-auto">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                <span>ACTIVE SHARD NODE</span>
                <span className="text-cyan-400 font-bold">NODE_0{SHARD_NODES.indexOf(selectedNode) + 1}</span>
              </div>
              <h4 className="text-lg font-bold text-white tracking-wide">{selectedNode.title}</h4>
              <p className="text-xs text-cyan-300 font-mono mb-2">{selectedNode.category}</p>
              <div className="text-[11px] font-mono px-2 py-1 rounded bg-cyan-950/40 border border-cyan-500/20 text-slate-300 flex items-center justify-between">
                <span>HASH:</span>
                <span className="text-cyan-400">{selectedNode.code}</span>
              </div>
            </div>
          )}
        </div>

        {/* Node Selector Pills at Bottom-Left */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto flex flex-wrap gap-1.5 max-w-lg z-10">
          {SHARD_NODES.map((node) => (
            <button
              key={node.code}
              onClick={() => {
                setSelectedNode(node);
                playHover();
              }}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border transition-all ${
                selectedNode?.code === node.code
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white hover:border-white/30'
              }`}
            >
              {node.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Dispersion Slider & Auto-rotate Toggle at Bottom-Right */}
        <div className="absolute bottom-4 right-4 hidden sm:flex flex-col items-end gap-2.5 z-10">
          <div className="glass-panel p-3 rounded-2xl border border-white/10 bg-slate-950/70 flex flex-col gap-2 min-w-[210px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <span className="flex items-center gap-1 text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" /> Scatter Dispersion
              </span>
              <span className="text-white font-bold">{Math.round(dispersionLevel * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={dispersionLevel}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setDispersionLevel(val);
                if (val > 0.6 && scatterState !== 'scattered') {
                  setScatterState('scattered');
                } else if (val < 0.1 && scatterState !== 'assembled') {
                  setScatterState('assembled');
                }
              }}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Condensed Core</span>
              <span>Galaxy Scatter</span>
            </div>
          </div>

          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className="px-3 py-1.5 rounded-xl text-xs font-mono glass-panel border border-white/10 text-slate-300 hover:text-white flex items-center gap-1.5 hover:border-cyan-500/40 transition-all"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin-slow text-cyan-400' : 'text-slate-500'}`} />
            Auto-Spin: {isAutoRotate ? 'ON' : 'PAUSED'}
          </button>
        </div>

        {/* Drag Hint Overlay */}
        <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-400 glass-panel px-3 py-1.5 rounded-full border border-white/10 pointer-events-none hidden md:block">
          🖱️ Click & Drag to Orbit 3D Core
        </div>
      </div>
    </div>
  );
};
