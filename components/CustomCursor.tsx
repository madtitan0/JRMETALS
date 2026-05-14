"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const posRef = { x: -100, y: -100 };

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      posRef.x = e.clientX; posRef.y = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onOver = (e: MouseEvent) => {
      setHover(!!(e.target as HTMLElement).closest("a,button,[role=button]"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    let raf: number;
    let tx = -100, ty = -100;
    const animate = () => {
      tx += (posRef.x - tx) * 0.1;
      ty += (posRef.y - ty) * 0.1;
      setTrail({ x: tx, y: ty });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          width: hover ? "12px" : "6px",
          height: hover ? "12px" : "6px",
          background: "#B8921E",
          left: pos.x, top: pos.y,
          transform: "translate(-50%,-50%)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div className="fixed pointer-events-none z-[9997] rounded-full"
        style={{
          width: hover ? "36px" : "24px",
          height: hover ? "36px" : "24px",
          border: "1px solid rgba(184,146,30,0.35)",
          left: trail.x, top: trail.y,
          transform: "translate(-50%,-50%)",
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </>
  );
}
