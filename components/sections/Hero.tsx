"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

const WORDS = ["TMT Bars", "CRS Re-Bars", "MS Billets", "Sponge Iron"];
const HEADLINES = ["FORGING", "STRENGTH,", "BUILDING", "TRUST."];

function Particle({ x, y, size, delay, color }: { x: number; y: number; size: number; delay: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
      animate={{ y: [0, -18, 0], opacity: [0.25, 0.65, 0.25] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

const PARTICLES = [
  { x: 8,  y: 30, size: 4, delay: 0,   color: "#B8921E" },
  { x: 92, y: 20, size: 3, delay: 1.2, color: "#C8C3BA" },
  { x: 85, y: 70, size: 5, delay: 0.6, color: "#B8921E" },
  { x: 12, y: 75, size: 3, delay: 1.8, color: "#C8C3BA" },
  { x: 50, y: 15, size: 2, delay: 0.4, color: "#B8921E" },
  { x: 70, y: 85, size: 4, delay: 2,   color: "#C8C3BA" },
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordIn,  setWordIn]  = useState(true);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const imgY    = useTransform(scrollYProgress, [0, 1], ["0%",  "28%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%",  "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIn(false);
      setTimeout(() => { setWordIdx((i) => (i + 1) % WORDS.length); setWordIn(true); }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#F9F7F4" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(circle, #C8C3BA 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

      <div className="flex-1 grid lg:grid-cols-2 min-h-screen">

        {/* ── Left: text ── */}
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col justify-center pb-16 md:pb-20 px-7 md:px-14 lg:px-18 pt-24 lg:pt-28 relative z-10"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="origin-left"
              style={{ width: 40, height: 2, background: "#B8921E", borderRadius: 1 }}
            />
            <span className="label">South India's Steel Leader · Since 2000</span>
          </motion.div>

          {/* "Manufacturer of [product]" — ABOVE headline, dark pill, fully visible */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex items-center gap-3 mb-8"
          >
            <span style={{ color: "#9E9A94", fontFamily: "var(--font-inter)", fontSize: "0.82rem" }}>
              Manufacturer of
            </span>
            {/* Dark solid pill so it is always visible on the cream background */}
            <div
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                padding:        "0.45rem 1.1rem",
                borderRadius:   "999px",
                background:     "#0A0A0A",
                opacity:        wordIn ? 1 : 0,
                transform:      wordIn ? "translateY(0) scale(1)" : "translateY(5px) scale(0.95)",
                transition:     "opacity 0.35s ease, transform 0.35s ease",
                minWidth:       "130px",
                justifyContent: "center",
              }}
            >
              <span style={{
                fontFamily:    "var(--font-rajdhani)",
                fontWeight:    700,
                fontSize:      "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         "#B8921E",
              }}>
                {WORDS[wordIdx]}
              </span>
            </div>
          </motion.div>

          {/* Headline lines */}
          <div className="mb-10">
            {HEADLINES.map((word, i) => (
              <div key={word} className="overflow-hidden leading-none">
                <motion.h1
                  initial={{ y: "115%", rotateX: 8 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ duration: 1.05, delay: 0.32 + i * 0.12, ease: [0.76, 0, 0.24, 1] }}
                  className={i % 2 === 1 ? "display" : "display text-black"}
                  style={{
                    fontSize: "clamp(4rem, 10.5vw, 9.5rem)",
                    ...(i % 2 === 1 ? { WebkitTextStroke: "2px #0A0A0A", color: "transparent" } : {}),
                  }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="flex flex-wrap items-center gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-dark rounded-full"
              style={{ padding: "0.85rem 2.2rem", fontSize: "0.78rem" }}
            >
              <span>Explore Products</span>
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 font-bold text-black group"
              style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              <span className="stretch-sm">GET A QUOTE</span>
              <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowDown size={11} />
              </span>
            </motion.button>
          </motion.div>
          {/* Scroll indicator removed */}
        </motion.div>

        {/* ── Right: image ── */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="relative overflow-hidden"
          style={{ minHeight: "55vw" }}
        >
          <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
            <img
              src="https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-1-1-700x600.jpg"
              alt="JR Metal Steel Manufacturing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(160deg, rgba(249,247,244,0.15) 0%, transparent 40%, rgba(0,0,0,0.35) 100%)" }}
            />
          </motion.div>

          {/* ISO badge — top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 200, damping: 18 }}
            className="absolute top-8 right-8 rounded-2xl text-center"
            style={{
              padding: "0.85rem 1.2rem",
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            <p className="font-bold tracking-widest text-[#B8921E] mb-0.5"
              style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.72rem", textTransform: "uppercase" }}>
              ISO Certified
            </p>
            <p style={{ color: "#6B6866", fontSize: "0.72rem" }}>9001 · 14001 · BIS</p>
          </motion.div>

          {/* ── Bigger floating stats badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 160, damping: 20 }}
            className="absolute bottom-10 left-8 rounded-2xl"
            style={{
              animation: "float-slow 5s ease-in-out 1.5s infinite",
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.14)",
              padding: "1.4rem 1.8rem",
            }}
          >
            <div className="flex items-center gap-6 md:gap-8">
              {/* 20+ */}
              <div className="text-center">
                <p className="display text-black leading-none" style={{ fontSize: "3.6rem" }}>20+</p>
                <p className="uppercase tracking-widest mt-1.5"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, fontSize: "0.7rem", color: "#9E9A94" }}>
                  Years
                </p>
              </div>

              <div style={{ width: 1, height: "3rem", background: "#E0DBD2", flexShrink: 0 }} />

              {/* 75K+ */}
              <div className="text-center">
                <p className="display text-black leading-none" style={{ fontSize: "3.6rem" }}>75K+</p>
                <p className="uppercase tracking-widest mt-1.5"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, fontSize: "0.7rem", color: "#9E9A94" }}>
                  Customers
                </p>
              </div>

              <div style={{ width: 1, height: "3rem", background: "#E0DBD2", flexShrink: 0 }} />

              {/* 3 */}
              <div className="text-center">
                <p className="display text-black leading-none" style={{ fontSize: "3.6rem" }}>3</p>
                <p className="uppercase tracking-widest mt-1.5"
                  style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, fontSize: "0.7rem", color: "#9E9A94" }}>
                  Plants
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
