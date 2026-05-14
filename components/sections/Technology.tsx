"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const STEPS = [
  { num: "01", title: "Iron Ore Reduction",  tech: "Rotary Kiln DRI",    img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/tech01-1024x1005.jpg", desc: "Premium iron ore undergoes controlled direct reduction at our Anantapur facility, producing high-metallic Sponge Iron with minimal impurities." },
  { num: "02", title: "Steel Melting",        tech: "Induction Furnace",  img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/tech02.jpg",            desc: "Sponge Iron is precisely melted at 1600°C+ with controlled alloy additions of Copper, Vanadium and trace elements for optimal chemistry." },
  { num: "03", title: "Continuous Casting",   tech: "CCM Technology",     img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/tech03.jpg",            desc: "Liquid steel is cast into MS Billets with zero segregation at the core — dimensional accuracy that rolling mills rely on." },
  { num: "04", title: "TempCore Process",     tech: "Zero Tension Rolling",img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/tech04.jpg",           desc: "Hot bars are quenched via TempCore — creating the hard outer ring and tough bainitic core in a single controlled step." },
];

const FLOW = [
  "Iron Ore", "Sponge Iron", "Steel Melting",
  "MS Billets", "Rolling", "TempCore",
  "TMT Bars", "Quality Test", "Dispatch",
];

export default function Technology() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="technology" ref={ref} className="sec bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              className="label block mb-4"
            >Our Process</motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="display text-black"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >ORE TO EXCELLENCE</motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-[#6B6866] max-w-xs leading-relaxed"
          >
            A fully integrated 6-stage process — complete quality control from raw material to finished bar.
          </motion.p>
        </div>

        {/* Step cards — bigger images, more padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group rounded-2xl overflow-hidden border border-[#E0DBD2] bg-[#F8F6F2] card-lift"
            >
              {/* Image — taller */}
              <div className="overflow-hidden img-zoom" style={{ height: "260px" }}>
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content — roomier padding */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-baseline gap-3">
                    <span className="display text-[#D8D2C8]" style={{ fontSize: "2.2rem" }}>
                      {step.num}
                    </span>
                    <span className="display text-black" style={{ fontSize: "1.6rem" }}>
                      {step.title}
                    </span>
                  </div>
                  <span className="flex-shrink-0 text-[11px] font-bold uppercase px-3 py-1.5 rounded-full bg-white border border-[#E0DBD2] text-[#B8921E] whitespace-nowrap"
                    style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "0.08em" }}>
                    {step.tech}
                  </span>
                </div>
                <p className="text-sm text-[#6B6866] leading-relaxed" style={{ lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Complete Process Flow — MUCH LARGER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.7 }}
          className="mt-20 rounded-3xl border border-[#E0DBD2] bg-[#F8F6F2] overflow-hidden"
        >
          {/* Title bar */}
          <div className="px-8 pt-8 pb-5 border-b border-[#E0DBD2]">
            <p className="label">Complete Process Flow</p>
          </div>

          {/* Flow steps */}
          <div className="px-8 py-8 flex flex-wrap items-center gap-3 md:gap-4">
            {FLOW.map((step, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <div key={step} className="flex items-center gap-3 md:gap-4">
                  <div
                    className="rounded-2xl flex items-center justify-center font-bold uppercase whitespace-nowrap"
                    style={{
                      padding: "0.75rem 1.4rem",
                      fontFamily: "var(--font-rajdhani)",
                      fontSize: "0.95rem",
                      letterSpacing: "0.08em",
                      background: isLast ? "#0A0A0A" : "white",
                      color:      isLast ? "#B8921E" : "#1C1C1C",
                      border:     isLast ? "none" : "1.5px solid #E0DBD2",
                      boxShadow:  isLast ? "0 4px 16px rgba(0,0,0,0.18)" : "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    <span className="mr-2 text-[#B8921E]"
                      style={{ fontFamily: "var(--font-bebas)", fontSize: "1.1rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </div>

                  {!isLast && (
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <div style={{ width: "20px", height: "1.5px", background: "#C8C3BA" }} />
                      <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid #C8C3BA" }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom context strip */}
          <div className="px-8 pb-6">
            <p className="text-xs text-[#9E9A94]" style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}>
              Every stage is quality-verified in-house at our Thiruvallur facility — from raw ore to BIS-certified finished bar delivered to your project site.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
