"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const NAV = {
  Products: ["TMT Bars", "CRS Re-Bars", "MS Billets", "Sponge Iron"],
  Company:  ["About Us", "Leadership", "Certifications", "Technology"],
  Connect:  ["Get a Quote", "Dealer Inquiry", "Technical Specs", "Contact Us"],
};

const ID_MAP: Record<string, string> = {
  "tmt-bars": "products", "crs-re-bars": "products",
  "ms-billets": "products", "sponge-iron": "products",
  "about-us": "about", "leadership": "team",
  "certifications": "about", "technology": "technology",
  "get-a-quote": "contact", "dealer-inquiry": "contact",
  "technical-specs": "technology", "contact-us": "contact",
};

export default function Footer() {
  const go = (label: string) => {
    const key = label.toLowerCase().replace(/\s+/g, "-");
    document.getElementById(ID_MAP[key] || key)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0A0A0A", color: "#FFFFFF" }}>

      {/* ── CTA banner ── */}
      <div style={{ borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14
                        flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="display text-white mb-2"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", lineHeight: 1 }}>
              READY TO BUILD?
            </h2>
            <p style={{ color: "#6B6866", fontSize: "0.9rem" }}>
              Get competitive pricing for your next project — bulk or retail.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href="tel:+919888988810"
              className="btn-gold flex items-center gap-2 rounded-full"
              style={{ padding: "0.75rem 1.6rem", fontSize: "0.82rem", letterSpacing: "0.08em", fontFamily: "var(--font-rajdhani)", fontWeight: 700, textTransform: "uppercase" }}>
              <Phone size={15} /> Call Now
            </a>
            <button onClick={() => go("contact")}
              className="flex items-center gap-2 rounded-full transition-all hover:bg-white hover:text-black"
              style={{
                padding: "0.75rem 1.6rem", fontSize: "0.82rem", letterSpacing: "0.08em",
                fontFamily: "var(--font-rajdhani)", fontWeight: 700, textTransform: "uppercase",
                border: "1.5px solid #2C2C2C", color: "#9E9A94",
              }}>
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand col — spans 2 */}
          <div className="sm:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#B8921E" }}>
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.4rem", color: "#FFF", letterSpacing: "0.05em" }}>JR</span>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.14em", color: "#FFF" }}>
                  JR METAL CHENNAI
                </p>
                <p style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#6B6866", textTransform: "uppercase" }}>
                  Limited
                </p>
              </div>
            </div>

            <p style={{ color: "#5A5A5A", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "280px", marginBottom: "1.5rem" }}>
              South India's trusted manufacturer of TMT Bars, CRS Re-Bars and MS Billets.
              Forging strength and building trust since 2000.
            </p>

            {/* Contact items */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: "+91 9888 988 810",        href: "tel:+919888988810" },
                { icon: Mail,  text: "iinfo@jrmetalchennai.com",href: "mailto:iinfo@jrmetalchennai.com" },
                { icon: MapPin,text: "Anna Nagar, Chennai 600 040", href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={13} style={{ color: "#B8921E", flexShrink: 0 }} />
                  {href
                    ? <a href={href} style={{ color: "#6B6866", fontSize: "0.82rem" }}
                        className="hover:text-white transition-colors">{text}</a>
                    : <span style={{ color: "#6B6866", fontSize: "0.82rem" }}>{text}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(NAV).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontFamily: "var(--font-rajdhani)", fontWeight: 700,
                fontSize: "0.68rem", letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#B8921E", marginBottom: "1.25rem",
              }}>
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => go(link)}
                      className="flex items-center gap-1 group transition-colors"
                      style={{ color: "#5A5A5A", fontFamily: "var(--font-inter)", fontSize: "0.85rem" }}
                    >
                      <ArrowUpRight size={11}
                        className="opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        style={{ color: "#B8921E" }} />
                      <span className="group-hover:text-white transition-colors">{link}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Certifications strip ── */}
      <div style={{ borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5
                        flex flex-wrap items-center justify-center md:justify-between gap-4">
          <p style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.68rem", letterSpacing: "0.2em", color: "#3C3C3C", textTransform: "uppercase" }}>
            Certified & Compliant
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            {["ISO 9001:2015", "ISO 14001:2015", "OHSMS", "BIS Certified", "IS 1786"].map((c) => (
              <span key={c}
                className="px-3 py-1 rounded-full"
                style={{
                  background: "rgba(184,146,30,0.08)",
                  border: "1px solid rgba(184,146,30,0.18)",
                  fontFamily: "var(--font-rajdhani)",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: "#B8921E",
                  textTransform: "uppercase",
                }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5
                      flex flex-col sm:flex-row items-center justify-between gap-3">
        <p style={{ color: "#3C3C3C", fontSize: "0.78rem" }}>
          © {new Date().getFullYear()} JR Metal Chennai Limited. All rights reserved.
        </p>
        <p style={{ color: "#3C3C3C", fontSize: "0.78rem", fontFamily: "var(--font-rajdhani)", letterSpacing: "0.1em" }}>
          Forging Strength · Building Trust
        </p>
      </div>
    </footer>
  );
}
