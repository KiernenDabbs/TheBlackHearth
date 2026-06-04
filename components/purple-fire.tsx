"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  type: "flame" | "ember";
  hue: number;
  wobble: number;
  wobbleSpeed: number;
}

export function PurpleFire() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createFlameParticle = (): Particle => {
      const centerX = canvas.width / 2;
      const baseY = canvas.height;
      return {
        x: centerX + (Math.random() - 0.5) * 280,
        y: baseY + Math.random() * 20,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 5 - 2.5,
        size: Math.random() * 60 + 35,
        life: 1,
        maxLife: Math.random() * 0.5 + 0.5,
        type: "flame",
        hue: Math.random() * 50 + 260,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.08 + 0.03,
      };
    };

    const createEmber = (): Particle => {
      const centerX = canvas.width / 2;
      const baseY = canvas.height * 0.55;
      return {
        x: centerX + (Math.random() - 0.5) * 220,
        y: baseY + Math.random() * 180,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 2.5 - 0.8,
        size: Math.random() * 4 + 2,
        life: 1,
        maxLife: Math.random() * 0.6 + 0.4,
        type: "ember",
        hue: Math.random() * 30 + 280,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.12 + 0.04,
      };
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push(createFlameParticle());
    }
    for (let i = 0; i < 40; i++) {
      particlesRef.current.push(createEmber());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now();

      // Draw base glow
      const baseGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height,
        0,
        canvas.width / 2,
        canvas.height,
        canvas.height * 0.95
      );
      const pulseAlpha = 0.35 + Math.sin(time * 0.002) * 0.12;
      baseGradient.addColorStop(0, `hsla(280, 100%, 65%, ${pulseAlpha})`);
      baseGradient.addColorStop(0.25, `hsla(275, 95%, 50%, ${pulseAlpha * 0.8})`);
      baseGradient.addColorStop(0.5, `hsla(270, 85%, 35%, ${pulseAlpha * 0.5})`);
      baseGradient.addColorStop(0.75, `hsla(268, 75%, 22%, ${pulseAlpha * 0.25})`);
      baseGradient.addColorStop(1, "hsla(280, 70%, 10%, 0)");
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new particles
      if (Math.random() < 0.7) {
        particlesRef.current.push(createFlameParticle());
      }
      if (Math.random() < 0.3) {
        particlesRef.current.push(createEmber());
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        // Update wobble
        p.wobble += p.wobbleSpeed;

        // Update position with wind and wobble
        const wind = Math.sin(time * 0.001 + p.x * 0.008) * 0.6;
        const wobbleX = Math.sin(p.wobble) * 1.5;
        p.x += p.vx + wind + wobbleX;
        p.y += p.vy;
        p.vy *= 0.988;
        p.vx *= 0.992;

        // Decay life
        p.life -= 0.01 / p.maxLife;

        if (p.life <= 0) return false;

        if (p.type === "flame") {
          // Draw soft, glowing flame particle
          const gradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.size * p.life
          );

          const alpha = p.life * 0.85;
          const innerAlpha = p.life * 0.95;

          gradient.addColorStop(0, `hsla(${p.hue + 20}, 100%, 85%, ${innerAlpha})`);
          gradient.addColorStop(0.15, `hsla(${p.hue + 10}, 100%, 70%, ${alpha * 0.9})`);
          gradient.addColorStop(0.35, `hsla(${p.hue}, 95%, 55%, ${alpha * 0.7})`);
          gradient.addColorStop(0.6, `hsla(${p.hue - 10}, 85%, 40%, ${alpha * 0.4})`);
          gradient.addColorStop(0.85, `hsla(${p.hue - 15}, 75%, 28%, ${alpha * 0.15})`);
          gradient.addColorStop(1, `hsla(${p.hue}, 70%, 20%, 0)`);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Add bright hot core
          const coreSize = p.size * 0.35 * p.life;
          const coreGradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            coreSize
          );
          coreGradient.addColorStop(0, `hsla(${p.hue + 35}, 100%, 97%, ${p.life * 0.9})`);
          coreGradient.addColorStop(0.4, `hsla(${p.hue + 20}, 100%, 80%, ${p.life * 0.6})`);
          coreGradient.addColorStop(1, `hsla(${p.hue + 10}, 100%, 65%, 0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, coreSize, 0, Math.PI * 2);
          ctx.fillStyle = coreGradient;
          ctx.fill();
        } else {
          // Draw ember with glowing trail
          const emberAlpha = p.life;

          // Ember outer glow
          const glowGradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.size * 6
          );
          glowGradient.addColorStop(0, `hsla(${p.hue}, 100%, 80%, ${emberAlpha * 0.7})`);
          glowGradient.addColorStop(0.4, `hsla(${p.hue - 10}, 100%, 60%, ${emberAlpha * 0.35})`);
          glowGradient.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();

          // Bright ember core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue + 20}, 100%, 92%, ${emberAlpha})`;
          ctx.fill();

          // Hot white center
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue + 30}, 80%, 98%, ${emberAlpha * 0.85})`;
          ctx.fill();
        }

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: "blur(8px)" }}
    />
  );
}
