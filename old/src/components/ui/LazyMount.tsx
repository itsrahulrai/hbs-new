"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Defers rendering of below-the-fold sections until they're about to enter
 * the viewport, cutting initial hydration work. Reserves `minHeight` so the
 * skeleton-to-content swap doesn't shift layout (avoids CLS).
 */
export function LazyMount({
  children,
  fallback,
  minHeight = 400,
  rootMargin = "300px",
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
  minHeight?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : fallback}
    </div>
  );
}
