"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const IMAGES = [
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-1-1-700x600.jpg", span: "col-span-2 row-span-2" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-2-1-700x600.jpg", span: "" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-3-1-700x600.jpg", span: "" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-4-1-700x600.jpg", span: "" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-5-1-700x600.jpg", span: "" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-6-1-700x600.jpg", span: "col-span-2" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-7-1-700x600.jpg", span: "" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-8-1-700x600.jpg", span: "" },
  { src: "https://jrmetalchennai.com/wp-content/uploads/2026/04/gallery-9-1-700x600.jpg", span: "" },
];

export default function Gallery() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section ref={ref} className="sec bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              className="label block mb-4"
            >
              Our Facility
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={inView ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="display text-black"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                INSIDE OUR PLANTS
              </motion.h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`rounded-xl overflow-hidden img-zoom ${img.span}`}
            >
              <img
                src={img.src}
                alt={`JR Metal facility ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
