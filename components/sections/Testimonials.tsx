"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Pause, Play } from "lucide-react";

const T = [
  { name: "Aravind Kumar",   co: "AK Construction, Chennai",    role: "Civil Engineer",          stars: 5, text: "We've been specifying JR TMT bars for 8 years. The batch-to-batch consistency is unmatched — every project, every time. Our go-to rebar for every high-rise." },
  { name: "Suresh Babu",     co: "SB Properties, Madurai",      role: "Real Estate Developer",   stars: 5, text: "From Fe-500D for our towers to CRS Re-Bars for our Rameswaram coastal project — JR Metal has never missed a delivery date or a quality standard." },
  { name: "Padmavathi Devi", co: "PDC Consultants, Coimbatore", role: "Structural Consultant",   stars: 5, text: "As a structural consultant I stake my reputation on the materials I specify. JR TMT is my first recommendation — test certs and site support are impeccable." },
  { name: "Ravi Shankar",    co: "RS Infrastructure, Trichy",   role: "Contractor",              stars: 5, text: "20 years in construction. JR Metal is in my top tier for quality AND service. Their team actually picks up the phone — that matters more than people realise." },
  { name: "Mathivanan P.",   co: "TNHB Project, Tamil Nadu",    role: "Site Engineer",           stars: 5, text: "Government project audits are strict. JR TMT consistently clears IS:1786 checks without a single rejection. Our preferred rebar for all state-funded projects." },
];

const INTERVAL = 4500;

export default function Testimonials() {
  const [idx,    setIdx]    = useState(0);
  const [dir,    setDir]    = useState(1);
  const [paused, setPaused] = useState(false);
  const [prog,   setProg]   = useState(0);
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: false, margin: "-80px" });
  const timer   = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback((d = 1) => {
    setDir(d);
    setIdx((i) => (i + d + T.length) % T.length);
    setProg(0);
  }, []);

  const startProg = useCallback(() => {
    if (progRef.current) clearInterval(progRef.current);
    setProg(0);
    let v = 0;
    progRef.current = setInterval(() => {
      v += 100 / (INTERVAL / 80);
      setProg(Math.min(v, 100));
      if (v >= 100 && progRef.current) clearInterval(progRef.current);
    }, 80);
  }, []);

  useEffect(() => {
    if (!inView || paused) {
      if (timer.current)   clearInterval(timer.current);
      if (progRef.current) clearInterval(progRef.current);
      return;
    }
    startProg();
    timer.current = setInterval(() => advance(1), INTERVAL);
    return () => {
      if (timer.current)   clearInterval(timer.current);
      if (progRef.current) clearInterval(progRef.current);
    };
  }, [inView, paused, idx, advance, startProg]);

  const manual = (d: number) => {
    if (timer.current) clearInterval(timer.current);
    advance(d);
    if (!paused) timer.current = setInterval(() => advance(1), INTERVAL);
    startProg();
  };

  const t = T[idx];

  return (
    <section id="testimonials" ref={ref} className="bg-white"
      style={{ padding: "5rem 1.5rem 6rem" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              className="label block mb-3"
            >Client Voices</motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="display text-black"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
              >WHAT BUILDERS SAY</motion.h2>
            </div>
          </div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 pb-1"
          >
            <button onClick={() => setPaused((p) => !p)}
              className="w-10 h-10 rounded-full border border-[#E0DBD2] flex items-center justify-center text-[#9E9A94] hover:bg-black hover:text-white hover:border-black transition-all">
              {paused ? <Play size={13} /> : <Pause size={13} />}
            </button>
            <button onClick={() => manual(-1)}
              className="w-10 h-10 rounded-full border border-[#E0DBD2] flex items-center justify-center text-[#6B6866] hover:bg-black hover:text-white hover:border-black transition-all">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => manual(1)}
              className="w-10 h-10 rounded-full border border-[#E0DBD2] flex items-center justify-center text-[#6B6866] hover:bg-black hover:text-white hover:border-black transition-all">
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#F9F7F4]"
            style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.05)" }}>

            {/* Progress bar */}
            <div className="h-[3px] bg-[#EDE8E0] w-full">
              <div className="h-full bg-[#B8921E] transition-none origin-left"
                style={{ width: `${prog}%`, transition: "width 0.08s linear" }} />
            </div>

            <div className="p-8 md:p-12 lg:p-16">
              <AnimatePresence custom={dir} mode="wait">
                <motion.div
                  key={idx}
                  custom={dir}
                  initial={{ opacity: 0, x: dir > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Large opening quote — black */}
                  <div className="select-none" style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(4rem, 10vw, 7rem)",
                    color: "#0A0A0A",
                    lineHeight: 0.75,
                    marginBottom: "0.75rem",
                  }}>"</div>

                  {/* Stars — between " and the text */}
                  <div className="flex gap-1.5 mb-5">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star key={s} size={18} fill="#B8921E" style={{ color: "#B8921E" }} />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-[#1C1C1C] leading-relaxed mb-8"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)", fontFamily: "var(--font-inter)", fontWeight: 300, lineHeight: 1.75 }}>
                    {t.text}
                  </p>

                  {/* Author + dots row */}
                  <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "#F0EDE6", border: "2px solid #E8E2D8" }}>
                        <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.2rem", color: "#B8921E", letterSpacing: "0.05em" }}>
                          {t.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-black mb-0.5"
                          style={{ fontFamily: "var(--font-rajdhani)", fontSize: "1rem", letterSpacing: "0.05em" }}>
                          {t.name}
                        </p>
                        <p className="text-[#9E9A94]" style={{ fontSize: "0.8rem" }}>
                          {t.role} · {t.co}
                        </p>
                      </div>
                    </div>

                    {/* Dots + counter */}
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        {T.map((_, di) => (
                          <button key={di} onClick={() => manual(di > idx ? 1 : -1)}
                            className="rounded-full transition-all duration-300"
                            style={{ width: idx === di ? "24px" : "8px", height: "8px", background: idx === di ? "#0A0A0A" : "#E0DBD2" }}
                          />
                        ))}
                      </div>
                      <span style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#C8C3BA" }}>
                        {String(idx + 1).padStart(2, "0")}/{String(T.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
