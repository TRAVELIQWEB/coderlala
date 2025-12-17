"use client";

import { useEffect, useRef } from "react";
import "../../../styles/galaxy-background.css";

export default function GalaxyBackgroundNew() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cometsContainerRef = useRef<HTMLDivElement>(null);
  const debrisContainerRef = useRef<HTMLDivElement>(null);

  // Initialize galaxy with BIG BANG + comets + debris
  useEffect(() => {
    const initializeGalaxy = () => {
      const container = containerRef.current;

      if (container) {
        // Clear any existing big bang
        const existing = container.querySelector(".big-bang-effect");
        if (existing) existing.remove();

        // BIG BANG core flash
        const bigBang = document.createElement("div");
        bigBang.className = "big-bang-effect";
        bigBang.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: radial-gradient(circle,
            #ffffff 0%,
            #e5f2ff 12%,
            #60a5fa 25%,
            #8b5cf6 40%,
            transparent 70%);
          transform: translate(-50%, -50%);
          opacity: 0;
          animation: galaxy-big-bang 2.2s ease-out forwards;
          z-index: 25;
          filter: blur(22px) brightness(12);
          box-shadow:
            0 0 220px 110px rgba(96, 165, 250, 0.55),
            0 0 260px 140px rgba(139, 92, 246, 0.45);
        `;
        container.appendChild(bigBang);

        setTimeout(() => {
          bigBang.remove();
        }, 2400);

        // Explosion particles radiating out
        for (let i = 0; i < 40; i++) {
          const particle = document.createElement("div");
          const angle = Math.random() * Math.PI * 2;
          const distance = 120 + Math.random() * 420;
          const size = 1.5 + Math.random() * 3.5;
          const colors = ["#ffffff", "#e5e7eb", "#60a5fa", "#a855f7", "#22d3ee"];
          const color = colors[Math.floor(Math.random() * colors.length)];

          particle.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            z-index: 24;
            box-shadow: 0 0 ${size * 4}px ${size * 1.5}px ${color}66;
            pointer-events: none;
          `;

          container.appendChild(particle);

          requestAnimationFrame(() => {
            particle.style.transition =
              "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.6s ease-out";
            particle.style.transform = `translate(
              ${Math.cos(angle) * distance}px,
              ${Math.sin(angle) * distance}px
            ) scale(0.1)`;
            particle.style.opacity = "1";
          });

          setTimeout(() => {
            particle.style.opacity = "0";
          }, 1300);

          setTimeout(() => {
            particle.remove();
          }, 1900);
        }
      }

      // COMETS
      const cometsContainer = cometsContainerRef.current;
      if (cometsContainer) {
        cometsContainer.innerHTML = "";

        for (let i = 0; i < 10; i++) {
          const comet = document.createElement("div");
          comet.className = "galaxy-comet";

          const startX = 100 + Math.random() * 25;
          const startY = Math.random() * 100;
          const size = 2 + Math.random() * 3;
          const duration = 5 + Math.random() * 5;
          const delay = Math.random() * 18;
          const colors = ["#ffffff", "#e5e7eb", "#60a5fa", "#a855f7", "#22d3ee"];
          const color = colors[Math.floor(Math.random() * colors.length)];

          comet.style.cssText = `
            position: absolute;
            left: ${startX}%;
            top: ${startY}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            box-shadow:
              0 0 ${size * 5}px ${size * 2}px ${color}99,
              -40px 0 60px ${color}40;
            animation: galaxy-comet-traverse ${duration}s linear infinite;
            animation-delay: ${delay}s;
            z-index: 3;
          `;

          cometsContainer.appendChild(comet);
        }
      }

      // SPACE DEBRIS
      const debrisContainer = debrisContainerRef.current;
      if (debrisContainer) {
        debrisContainer.innerHTML = "";

        for (let i = 0; i < 26; i++) {
          const debris = document.createElement("div");
          debris.className = "galaxy-debris";

          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const width = 2 + Math.random() * 4;
          const height = 1 + Math.random() * 2;
          const duration = 14 + Math.random() * 18;
          const delay = Math.random() * 30;
          const rotation = Math.random() * 360;
          const colors = [
            "rgba(248, 250, 252, 0.18)",
            "rgba(199, 210, 254, 0.14)",
            "rgba(191, 219, 254, 0.12)",
            "rgba(251, 191, 36, 0.15)",
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];

          debris.style.cssText = `
            position: absolute;
            left: ${startX}%;
            top: ${startY}%;
            width: ${width}px;
            height: ${height}px;
            background: ${color};
            border-radius: 2px;
            animation: galaxy-debris-float ${duration}s linear infinite;
            animation-delay: ${delay}s;
            transform: rotate(${rotation}deg);
            z-index: 1;
          `;

          debrisContainer.appendChild(debris);
        }
      }
    };

    initializeGalaxy();

    // Reinitialize when theme class changes on <html>
    const observer = new MutationObserver(() => {
      setTimeout(initializeGalaxy, 100);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Mouse parallax (stars + free-floating planets)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX - innerWidth / 2) / innerWidth;
      const yPercent = (clientY - innerHeight / 2) / innerHeight;

      document.documentElement.style.setProperty(
        "--galaxy-mouse-x",
        `${xPercent * 18}px`,
      );
      document.documentElement.style.setProperty(
        "--galaxy-mouse-y",
        `${yPercent * 18}px`,
      );

      const planets = document.querySelectorAll(
        ".galaxy-planet-1, .galaxy-planet-2, .galaxy-planet-3",
      );
      planets.forEach((planet, index) => {
        const intensity = 0.02 + index * 0.015;
        (planet as HTMLElement).style.transform = `
          translate(${xPercent * 40 * intensity}px, ${
            yPercent * 40 * intensity
          }px)
        `;
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMouseMove(
          new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY,
          }),
        );
      }
    };

    document.documentElement.style.setProperty("--galaxy-mouse-x", "0px");
    document.documentElement.style.setProperty("--galaxy-mouse-y", "0px");

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Click star-burst
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const particles = 14;

      for (let i = 0; i < particles; i++) {
        const star = document.createElement("div");
        const colors = ["#ffffff", "#e5e7eb", "#60a5fa", "#a855f7", "#22d3ee"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 2 + Math.random() * 4;

        star.style.cssText = `
          position: absolute;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 ${size * 3}px ${size}px ${color}99;
          opacity: 1;
          z-index: 9999;
        `;

        container.appendChild(star);

        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 80;

        requestAnimationFrame(() => {
          star.style.transition =
            "transform 0.85s ease-out, opacity 0.85s ease-out";
          star.style.transform = `translate(
            ${Math.cos(angle) * distance}px,
            ${Math.sin(angle) * distance}px
          ) scale(0.1)`;
          star.style.opacity = "0";
        });

        setTimeout(() => star.remove(), 1000);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={containerRef} className="galaxy-background-container">
      {/* Base gradient universe */}
      <div className="galaxy-base-gradient" />

      {/* Parallax star fields */}
      <div
        className="galaxy-stars-primary"
        style={{
          transform:
            "translate(var(--galaxy-mouse-x, 0px), var(--galaxy-mouse-y, 0px))",
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="galaxy-stars-secondary"
        style={{
          transform:
            "translate(calc(var(--galaxy-mouse-x, 0px) * 0.6), calc(var(--galaxy-mouse-y, 0px) * 0.6))",
          transition: "transform 0.4s ease-out",
        }}
      />
      <div
        className="galaxy-stars-tertiary"
        style={{
          transform:
            "translate(calc(var(--galaxy-mouse-x, 0px) * 0.4), calc(var(--galaxy-mouse-y, 0px) * 0.4))",
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Nebula clouds */}
      <div className="galaxy-nebula-purple" />
      <div className="galaxy-nebula-blue" />
      <div className="galaxy-nebula-pink" />

      {/* NEW: central galaxy + orbits */}
      <div className="galaxy-system-center">
        <div className="galaxy-core-glow" />
        <div className="galaxy-core" />
        <div className="galaxy-arm galaxy-arm-left" />
        <div className="galaxy-arm galaxy-arm-right" />

        <div className="galaxy-orbit galaxy-orbit-1">
          <div className="galaxy-orbit-planet planet-small" />
        </div>
        <div className="galaxy-orbit galaxy-orbit-2">
          <div className="galaxy-orbit-planet planet-medium" />
        </div>
        <div className="galaxy-orbit galaxy-orbit-3">
          <div className="galaxy-orbit-planet planet-large" />
        </div>
      </div>

      {/* Free-floating decorative planets (parallax) */}
      <div className="galaxy-planet-1" />
      <div className="galaxy-planet-2" />
      <div className="galaxy-planet-3" />
      <div className="galaxy-planet-rings" />

      {/* Glow */}
      <div className="galaxy-glow-center" />
      <div className="galaxy-glow-spot-1" />
      <div className="galaxy-glow-spot-2" />

      {/* Comets + debris */}
      <div ref={cometsContainerRef} className="galaxy-comets-container" />
      <div ref={debrisContainerRef} className="galaxy-debris-container" />

      {/* Vignette */}
      <div className="galaxy-vignette" />
    </div>
  );
}
