"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";

const GLOW_SIZE = 260;

export function CursorGlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 180, damping: 24, mass: 0.4 });
  const springY = useSpring(glowY, { stiffness: 180, damping: 24, mass: 0.4 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Snap the glow to whichever edge of the container is nearest the
    // cursor, so the halo reads as travelling around the border.
    const distances = {
      left: x,
      right: rect.width - x,
      top: y,
      bottom: rect.height - y,
    };
    const nearest = Object.entries(distances).reduce((a, b) =>
      a[1] < b[1] ? a : b,
    )[0];

    const nearestX = nearest === "left" ? 0 : nearest === "right" ? rect.width : x;
    const nearestY = nearest === "top" ? 0 : nearest === "bottom" ? rect.height : y;

    glowX.set(nearestX - GLOW_SIZE / 2);
    glowY.set(nearestY - GLOW_SIZE / 2);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-[32px] border border-electric/40 bg-cream/[0.04] p-10 sm:rounded-[40px] sm:p-14 ${className}`}
    >
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 rounded-full"
          style={{
            width: GLOW_SIZE,
            height: GLOW_SIZE,
            x: springX,
            y: springY,
            opacity: isHovered ? 1 : 0,
            background:
              "radial-gradient(circle, rgba(38,90,223,0.55), rgba(38,90,223,0) 70%)",
            filter: "blur(28px)",
            transition: "opacity 0.3s ease",
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
