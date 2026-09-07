"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeContentProps {
  children: React.ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: [number, number, number, number] | string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

export function FadeContent({
  children,
  blur = true,
  duration = 0.6,
  delay = 0.1,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: initialOpacity,
        filter: blur ? "blur(8px)" : "none",
        y: 16,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }
          : {
              opacity: initialOpacity,
              filter: blur ? "blur(8px)" : "none",
              y: 16,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
