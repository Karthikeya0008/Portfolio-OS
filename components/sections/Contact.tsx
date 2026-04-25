"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const CONTACTS = [
  { icon: "✉", label: "EMAIL", getValue: (d: typeof resumeData) => d.email, href: (d: typeof resumeData) => `mailto:${d.email}` },
  { icon: "☎", label: "PHONE", getValue: (d: typeof resumeData) => d.phone, href: (d: typeof resumeData) => `tel:${d.phone.replace(/\s/g, "")}` },
  { icon: "in", label: "LINKEDIN", getValue: () => "Connect with me ↗", href: (d: typeof resumeData) => d.linkedin },
  { icon: "gh", label: "GITHUB", getValue: () => "View repositories ↗", href: (d: typeof resumeData) => d.github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10" style={{ padding: "80px 48px 100px" }}>
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader tag="// ESTABLISH CONNECTION" title="Get In" highlight="Touch" sub="Open to internships, collaborations, and full-time opportunities" />
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href(resumeData)}
              target={c.label === "LINKEDIN" || c.label === "GITHUB" ? "_blank" : undefined}
              rel={c.label === "LINKEDIN" || c.label === "GITHUB" ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-4 relative overflow-hidden"
              style={{
                background: "var(--panel)", border: "1px solid var(--border)",
                borderRadius: "2px", padding: "20px 24px",
                textDecoration: "none", transition: "all 0.3s",
              }}
              whileHover={{ borderColor: "var(--c)", boxShadow: "0 0 30px rgba(0,212,255,0.1)" }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ background: "linear-gradient(90deg, transparent, var(--c), transparent)", transformOrigin: "left" }}
              />
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 40, height: 40, background: "rgba(0,212,255,0.06)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-orbitron)", fontSize: "12px", fontWeight: 700, color: "var(--c)",
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "4px" }}>
                  {c.label}
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>
                  {c.getValue(resumeData)}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
