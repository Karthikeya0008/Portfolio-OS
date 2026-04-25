"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/data";
import {
  X,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaSpotify,
  FaMedium,
} from "react-icons/fa";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);
  const { email, phone, socials } = resumeData;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-[49px] right-6 z-[9999] flex items-center justify-center"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--c2), var(--c))",
          boxShadow: "0 10px 25px rgba(0,212,255,0.4)",
          color: "#fff",
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Popup Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-[9998]"
            style={{
              width: "300px",
              background: "rgba(10, 20, 40, 0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "18px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: "14px" }}>
              <p style={{ color: "#00FFAA", fontSize: "12px" }}>
                ● Available for work
              </p>
              <h3 style={{ fontSize: "18px", fontWeight: 600 }}>
                Contact Me
              </h3>
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={() => window.open(`mailto:${email}`)}
            >
              <Mail size={16} />
              <span style={{ fontSize: "13px" }}>{email}</span>
            </div>

            {/* Phone */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
                cursor: "pointer",
              }}
              onClick={() => window.open(`tel:${phone}`)}
            >
              <Phone size={16} />
              <span style={{ fontSize: "13px" }}>{phone}</span>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.08)",
                margin: "12px 0",
              }}
            />

            {/* Socials */}
            <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "8px" }}>
              SOCIALS
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              {socials?.github && (
                <FaGithub size={18} onClick={() => window.open(socials.github, "_blank")} style={{ cursor: "pointer" }} />
              )}
              {socials?.linkedin && (
                <FaLinkedin size={18} onClick={() => window.open(socials.linkedin, "_blank")} style={{ cursor: "pointer" }} />
              )}
              {socials?.twitter && (
                <FaTwitter size={18} onClick={() => window.open(socials.twitter, "_blank")} style={{ cursor: "pointer" }} />
              )}
              {socials?.instagram && (
                <FaInstagram size={18} onClick={() => window.open(socials.instagram, "_blank")} style={{ cursor: "pointer" }} />
              )}
              {socials?.spotify && (
                <FaSpotify size={18} onClick={() => window.open(socials.spotify, "_blank")} style={{ cursor: "pointer" }} />
              )}
              {socials?.medium && (
                <FaMedium size={18} onClick={() => window.open(socials.medium, "_blank")} style={{ cursor: "pointer" }} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}