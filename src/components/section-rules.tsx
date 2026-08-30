"use client";

import { useEffect } from "react";

/* SectionRules — fills each section rule's accent bar with scroll progress.

   Progress = how far the section's box has passed the trigger line
   (38% of the viewport, min 180px — the same line SectionScrollSpy
   uses). 0 when the section sits below the line, 1 when it has fully
   scrolled past. One rAF-throttled handler drives every rule. */
export function SectionRules() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rules = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rule]"),
    );
    if (rules.length === 0) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const triggerY = Math.max(180, window.innerHeight * 0.38);
      for (const rule of rules) {
        const section = rule.closest("section");
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (triggerY - rect.top) / rect.height),
        );
        rule.style.setProperty(
          "--rule-fill",
          `${(progress * 100).toFixed(1)}%`,
        );
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    // Re-run after Reveal entrances finish so section boxes settle.
    const delayed = window.setTimeout(update, 700);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearTimeout(delayed);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
