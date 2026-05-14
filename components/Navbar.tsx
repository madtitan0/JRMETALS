"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { label: "About",      href: "about" },
  { label: "Products",   href: "products" },
  { label: "Projects",   href: "projects" },
  { label: "Technology", href: "technology" },
  { label: "Team",       href: "team" },
  { label: "Contact",    href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu,     setMenu]     = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background:    scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom:  scrolled ? "1px solid #E8E2D8" : "none",
          boxShadow:     scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between" style={{ height: "80px" }}>

          {/* Logo */}
          <button onClick={() => go("home")} className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ background: "#0A0A0A" }}>
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", color: "#B8921E", letterSpacing: "0.05em" }}>JR</span>
            </div>
            <div className="hidden sm:block">
              <p style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.14em", color: "#0A0A0A", lineHeight: 1.1 }}>
                JR METAL
              </p>
              <p style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9E9A94", textTransform: "uppercase", lineHeight: 1 }}>
                Chennai Limited
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {LINKS.map((link) => {
              const on = active === link.href;
              return (
                <button
                  key={link.label}
                  onClick={() => go(link.href)}
                  className="relative px-5 py-2 rounded-full group"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: on ? "#0A0A0A" : "#6B6866",
                    background: on ? "#F5EDD8" : "transparent",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span className="stretch relative z-10">{link.label}</span>
                  {/* bottom underline */}
                  <span className="absolute bottom-1 left-5 right-5 h-[2px] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: "#B8921E" }} />
                </button>
              );
            })}
          </div>

          {/* Right: phone + CTA + hamburger */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="tel:+919888988810"
              className="hidden xl:flex items-center gap-2 text-black hover:text-[#B8921E] transition-colors"
              style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.04em" }}
            >
              <Phone size={15} />
              +91 9888 988 810
            </a>

            <button
              onClick={() => go("contact")}
              className="hidden md:flex items-center btn-dark rounded-full"
              style={{ padding: "0.6rem 1.5rem", fontSize: "0.78rem" }}
            >
              <span>Get Quote</span>
            </button>

            <button
              onClick={() => setMenu(!menu)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-[#E0DBD2] bg-white text-black hover:bg-[#F8F6F2] transition-colors"
            >
              <motion.div animate={{ rotate: menu ? 90 : 0 }} transition={{ duration: 0.25 }}>
                {menu ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col bg-white"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 border-b border-[#E8E2D8]" style={{ height: "80px" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center">
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", color: "#B8921E" }}>JR</span>
                </div>
                <p style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.14em" }}>JR METAL</p>
              </div>
              <button onClick={() => setMenu(false)}
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-[#E0DBD2]">
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.35 }}
                  onClick={() => go(link.href)}
                  className="flex items-center justify-between py-5 border-b border-[#F0EDE6] group text-left"
                >
                  <span className="display text-black group-hover:text-[#B8921E] transition-colors stretch"
                    style={{ fontSize: "clamp(2.2rem, 8vw, 3.2rem)" }}>
                    {link.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.2rem", color: "#D0C8BC", letterSpacing: "0.1em" }}>
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-8 pb-10 pt-6 border-t border-[#E8E2D8] flex flex-col gap-3">
              <button onClick={() => go("contact")} className="btn-dark w-full py-4 rounded-2xl">
                <span style={{ fontSize: "0.85rem", letterSpacing: "0.1em" }}>Get a Quote →</span>
              </button>
              <a href="tel:+919888988810"
                className="flex items-center justify-center gap-2 text-[#9E9A94]"
                style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.9rem", letterSpacing: "0.06em" }}>
                <Phone size={14} /> +91 9888 988 810
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
