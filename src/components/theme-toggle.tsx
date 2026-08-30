"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mount, setMount] = useState(false);

  // Hydrate the button only after the theme script in <body> has run,
  // so the initial data-theme matches before we read it.
  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (!mount) return;
    const root = document.documentElement;
    const btn = document.getElementById(
      "themeToggle",
    ) as HTMLButtonElement | null;
    if (!btn) return;

    const sync = () => {
      const light = root.dataset.theme === "light";
      btn.setAttribute(
        "aria-label",
        light ? "Switch to dark theme" : "Switch to light theme",
      );
      btn.title = light ? "Switch to dark theme" : "Switch to light theme";
    };

    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("papers-theme", next);
      } catch {}
      sync();
    });

    sync();
  }, [mount]);

  return (
    <button
      id="themeToggle"
      type="button"
      className="m-theme-toggle"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="icon-sun" aria-hidden="true">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </span>
      <span className="icon-moon" aria-hidden="true">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
