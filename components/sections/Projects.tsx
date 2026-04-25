"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  const { projects } = resumeData;
  return (
    <section id="projects" className="relative z-10" style={{ padding: "80px 48px" }}>
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader tag="// PROJECTS" title="Featured" highlight="Projects" sub="Production-grade systems I built from the ground up" />
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden"
              style={{
                background: "var(--panel)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "30px",
                cursor: "default",
                transition: "all 0.35s",
              }}
              whileHover={{ y: -4, borderColor: "rgba(0,212,255,0.35)" }}
            >
              {/* Top border draw on hover */}
              <div
                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, var(--c), var(--c2))" }}
              />

              {/* Ghost number */}
              <div
                style={{
                  position: "absolute", top: "12px", right: "16px",
                  fontFamily: "var(--font-orbitron)", fontSize: "52px", fontWeight: 900,
                  color: "rgba(0,212,255,0.05)", lineHeight: 1, pointerEvents: "none",
                }}
              >
                {p.id}
              </div>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "10px" }}>
                {p.period}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-orbitron)", fontSize: "15px", fontWeight: 700,
                  color: "#fff", marginBottom: "14px", lineHeight: 1.35, maxWidth: "85%",
                }}
              >
                {p.title}
              </h3>

              <div className="flex flex-wrap gap-2" style={{ marginBottom: "18px" }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--c)",
                      border: "1px solid rgba(0,212,255,0.2)", padding: "3px 10px",
                      borderRadius: "2px", background: "rgba(0,212,255,0.02)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {p.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.65, paddingLeft: "18px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--c)", fontSize: "10px", top: "3px" }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div
                className="flex items-center gap-3"
                style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}
              >
                <div
                  style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--c3)", boxShadow: "0 0 8px var(--c3)" }}
                />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--c3)", letterSpacing: "1px" }}>
                  {p.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
