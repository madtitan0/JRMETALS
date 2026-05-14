"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronRight, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    id: "tmt", number: "01", title: "JR TMT Bars",
    short: "THERMO MECHANICALLY TREATED",
    desc: "Our flagship product — advanced TempCore technology delivers a hard martensitic outer layer with a ductile bainitic core. Superior strength, excellent bendability, and fire resistance up to 500°C.",
    features: ["PowerLock Ribs — 40% better bonding", "Fire resistant to 500°C", "Earthquake zone approved", "Grades Fe-415 to Fe-600", "Sizes 8mm to 40mm"],
    img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/tech01-1024x1005.jpg",
    accent: "#B8921E",
  },
  {
    id: "crs", number: "02", title: "CRS Re-Bars",
    short: "CORROSION RESISTANT STEEL",
    desc: "Engineered for Chennai's coastal environment — our CRS Re-Bars use a special copper-chromium alloy to form a protective oxide layer, ideal for marine, coastal, and industrial structures.",
    features: ["Coastal & saline environments", "Industrial chemical resistance", "Extended structure lifespan", "Grades Fe-415 CRS / Fe-500 CRS", "Sizes 8mm to 32mm"],
    img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/tech02.jpg",
    accent: "#1E3A6E",
  },
  {
    id: "billets", number: "03", title: "MS Billets",
    short: "MILD STEEL BILLETS",
    desc: "Continuously cast from our in-house induction furnaces with precise chemical control. Uniform composition and minimal impurity levels make our billets the raw material of choice.",
    features: ["Uniform chemical composition", "Minimal slag inclusions", "In-house manufactured", "100mm to 200mm cross-section", "300,000 MT annual capacity"],
    img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/tech03.jpg",
    accent: "#4A4A4A",
  },
  {
    id: "sponge", number: "04", title: "Sponge Iron",
    short: "DIRECT REDUCED IRON",
    desc: "High-metallic-content DRI produced from premium iron ore using controlled reduction at our Anantapur facility. Low phosphorus and sulphur — ideal for electric and induction furnace steelmaking.",
    features: ["High metallic iron content", "Low P & S levels", "Consistent quality batches", "Lump & fines available", "Anantapur, AP facility"],
    img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/tech04.jpg",
    accent: "#8B4513",
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const p = PRODUCTS[active];

  return (
    <section id="products" ref={ref} className="sec bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              className="label block mb-4"
            >Our Products</motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="display text-black"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >STEEL FOR EVERY NEED</motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-[#6B6866] max-w-xs leading-relaxed"
          >
            Fully integrated production — raw material to finished product, zero compromise.
          </motion.p>
        </div>

        {/* Product tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PRODUCTS.map((prod, i) => (
            <button
              key={prod.id}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 rounded-full transition-all duration-300"
              style={{
                padding: "0.6rem 1.2rem",
                fontFamily: "var(--font-rajdhani)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: active === i ? "#0A0A0A" : "white",
                color:      active === i ? "#FFFFFF" : "#6B6866",
                border:     `1.5px solid ${active === i ? "#0A0A0A" : "#E0DBD2"}`,
                boxShadow:  active === i ? "0 4px 14px rgba(0,0,0,0.15)" : "none",
              }}
            >
              <span style={{ color: active === i ? "#B8921E" : "#C8C3BA", fontFamily: "var(--font-bebas)", fontSize: "1rem" }}>
                {prod.number}
              </span>
              {prod.title}
            </button>
          ))}
        </div>

        {/* Product card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-2xl overflow-hidden border border-[#E0DBD2] bg-white"
            style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.06)" }}
          >
            <div className="grid lg:grid-cols-2 min-h-[500px]">

              {/* Image — left on desktop */}
              <div className="relative min-h-[300px] lg:min-h-0 img-zoom">
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* number badge */}
                <div className="absolute top-5 left-5 w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-sm">
                  <span className="display text-black" style={{ fontSize: "1.5rem" }}>{p.number}</span>
                </div>
              </div>

              {/* Content — right on desktop */}
              <div className="p-10 md:p-14 flex flex-col justify-center bg-white">
                <span className="block mb-3" style={{
                  fontFamily: "var(--font-rajdhani)", fontWeight: 700,
                  fontSize: "0.68rem", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: p.accent,
                }}>
                  {p.short}
                </span>

                <h3 className="display text-black mb-5"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                  {p.title}
                </h3>

                <p className="text-sm text-[#6B6866] leading-relaxed mb-6" style={{ lineHeight: 1.8 }}>
                  {p.desc}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#6B6866]">
                      <ChevronRight size={13} style={{ color: p.accent, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-5 flex-wrap">
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="btn-dark rounded-full"
                    style={{ padding: "0.75rem 1.8rem", fontSize: "0.78rem" }}
                  >
                    <span>Get Quote</span>
                  </button>
                  <button
                    onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex items-center gap-1.5 font-semibold text-[#6B6866] hover:text-black transition-colors group"
                    style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    <span className="stretch-sm">How It's Made</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav dots */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-2">
            {PRODUCTS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{ width: active === i ? "28px" : "8px", height: "8px", background: active === i ? "#0A0A0A" : "#E0DBD2" }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {[-1, 1].map((d) => (
              <button key={d}
                onClick={() => setActive((a) => (a + d + PRODUCTS.length) % PRODUCTS.length)}
                className="w-10 h-10 rounded-full border border-[#E0DBD2] flex items-center justify-center text-[#6B6866] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all">
                <ChevronRight size={15} className={d === -1 ? "rotate-180" : ""} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
