import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeHeroCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasWebGL] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const testCanvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!hasWebGL) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Sculpture: Elegant Torus Knot representing Code & Synthesis
    const knotGeometry = new THREE.TorusKnotGeometry(1.25, 0.36, 120, 28, 2, 3);
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x12141c,
      metalness: 0.92,
      roughness: 0.18,
      clearcoat: 0.85,
      clearcoatRoughness: 0.12,
      reflectivity: 0.9,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    mainGroup.add(knotMesh);

    // 2. Wireframe Outer Cage: Representing Digital Architecture & Precision
    const cageGeometry = new THREE.IcosahedronGeometry(2.1, 2);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    mainGroup.add(cageMesh);

    // 3. Subtle Concentric Gyro Ring
    const ringGeometry = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.22,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // 4. Floating Particle Dust
    const particleCount = 110;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xd4ff00,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Electric Lime Accent Point Light (Orbits dynamically)
    const limeLight = new THREE.PointLight(0xd4ff00, 5, 12);
    limeLight.position.set(2, 3, 3);
    scene.add(limeLight);

    // Cool Rim Light for depth
    const blueRimLight = new THREE.PointLight(0x3b82f6, 3, 10);
    blueRimLight.position.set(-4, -2, -2);
    scene.add(blueRimLight);

    // Mouse Interaction with Damped Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isHovered = false;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      mouseX = 0;
      mouseY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Scroll Effect
    let scrollYOffset = 0;
    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.0015;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Visibility Observer to pause loop when not on screen (Save 100% GPU)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous organic base rotation
        const baseSpeed = isHovered ? 0.45 : 0.28;
        knotMesh.rotation.y = elapsedTime * baseSpeed;
        knotMesh.rotation.x = elapsedTime * (baseSpeed * 0.6);

        cageMesh.rotation.y = -elapsedTime * (baseSpeed * 0.4);
        cageMesh.rotation.z = elapsedTime * (baseSpeed * 0.2);

        ringMesh.rotation.z = elapsedTime * 0.15;
        particles.rotation.y = elapsedTime * 0.08;

        // Orbiting Lime Light for dynamic highlights
        limeLight.position.x = Math.sin(elapsedTime * 0.8) * 3.5;
        limeLight.position.y = Math.cos(elapsedTime * 0.6) * 3.5;
        limeLight.position.z = Math.sin(elapsedTime * 0.5) * 2 + 2;

        // Mouse Lerp Damping
        targetRotationY = mouseX * 0.75 + scrollYOffset;
        targetRotationX = -mouseY * 0.75;

        mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.06;
        mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.06;

        // Subtle scale pulse on hover
        const targetScale = isHovered ? 1.05 : 1.0;
        mainGroup.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up all resources on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);

      knotGeometry.dispose();
      knotMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [hasWebGL]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-48 h-48 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/5 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-white/20 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* Subtle interaction cue pill */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1 rounded-full glass-dock border border-white/10 text-[10px] font-mono text-[#9A9AA4] flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
        <span>Interactive 3D • Drag to Orbit</span>
      </div>
    </div>
  );
}
