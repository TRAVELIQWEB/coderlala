"use client";

import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shootingStarsContainerRef = useRef<HTMLDivElement>(null);
  const mouseMoveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Generate enhanced shooting stars (dark mode only)
  useEffect(() => {
    const container = shootingStarsContainerRef.current;
    if (!container) return;

    // Clear existing stars
    container.innerHTML = '';

    // Only generate stars in dark mode
    if (document.documentElement.classList.contains('dark')) {
      // Generate 6-8 shooting stars for better performance
      const starCount = 8;
      
      // Predefined starting positions for better distribution
      const positions = [
        { x: 10, y: 15 },  // Top-left
        { x: 85, y: 40 },  // Top-right
        { x: 60, y: 70 },  // Center-right
        { x: 45, y: 25 },  // Center
        { x: 20, y: 85 },  // Bottom-left
        { x: 70, y: 10 },  // Top-center
        { x: 90, y: 80 },  // Bottom-right
        { x: 35, y: 50 },  // Center-left
      ];

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        const pos = positions[i % positions.length];
        // Add slight randomness to predefined positions
        const startX = Math.max(5, Math.min(95, pos.x + (Math.random() * 10 - 5)));
        const startY = Math.max(5, Math.min(95, pos.y + (Math.random() * 10 - 5)));
        
        // Random properties with better ranges
        const size = 2 + Math.random() * 2; // 2-4px
        const duration = 5 + Math.random() * 5; // 5-10s
        const delay = Math.random() * 15; // 0-15s delay
        
        // Color variation
        const colors = [
          '#ffffff', // White
          '#60a5fa', // Blue
          '#8b5cf6', // Purple
          '#22d3ee', // Cyan
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        star.style.cssText = `
          left: ${startX}%;
          top: ${startY}%;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          box-shadow: 
            0 0 ${size * 2}px ${size}px ${color}80,
            0 0 ${size * 4}px ${size * 2}px ${color}40;
          animation: shooting ${duration}s ease-out infinite;
          animation-delay: ${delay}s;
          z-index: ${Math.floor(Math.random() * 10)};
        `;
        
        // Create enhanced trail with gradient
        const trail = document.createElement('div');
        const trailLength = 150 + Math.random() * 100;
        
        trail.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${trailLength}px;
          height: ${size / 1.5}px;
          background: linear-gradient(90deg, 
            ${color} 0%, 
            ${color}90 20%,
            ${color}60 40%,
            ${color}30 60%,
            transparent 100%
          );
          transform: translate(-50%, -50%) rotate(-45deg);
          transform-origin: 0 50%;
          filter: blur(0.5px);
        `;
        
        star.appendChild(trail);
        container.appendChild(star);
      }
    }
    
    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  // Enhanced mouse parallax effect with throttling
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }

      mouseMoveTimeoutRef.current = setTimeout(() => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate centered percentage
        const xPercent = (clientX - innerWidth / 2) / innerWidth;
        const yPercent = (clientY - innerHeight / 2) / innerHeight;

        // Apply parallax with different intensities for layers
        const container = containerRef.current;
        if (container) {
          // Update CSS variables for different layers
          document.documentElement.style.setProperty('--mouse-x', `${xPercent * 15}px`);
          document.documentElement.style.setProperty('--mouse-y', `${yPercent * 15}px`);
        }
      }, 16); // ~60fps throttle
    };

    // Touch support for mobile/tablet
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMouseMove(new MouseEvent('mousemove', {
          clientX: touch.clientX,
          clientY: touch.clientY,
        }));
      }
    };

    // Initial position (center)
    document.documentElement.style.setProperty('--mouse-x', '0px');
    document.documentElement.style.setProperty('--mouse-y', '0px');

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="background-container">
      {/* LIGHT MODE: DAY SKY WITH CLOUDS */}
      <div className="sun" />
      <div className="sun-rays" />
      <div className="cloud-layer-1" />
      <div className="cloud-layer-2" />
      <div className="cloud-layer-3" />
      <div className="birds" />
      <div className="light-particles" />

      {/* DARK MODE: GALAXY */}
      {/* Layer 1: Large bright stars - Fastest parallax */}
      <div 
        className="stars-layer-1" 
        style={{ 
          transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))',
          transition: 'transform 0.2s cubic-bezier(0.22, 0.61, 0.36, 1)'
        }}
      />
      
      {/* Layer 2: Medium stars - Medium parallax */}
      <div 
        className="stars-layer-2"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.7), calc(var(--mouse-y, 0px) * 0.7))',
          transition: 'transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)'
        }}
      />
      
      {/* Layer 3: Small background stars - Slow parallax */}
      <div 
        className="stars-layer-3"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.4), calc(var(--mouse-y, 0px) * 0.4))',
          transition: 'transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)'
        }}
      />
      
      {/* Layer 4: Nebula clouds - Very slow parallax */}
      <div 
        className="nebula-layer"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.2), calc(var(--mouse-y, 0px) * 0.2))',
          transition: 'transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)'
        }}
      />
      
      {/* Layer 5: Star glows - Very slow parallax */}
      <div 
        className="glow-layer"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.1), calc(var(--mouse-y, 0px) * 0.1))',
          transition: 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)'
        }}
      />
      
      {/* Layer 6: Dynamic Shooting stars - No parallax for better effect */}
      <div 
        ref={shootingStarsContainerRef} 
        className="shooting-stars-container"
      />
      
      {/* Optional: Add a subtle vignette effect (dark mode only) */}
      <div 
        className="absolute inset-0 pointer-events-none dark-vignette"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 14, 39, 0.5) 70%, rgba(5, 8, 16, 0.8) 100%)',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Optional: Add a subtle grain texture for realism */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}