"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
}

export default function HexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let animId: number;

    const particles: Particle[] = [];
    const COUNT = 90;

    const makeParticles = () => {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.2 + 0.3,
          a: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawHexGrid = () => {
      const s = 44;
      ctx.strokeStyle = "rgba(0,212,255,0.022)";
      ctx.lineWidth = 0.5;
      const rows = Math.ceil(H / s / 1.5) + 2;
      const cols = Math.ceil(W / s) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * s * 1.732 + (r % 2 ? s * 0.866 : 0);
          const y = r * s * 1.5;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i - Math.PI / 6;
            i === 0
              ? ctx.moveTo(x + s * Math.cos(a), y + s * Math.sin(a))
              : ctx.lineTo(x + s * Math.cos(a), y + s * Math.sin(a));
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      drawHexGrid();

      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(0,212,255,${0.03 * (1 - d / 130)})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        });

        ctx.fillStyle = `rgba(0,212,255,${p.a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      animId = requestAnimationFrame(draw);
    };

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      makeParticles();
    };

    makeParticles();
    draw();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
