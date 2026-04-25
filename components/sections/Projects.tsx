"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  const { projects, blogs } = resumeData;

  return (
    <section id="projects" className="relative z-10" style={{ padding: "80px 48px" }}>
      <div className="max-w-[1280px] mx-auto w-full">

        {/* ── FEATURED PROJECTS ── */}
        <SectionHeader
          tag="// PROJECTS"
          title="Featured"
          highlight="Projects"
          sub="Production-grade systems I built from the ground up"
        />
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
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, var(--c), var(--c2))" }} />

              <div style={{
                position: "absolute", top: "12px", right: "16px",
                fontFamily: "var(--font-orbitron)", fontSize: "52px", fontWeight: 900,
                color: "rgba(0,212,255,0.05)", lineHeight: 1, pointerEvents: "none",
              }}>
                {p.id}
              </div>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "10px" }}>
                {p.period}
              </div>
              <h3 style={{
                fontFamily: "var(--font-orbitron)", fontSize: "15px", fontWeight: 700,
                color: "#fff", marginBottom: "14px", lineHeight: 1.35, maxWidth: "85%",
              }}>
                {p.title}
              </h3>

              <div className="flex flex-wrap gap-2" style={{ marginBottom: "18px" }}>
                {p.stack.map((s) => (
                  <span key={s} style={{
                    fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--c)",
                    border: "1px solid rgba(0,212,255,0.2)", padding: "3px 10px",
                    borderRadius: "2px", background: "rgba(0,212,255,0.02)",
                  }}>
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

              <div className="flex items-center gap-3"
                style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--c3)", boxShadow: "0 0 8px var(--c3)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--c3)", letterSpacing: "1px" }}>
                  {p.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── TECH BLOGS ── */}
        <div style={{ marginTop: "80px" }}>
          <SectionHeader
            tag="// WRITING"
            title="Tech"
            highlight="Blogs"
            sub="Breaking down complex systems into ideas worth reading"
          />

          <div className="grid gap-5" style={{ gridTemplateColumns: "63fr 37fr" }}>
              {blogs.map((b, i) => (
                <motion.a
                  key={b.id}
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="group relative overflow-hidden"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "var(--panel)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "all 0.35s",
                    overflow: "hidden",
                  }}
                  whileHover={{ y: -4, borderColor: "rgba(0,212,255,0.35)" }}
                >
                  {/* ── Cover Image ── */}
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "rgba(0,212,255,0.04)" }}>
                    <img
                      src={b.coverImage}
                      alt={b.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }}
                      className="group-hover:scale-105"
                    />

                    {/* Gradient overlay at bottom of image */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to bottom, transparent 50%, var(--panel) 100%)",
                    }} />

                    {/* ARTICLE badge */}
                    <span style={{
                      position: "absolute", top: "14px", left: "14px",
                      fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "2px",
                      color: "#000", background: "var(--c)", padding: "4px 10px",
                      borderRadius: "3px", fontWeight: 700,
                    }}>
                      {b.tag}
                    </span>
                  </div>

                  {/* ── Card Body ── */}
                  <div style={{ padding: "22px 26px 26px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>

                    {/* Date */}
                    <div className="flex items-center gap-2">
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--amber)", letterSpacing: "1px" }}>
                        {b.date}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--c3)", marginLeft: "auto" }}>
                        {b.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "var(--font-orbitron)", fontSize: "17px", fontWeight: 700,
                      color: "#fff", lineHeight: 1.45,
                      transition: "color 0.25s",
                    }}
                      className="group-hover:text-[var(--c)]"
                    >
                      {b.title}
                    </h3>

                    {/* Tagline */}
                    <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.7, flex: 1 }}>
                      {b.tagline}
                    </p>

                    {/* Read article CTA */}
                    <div className="flex items-center gap-2" style={{ marginTop: "6px" }}>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "11px",
                        color: "var(--c)", fontWeight: 600, letterSpacing: "0.5px",
                        transition: "gap 0.25s",
                      }}>
                        Read article
                      </span>
                      <span style={{
                        color: "var(--c)", fontSize: "13px",
                        transition: "transform 0.25s",
                        display: "inline-block",
                      }}
                        className="group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}