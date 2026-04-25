"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="relative z-10" style={{ padding: "80px 48px" }}>
      <div className="max-w-[1280px] mx-auto w-full">
        <SectionHeader
          tag="// EDUCATION LOGS"
          title="Education"
          highlight="Timeline"
          sub="Academic history and qualifications"
        />

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: "28px" }}>
          <div
            className="absolute left-0"
            style={{
              top: "10px",
              bottom: "10px",
              width: "1px",
              background: "linear-gradient(180deg, var(--c), rgba(0,212,255,0.05))",
            }}
          />

          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative"
              style={{ marginBottom: "20px" }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-32px",
                  top: "22px",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: "2px solid var(--c)",
                  boxShadow: "0 0 10px var(--c)",
                }}
              />

              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns: "80px 1fr 160px", // ✅ UPDATED
                  alignItems: "center",
                  background: "var(--panel)",
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  padding: "22px 26px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(el) => {
                  (el.currentTarget as HTMLElement).style.borderColor = "var(--border-h)";
                  (el.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 30px rgba(0,212,255,0.07)";
                }}
                onMouseLeave={(el) => {
                  (el.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (el.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* ✅ LEFT: LOGO */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {e.logo && (
                    <img
                      src={e.logo}
                      alt={e.institution}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        opacity: 0.9,
                      }}
                    />
                  )}
                </div>

                {/*CENTER: DETAILS */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-orbitron)",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "5px",
                    }}
                  >
                    {e.institution}
                  </div>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--c)",
                      marginBottom: "8px",
                      lineHeight: 1.5,
                    }}
                  >
                    {e.degree}
                    <br />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--text-dim)",
                      }}
                    >
                      {e.sub}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--amber)",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "1px",
                        background: "var(--amber)",
                        display: "inline-block",
                      }}
                    />
                    {e.score}
                  </div>
                </div>

                {/*RIGHT: TIMELINE */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--c)",
                    letterSpacing: "1px",
                    lineHeight: 1.7,
                    textAlign: "right",
                  }}
                >
                  {e.period}
                  {e.active && (
                    <div
                      style={{
                        color: "var(--c3)",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        marginTop: "6px",
                      }}
                    >
                      ONGOING
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}