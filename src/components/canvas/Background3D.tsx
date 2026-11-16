import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, scatterMultiplier } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Clear container and append
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Particle Cloud Geometry
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Theme color palette map
    const themeColors = {
      cyan: { p: new THREE.Color('#00f2fe'), s: new THREE.Color('#38bdf8'), a: new THREE.Color('#818cf8') },
      purple: { p: new THREE.Color('#c084fc'), s: new THREE.Color('#a855f7'), a: new THREE.Color('#e879f9') },
      emerald: { p: new THREE.Color('#34d399'), s: new THREE.Color('#10b981'), a: new THREE.Color('#06b6d4') },
      amber: { p: new THREE.Color('#fbbf24'), s: new THREE.Color('#f59e0b'), a: new THREE.Color('#ea580c') },
      sapphire: { p: new THREE.Color('#38bdf8'), s: new THREE.Color('#6366f1'), a: new THREE.Color('#818cf8') }
    };

    const currentPalette = themeColors[theme] || themeColors.cyan;

    // Generate initial structured positions (Double Helix + Orbit Ring)
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const t = (i / particleCount) * Math.PI * 16;
      const radius = 25 + Math.sin(i * 0.05) * 12;

      const x = Math.cos(t) * radius + (Math.random() - 0.5) * 20;
      const y = (i / particleCount - 0.5) * 140 + (Math.random() - 0.5) * 10;
      const z = Math.sin(t) * radius + (Math.random() - 0.5) * 25;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      // Random scatter velocity vector
      velocities[i3] = (Math.random() - 0.5) * 45;
      velocities[i3 + 1] = (Math.random() - 0.5) * 45;
      velocities[i3 + 2] = (Math.random() - 0.5) * 60;

      // Color variation
      const mixRatio = Math.random();
      const col = mixRatio > 0.6 ? currentPalette.p : (mixRatio > 0.3 ? currentPalette.s : currentPalette.a);
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circle particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(0.8, 'rgba(255,255,255,0.15)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // Subtle Torus Wireframe in background
    const torusGeo = new THREE.TorusGeometry(32, 1.2, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: currentPalette.s,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 4;
    scene.add(torus);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.03;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.03;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Scroll Velocity Tracking
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let currentScrollProgress = 0;

    const onScroll = () => {
      const currentY = window.scrollY;
      scrollVelocity = Math.abs(currentY - lastScrollY);
      lastScrollY = currentY;

      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      currentScrollProgress = totalH > 0 ? currentY / totalH : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 0.8;
      camera.position.y = -targetY * 0.8;
      camera.lookAt(0, 0, 0);

      // Rotate torus
      torus.rotation.y = elapsedTime * 0.15;
      torus.rotation.x = Math.PI / 4 + Math.sin(elapsedTime * 0.2) * 0.2;

      // Slow scrollVelocity decay
      scrollVelocity *= 0.92;

      // Dynamic Scatter calculation: combined scroll velocity + scroll progress + manual multiplier
      const dynamicScatter = Math.min(
        (scrollVelocity * 0.04) + (scatterMultiplier * 0.8) + (Math.sin(currentScrollProgress * Math.PI) * 0.3),
        1.5
      );

      // Update particle positions
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        // Cosmic rotation
        const cosR = Math.cos(0.002);
        const sinR = Math.sin(0.002);
        const rx = ox * cosR - oz * sinR;
        const rz = ox * sinR + oz * cosR;
        originalPositions[i3] = rx;
        originalPositions[i3 + 2] = rz;

        // Scatter displacement
        const vx = velocities[i3] * dynamicScatter;
        const vy = velocities[i3 + 1] * dynamicScatter;
        const vz = velocities[i3 + 2] * dynamicScatter;

        // Target with wave ripple
        const targetPosX = rx + vx + Math.sin(elapsedTime + oy * 0.05) * 1.5;
        const targetPosY = oy + vy + Math.cos(elapsedTime + ox * 0.05) * 1.5;
        const targetPosZ = rz + vz;

        // Smooth lerp to target
        posArray[i3] += (targetPosX - posArray[i3]) * 0.12;
        posArray[i3 + 1] += (targetPosY - posArray[i3 + 1]) * 0.12;
        posArray[i3 + 2] += (targetPosZ - posArray[i3 + 2]) * 0.12;
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [theme, scatterMultiplier]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
