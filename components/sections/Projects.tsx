"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { MapPin } from "lucide-react";

const PROJECTS = [
  { num: "01", title: "Kilambakkam New Bus Terminal", location: "Chennai, Tamil Nadu", type: "Transport Infrastructure", product: "JR TMT Fe-500D", desc: "One of South Asia's largest bus terminals demanded premium Fe-500D TMT bars throughout its multi-level reinforced concrete frame — a structure built to serve millions of commuters daily.", img: "https://jrmetalchennai.com/wp-content/uploads/2025/01/limg01.jpg" },
  { num: "02", title: "Natham–Thuvarankurichi Highways", location: "Tamil Nadu", type: "Road Infrastructure", product: "CRS Re-Bars + TMT", desc: "Major highway expansion through diverse terrain — JR CRS Re-Bars for bridges over water bodies and JR TMT for flyovers and elevated sections.", img: "https://jrmetalchennai.com/wp-content/uploads/2025/01/limg02.jpg" },
  { num: "03", title: "Madurai Alanganallur Jallikattu Stadium", location: "Madurai, Tamil Nadu", type: "Sports Infrastructure", product: "JR TMT Fe-550D", desc: "Tamil Nadu's iconic cultural stadium — the seismic-zone design required our highest-ductility Fe-550D grade to handle crowd dynamics and structural loads.", img: "https://jrmetalchennai.com/wp-content/uploads/2025/01/limg03.jpg" },
  { num: "04", title: "Rajiv Gandhi Govt. General Hospital", location: "Chennai, Tamil Nadu", type: "Healthcare Infrastructure", product: "JR TMT Fe-500", desc: "Critical healthcare infrastructure requiring fire-resistant TMT throughout — our bars maintain structural integrity at temperatures up to 500°C.", img: "https://jrmetalchennai.com/wp-content/uploads/2025/01/limg04.jpg" },
  { num: "05", title: "Government Medical College", location: "Virudhunagar, Tamil Nadu", type: "Educational & Healthcare", product: "JR TMT Fe-415D", desc: "Multi-storey medical college requiring comprehensive reinforcement solutions — JR Metal supplied the complete TMT requirement for the RCC frame structure.", img: "https://jrmetalchennai.com/wp-content/uploads/2025/01/limg05.jpg" },
  { num: "06", title: "Madurai District Court Complex", location: "Madurai, Tamil Nadu", type: "Government Infrastructure", product: "JR TMT Fe-500D", desc: "Permanent government judicial complex specified with Fe-500D for its superior strength and ductility ratio — a structure designed to stand for generations.", img: "https://jrmetalchennai.com/wp-content/uploads/2024/11/limg06.jpg" },
];

const AUTO_INTERVAL = 3200;

