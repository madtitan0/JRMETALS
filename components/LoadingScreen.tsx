"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    let val = 0;
    const id = setInterval(() => {
      val += Math.random() * 9 + 2;
      if (val >= 100) {
        val = 100;
        clearInterval(id);
        setProgress(100);
        setTimeout(() => setPhase("out"), 300);
        setTimeout(onComplete, 1000);
      } else {
        setProgress(val);
      }
    }, 70);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      style={{
        transition: "opacity 0.6s ease, transform 0.6s ease",
        opacity: phase === "out" ? 0 : 1,
        transform: phase === "out" ? "scale(1.04)" : "scale(1)",
        pointerEvents: phase === "out" ? "none" : "all",
      }}
    >
      {/* Subtle background grain */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        pointerEvents: "none",
      }} />

      {/* Logo */}
      <div className="flex flex-col items-center gap-6 relative z-10">
        {/* Circular badge */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Thin rotating ring */}
          <div className="absolute inset-0 rounded-full border border-[#B8921E]"
            style={{ animation: "spin-slow 12s linear infinite" }} />
          <div className="absolute inset-2 rounded-full border border-dashed border-[#E0DBD2]"
            style={{ animation: "spin-slow 8s linear infinite reverse" }} />

          {/* JR mark */}
          <div className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "#0A0A0A" }}>
            <span style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "2rem",
              color: "#B8921E",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}>JR</span>
          </div>
        </div>

        {/* Company name */}
        <div className="text-center">
          <p className="heading text-sm tracking-[0.3em] uppercase text-black mb-1"
            style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600 }}>
            JR Metal Chennai
          </p>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#9E9A94" }}>
            Forging Strength · Building Trust
          </p>
        </div>

        {/* Progress */}
        <div className="w-48">
          <div className="w-full h-[1px] bg-[#E0DBD2] rounded overflow-hidden">
            <div
              className="h-full bg-[#B8921E] rounded transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[10px] tracking-widest uppercase" style={{ color: "#C8C3BA", fontFamily: "var(--font-rajdhani)" }}>
              Loading
            </span>
            <span className="text-[10px]" style={{ color: "#B8921E", fontFamily: "var(--font-rajdhani)", fontWeight: 600 }}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <p className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "#C8C3BA", fontFamily: "var(--font-rajdhani)" }}>
        South India's Trusted Steel Manufacturer
      </p>
    </div>
  );
}
