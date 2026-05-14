"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, RotateCcw, Bot } from "lucide-react";
import { ChatMessage, QUICK_REPLIES, getBotResponse } from "@/lib/chatbot-data";

function Msg({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)|\n/g).map((part, i) => {
        if (!part) return <br key={i} />;
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={i} style={{ fontWeight: 700, color: "inherit" }}>{part.slice(2, -2)}</strong>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

let uid = 0;
const WELCOME: ChatMessage = {
  id: "0", role: "bot", timestamp: new Date(),
  content: "Hi! I'm JR Metal's assistant.\n\nAsk me anything about our **TMT Bars**, **CRS Re-Bars**, pricing, projects, or certifications.",
};

export default function Chatbot() {
  const [open,   setOpen]   = useState(false);
  const [msgs,   setMsgs]   = useState<ChatMessage[]>([WELCOME]);
  const [input,  setInput]  = useState("");
  const [typing, setTyping] = useState(false);
  const [seen,   setSeen]   = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 300); }, [open]);

  const send = (text: string) => {
    if (!text.trim() || typing) return;
    const userMsg: ChatMessage = { id: String(++uid), role: "user", content: text.trim(), timestamp: new Date() };
    setMsgs((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { id: String(++uid), role: "bot", content: getBotResponse(text), timestamp: new Date() }]);
      setTyping(false);
    }, 500 + Math.random() * 700);
  };

  return (
    <>
      {/* ── FAB ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            onClick={() => { setOpen(true); setSeen(true); }}
            className="fixed bottom-7 right-7 z-50 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            style={{
              width: "60px", height: "60px",
              background: "#0A0A0A",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 0 0 3px rgba(184,146,30,0.15)",
            }}
          >
            <MessageCircle size={26} color="white" />
            {!seen && (
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#B8921E] flex items-center justify-center"
                style={{ boxShadow: "0 2px 8px rgba(184,146,30,0.5)" }}>
                <span className="text-[10px] font-bold text-white">1</span>
              </div>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed bottom-7 right-7 z-50 flex flex-col bg-white overflow-hidden"
            style={{
              width:        "min(460px, calc(100vw - 2rem))",
              height:       "min(650px, calc(100dvh - 3.5rem))",
              borderRadius: "20px",
              border:       "1px solid #E8E2D8",
              boxShadow:    "0 24px 80px rgba(0,0,0,0.18), 0 8px 32px rgba(0,0,0,0.08)",
            }}
          >

            {/* ── Header ── */}
            <div className="flex items-center justify-between border-b border-[#E8E2D8]"
              style={{ padding: "1rem 1.25rem", background: "#F9F7F4", flexShrink: 0 }}>
              <div className="flex items-center gap-3">
                {/* Bot avatar */}
                <div className="rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ width: "42px", height: "42px", background: "#0A0A0A" }}>
                  <Bot size={20} color="#B8921E" />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.06em", color: "#0A0A0A", lineHeight: 1.1 }}>
                    JR Steel Assistant
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"
                      style={{ boxShadow: "0 0 5px rgba(34,197,94,0.5)" }} />
                    <span style={{ fontFamily: "var(--font-rajdhani)", fontSize: "0.72rem", color: "#9E9A94", letterSpacing: "0.06em" }}>
                      Online · Usually replies instantly
                    </span>
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div className="flex gap-1.5">
                <button onClick={() => setMsgs([WELCOME])}
                  className="flex items-center justify-center rounded-xl transition-colors hover:bg-[#E8E2D8]"
                  style={{ width: "34px", height: "34px", color: "#9E9A94" }}
                  title="Reset">
                  <RotateCcw size={15} />
                </button>
                <button onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-xl transition-colors hover:bg-[#E8E2D8]"
                  style={{ width: "34px", height: "34px", color: "#6B6866" }}>
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto chat-container"
              style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem", background: "#FFFFFF" }}>

              {msgs.map((msg) => (
                <div key={msg.id}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>

                  {/* Bot avatar */}
                  {msg.role === "bot" && (
                    <div className="flex-shrink-0 rounded-full flex items-center justify-center mt-0.5"
                      style={{ width: "32px", height: "32px", background: "#F5EDD8", border: "1.5px solid #E8D8B0" }}>
                      <Bot size={14} style={{ color: "#B8921E" }} />
                    </div>
                  )}

                  {/* Bubble */}
                  <div style={{
                    maxWidth: "78%",
                    padding: "0.75rem 1rem",
                    borderRadius: msg.role === "bot" ? "4px 18px 18px 18px" : "18px 4px 18px 18px",
                    background:   msg.role === "bot" ? "#F9F7F4" : "#0A0A0A",
                    color:        msg.role === "bot" ? "#1C1C1C" : "#FFFFFF",
                    border:       msg.role === "bot" ? "1px solid #E8E2D8" : "none",
                    fontFamily:   "var(--font-inter)",
                    fontSize:     "0.85rem",
                    lineHeight:   1.65,
                  }}>
                    <Msg text={msg.content} />
                  </div>
                </div>
              ))}

              {/* Typing dots */}
              {typing && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{ width: "32px", height: "32px", background: "#F5EDD8", border: "1.5px solid #E8D8B0" }}>
                    <Bot size={14} style={{ color: "#B8921E" }} />
                  </div>
                  <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl"
                    style={{ borderRadius: "4px 18px 18px 18px", background: "#F9F7F4", border: "1px solid #E8E2D8" }}>
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="rounded-full bg-[#C8C3BA]"
                        style={{ width: "7px", height: "7px", animation: `float-slow 0.8s ease-in-out ${i * 0.22}s infinite` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* ── Quick replies ── */}
            <div className="flex gap-2 overflow-x-auto flex-shrink-0"
              style={{
                padding: "0.6rem 1.25rem 0.5rem",
                scrollbarWidth: "none",
                borderTop: "1px solid #F0EDE6",
              }}>
              {QUICK_REPLIES.map((r) => (
                <button key={r} onClick={() => send(r)}
                  className="flex-shrink-0 whitespace-nowrap rounded-full transition-all hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A]"
                  style={{
                    padding: "0.45rem 0.9rem",
                    background: "#F8F6F2",
                    color: "#6B6866",
                    border: "1.5px solid #E8E2D8",
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>
                  {r}
                </button>
              ))}
            </div>

            {/* ── Input bar ── */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="flex items-center gap-3 flex-shrink-0"
              style={{ padding: "0.75rem 1.25rem 1rem", borderTop: "1px solid #E8E2D8" }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about TMT bars, pricing, projects…"
                className="flex-1 outline-none bg-transparent text-black"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  color: "#1C1C1C",
                  caretColor: "#B8921E",
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="flex-shrink-0 flex items-center justify-center rounded-full transition-all disabled:opacity-30"
                style={{
                  width: "42px", height: "42px",
                  background: input.trim() ? "#0A0A0A" : "#F0EDE6",
                  boxShadow: input.trim() ? "0 4px 14px rgba(0,0,0,0.2)" : "none",
                }}
              >
                <Send size={16} style={{ color: input.trim() ? "white" : "#C8C3BA" }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
