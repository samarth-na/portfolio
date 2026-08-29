"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setHidden(false);
      return;
    }

    // Respect reduced-motion: show content without animating it.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setHidden(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);

    // Fallback for mobile / edge cases where observer never fires.
    // Ensures sections don't stay permanently hidden (black screen).
    const fallback = window.setTimeout(() => setHidden(false), 900);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${hidden ? "js-hidden" : "visible"} ${className}`}
    >
      {children}
    </div>
  );
}
