"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const PRODUCTS = ["TMT Bars", "CRS Re-Bars", "MS Billets", "Sponge Iron", "General Inquiry"];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const [form, setForm]   = useState({ name: "", phone: "", email: "", product: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1400);
    setTimeout(() => setStatus("idle"), 5500);
  };

  return (
    <section id="contact" ref={ref} className="bg-[#F8F6F2]"
      style={{ padding: "6rem 1.5rem 7rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-14 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            className="label block mb-4"
          >Get In Touch</motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="display text-black"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >LET'S BUILD TOGETHER</motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* LEFT — contact info (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Phone", lines: ["+91 9888 988 810", "888 999 0000"], href: "tel:+919888988810" },
              { icon: Mail,  label: "Email", lines: ["iinfo@jrmetalchennai.com"],          href: "mailto:iinfo@jrmetalchennai.com" },
              { icon: MapPin,label: "Head Office", lines: ["No.16, AA Block, 3rd Avenue", "Near Roundtana, Anna Nagar", "Chennai – 600 040, Tamil Nadu"], href: null },
              { icon: Clock, label: "Hours",       lines: ["Monday – Saturday", "10:00 AM – 7:00 PM IST"], href: null },
            ].map(({ icon: Icon, label, lines, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8E2D8]"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#F5EDD8", border: "1px solid #E8D8B0" }}>
                  <Icon size={18} style={{ color: "#B8921E" }} />
                </div>
                <div>
                  <p className="font-bold text-[#9E9A94] mb-1.5 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.68rem", letterSpacing: "0.2em" }}>
                    {label}
                  </p>
                  {lines.map((line, li) => (
                    <p key={li} className="leading-snug" style={{ color: "#1C1C1C", fontSize: "0.9rem" }}>
                      {href && li === 0
                        ? <a href={href} className="hover:text-[#B8921E] transition-colors font-medium">{line}</a>
                        : line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Plant locations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.5 }}
              className="p-5 rounded-2xl bg-white border border-[#E8E2D8]"
            >
              <p className="font-bold text-[#9E9A94] mb-3 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.68rem", letterSpacing: "0.2em" }}>
                Manufacturing Plants
              </p>
              <div className="space-y-2">
                {[
                  "Sponge Iron Plant — Anantapur District, AP",
                  "TMT Unit — Thiruvallur District, TN",
                  "Solar Plant — Tiruvannamalai District, TN",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <MapPin size={12} className="flex-shrink-0 mt-0.5 text-[#B8921E]" />
                    <span className="text-sm text-[#6B6866]">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-[#E8E2D8]"
              style={{ padding: "2.5rem 2.5rem 3rem", boxShadow: "0 4px 40px rgba(0,0,0,0.05)" }}>

              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div key="done"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#F5EDD8] flex items-center justify-center mb-5">
                      <CheckCircle2 size={30} style={{ color: "#B8921E" }} />
                    </div>
                    <h3 className="display text-black mb-2" style={{ fontSize: "2.5rem" }}>Thank You!</h3>
                    <p className="text-[#6B6866]">Our team will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={submit}>
                    <h3 className="font-bold text-black mb-8"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: "1.3rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      Send an Inquiry
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      {[
                        { key: "name",  label: "Full Name *",   type: "text",  ph: "Your name" },
                        { key: "phone", label: "Phone Number *", type: "tel",   ph: "+91 XXXXX XXXXX" },
                      ].map(({ key, label, type, ph }) => (
                        <div key={key}>
                          <label className="block mb-2 font-bold uppercase tracking-wider"
                            style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "#9E9A94" }}>
                            {label}
                          </label>
                          <input
                            type={type}
                            required={label.includes("*")}
                            placeholder={ph}
                            value={(form as Record<string, string>)[key]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            className="w-full rounded-xl border border-[#E8E2D8] bg-[#F9F7F4] px-4 outline-none transition-all duration-200 focus:border-[#B8921E] focus:bg-white"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem", height: "52px", color: "#1C1C1C", caretColor: "#B8921E" }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mb-5">
                      <label className="block mb-2 font-bold uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "#9E9A94" }}>
                        Email Address
                      </label>
                      <input type="email" placeholder="your@email.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-[#E8E2D8] bg-[#F9F7F4] px-4 outline-none transition-all focus:border-[#B8921E] focus:bg-white"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem", height: "52px", color: "#1C1C1C", caretColor: "#B8921E" }}
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block mb-2 font-bold uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "#9E9A94" }}>
                        Product Interest
                      </label>
                      <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
                        className="w-full rounded-xl border border-[#E8E2D8] bg-[#F9F7F4] px-4 outline-none transition-all focus:border-[#B8921E] focus:bg-white appearance-none cursor-pointer"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem", height: "52px", color: form.product ? "#1C1C1C" : "#C8C3BA" }}>
                        <option value="">Select a product...</option>
                        {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>

                    <div className="mb-7">
                      <label className="block mb-2 font-bold uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "#9E9A94" }}>
                        Message *
                      </label>
                      <textarea required rows={5} placeholder="Tell us about your project, quantity needed, and delivery location..."
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-xl border border-[#E8E2D8] bg-[#F9F7F4] px-4 py-4 outline-none resize-none transition-all focus:border-[#B8921E] focus:bg-white"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem", color: "#1C1C1C", caretColor: "#B8921E" }}
                      />
                    </div>

                    <button type="submit" disabled={status === "loading"}
                      className="btn-dark w-full rounded-xl flex items-center justify-center gap-3"
                      style={{ height: "58px", fontSize: "0.85rem" }}>
                      {status === "loading"
                        ? <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        : <><span>Send Inquiry</span><ArrowRight size={16} className="relative z-10" /></>}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
