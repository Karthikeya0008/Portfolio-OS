"use client";
import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import CommandPalette from "@/components/CommandPalette";
import HUDCorners from "@/components/HUDCorners";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Work from "@/components/sections/Work";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

const HexCanvas = dynamic(() => import("@/components/HexCanvas"), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  const openCmd = useCallback(() => setCmdOpen(true), []);
  const closeCmd = useCallback(() => setCmdOpen(false), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <main>
      {/* Ambient background layers */}
      <HexCanvas />
      <MouseGlow />

      {/* Scan line */}
      <div className="scan-line" />

      {/* HUD corner brackets */}
      <HUDCorners />

      {/* Boot loader */}
      <Loader onFinish={() => setLoaded(true)} />

      {/* Navigation */}
      <Navbar visible={loaded} onOpenCmd={openCmd} />

      {/* Command palette */}
      <CommandPalette open={cmdOpen} onClose={closeCmd} />

      {/* Status bar */}
      <StatusBar visible={loaded} />

      {/* Sections */}
      <Hero />
      <Skills />
      <Projects />
      <Work />
      <Education />
      <Contact />
    </main>
  );
}
