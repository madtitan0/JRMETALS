"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Zap, Droplets, Flame, Globe2, Layers, Microscope,
  Truck, HeadphonesIcon, RefreshCw, Award
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "PowerLock Ribs",
    desc: "Unique rib pattern ensures 40% superior concrete bonding — your structure holds together under any stress.",
    color: "#C9A84C",
  },
  {
    icon: RefreshCw,
    title: "FlexCore Performance",
    desc: "Superior bendability without cracking — ideal for complex reinforcement configurations and earthquake zones.",
    color: "#4A90D9",
  },
  {
    icon: Flame,
    title: "Fire Resistance",
    desc: "JR TMT Bars retain structural integrity up to 500°C — critical for high-rise buildings and industrial facilities.",
    color: "#E87030",
  },
  {
    icon: Droplets,
    title: "Coastal Ready",
    desc: "Anti-corrosive CRS formulation engineered for Chennai's coastal environment and saline conditions.",
    color: "#7ABAFF",
  },
  {
    icon: Layers,
    title: "TempCore Technology",
    desc: "The globally proven quenching process creates a hard outer surface with a ductile inner core — the best of both worlds.",
    color: "#F5D76E",
  },
  {
    icon: Globe2,
    title: "Seismic Resistant",
    desc: "Triple Shield Protection guards against corrosion, extreme temperatures, and seismic forces simultaneously.",
    color: "#A78BFA",
  },
  {
    icon: Microscope,
    title: "Precision Lab Testing",
    desc: "Every batch tested on our 120 MT Universal Testing Machine and German spectrometers before dispatch.",
    color: "#34D399",
  },
  {
    icon: Truck,
    title: "Pan-South India Supply",
    desc: "Strong logistics network covering Tamil Nadu, Andhra Pradesh and beyond. On-time delivery guaranteed.",
    color: "#FB923C",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Sales Support",
    desc: "Technical assistance, site support, and maintenance services long after your order is delivered.",
    color: "#F472B6",
  },
  {
    icon: Award,
    title: "Alloy Advantage",
    desc: "Copper and Vanadium alloy composition delivers 25% higher tensile strength over standard rebars.",
    color: "#C9A84C",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why" ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #07090F 0%, #0C1220 50%, #07090F 100%)" }}>

      {/* Decorative bg */}
      <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.025] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-3">The JR Advantage</span>
          <h2 className="text-metallic mb-4"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.04em",
            }}>
            WHY BUILDERS TRUST JR METAL
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: "#7A7870" }}>
            Ten reasons why South India&apos;s top builders, contractors, and engineers choose JR Metal for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl p-6 group card-hover shimmer-effect relative overflow-hidden"
              style={{
                background: "rgba(10, 15, 25, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${f.color}08 0%, transparent 60%)` }} />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${f.color}12`,
                    border: `1px solid ${f.color}25`,
                  }}>
                  <f.icon size={18} style={{ color: f.color }} />
                </div>
                <h3 className="font-semibold mb-2 text-white"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontSize: "1rem",
                    letterSpacing: "0.04em",
                  }}>
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6A6860", lineHeight: 1.6 }}>
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
