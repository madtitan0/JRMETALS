"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const TEAM = [
  { name: "Ramchander Singh", role: "Founder & Chief Mentor", img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/team01.jpg" },
  { name: "Pramod Singh", role: "Managing Director & CEO", img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/team02-1.jpg" },
  { name: "Kanishk Singh", role: "President, Sales & BD", img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/team03.jpg" },
  { name: "Pitchaiah Raju", role: "Director", img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/team04.jpg" },
  { name: "Girish H S", role: "GM, Production", img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/team05.jpg" },
  { name: "Sunil Manivannan", role: "Chief Financial Officer", img: "https://jrmetalchennai.com/wp-content/uploads/2026/04/team06-1.jpg" },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="team" ref={ref} className="sec bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            className="label block mb-4"
          >
            Our Team
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="display text-black"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              THE PEOPLE BEHIND JR
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              {/* Photo */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden img-zoom mb-3 bg-[#E0DBD2]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Name */}
              <p className="text-xs font-bold text-black leading-tight mb-0.5"
                style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "0.04em" }}>
                {member.name}
              </p>
              <p className="text-[10px] text-[#9E9A94]" style={{ lineHeight: 1.4 }}>
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7 }}
          className="mt-14 pt-10 border-t border-[#E0DBD2] max-w-2xl"
        >
          <p className="text-base italic text-[#6B6866] leading-relaxed mb-4">
            &ldquo;Trust is our most valuable asset. Every batch of steel we produce is a promise to builders and families who rely on it.&rdquo;
          </p>
          <p className="text-xs font-bold text-black"
            style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            — Mr. Pramod Singh, MD & CEO
          </p>
        </motion.div>
      </div>
    </section>
  );
}
