"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGS = [
  { prefix: "[SYS] ", text: "KARTHIKEYA CORE v1.0 — Initializing...", ok:true, delay: 200 },

  { prefix: "[BOOT]", text: "Loading system kernel", dots: 12, ok:true },
  { prefix: "[FE  ]", text: "Frontend rendering engine", dots: 10, ok: true },
  { prefix: "[BE  ]", text: "Backend execution layer", dots: 10, ok: true },
  { prefix: "[DB  ]", text: "Database interface", dots: 9, ok: true },

  { prefix: "[ML  ]", text: "Inference engine", dots: 8, ok: true },
  { prefix: "[BC  ]", text: "Distributed ledger module", dots: 7, ok: true },

  { prefix: "[NET ]", text: "External connections", dots: 8, status: "ONLINE" , ok:true},
  { prefix: "[SEC ]", text: "Security protocols", dots: 7, ok: true },

  { prefix: "[MEM ]", text: "System memory allocated", ok:true, delay: 120},

  { prefix: "[SYS ]", text: "Performance index calibrated", ok:true, delay: 100 },
  { prefix: "[SYS ]", text: "Environment stable", ok:true, delay: 100 },

  { prefix: "[AUTH]", text: "User identity verified", ok:true, delay: 120 },

  { prefix: "[BOOT]", text: "Launching interface...", ok:true, delay: 200 },
];

interface LogState {
  index: number;
  dots: number;
  done: boolean;
}

interface Props {
  onFinish: () => void;
}

export default function Loader({ onFinish }: Props) {
  const [logStates, setLogStates] = useState<LogState[]>(
    LOGS.map((_, i) => ({ index: i, dots: 0, done: false }))
  );
  const [currentLog, setCurrentLog] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (currentLog >= LOGS.length) {
      setProgress(100);
      setTimeout(() => {
        setExiting(true);
        setTimeout(onFinish, 900);
      }, 500);
      return;
    }

    const log = LOGS[currentLog];
    const maxDots = log.dots ?? 0; // ✅ FIX

    let dots = 0;
    setProgress(Math.round((currentLog / LOGS.length) * 100));

    const iv = setInterval(() => {
      dots++;

      setLogStates((prev) =>
        prev.map((s, i) =>
          i === currentLog
            ? { ...s, dots: Math.min(dots, maxDots) } // ✅ FIX
            : s
        )
      );

      if (dots >= maxDots) { // ✅ FIX
        clearInterval(iv);

        setLogStates((prev) =>
          prev.map((s, i) =>
            i === currentLog ? { ...s, done: true } : s
          )
        );

        setTimeout(() => setCurrentLog((c) => c + 1), 90);
      }
    }, 55);

    return () => clearInterval(iv);
  }, [currentLog, onFinish]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#000" }}
        >
          <div className="relative w-44 h-44 mb-10">
            <div className="absolute inset-0 rounded-full orbit-cw"
              style={{ border: "2px solid transparent", borderTopColor: "var(--c)", animationDuration: "1.2s" }} />
            <div className="absolute inset-[14px] rounded-full orbit-ccw"
              style={{ border: "2px solid transparent", borderRightColor: "var(--c2)", animationDuration: "1.8s" }} />
            <div className="absolute inset-[28px] rounded-full orbit-cw"
              style={{ border: "2px solid transparent", borderBottomColor: "var(--c3)", animationDuration: "2.4s" }} />
            <div className="absolute inset-[42px] rounded-full flex items-center justify-center"
              style={{
                background: "radial-gradient(circle, rgba(0,212,255,0.2), transparent)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-orbitron)",
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--c)",
              }}>
              DK
            </div>
          </div>

          <p className="mb-6 tracking-[4px] text-center"
            style={{ fontFamily: "var(--font-orbitron)", fontSize: "clamp(11px, 1.6vw, 15px)", color: "var(--c)" }}>
            DK PORTFOLIO OS v2026.1 — INITIALISING
          </p>

          <div className="mb-5 relative overflow-hidden"
            style={{ width: "min(460px,80vw)", height: "2px", background: "rgba(0,212,255,0.08)", borderRadius: "1px" }}>
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, var(--c2), var(--c))", borderRadius: "1px" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex flex-col gap-[5px]"
            style={{ width: "min(460px,80vw)", minHeight: "155px", fontFamily: "var(--font-mono)", fontSize: "clamp(10px,1.2vw,12px)" }}>
            {LOGS.map((log, i) => {
              const state = logStates[i];
              const isActive = i <= currentLog;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0.2 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-2"
                  style={{ color: isActive ? "var(--text)" : "#1a4a5a" }}
                >
                  <span style={{ color: state.done ? "var(--c)" : "#1e5a6a" }}>
                    {log.prefix}
                  </span>
                  <span>{log.text}</span>
                  <span>{".".repeat(state.dots)}</span>
                  {state.done && log.ok && (
                    <span style={{ color: "var(--c3)", marginLeft: "auto" }}>
                      {" OK"}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}