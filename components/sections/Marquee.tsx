"use client";

const ITEMS = [
  "ISO 9001 Certified", "★",
  "75,000+ Customers",  "★",
  "20+ Years",          "★",
  "300,000 MT Capacity","★",
  "BIS Certified",      "★",
  "3 Integrated Plants","★",
  "TempCore Technology","★",
  "South India's Trusted Steel", "★",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden bg-[#0A0A0A]" style={{ borderTop: "1px solid #1C1C1C", borderBottom: "1px solid #1C1C1C", padding: "1.1rem 0" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap"
            style={{
              fontFamily:    "var(--font-rajdhani)",
              fontWeight:    700,
              fontSize:      "0.95rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin:        "0 1.4rem",
              color:         item === "★" ? "#B8921E" : "rgba(255,255,255,0.55)",
            }}
          >{item}</span>
        ))}
      </div>
    </div>
  );
}
