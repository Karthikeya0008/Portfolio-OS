"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Zap, FolderOpen, Briefcase, GraduationCap, Mail,
  FileText, Award, Search, ArrowRight,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type Icon = LucideIcon;

const SECTIONS = [
  { label: "About",           icon: User,          sub: "",   href: "#about"     },
  { label: "Skills",          icon: Zap,           sub: "",   href: "#skills"    },
  { label: "Projects",        icon: FolderOpen,    sub: "",   href: "#projects"  },
  { label: "Work Experience", icon: Briefcase,     sub: "",   href: "#work"      },
  { label: "Education",       icon: GraduationCap, sub: "",   href: "#education" },
  { label: "Contact",         icon: Mail,          sub: "",   href: "#contact"   },
];

const QUICK_ACTIONS = [
  { label: "Contact Me", icon: Mail, sub: "Get in touch", href: "#contact-float" },
];

const DOCUMENTS = [
  { label: "Resume",         icon: FileText, sub: "View / download CV",  href: "https://drive.google.com/file/d/1i6u4f3ZhKkoCeK06Jt2HCoHbuKmE-rO0/view?usp=sharing" },
  { label: "Certifications", icon: Award,    sub: "View Certifications", href: "https://drive.google.com/file/d/1i9EOF917uz3zutk3jimfmhPD_9N-iNQG/view?usp=sharing" },
];

type Item = { label: string; icon: Icon; sub: string; href: string };
interface Group { title: string | null; items: Item[] }
interface Props { open: boolean; onClose: () => void; }

function buildGroups(query: string): Group[] {
  const q = query.toLowerCase();
  const filter = (arr: Item[]) =>
    arr.filter((i) => i.label.toLowerCase().includes(q) || i.sub.toLowerCase().includes(q));

  if (query) {
    return [{ title: null, items: filter([...SECTIONS, ...QUICK_ACTIONS, ...DOCUMENTS]) }];
  }

  return [
    { title: null,            items: SECTIONS      },
    { title: "QUICK ACTIONS", items: QUICK_ACTIONS },
    { title: "DOCUMENTS",     items: DOCUMENTS     },
  ];
}

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery]       = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const groups = buildGroups(query);
  const flat: Item[] = groups.flatMap((g) => g.items);

  const go = useCallback((item: Item) => {
  onClose(); // close palette first

  if (item.href === "#contact-float") {
    // small delay lets the palette finish unmounting before float opens
    setTimeout(() => window.dispatchEvent(new CustomEvent("open-contact-float")), 150);
  } else if (item.href.startsWith("#")) {
    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.open(item.href, "_blank");
  }
}, [onClose]);

  useEffect(() => {
    if (open) { setQuery(""); setSelected(0); setTimeout(() => inputRef.current?.focus(), 50); }
  }, [open]);

  useEffect(() => { setSelected(0); }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if      (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, flat.length - 1)); }
      else if (e.key === "ArrowUp")   { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
      else if (e.key === "Enter")     { if (flat[selected]) go(flat[selected]); }
      else if (e.key === "Escape")    { onClose(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, flat, selected, go, onClose]);

  let globalIndex = 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
            {/* ── Search input ── */}
            <div className="flex items-center gap-3"
              style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)" }}>
              <Search size={14} style={{ color: "var(--text-dim)", flexShrink: 0 }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, docs, actions..."
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  color: "#fff", fontFamily: "var(--font-mono)", fontSize: "13px",
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  style={{
                    background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)",
                    color: "var(--text-dim)", cursor: "pointer", fontSize: "11px",
                    borderRadius: "3px", padding: "2px 7px", fontFamily: "var(--font-mono)",
                    letterSpacing: "0.5px",
                  }}>
                  ESC
                </button>
              )}
            </div>

            {/* ── Results ── */}
            <div style={{ padding: "6px 8px", maxHeight: "420px", overflowY: "auto" }}>
              {flat.length === 0 ? (
                <div style={{
                  padding: "24px", fontFamily: "var(--font-mono)", fontSize: "12px",
                  color: "var(--text-dim)", textAlign: "center",
                }}>
                  No results for &quot;{query}&quot;
                </div>
              ) : (
                groups.map((group, gi) => {
                  if (group.items.length === 0) return null;
                  return (
                    <div key={gi} style={{ marginBottom: gi < groups.length - 1 ? "4px" : 0 }}>

                      {/* Group label */}
                      {group.title && (
                        <div className="flex items-center gap-2"
                          style={{ padding: "10px 12px 5px", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "2.5px" }}>
                          <div style={{
                            width: 5, height: 5, borderRadius: "50%",
                            background: gi === 1 ? "#f5a623" : "var(--c3)",
                            boxShadow: `0 0 5px ${gi === 1 ? "#f5a623" : "var(--c3)"}`,
                          }} />
                          <span style={{ color: gi === 1 ? "#f5a623" : "var(--c3)" }}>
                            {group.title}
                          </span>
                        </div>
                      )}

                      {/* Items */}
                      {group.items.map((item) => {
                        const idx = globalIndex++;
                        const isSelected = idx === selected;
                        const IconComp = item.icon;

                        return (
                          <div
                            key={item.href + item.label}
                            onClick={() => go(item)}
                            onMouseEnter={() => setSelected(idx)}
                            className="flex items-center gap-3"
                            style={{
                              padding: "9px 12px",
                              cursor: "pointer",
                              borderRadius: "4px",
                              background: isSelected ? "rgba(0,212,255,0.06)" : "transparent",
                              border: isSelected ? "1px solid rgba(0,212,255,0.14)" : "1px solid transparent",
                              transition: "all 0.12s",
                            }}
                          >
                            {/* Icon box */}
                            <div className="flex items-center justify-center flex-shrink-0"
                              style={{
                                width: 34, height: 34, borderRadius: "6px",
                                background: isSelected ? "rgba(0,212,255,0.1)" : "rgba(255,255,255,0.04)",
                                border: `1px solid ${isSelected ? "rgba(0,212,255,0.2)" : "var(--border)"}`,
                                transition: "all 0.12s",
                              }}>
                              <IconComp
                                size={15}
                                style={{ color: isSelected ? "var(--c3)" : "var(--text-dim)", transition: "color 0.12s" }}
                              />
                            </div>

                            {/* Label + sub */}
                            <div style={{ flex: 1 }}>
                              <div style={{
                                fontSize: "13px", fontWeight: 600,
                                color: isSelected ? "#fff" : "var(--text)",
                                transition: "color 0.12s",
                              }}>
                                {item.label}
                              </div>
                              <div style={{
                                fontFamily: "var(--font-mono)", fontSize: "10px",
                                color: "var(--text-dim)", marginTop: "2px",
                              }}>
                                {item.sub}
                              </div>
                            </div>

                            {/* Arrow */}
                            <ArrowRight
                              size={13}
                              style={{
                                color: "var(--c)",
                                opacity: isSelected ? 1 : 0,
                                transform: isSelected ? "translateX(0)" : "translateX(-4px)",
                                transition: "all 0.15s",
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center gap-5"
              style={{
                padding: "9px 20px", borderTop: "1px solid var(--border)",
                fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-dim)",
              }}>
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
              <span style={{ marginLeft: "auto" }}>
                {flat.length} result{flat.length !== 1 ? "s" : ""}
              </span>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}