export default function Projects() {
  const [open,        setOpen]        = useState<number>(0);
  const [userPaused,  setUserPaused]  = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const timer  = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setOpen((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  /* Auto-cycle when in view and not user-paused */
  useEffect(() => {
    if (!inView || userPaused) {
      if (timer.current) clearInterval(timer.current);
      return;
    }
    timer.current = setInterval(advance, AUTO_INTERVAL);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [inView, userPaused, advance]);

  const handleClick = (i: number) => {
    /* If same row clicked, toggle; otherwise open new one */
    setOpen((prev) => (prev === i ? -1 : i));
    setUserPaused(true);          /* stop auto-cycle */
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <section id="projects" ref={ref} className="sec bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              className="label block mb-4"
            >Landmark Projects</motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="display text-black"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >BUILT WITH JR STEEL</motion.h2>
            </div>
          </div>

          {/* Auto-play indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            {!userPaused && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#B8921E] animate-pulse" />
                <span className="text-[11px] uppercase tracking-widest text-[#9E9A94]"
                  style={{ fontFamily: "var(--font-rajdhani)" }}>
                  Auto-cycling
                </span>
              </div>
            )}
            <button
              onClick={() => {
                setUserPaused((p) => !p);
                if (userPaused) setOpen(0);
              }}
              className="px-4 py-2 rounded-full border border-[#E0DBD2] text-[11px] font-bold uppercase tracking-wider transition-all hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A]"
              style={{ fontFamily: "var(--font-rajdhani)", color: "#6B6866" }}
            >
              {userPaused ? "Resume Auto" : "Stop Auto"}
            </button>
          </motion.div>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-[#E8E2D8]">
          {PROJECTS.map((p, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                {/* Row trigger */}
                <button
                  onClick={() => handleClick(i)}
                  className="w-full flex items-center gap-5 py-6 text-left group"
                >
                  {/* Number */}
                  <span
                    className="display flex-shrink-0 transition-colors duration-300"
                    style={{
                      fontSize: "1.6rem",
                      width: "2.8rem",
                      color: isOpen ? "#B8921E" : "#D8D2C8",
                    }}
                  >{p.num}</span>

                  {/* Title + meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3
                          className="font-bold transition-colors duration-200 stretch"
                          style={{
                            fontFamily: "var(--font-rajdhani)",
                            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                            letterSpacing: "0.04em",
                            color: isOpen ? "#0A0A0A" : "#1C1C1C",
                          }}
                        >{p.title}</h3>
                        <div className="flex items-center gap-3 mt-1 flex-wrap">
                          <span className="flex items-center gap-1 text-[11px] text-[#9E9A94] uppercase tracking-wider"
                            style={{ fontFamily: "var(--font-rajdhani)" }}>
                            <MapPin size={10} />{p.location}
                          </span>
                          <span className="text-[#D8D2C8] text-xs">/</span>
                          <span className="text-[11px] text-[#9E9A94] uppercase tracking-wider"
                            style={{ fontFamily: "var(--font-rajdhani)" }}>{p.type}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="hidden sm:block text-[11px] font-bold uppercase px-3 py-1.5 rounded-full"
                          style={{
                            background: isOpen ? "#F5EDD8" : "#F0EDE6",
                            color: "#B8921E",
                            fontFamily: "var(--font-rajdhani)",
                            letterSpacing: "0.06em",
                          }}>{p.product}</span>

                        {/* Plus/minus indicator */}
                        <div className="w-8 h-8 rounded-full border border-[#E0DBD2] flex items-center justify-center flex-shrink-0 transition-all duration-300"
                          style={{ background: isOpen ? "#0A0A0A" : "transparent", borderColor: isOpen ? "#0A0A0A" : "#E0DBD2" }}>
                          <span style={{
                            display: "block",
                            width: "10px", height: "1.5px",
                            background: isOpen ? "white" : "#6B6866",
                            position: "relative",
                          }}>
                            <span style={{
                              position: "absolute", top: "50%", left: "50%",
                              width: "10px", height: "1.5px",
                              background: isOpen ? "white" : "#6B6866",
                              transform: `translate(-50%, -50%) rotate(${isOpen ? "0deg" : "90deg"})`,
                              transition: "transform 0.3s ease",
                            }} />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Auto-progress bar under each row */}
                    {isOpen && !userPaused && (
                      <motion.div
                        key={`prog-${i}`}
                        className="mt-3 h-[2px] rounded-full bg-[#E8E2D8] overflow-hidden"
                      >
                        <motion.div
                          className="h-full bg-[#B8921E] origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 grid md:grid-cols-2 gap-6"
                        style={{ paddingLeft: "calc(2.8rem + 1.25rem)" }}>
                        <div>
                          <p className="text-sm text-[#6B6866] leading-relaxed mb-5" style={{ lineHeight: 1.8 }}>
                            {p.desc}
                          </p>
                          <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="btn-dark rounded-full"
                            style={{ padding: "0.6rem 1.4rem", fontSize: "0.75rem" }}
                          >
                            <span>Inquire About This Project</span>
                          </button>
                        </div>
                        <div className="rounded-2xl overflow-hidden h-44 md:h-52 img-zoom">
                          <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
