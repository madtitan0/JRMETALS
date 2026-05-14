"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const CERTIFICATIONS = [
  { label: "ISO 9001:2015", sub: "Quality Management" },
  { label: "ISO 14001:2015", sub: "Environmental" },
  { label: "OHSMS", sub: "Safety & Health" },
  { label: "BIS Certified", sub: "Bureau of Indian Standards" },
  { label: "IS 1786", sub: "TMT Bar Standard" },
  { label: "IS 2830", sub: "MS Billet Standard" },
];

const PARTNERS = [
  "Tamil Nadu PWD",
  "TNHB",
  "CMDA Projects",
  "AP State Roads",
  "Govt. Hospital Projects",
  "Sports Infrastructure TN",
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-14 overflow-hidden"
      style={{ background: "#05070D", borderTop: "1px solid rgba(201,168,76,0.06)", borderBottom: "1px solid rgba(201,168,76,0.06)" }}>

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Certifications row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label text-center mb-6">Our Certifications</p>
          <div className="flex flex-wrap justify-center gap-3">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center px-5 py-3 rounded-xl"
                style={{
                  background: "rgba(201, 168, 76, 0.05)",
                  border: "1px solid rgba(201, 168, 76, 0.15)",
                  minWidth: "110px",
                }}
              >
                <span className="text-xs font-bold mb-0.5 text-gold-gradient"
                  style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "0.04em" }}>
                  {cert.label}
                </span>
                <span className="text-[10px] text-center" style={{ color: "#5A5850" }}>
                  {cert.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="steel-divider mb-8" />

        {/* Government / project partners */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="section-label text-center mb-6">Trusted By</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }}
                className="flex items-center gap-2"
              >
                <div className="w-1 h-1 rounded-full" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium"
                  style={{ color: "#6A6860", fontFamily: "var(--font-rajdhani)", letterSpacing: "0.06em" }}>
                  {p}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
