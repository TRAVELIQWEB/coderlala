'use client';

import { useEffect, useRef } from 'react';
// import styles from './StarBackground.module.css';

interface StarBackgroundProps {
  className?: string;
}

export default function StarBackground({ className = '' }: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const starsRef = useRef<Star[]>([]);
  const windRef = useRef(0.06);

  interface Star {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    alpha: number;
    update: (canvasWidth: number, canvasHeight: number, wind: number) => void;
    draw: (ctx: CanvasRenderingContext2D, isDark: boolean) => void;
    reset: (canvasWidth: number, canvasHeight: number) => void;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const topHeight = 0;
    const isDarkRef = useRef(true); // Detect from Tailwind classes

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - topHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY - topHeight,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    class StarImpl implements Star {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      vx: number = 0;
      vy: number = 0;
      alpha: number = 0;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.reset(canvasWidth, canvasHeight);
      }

      reset(canvasWidth: number, canvasHeight: number): void {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 1 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(this.size * 0.3 + Math.random() * 0.2);
        this.alpha = Math.random() * 0.3 + 0.25;
      }

      update(canvasWidth: number, canvasHeight: number, wind: number): void {
        this.vx += wind * 0.002;

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const strength = (150 - dist) / 150;
          this.vx += (dx / dist) * strength * 0.4;
          this.vy += (dy / dist) * strength * 0.4;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98;
        this.vy *= 0.98;

        if (
          this.y < -20 ||
          this.x < -20 ||
          this.x > canvasWidth + 20 ||
          this.y > canvasHeight + 20
        ) {
          this.reset(canvasWidth, canvasHeight);
          this.y = canvasHeight + 20;
        }
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean): void {
        // Tailwind-inspired colors: dark stars white, light stars gray/dark
        ctx.fillStyle = isDark
          ? `rgba(255,255,255,${this.alpha})` // White stars on dark
          : `rgba(31,41,55,${this.alpha})`; // gray-800 stars on light
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    starsRef.current = [];
    const starCount = 80;
    for (let i = 0; i < starCount; i++) {
      starsRef.current.push(new StarImpl(canvas.width, canvas.height));
    }

    const animate = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const isDark = isDarkRef.current;

      // Tailwind bg colors via Tailwind classes detection
      ctx.fillStyle = isDark
        ? 'rgba(11, 15, 20, 0.35)' // bg-slate-900/35%
        : 'rgba(248, 250, 252, 0.4)'; // bg-slate-50/40%
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      starsRef.current.forEach((star) => {
        star.update(canvasWidth, canvasHeight, windRef.current);
        star.draw(ctx, isDark);
      });

      windRef.current += (Math.random() - 0.5) * 0.002;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Detect dark mode from html class (Tailwind default)
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      isDarkRef.current = html.classList.contains('dark');
    });
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });

    isDarkRef.current = html.classList.contains('dark');
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-[-1] pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
