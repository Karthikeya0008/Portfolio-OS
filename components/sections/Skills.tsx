"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
} from "react-icons/si";
import { IconType } from "react-icons";
import { DiCss3, DiJava, DiJavascript, DiMongodb } from "react-icons/di";

const iconMap: Record<string, IconType> = {
  // Programming
  "C": SiC,
  "C++": SiCplusplus,
  "Python": SiPython,
  "Java": DiJava,
  "Java Script": DiJavascript,
  "TypeScript": SiTypescript,

  // Frontend
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "HTML5": SiHtml5,
  "CSS 3": DiCss3,
  "Tailwind CSS": SiTailwindcss,
  "BootStrap": SiBootstrap,

  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MySQL": SiMysql,
  "Mongo DB": DiMongodb,
  "Firebase": SiFirebase,
};

function Panel({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.02 }}
      className="hud-panel"
      style={{ padding: "26px 30px", borderRadius: "2px" }}
    >
      <div className="bracket-tl" /><div className="bracket-tr" />
      <div className="bracket-bl" /><div className="bracket-br" />
      {children}
    </motion.div>
  );
}

function PanelHeader({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-3"
      style={{ marginBottom: "18px", paddingBottom: "14px", borderBottom: "1px solid var(--border)" }}
    >
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--c)", boxShadow: "0 0 8px var(--c)" }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--c)", letterSpacing: "2px" }}>
        {label}
      </span>
    </div>
  );
}

// 🔥 UPDATED SkillTag WITH ICONS
function SkillTag({ label }: { label: string }) {
  const Icon = iconMap[label];

  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--text-dim)",
        border: "1px solid var(--border)",
        padding: "6px 14px",
        letterSpacing: "1px",
        cursor: "default",
        borderRadius: "4px",
        transition: "all 0.25s",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--c)";
        el.style.color = "var(--c)";
        el.style.background = "rgba(0,212,255,0.05)";
        el.style.transform = "scale(1.05)";
        el.style.boxShadow = "0 0 12px rgba(0,212,255,0.2)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.color = "var(--text-dim)";
        el.style.background = "transparent";
        el.style.transform = "scale(1)";
        el.style.boxShadow = "none";
      }}
    >
      {Icon && <Icon size={14} style={{ filter: "drop-shadow(0 0 4px var(--c))" }} />}
      {label}
    </span>
  );
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: "14px" }}>
      <div className="flex justify-between items-center" style={{ marginBottom: "7px" }}>
        <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)" }}>{name}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--c)" }}>{level}%</span>
      </div>

      <div style={{ height: "2px", background: "rgba(0,212,255,0.06)", borderRadius: "1px", position: "relative" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--c2), var(--c))",
            borderRadius: "1px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              right: "-1px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--c)",
              boxShadow: "0 0 8px var(--c)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="relative z-10" style={{ padding: "80px 48px" }}>
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader
          tag="// STUDENT MODULES"
          title="Technical"
          highlight="Skills"
          sub="Languages, frameworks, and tools in the arsenal"
        />

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))" }}>

          <Panel delay={0.1}>
            <PanelHeader label="FRONTEND" />
            <div className="flex flex-wrap gap-2">
              {skills.Frontend.map((l) => <SkillTag key={l} label={l} />)}
            </div>
          </Panel>

          <Panel delay={0.2}>
            <PanelHeader label="BACKEND & DATABASE" />
            <div className="flex flex-wrap gap-2">
              {skills.Backend.map((f) => <SkillTag key={f} label={f} />)}
            </div>
          </Panel>

          <Panel delay={0.2}>
            <PanelHeader label="PROGRAMMING" />
            <div className="flex flex-wrap gap-2">
              {skills.Programming.map((c) => <SkillTag key={c} label={c} />)}
            </div>
          </Panel>

          <Panel delay={0.1}>
            <PanelHeader label="PROFICIENCY LEVEL" />
            {skills.proficiency.map((p, i) => (
              <SkillBar key={p.name} name={p.name} level={p.level} delay={i * 0.1} />
            ))}
          </Panel>

        </div>
      </div>
    </section>
  );
}