"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = [
  { label: "About", icon: "A", href: "#about" },
  { label: "Skills", icon: "S", href: "#skills" },
  { label: "Projects", icon: "P", href: "#projects" },
  { label: "Work Experience", icon: "W", href: "#work" },
  { label: "Education", icon: "E", href: "#education" },
  { label: "Contact", icon: "C", href: "#contact" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const go = useCallback(
    (href: string) => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter") {
        if (filtered[selected]) go(filtered[selected].href);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selected, go, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[200] flex items-start justify-center"
          style={{ background: "rgba(1,10,20,0.82)", backdropFilter: "blur(8px)", paddingTop: "100px" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "var(--bg3)",
              border: "1px solid var(--border-h)",
              borderRadius: "3px",
              width: "min(580px, 90vw)",
              boxShadow: "0 0 60px rgba(0,212,255,0.18)",
            }}
          >
            {/* Input row */}
            <div
              className="flex items-center gap-4"
              style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)" }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--c)" }}>›_</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Navigate to section..."
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  color: "#fff", fontFamily: "var(--font-mono)", fontSize: "13px",
                }}
              />
            </div>

            {/* Results */}
            <div style={{ padding: "8px" }}>
              {filtered.length === 0 ? (
                <div style={{ padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-dim)" }}>
                  No results found
                </div>
              ) : (
                filtered.map((cmd, i) => (
                  <div
                    key={cmd.href}
                    onClick={() => go(cmd.href)}
                    className="flex items-center gap-3"
                    style={{
                      padding: "11px 16px",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: 600,
                      borderRadius: "2px",
                      background: i === selected ? "rgba(0,212,255,0.07)" : "transparent",
                      transition: "background 0.15s",
                      color: i === selected ? "#fff" : "var(--text)",
                    }}
                    onMouseEnter={() => setSelected(i)}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 22, height: 22, borderRadius: "2px",
                        background: "rgba(0,212,255,0.08)",
                        border: "1px solid var(--border)",
                        fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--c)",
                        flexShrink: 0,
                      }}
                    >
                      {cmd.icon}
                    </div>
                    {cmd.label}
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-dim)",
                      }}
                    >
                      ↵
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div
              className="flex gap-5"
              style={{
                padding: "9px 20px",
                borderTop: "1px solid var(--border)",
                fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-dim)",
              }}
            >
              <span>↑↓ navigate</span>
              <span>↵ go</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
