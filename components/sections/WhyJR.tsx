"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Zap, Shield, Flame, Droplets,
  Layers, Microscope, Truck, Award,
} from "lucide-react";

const FEATURES = [
  { icon: Zap,       num: "01", title: "PowerLock Ribs",      desc: "40% superior concrete bonding through our patented rib pattern — your structure stays locked." },
  { icon: Flame,     num: "02", title: "Fire Resistant 500°C", desc: "Maintains structural integrity in extreme heat — critical for high-rise and industrial projects." },
  { icon: Shield,    num: "03", title: "Triple Shield",        desc: "Simultaneous protection against corrosion, seismic forces, and extreme temperatures." },
  { icon: Droplets,  num: "04", title: "Coastal Ready",        desc: "CRS formulation designed for Chennai's coastal & saline environments — zero compromise." },
  { icon: Layers,    num: "05", title: "TempCore Process",     desc: "The globally-proven quenching method creates a hard outer ring with a ductile bainitic core." },
  { icon: Microscope,num: "06", title: "Lab-Tested Every Batch",desc: "German spectrometers and 120 MT UTM verify alloy composition and strength — every time." },
  { icon: Truck,     num: "07", title: "Pan-South India Supply",desc: "Reliable logistics across Tamil Nadu, AP and beyond — on-time, every delivery." },
  { icon: Award,     num: "08", title: "25% Higher Tensile",   desc: "Copper & Vanadium alloy composition delivers 25% higher tensile strength over standard rebars." },
];

export default function WhyJR() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section ref={ref} className="sec bg-[#0A0A0A] overflow-hidden relative">

      {/* Faint grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              className="block mb-4 text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ color: "#B8921E", fontFamily: "var(--font-rajdhani)" }}
            >
              The JR Advantage
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="display text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                WHY BUILDERS
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
                className="display"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
                  color: "transparent",
                }}
              >
                CHOOSE JR METAL
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm max-w-xs"
            style={{ color: "#6B6866" }}
          >
            Eight reasons top contractors, engineers and developers specify JR over everything else.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative p-7 bg-[#0A0A0A] overflow-hidden cursor-default"
              style={{ minHeight: "180px" }}
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Gold corner accent on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#B8921E] group-hover:w-full transition-all duration-500" />

              <div className="relative z-10">
                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-5">
                  <span className="display text-[#2A2A2A] group-hover:text-[#B8921E] transition-colors duration-300"
                    style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                    {f.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(184,146,30,0.08)", border: "1px solid rgba(184,146,30,0.15)" }}>
                    <f.icon size={16} style={{ color: "#B8921E" }} />
                  </div>
                </div>

                <h3 className="font-bold text-white mb-2 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.92rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#5A5A5A", lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
