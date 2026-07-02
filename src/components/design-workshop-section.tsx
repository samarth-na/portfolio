"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const specs = [
  { label: "OUTPUT", value: "VERIFIED" },
  { label: "MANUFACTURING CYCLE", value: "COMPLETE" },
  { label: "INDUSTRIAL NETWORK", value: "ONLINE" },
  { label: "PRECISION MODE", value: "ENABLED" },
];

const crosshairSize = 24;

function Crosshair({ className }: { className?: string }) {
  return (
    <svg
      width={crosshairSize}
      height={crosshairSize}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function DesignWorkshopSection() {
  return (
    <section className="relative bg-[#e6e8e9] text-[#111] overflow-hidden py-12 md:py-20 px-6 md:px-10">
      {/* Industrial texture background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/industrial.jpg"
          alt=""
          fill
          className="object-cover grayscale contrast-150"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Top row */}
        <div className="flex items-start justify-between mb-6 md:mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]"
          >
            Morning Exercise
          </motion.span>

          <Crosshair className="text-[#111]/60" />

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]"
          >
            [ Brass Hands ]
          </motion.span>
        </div>

        {/* Dot rows */}
        <div className="flex justify-between mb-8 md:mb-12 px-4 md:px-24">
          <div className="flex gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#111]/30" />
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#111]/30" />
            ))}
          </div>
        </div>

        {/* Info row */}
        <div className="grid grid-cols-3 gap-4 mb-4 md:mb-6">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-[#111] mt-1" />
            <div>
              <span className="block font-poster text-3xl md:text-5xl lg:text-6xl tracking-tight">
                (MAX-23)
              </span>
            </div>
          </div>

          <div className="text-center">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] block">
              Industrial Craftsmanship
            </span>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] block">
              For Modern Industry
            </span>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] block">
              Design Status
            </span>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] block">
              &gt;&gt;&gt; Ready
            </span>
          </div>

          <div className="flex justify-end">
            <div className="w-2 h-2 bg-[#111]" />
          </div>
        </div>

        {/* Main headline with scribble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-8 md:py-12"
        >
          {/* Large condensed type */}
          <h2 className="relative font-poster text-[clamp(3rem,14vw,12rem)] leading-[0.82] tracking-tighter text-center uppercase">
            DSGN
            <span className="inline-block mx-2 md:mx-4 text-[#111]/20">-</span>
            SWRMP
          </h2>

          {/* Scribble overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 160"
            preserveAspectRatio="none"
          >
            <path
              d="M40,120 Q120,40 200,100 T360,90 Q440,70 520,110 T680,80 Q760,60 780,100"
              fill="none"
              stroke="#7fff00"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M60,100 Q140,130 220,80 T380,110 Q460,90 540,120 T700,90"
              fill="none"
              stroke="#7fff00"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#7fff00"
              fontSize="72"
              fontFamily="cursive"
              fontWeight="bold"
              opacity="0.75"
              transform="rotate(-3 400 80)"
            >
              design
            </text>
          </svg>

          {/* 2026 circles */}
          <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex">
            {"2026".split("").map((digit, i) => (
              <div
                key={i}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-[#111] flex items-center justify-center -ml-2 first:ml-0 bg-[#e6e8e9]"
              >
                <span className="font-mono text-xs md:text-sm">{digit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-8 md:mt-12">
          {/* NY badge + studio */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div className="flex gap-1 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#111] text-[#e6e8e9] flex items-center justify-center font-mono text-sm md:text-base font-bold">
                N
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#111] text-[#e6e8e9] flex items-center justify-center font-mono text-sm md:text-base font-bold">
                Y
              </div>
            </div>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
              Design Studio
            </span>
          </div>

          {/* Spec list */}
          <div className="md:col-span-5">
            <div className="space-y-2">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline font-mono text-[10px] md:text-xs uppercase tracking-wider"
                >
                  <span className="whitespace-nowrap">{spec.label}</span>
                  <span className="flex-1 border-b border-dotted border-[#111]/30 mx-2" />
                  <span className="text-[#111]/50">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side text */}
          <div className="md:col-span-4 text-right flex flex-col justify-between">
            <div className="mb-4">
              <Crosshair className="text-[#111]/60 ml-auto mb-4" />
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] block">
                Designed For
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] block">
                Production
              </span>
            </div>
            <div>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] block">
                Precision
              </span>
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] block">
                Manufacturing Works
              </span>
            </div>
          </div>
        </div>

        {/* Footer credits */}
        <div className="flex items-end justify-between mt-12 md:mt-16 pt-6 border-t border-[#111]/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#111]" />
            <div className="w-2 h-2 bg-[#111]" />
          </div>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
            By Serge Tiutyk
          </span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#111]" />
            <div className="w-2 h-2 bg-[#111]" />
          </div>
        </div>
      </div>
    </section>
  );
}
