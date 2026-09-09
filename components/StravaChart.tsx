"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Illustrative ACWR trend — not a claim about real training data. Points
// mark meaningful peaks/valleys/direction-changes in the ratio.
const POINTS = [
  { x: 0, y: 34 },
  { x: 40, y: 46 },
  { x: 80, y: 20 },
  { x: 120, y: 38 },
  { x: 160, y: 10 },
  { x: 200, y: 32 },
  { x: 240, y: 22 },
];

const TRAVEL_SAMPLES = 60;

// Catmull-Rom -> cubic Bezier, so the line curves smoothly through every
// point instead of the straight-segment sparkline this replaced.
function smoothPath(points: typeof POINTS) {
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
  }
  return d;
}

const PATH_D = smoothPath(POINTS);

export function StravaChart() {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const [travel, setTravel] = useState<{ cx: number[]; cy: number[] }>({
    cx: [POINTS[0].x],
    cy: [POINTS[0].y],
  });

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    const cx: number[] = [];
    const cy: number[] = [];
    for (let i = 0; i <= TRAVEL_SAMPLES; i++) {
      const point = path.getPointAtLength((i / TRAVEL_SAMPLES) * length);
      cx.push(point.x);
      cy.push(point.y);
    }
    setTravel({ cx, cy });
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mt-6"
    >
      <svg viewBox="0 0 240 64" className="h-16 w-full max-w-xs" aria-hidden="true">
        <path
          ref={pathRef}
          d={PATH_D}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-cream/40 transition-colors duration-300 ${
            isHovered ? "text-cream/70" : ""
          }`}
        />
        {POINTS.map((point) => (
          <circle
            key={`${point.x}-${point.y}`}
            cx={point.x}
            cy={point.y}
            r="1.6"
            fill="currentColor"
            className="text-cream/30"
          />
        ))}
        {!prefersReducedMotion && (
          <motion.circle
            r="3.5"
            className="text-electric"
            fill="currentColor"
            animate={
              isHovered
                ? { cx: travel.cx, cy: travel.cy }
                : { cx: POINTS[0].x, cy: POINTS[0].y }
            }
            transition={
              isHovered
                ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.2 }
            }
            opacity={isHovered ? 1 : 0}
          />
        )}
      </svg>
    </div>
  );
}
