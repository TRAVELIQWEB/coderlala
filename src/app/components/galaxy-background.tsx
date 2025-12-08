"use client";

import { useEffect, useRef } from "react";

export default function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shootingStarsContainerRef = useRef<HTMLDivElement>(null);
  const lightParticlesContainerRef = useRef<HTMLDivElement>(null);
  const mouseMoveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Generate shooting stars for dark mode
  useEffect(() => {
    const generateShootingStars = () => {
      const container = shootingStarsContainerRef.current;
      if (!container) return;

      container.innerHTML = '';
      if (!document.documentElement.classList.contains('dark')) return;

      const starCount = 8;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const size = 2 + Math.random() * 3;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 15;
        const colors = ['#ffffff', '#60a5fa', '#8b5cf6', '#22d3ee'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        star.style.cssText = `
          left: ${startX}%;
          top: ${startY}%;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          box-shadow: 0 0 ${size * 2}px ${size}px ${color}80;
          animation: shooting ${duration}s ease-out infinite;
          animation-delay: ${delay}s;
          z-index: ${Math.floor(Math.random() * 10)};
        `;
        
        const trail = document.createElement('div');
        const trailLength = 120 + Math.random() * 100;
        
        trail.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${trailLength}px;
          height: ${size / 2}px;
          background: linear-gradient(90deg, 
            ${color} 0%, 
            ${color}80 30%,
            ${color}40 60%,
            transparent 100%
          );
          transform: translate(-50%, -50%) rotate(-45deg);
          transform-origin: 0 50%;
          filter: blur(0.5px);
        `;
        
        star.appendChild(trail);
        container.appendChild(star);
      }
    };

    generateShootingStars();
    const observer = new MutationObserver(() => generateShootingStars());
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
      const container = shootingStarsContainerRef.current;
      if (container) container.innerHTML = '';
    };
  }, []);

  // Generate light particles for light mode
  useEffect(() => {
    const generateLightParticles = () => {
      const container = lightParticlesContainerRef.current;
      if (!container) return;

      container.innerHTML = '';
      if (document.documentElement.classList.contains('dark')) return;

      const particleCount = 12;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'light-particle';
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const size = 1 + Math.random() * 2;
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 8;
        const colors = ['#3b82f6', '#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
          left: ${startX}%;
          top: ${startY}%;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          box-shadow: 0 0 ${size * 3}px ${size}px ${color}40;
          animation: light-particle-flow ${duration}s ease-out infinite;
          animation-delay: ${delay}s;
          z-index: ${Math.floor(Math.random() * 10)};
        `;
        
        container.appendChild(particle);
      }
    };

    generateLightParticles();
    const observer = new MutationObserver(() => generateLightParticles());
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }

      mouseMoveTimeoutRef.current = setTimeout(() => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX - innerWidth / 2) / innerWidth;
        const yPercent = (clientY - innerHeight / 2) / innerHeight;

        document.documentElement.style.setProperty('--mouse-x', `${xPercent * 15}px`);
        document.documentElement.style.setProperty('--mouse-y', `${yPercent * 15}px`);
      }, 16);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMouseMove(new MouseEvent('mousemove', {
          clientX: touch.clientX,
          clientY: touch.clientY,
        }));
      }
    };

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
      {/* ========== ENHANCED LIGHT MODE ========== */}
      {/* Base tech patterns */}
      <div className="tech-pattern" />
      <div className="data-streams-enhanced" />
      
      {/* Light mode stars (3 layers with parallax) */}
      <div 
        className="light-stars-1"
        style={{ 
          transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))',
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      <div 
        className="light-stars-2"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.7), calc(var(--mouse-y, 0px) * 0.7))',
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <div 
        className="light-stars-3"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.4), calc(var(--mouse-y, 0px) * 0.4))',
          transition: 'transform 0.4s ease-out'
        }}
      />
      
      {/* Light nebula & glow */}
      <div 
        className="light-nebula"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.2), calc(var(--mouse-y, 0px) * 0.2))',
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      <div 
        className="light-glow"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.1), calc(var(--mouse-y, 0px) * 0.1))',
          transition: 'transform 0.6s ease-out'
        }}
      />
      
      {/* Light particles */}
      <div 
        ref={lightParticlesContainerRef} 
        className="light-particles-container"
      />
      
      {/* ========== DARK MODE ========== */}
      {/* Dark mode stars */}
      <div 
        className="stars-layer-1" 
        style={{ 
          transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))',
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      <div 
        className="stars-layer-2"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.7), calc(var(--mouse-y, 0px) * 0.7))',
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <div 
        className="stars-layer-3"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.4), calc(var(--mouse-y, 0px) * 0.4))',
          transition: 'transform 0.4s ease-out'
        }}
      />
      
      {/* Nebula & glow */}
      <div 
        className="nebula-layer"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.2), calc(var(--mouse-y, 0px) * 0.2))',
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      <div 
        className="glow-layer"
        style={{ 
          transform: 'translate(calc(var(--mouse-x, 0px) * 0.1), calc(var(--mouse-y, 0px) * 0.1))',
          transition: 'transform 0.6s ease-out'
        }}
      />
      
      {/* Shooting stars */}
      <div 
        ref={shootingStarsContainerRef} 
        className="shooting-stars-container"
      />
      
      {/* Adaptive vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0.2) 100%)',
          mixBlendMode: 'overlay'
        }}
      />
      
    </div>
  );
}