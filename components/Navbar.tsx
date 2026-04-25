"use client";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

interface Props {
  onOpenCmd: () => void;
  visible: boolean;
}

export default function Navbar({ onOpenCmd, visible }: Props) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
      style={{
        height: "58px",
        padding: "0 40px",
        background: "rgba(1,10,20,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.35), transparent)",
        }}
      />

      {/* Brand */}
      <span
        style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "15px",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "4px",
        }}
      >
        DK<span style={{ color: "var(--c)" }}>.</span>OS
      </span>

      {/* Links */}
      <ul className="hidden md:flex" style={{ listStyle: "none", gap: 0 }}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="group relative block"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-dim)",
                textDecoration: "none",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "0 18px",
                height: "58px",
                lineHeight: "58px",
                borderRight: "1px solid var(--border)",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--c)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(0,212,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "var(--c)" }}
              />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#about"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-dim)",
              textDecoration: "none",
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "0 18px",
              height: "58px",
              lineHeight: "58px",
              borderLeft: "1px solid var(--border)",
            }}
          />
        </li>
      </ul>

      {/* CMD button */}
      <button
        onClick={onOpenCmd}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--text-dim)",
          background: "transparent",
          border: "1px solid var(--border)",
          padding: "6px 14px",
          cursor: "pointer",
          letterSpacing: "1px",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--c)";
          (e.currentTarget as HTMLElement).style.color = "var(--c)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
        }}
      >
        ⌘ CTRL+K
      </button>
    </motion.nav>
  );
}
