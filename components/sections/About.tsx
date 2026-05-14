"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "Three fully integrated manufacturing plants",
  "ISO 9001, ISO 14001, OHSMS & BIS certified",
  "75,000+ VIP customers across South India",
  "300,000 MT annual production capacity",
  "TempCore technology for premium TMT bars",
  "Green belt environment around all facilities",
];

const CERTS = [
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/ISO9001.jpg",        alt: "ISO 9001",    label: "Quality Management" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/iso-14001.jpg",      alt: "ISO 14001",   label: "Environmental" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/OHSMS.jpg",          alt: "OHSMS",       label: "Health & Safety" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/BIS-Latest-0-1.jpg", alt: "BIS",         label: "Bureau of Indian Standards" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/BIS-Latest-03.jpg",  alt: "BIS Mark",    label: "IS:1786 Compliant" },
];

/* Auto-advancing carousel for certifications */
function CertCarousel({ inView }: { inView: boolean }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!inView) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % CERTS.length);
    }, 2200);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [inView]);

  return (
    <div>
      <p className="label mb-5">Certifications</p>

      {/* Carousel track */}
      <div className="relative overflow-hidden rounded-2xl border border-[#E8E2D8] bg-[#F9F7F4]"
        style={{ height: "130px" }}>

        {CERTS.map((cert, i) => (
          <motion.div
            key={cert.alt}
            className="absolute inset-0 flex items-center gap-6 px-7"
            initial={false}
            animate={{
              opacity:  active === i ? 1 : 0,
              x:        active === i ? 0 : (i > active ? 30 : -30),
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Image */}
            <div className="w-20 h-20 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
              <img
                src={cert.src}
                alt={cert.alt}
                className="max-h-16 max-w-full object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            {/* Text */}
            <div>
              <p className="font-bold text-black mb-0.5"
                style={{ fontFamily: "var(--font-rajdhani)", fontSize: "1.05rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {cert.alt}
              </p>
              <p className="text-sm text-[#6B6866]">{cert.label}</p>
              <div className="flex items-center gap-1.5 mt-3">
                {CERTS.map((_, di) => (
                  <button key={di} onClick={() => setActive(di)}
                    className="rounded-full transition-all duration-300"
                    style={{ width: active === di ? "20px" : "6px", height: "6px", background: active === di ? "#0A0A0A" : "#D8D2C8" }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="sec bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image stack */}
          <div className="relative pb-12">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] img-zoom"
            >
              <img
                src="https://jrmetalchennai.com/wp-content/uploads/2026/04/home04-1024x724.jpg"
                alt="JR Metal Manufacturing"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* BIGGER overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-2 -right-4 lg:-right-8 rounded-2xl bg-[#0A0A0A]"
              style={{ padding: "1.75rem 2rem", minWidth: "200px" }}
            >
              <p className="display text-[#B8921E] leading-none"
                style={{ fontSize: "4.5rem", marginBottom: "0.3rem" }}>20+</p>
              <p className="text-white/80 uppercase"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.14em", lineHeight: 1.4 }}>
                Years of<br />Manufacturing<br />Excellence
              </p>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="absolute -top-6 -right-4 lg:-right-8 w-36 h-36 rounded-xl overflow-hidden border-4 border-white img-zoom shadow-lg"
            >
              <img
                src="https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-3-1-700x600.jpg"
                alt="Steel production"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right — text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="label block mb-5"
            >About JR Metal</motion.span>

            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                className="display text-black"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
              >TWO DECADES OF</motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="display"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", WebkitTextStroke: "2px #0A0A0A", color: "transparent" }}
              >STEEL EXCELLENCE</motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="leading-relaxed mb-4 text-[#6B6866]"
              style={{ fontSize: "0.9rem", lineHeight: 1.8 }}
            >
              JR Metal Chennai Limited — flagship of the JR Group — has spent over two decades forging a reputation built on trust, quality, and precision. From a vision to serve South India's construction industry, we've grown into a fully integrated steel manufacturer.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="leading-relaxed mb-8 text-[#6B6866]"
              style={{ fontSize: "0.9rem", lineHeight: 1.8 }}
            >
              Our three plants across Tamil Nadu and Andhra Pradesh produce everything from raw Sponge Iron to finished TMT Bars — ensuring quality at every step, batch after batch.
            </motion.p>

            {/* Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {POINTS.map((pt, i) => (
                <motion.div
                  key={pt}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#B8921E]" />
                  <span style={{ fontSize: "0.85rem", color: "#6B6866" }}>{pt}</span>
                </motion.div>
              ))}
            </div>

            {/* Certification carousel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <CertCarousel inView={inView} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
