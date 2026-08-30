"use client";

import { useEffect } from "react";

/* SectionScrollSpy — one section head visible at a time.

   The section whose box straddles the trigger line (38% of the viewport,
   min 180px) is the "current" one. Its head gets `.is-current`; every
   other `data-fade-head` fades out. Scrolling up or down resolves the
   same way, and when the line sits in a non-participating region (hero,
   Experience, Research) no head is current, so all fade out.

   Progressive enhancement: the `data-fade-head` attribute is inert until
   this mounts and adds `.spy-active` to <html>, so headers stay visible
   without JavaScript. */
export function SectionScrollSpy() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("spy-active");

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-spy]"),
    );
    const heads = Array.from(
      document.querySelectorAll<HTMLElement>("[data-fade-head]"),
    );

    let ticking = false;
    let current: string | null = null;

    const update = () => {
      ticking = false;
      const triggerY = Math.max(180, window.innerHeight * 0.38);
      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= triggerY && rect.bottom > triggerY;
      });
      const next = currentSection?.dataset.spy ?? null;
      if (next === current) return;
      current = next;
      for (const head of heads) {
        head.classList.toggle("is-current", head.dataset.fadeHead === next);
      }
      for (const section of sections) {
        section.classList.toggle("is-current", section.dataset.spy === next);
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
      root.classList.remove("spy-active");
    };
  }, []);

  return null;
}
