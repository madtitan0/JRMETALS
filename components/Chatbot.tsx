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
          return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

let uid = 0;
const WELCOME: ChatMessage = {
  id: "0", role: "bot", timestamp: new Date(),
  content: "Hi! I'm JR Metal's assistant. Ask me about our TMT Bars, CRS Re-Bars, pricing, projects, or certifications.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [seen, setSeen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 300); }, [open]);

  const send = (text: string) => {
    if (!text.trim() || typing) return;
    const userMsg: ChatMessage = { id: String(++uid), role: "user", content: text.trim(), timestamp: new Date() };
    setMsgs((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const botMsg: ChatMessage = { id: String(++uid), role: "bot", content: getBotResponse(text), timestamp: new Date() };
      setMsgs((m) => [...m, botMsg]);
      setTyping(false);
    }, 500 + Math.random() * 700);
  };

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={() => { setOpen(true); setSeen(true); }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-[#0A0A0A] hover:bg-[#1C1C1C] transition-colors"
          >
            <MessageCircle size={22} color="white" />
            {!seen && (
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B8921E] flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">1</span>
              </div>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E0DBD2]"
            style={{ width: "min(370px, calc(100vw - 2rem))", height: "min(560px, calc(100dvh - 4rem))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E0DBD2] bg-[#F8F6F2]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] flex items-center justify-center">
                  <Bot size={15} color="white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-black" style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "0.04em" }}>
                    JR Steel Assistant
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] text-[#9E9A94]">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <button onClick={() => setMsgs([WELCOME])}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[#9E9A94] hover:bg-[#E0DBD2] transition-colors">
                  <RotateCcw size={12} />
                </button>
                <button onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[#9E9A94] hover:bg-[#E0DBD2] transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 chat-container bg-white">
              {msgs.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  {msg.role === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-[#F0EDE6] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot size={11} className="text-[#B8921E]" />
                    </div>
                  )}
                  <div className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed"
                    style={{
                      background: msg.role === "bot" ? "#F8F6F2" : "#0A0A0A",
                      color: msg.role === "bot" ? "#1C1C1C" : "#FFFFFF",
                      borderRadius: msg.role === "bot" ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
                      fontFamily: "var(--font-inter)",
                      border: msg.role === "bot" ? "1px solid #E0DBD2" : "none",
                    }}>
                    <Msg text={msg.content} />
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#F0EDE6] flex items-center justify-center flex-shrink-0">
                    <Bot size={11} className="text-[#B8921E]" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-[#F8F6F2] border border-[#E0DBD2] flex gap-1 items-center"
                    style={{ borderRadius: "4px 16px 16px 16px" }}>
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C8C3BA]"
                        style={{ animation: `float-slow 0.8s ease-in-out ${i * 0.2}s infinite` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 pt-2 pb-1 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none", borderTop: "1px solid #F0EDE6" }}>
              {QUICK_REPLIES.map((r) => (
                <button key={r} onClick={() => send(r)}
                  className="px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap flex-shrink-0 transition-all hover:bg-[#0A0A0A] hover:text-white"
                  style={{
                    background: "#F8F6F2",
                    color: "#6B6866",
                    border: "1px solid #E0DBD2",
                    fontFamily: "var(--font-rajdhani)",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}>
                  {r}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="flex items-center gap-2 px-4 py-3 border-t border-[#E0DBD2]">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about TMT bars, pricing..."
                className="flex-1 text-xs outline-none bg-transparent text-black placeholder-[#C8C3BA]"
                style={{ fontFamily: "var(--font-inter)", caretColor: "#B8921E" }}
              />
              <button type="submit" disabled={!input.trim() || typing}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
                style={{ background: input.trim() ? "#0A0A0A" : "#F0EDE6" }}>
                <Send size={13} style={{ color: input.trim() ? "white" : "#C8C3BA" }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
