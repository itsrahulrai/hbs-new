"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("hbs-theme");
    const initial = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("hbs-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
    >
      <Icon name={theme === "light" ? "renew" : "star"} size={16} />
    </button>
  );
}
