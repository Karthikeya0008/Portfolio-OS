"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/lib/data";
import { useState, useEffect } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { name, tagline, description, stats, email, github, linkedin, Blogs, tech} = resumeData;

  const buildTexts = [
    "PRODUCTS THAT MATTER",
    "SYSTEMS THAT SCALE",
    "IMPACT DRIVEN PRODUCTS",
    "THINGS THAT SHIP",
    "IDEAS TO REALITY",
    "REAL PRODUCTS, NO NOISE",
    "WITH INTENT",
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    const current = buildTexts[loop % buildTexts.length];

    let speed = isDeleting ? 40 : 70;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loop]);

  return (
    <section
      id="about"
      className="relative z-10 flex items-center min-h-screen"
      style={{ padding: "58px 48px 80px" }}
    >
      <div className="max-w-[1280px] mx-auto w-full">
        <div
          className="grid items-center gap-[80px]"
          style={{ gridTemplateColumns: "1fr 420px" }}
        >
          {/* LEFT */}
          <div>
            {/* Available badge */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
              <span
                className="pulse-dot w-2 h-2 rounded-full"
                style={{ background: "var(--c3)", boxShadow: "0 0 10px var(--c3)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--c3)",
                  letterSpacing: "3px",
                }}
              >
                SEEKING FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              {...fadeUp(0.1)}
              style={{
                fontFamily: "var(--font-orbitron)",
                lineHeight: 1.05,
                marginBottom: "6px",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(26px,4vw,52px)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {name.hi}
              </span>
              <br />
              <span
                className="glow-text block"
                style={{
                  fontSize: "clamp(34px,5.5vw,66px)",
                  fontWeight: 900,
                  color: "#fff",
                }}
              >
                {name.last}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.div
              {...fadeUp(0.2)}
              className="flex items-center gap-3 mb-8"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(10px,1.3vw,13px)",
                color: "var(--c)",
                letterSpacing: "4px",
              }}
            >
              <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, var(--c))" }} />
              {tagline.toUpperCase()}
              <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--c), transparent)" }} />
            </motion.div>

            {/* I BUILD animated line */}
            <motion.div
              {...fadeUp(0.23)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(12px,1.4vw,15px)",
                letterSpacing: "2px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "var(--c3)" }}>I BUILD</span>

              <span
                style={{
                  color: "var(--c3)",
                  textShadow: "0 0 10px rgba(0,255,170,0.7)",
                }}
              >
                {text}
                <span style={{ marginLeft: "2px", opacity: 0.7 }}>|</span>
              </span>
            </motion.div>
            <motion.div
              {...fadeUp(0.2)}
              className="flex items-center gap-3 mb-8"
              style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(10px,1.3vw,13px)", color: "var(--c)", letterSpacing: "4px" }}
            >
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.25)}
              style={{
                fontSize: "15px", lineHeight: 1.9, color: "var(--text-dim)",
                maxWidth: "520px", marginBottom: "32px",
                padding: "18px 20px", border: "1px solid var(--border)",
                background: "rgba(0,212,255,0.015)", position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute", top: "-9px", left: "12px",
                  background: "var(--bg)", fontFamily: "var(--font-mono)",
                  fontSize: "10px", color: "var(--c)", padding: "0 8px",
                }}
              >
                //
              </span>
              {description}
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-8">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani)", fontSize: "12px",
                  fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase",
                  padding: "12px 26px", border: "1px solid var(--border)",
                  color: "var(--c)", textDecoration: "none", transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c)";
                  el.style.background = "rgba(0,212,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background = "transparent";
                }}
              >
                GitHub
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani)", fontSize: "12px",
                  fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase",
                  padding: "12px 26px", border: "1px solid var(--border)",
                  color: "var(--c)", textDecoration: "none", transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c)";
                  el.style.background = "rgba(0,212,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background = "transparent";
                }}
              >
                LinkedIn
              </a>
              <a
                href={Blogs}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani)", fontSize: "12px",
                  fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase",
                  padding: "12px 26px", border: "1px solid var(--border)",
                  color: "var(--c)", textDecoration: "none", transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c)";
                  el.style.background = "rgba(0,212,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background = "transparent";
                }}
              >
                TECHNICAL BLOGS
              </a>
              <a
                href={tech}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani)", fontSize: "12px",
                  fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase",
                  padding: "12px 26px", border: "1px solid var(--border)",
                  color: "var(--c)", textDecoration: "none", transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c)";
                  el.style.background = "rgba(0,212,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background = "transparent";
                }}
              >
                  COMPETITIVE CODING
              </a>
            </motion.div>
            {/* Stats */}
            <motion.div
              {...fadeUp(0.35)}
              className="grid grid-cols-4 gap-3"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center relative overflow-hidden"
                  style={{
                    padding: "16px 12px", border: "1px solid var(--border)",
                    background: "rgba(0,212,255,0.015)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, var(--c), transparent)" }}
                  />
                  <div style={{ fontFamily: "var(--font-orbitron)", fontSize: "24px", fontWeight: 800, color: "var(--c)" }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-dim)", letterSpacing: "2px", marginTop: "3px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
            className="relative"
            style={{ width: "420px", height: "420px" }}
          >
            {/* Orbit rings */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  
  {/* Outer dashed */}
  <div
    className="absolute rounded-full orbit-cw"
    style={{
      width: 520, height: 520,
      border: "1px dashed rgba(0,255,170,0.1)",
      animationDuration: "32s",
    }}
  />

  {/* Mid */}
  <div
    className="absolute rounded-full orbit-ccw"
    style={{
      width: 420, height: 420,
      border: "1px solid rgba(0,102,255,0.18)",
      animationDuration: "22s",
    }}
  >
    <div
      className="absolute rounded-full"
      style={{
        width: 12, height: 12,
        background: "var(--c2)",
        boxShadow: "0 0 16px var(--c2)",
        right: "-6px", top: "50%", transform: "translateY(-50%)",
      }}
    />
  </div>

  {/* Inner */}
  <div
    className="absolute rounded-full orbit-cw"
    style={{
      width: 340, height: 340,
      border: "1px solid rgba(0,212,255,0.22)",
      animationDuration: "14s",
    }}
  >
    <div
      className="absolute rounded-full"
      style={{
        width: 12, height: 12,
        background: "var(--c)",
        boxShadow: "0 0 16px var(--c)",
        left: "50%", top: "-6px", transform: "translateX(-50%)",
      }}
    />
  </div>

  {/* Profile circle */}
  <div
    className="relative overflow-hidden rounded-full z-10 flex items-center justify-center"
    style={{
      width: 260, height: 260,
      border: "2px solid var(--c)",
      boxShadow:
        "0 0 0 10px rgba(0,212,255,0.05), 0 0 70px rgba(0,212,255,0.2), inset 0 0 40px rgba(0,212,255,0.08)",
      background: "var(--bg3)",
    }}
  >
    <Image
      src="/profile.jpg"
      alt="Dara Karthikeya"
      fill
      style={{ objectFit: "cover", objectPosition: "center 30%" }}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  </div>
</div>
            {/* Floating info cards */}
            {[
              { label: "CGPA", value: "8.89", top: "20px", left: "-30px" },
              { label: "PROJECTS", value: "7+", bottom: "20px", right: "-30px" },
            ].map((card) => (
              <div
                key={card.label}
                className="float-anim absolute"
                style={{
                  background: "rgba(1,14,28,0.92)",
                  border: "1px solid var(--border-h)",
                  padding: "10px 16px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 24px rgba(0,212,255,0.1)",
                  ...card,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, var(--c), transparent)" }}
                />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "3px" }}>
                  {card.label}
                </div>
                <div style={{ fontFamily: "var(--font-orbitron)", fontSize: "17px", fontWeight: 700, color: "var(--c)" }}>
                  {card.value}
                </div>
              </div>
            ))}

            <div
              className="float-anim absolute"
              style={{
                background: "rgba(1,14,28,0.92)", border: "1px solid var(--border-h)",
                padding: "10px 16px", backdropFilter: "blur(12px)",
                boxShadow: "0 0 24px rgba(0,212,255,0.1)",
                top: "50%", right: "-55px", transform: "translateY(-50%)",
                animationDelay: "0.4s",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--c), transparent)" }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "3px" }}>STATUS</div>
              <div style={{ fontFamily: "var(--font-orbitron)", fontSize: "12px", fontWeight: 700, color: "var(--c3)" }}>ACTIVE</div>
            </div>

            <div
              className="float-anim absolute"
              style={{
                background: "rgba(1,14,28,0.92)", border: "1px solid var(--border-h)",
                padding: "10px 16px", backdropFilter: "blur(12px)",
                boxShadow: "0 0 24px rgba(0,212,255,0.1)",
                top: "50%", left: "-62px", transform: "translateY(-50%)",
                animationDelay: "1.1s",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--c), transparent)" }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "3px" }}>BATCH</div>
              <div style={{ fontFamily: "var(--font-orbitron)", fontSize: "14px", fontWeight: 700, color: "var(--c)" }}>2028</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
