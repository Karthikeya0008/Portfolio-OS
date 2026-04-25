"use client";
import { motion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  highlight: string;
  sub?: string;
}

export default function SectionHeader({ tag, title, highlight, sub }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ marginBottom: "50px" }}
    >
      <div
        className="flex items-center gap-3"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--c)",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        {tag}
        <span style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--border), transparent)" }} />
      </div>
      <h2
        style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "clamp(24px,3.5vw,42px)",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.05,
          letterSpacing: "2px",
        }}
      >
        {title} <em style={{ color: "var(--c)", fontStyle: "normal" }}>{highlight}</em>
      </h2>
      {sub && (
        <p style={{ marginTop: "8px", fontSize: "14px", color: "var(--text-dim)", letterSpacing: "1px" }}>
          {sub}
        </p>
      )}
    </motion.div>
  );
}
