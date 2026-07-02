"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Shield, Zap } from "lucide-react";
import Image from "next/image";

const featureNodes = [
  { label: "Speed of Thought", icon: Zap, x: "18%", y: "12%" },
  { label: "Automate Deployment", icon: Cpu, x: "82%", y: "22%" },
  { label: "Layered Security", icon: Shield, x: "70%", y: "72%" },
];

const cards = [
  {
    title: "AI Coding",
    desc: "Write production-ready code in seconds.",
    code: true,
  },
  {
    title: "Smart Automation",
    desc: "Turn repetitive tasks into automated workflows.",
  },
  {
    title: "Connected Teams",
    desc: "Integrate your environment end-to-end.",
  },
  {
    title: "Agent Workflows",
    desc: "Coordinate multiple AI agents seamlessly.",
  },
  {
    title: "Prompt to Production",
    desc: "Transform ideas into deployed solutions.",
  },
];

export function RelaySection() {
  return (
    <section className="relative bg-[#f2efe9] text-[#111] overflow-hidden">
      {/* Top markers */}
      <div className="absolute top-6 left-6 w-2 h-2 bg-[#111]" />

      <div className="relative z-10 px-6 py-12 md:px-12 md:py-20">
        {/* 2x2 mood board grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#111]">
          {/* Top-left: Conviction collage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#f2efe9] p-6 md:p-10 min-h-[420px] md:min-h-[520px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#111]"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#111]">
                <Image
                  src="/images/texture-halftone.jpg"
                  alt="Halftone texture"
                  fill
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-[#f2efe9]/30 mix-blend-multiply" />
                <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-widest font-mono bg-[#f2efe9] px-1.5 py-0.5 border border-[#111]">
                  Global Perspective
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden border border-[#111] bg-[#111]">
                <Image
                  src="/images/classical-painting.jpg"
                  alt="Classical detail"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-[#111]/40" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden border border-[#111] row-span-2">
                <Image
                  src="/images/classical-painting.jpg"
                  alt="Classical painting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-[#f2efe9]" />
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden border border-[#111] bg-[#111]">
                <Image
                  src="/images/texture-halftone.jpg"
                  alt="Noise texture"
                  fill
                  className="object-cover opacity-60 mix-blend-screen"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden border border-[#111]">
                <Image
                  src="/images/texture-halftone.jpg"
                  alt="Dotted texture"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 halftone-dots" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <span className="text-[9px] uppercase tracking-widest font-mono bg-[#f2efe9] px-1.5 py-0.5 border border-[#111]">
                    Signal Over Noise
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-mono bg-[#f2efe9] px-1.5 py-0.5 border border-[#111]">
                    Act Intentionally
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-technical text-2xl md:text-3xl font-medium leading-tight">
                Conviction Is Earned.
              </h2>
              <p className="mt-2 font-mono text-xs md:text-sm text-[#111]/60 max-w-xs">
                The advantage belongs to those who understand first.
              </p>
            </div>
          </motion.div>

          {/* Top-right: Relay console */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative bg-[#05070a] text-[#e8f4ff] p-6 md:p-10 min-h-[420px] md:min-h-[520px] overflow-hidden"
          >
            {/* Binary background */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(100,180,255,0.15) 18px, rgba(100,180,255,0.15) 19px), repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(100,180,255,0.15) 18px, rgba(100,180,255,0.15) 19px)",
              }}
            />
            <div className="absolute inset-0 font-mono text-[10px] leading-[1.2] text-[#4aa3ff]/10 p-4 overflow-hidden whitespace-pre-wrap select-none">
              {Array.from({ length: 30 })
                .map(() =>
                  Array.from({ length: 40 })
                    .map(() => (Math.random() > 0.5 ? "1" : "0"))
                    .join(" ")
                )
                .join("\n")}
            </div>

            {/* Gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#05070a] to-[#0a1628] opacity-90" />

            {/* Feature nodes */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex-1 relative">
                {featureNodes.map((node, i) => (
                  <div
                    key={node.label}
                    className="absolute flex items-center gap-2"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div className="w-6 h-6 bg-[#e8f4ff] flex items-center justify-center">
                      <node.icon className="w-3.5 h-3.5 text-[#05070a]" />
                    </div>
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider">
                      {node.label}
                    </span>
                    {i < featureNodes.length - 1 && (
                      <svg
                        className="absolute top-3 left-8 w-24 md:w-40 h-16 pointer-events-none"
                        viewBox="0 0 160 60"
                        fill="none"
                      >
                        <path
                          d="M0 0 Q80 0 80 30 T160 60"
                          stroke="rgba(100,180,255,0.4)"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          fill="none"
                        />
                      </svg>
                    )}
                  </div>
                ))}

                {/* Center logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-2.5 h-2.5 bg-[#4aa3ff]" />
                      <div className="w-2.5 h-2.5 bg-[#4aa3ff]" />
                      <div className="w-2.5 h-2.5 bg-[#4aa3ff]" />
                      <div className="w-2.5 h-2.5 border border-[#4aa3ff]" />
                    </div>
                    <span className="font-technical text-3xl md:text-5xl font-bold tracking-tight">
                      RELAY
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom card */}
              <div className="relative z-10 bg-[#e8f4ff] text-[#05070a] p-4 border border-[#4aa3ff] flex items-center gap-3 mt-auto">
                <div className="w-3 h-3 bg-[#4aa3ff]" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  Ship Efficiently with RELAY.
                </span>
                <ArrowUpRight className="w-4 h-4 ml-auto" />
              </div>
            </div>
          </motion.div>

          {/* Bottom-left: wavflo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-[#020408] text-white p-6 md:p-10 min-h-[420px] md:min-h-[520px] flex flex-col justify-end border-b lg:border-b-0 lg:border-r border-[#111] overflow-hidden"
          >
            <Image
              src="/images/blue-flower.jpg"
              alt="Blue glowing flower"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-[#020408]/40" />

            <div className="relative z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <span className="font-technical text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 12c2-4 6-8 10-8s6 4 8 8-2 8-8 8-8-4-10-8z" />
                    <path d="M12 2c2 4 2 8 0 12" />
                  </svg>
                  wavflo
                </span>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-6 h-2 rounded-full bg-white" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em]">
                  AI THAT FEELS SEAMLESS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom-right: AI cards grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-[#0d0d0d] text-[#e8e8e8] p-6 md:p-10 min-h-[420px] md:min-h-[520px] overflow-hidden"
          >
            {/* Grid markers */}
            <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-white/40" />
            <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/40" />
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/40" />

            {/* Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full content-center">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="group border border-white/10 bg-white/[0.03] p-4 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-technical text-base md:text-lg font-medium">
                      {card.title}
                    </h3>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>
                  {card.code && (
                    <div className="mb-3 rounded bg-black/40 p-2 font-mono text-[8px] text-white/50 leading-tight overflow-hidden">
                      <span className="text-[#4aa3ff]">const</span> agent ={" "}
                      <span className="text-[#7ee787]">new</span> Agent();
                      <br />
                      <span className="text-[#dcdcaa]">await</span>{" "}
                      agent.generate()
                    </div>
                  )}
                  <p className="font-mono text-[10px] leading-relaxed text-white/50">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
