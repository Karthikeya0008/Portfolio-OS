"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TICKER_ITEMS = [
  { label: "React.js", text: "Full-Stack Engineer" },
  { label: "Node.js", text: "Full-Stack Engineer" },
  { label: "TensorFlow", text: "ML Developer" },
  { label: "Solidity", text: "Blockchain Dev" },
  { label: "LLM", text: "Summer Internships" },
  { label: "Android Dev", text: "Ongoing" },
  { label: "React.js", text: "Full-Stack Engineer" },
  { label: "Node.js", text: "Full-Stack Engineer" },
  { label: "TensorFlow", text: "ML Developer" },
  { label: "Solidity", text: "Blockchain Dev" },
  { label: "LLM", text: "Summer Internships" },
  { label: "Android Dev", text: "Ongoing" },
];

interface Props {
  visible: boolean;
}

export default function StatusBar({ visible }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      className="fixed bottom-0 left-0 right-0 z-[100] flex items-center justify-between"
      style={{
        height: "28px",
        background: "rgba(1,10,20,0.96)",
        borderTop: "1px solid var(--border)",
        padding: "0 20px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--text-dim)",
        letterSpacing: "1px",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Left items */}
      <div className="flex items-center">
        {[
          { dot: true, text: "SYSTEM ONLINE" },
          { text: "DK OS v2026.1" },
          { text: time },
          { text: "VIT VELLORE // CSE // CGPA 8.89" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-[6px]"
            style={{
              padding: "0 12px",
              height: "28px",
              borderRight: "1px solid var(--border)",
              ...(i === 0 ? { borderLeft: "1px solid var(--border)" } : {}),
            }}
          >
            {item.dot && (
              <span
                className="pulse-dot"
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--c3)",
                  boxShadow: "0 0 6px var(--c3)",
                  display: "inline-block",
                }}
              />
            )}
            {item.text}
          </div>
        ))}
      </div>

      {/* Ticker */}
      <div
        style={{
          overflow: "hidden",
          height: "28px",
          display: "flex",
          alignItems: "center",
          maxWidth: "420px",
        }}
      >
        <div className="ticker-inner flex">
          {TICKER_ITEMS.map((t, i) => (
            <span
              key={i}
              style={{
                padding: "0 22px",
                borderRight: "1px solid var(--border)",
                whiteSpace: "nowrap",
              }}
            >
              <em style={{ color: "var(--c)", fontStyle: "normal" }}>{t.label}</em>
              {" · "}
              {t.text}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
