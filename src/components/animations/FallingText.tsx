"use client";

import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

interface FallingTag {
  text: string;
  badgeStyle?: string;
}

interface FallingTextProps {
  tags?: (string | FallingTag)[];
  gravity?: number;
  className?: string;
  height?: number;
}

const defaultMarketingTags: FallingTag[] = [
  { text: "SEO & AI Search", badgeStyle: "bg-white text-[#970205] border-white/95 shadow-lg font-black" },
  { text: "High-Intent Leads", badgeStyle: "bg-[#0b132b] text-white border-white/35 shadow-xl font-extrabold" },
  { text: "Paid Media ROI", badgeStyle: "bg-amber-400 text-[#0b132b] border-amber-300 shadow-lg font-black" },
  { text: "Conversion Growth", badgeStyle: "bg-white text-[#970205] border-white/95 shadow-lg font-black" },
  { text: "Brand Authority", badgeStyle: "bg-white/95 text-[#0b132b] border-white/80 shadow-md font-bold" },
  { text: "Revenue Scaling", badgeStyle: "bg-white/20 backdrop-blur-md text-white border-white/45 shadow-sm font-bold" },
];

export function FallingText({
  tags = defaultMarketingTags,
  gravity = 0.9,
  className = "",
  height = 240,
}: FallingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isInView, setIsInView] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger physics when entering viewport
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted || !isInView || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 480;
    const currentHeight = container.clientHeight || height;

    const { Engine, World, Bodies, Runner, Events, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: gravity, scale: 0.001 },
    });
    const world = engine.world;

    const wallThickness = 60;
    const ground = Bodies.rectangle(
      width / 2,
      currentHeight + wallThickness / 2 - 4,
      width * 2,
      wallThickness,
      { isStatic: true, render: { visible: false } }
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2 + 4,
      currentHeight / 2,
      wallThickness,
      currentHeight * 3,
      { isStatic: true, render: { visible: false } }
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2 - 4,
      currentHeight / 2,
      wallThickness,
      currentHeight * 3,
      { isStatic: true, render: { visible: false } }
    );

    World.add(world, [ground, leftWall, rightWall]);

    // Create bodies for all pill elements
    const tagBodies: { body: Matter.Body; elem: HTMLDivElement }[] = [];

    elementsRef.current.forEach((elem, i) => {
      if (!elem) return;

      const rect = elem.getBoundingClientRect();
      const elWidth = Math.max(rect.width, 80);
      const elHeight = Math.max(rect.height, 32);

      // Distribute starting positions nicely above the box
      const startX = Math.random() * (width - elWidth - 30) + elWidth / 2 + 15;
      const startY = -40 - (i * 38) - Math.random() * 50;
      const angle = (Math.random() - 0.5) * 0.45;

      const body = Bodies.rectangle(startX, startY, elWidth, elHeight, {
        chamfer: { radius: 14 },
        restitution: 0.55,
        friction: 0.12,
        frictionAir: 0.02,
        angle: angle,
      });

      World.add(world, body);
      tagBodies.push({ body, elem });
    });

    // Add mouse interaction (click & drag pills)
    const mouse = Mouse.create(container);
    // Disable mouse scroll hijacking
    // @ts-expect-error Matter.js mouse scroll attachment override
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    // @ts-expect-error Matter.js mouse DOM wheel override
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    World.add(world, mouseConstraint);

    // Sync HTML element positions to physics simulation
    Events.on(engine, "afterUpdate", () => {
      tagBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        const angle = body.angle;
        elem.style.transform = `translate3d(${x - elem.offsetWidth / 2}px, ${y - elem.offsetHeight / 2}px, 0px) rotate(${angle}rad)`;
        elem.style.visibility = "visible";
      });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: currentHeight + wallThickness / 2 - 4 });
      Matter.Body.setPosition(rightWall, { x: newWidth + wallThickness / 2 - 4, y: currentHeight / 2 });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Runner.stop(runner);
      Events.off(engine, "afterUpdate", () => {});
      World.clear(world, false);
      Engine.clear(engine);
    };
  }, [mounted, isInView, tags, gravity, height]);

  const normalizedTags: FallingTag[] = tags.map((t) =>
    typeof t === "string" ? { text: t, badgeStyle: "bg-white text-[#970205] border-white shadow-md font-bold" } : t
  );

  return (
    <div
      ref={containerRef}
      style={{ height }}
      className={`relative w-full overflow-hidden select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive digital marketing opportunities pills"
    >
      {/* Rendered HTML physics pills */}
      {normalizedTags.map((tag, i) => (
        <div
          key={tag.text + i}
          ref={(el) => {
            elementsRef.current[i] = el;
          }}
          style={{ visibility: "hidden", willChange: "transform" }}
          className={`absolute top-0 left-0 inline-flex items-center px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border text-[12.5px] sm:text-[14px] tracking-tight leading-none whitespace-nowrap cursor-grab active:cursor-grabbing transition-shadow duration-200 hover:scale-105 active:scale-95 ${
            tag.badgeStyle || "bg-white text-[#970205] border-white/90 shadow-md font-bold"
          }`}
        >
          <span>{tag.text}</span>
        </div>
      ))}
    </div>
  );
}
