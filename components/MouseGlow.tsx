"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + "px";
      ref.current.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none"
      style={{
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
        transition: "left 0.1s, top 0.1s",
      }}
    />
  );
}
