"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const STATS = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 75, suffix: "K+", label: "VIP Customers" },
  { value: 300, suffix: "K MT", label: "Annual Capacity" },
  { value: 3, suffix: "", label: "Integrated Plants" },
];

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) { setN(0); return; }
    let cur = 0;
    const steps = 60;
    const inc = value / steps;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= value) { setN(value); clearInterval(id); }
      else setN(Math.floor(cur));
    }, 20);
    return () => clearInterval(id);
  }, [inView, value]);
  return <>{n}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1C1C1C]">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center py-12 px-6 bg-[#0A0A0A]"
            >
              <div className="display text-[#B8921E] leading-none mb-2"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                <Counter value={s.value} suffix={s.suffix} inView={inView} />
              </div>
              <div className="h-px w-8 bg-[#2C2C2C] mb-3" />
              <p className="text-xs tracking-widest uppercase text-[#6B6866]"
                style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, letterSpacing: "0.15em" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
