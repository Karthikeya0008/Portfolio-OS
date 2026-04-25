"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Work() {
  const { work } = resumeData;
  return (
    <section id="work" className="relative z-10" style={{ padding: "80px 48px" }}>
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader tag="// OPERATIONS LOG" title="Work" highlight="Experience" sub="CAREER" />
        <div className="flex flex-col gap-5">
          {work.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden"
              style={{
                background: "var(--panel)", border: "1px solid var(--border)",
                borderRadius: "2px", padding: "28px 30px 20px", transition: "all 0.3s",
              }}
              whileHover={{ borderColor: "var(--border-h)", boxShadow: "0 0 30px rgba(0,212,255,0.07)" }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ background: "linear-gradient(180deg, var(--c), var(--c2))" }}
              />

              {/* ── 3-column body ── */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr 160px",
                  gap: "0 24px",
                  marginBottom: "18px",
                  alignItems: "center",
                }}
              >
                {/* COL 1 – Role / Org / Logo */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Role */}
                  <div style={{
                    fontFamily: "var(--font-orbitron)", fontSize: "18px",
                    fontWeight: 700, color: "#fff", lineHeight: 1.3,
                  }}>
                    {w.role}
                  </div>

                  {/* Org */}
                  <div className="flex items-center gap-1" style={{ fontSize: "16px", color: "var(--c)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "var(--text-dim)" }}>@</span>
                    {w.org}
                  </div>

                  {/* Logo */}
                  {w.logo && (
                    <div style={{ marginTop: "10px" }}>
                      <img
                        src={w.logo}
                        alt={w.org}
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "contain",
                          opacity: 0.85,
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* COL 2 – Bullet Points */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", margin: 0, padding: 0 }}>
                  {w.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: "18px", color: "var(#fff)",
                        lineHeight: 1.65, paddingLeft: "18px", position: "relative",
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "var(--c)", fontSize: "10px", top: "3px" }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* COL 3 – Period + Desc */}
                <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--c)",
                    
                    letterSpacing: "1px", whiteSpace: "nowrap", display: "inline-block",
                  }}>
                    {w.period}
                  </span>

                  {w.desc && (
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--amber)",
                      letterSpacing: "2px", whiteSpace: "nowrap",
                      opacity: 0.75, textTransform: "uppercase",
                    }}>
                      {w.desc}
                    </span>
                  )}
                </div>
              </div>

              {/* ── Tags – full width bottom ── */}
              <div
                className="flex flex-wrap gap-2"
                style={{ paddingTop: "14px", borderTop: "1px solid var(--border)" }}
              >
                {w.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-dim)",
                      border: "1px solid var(--border)", padding: "3px 10px", letterSpacing: "1px",
                    }}
                  >
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}