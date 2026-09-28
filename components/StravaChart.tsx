"use client";

import { motion, useReducedMotion } from "framer-motion";

// Weekly ACWR values, plotted on a 0.6–1.75 scale. Mirrors the real app's
// chart: optimal band 0.8–1.3, with an amber threshold at 1.3 and a red
// high-risk line at 1.5.
const VALUES = [0.86, 0.97, 1.06, 0.99, 1.1, 1.16, 1.04, 1.62, 1.14, 1.0];
const SPIKE_INDEX = 7;

const W = 240;
const H = 64;
const PAD_X = 8;
const PAD_Y = 6;
const Y_MIN = 0.6;
const Y_MAX = 1.75;

const xAt = (i: number) => PAD_X + (i * (W - 2 * PAD_X)) / (VALUES.length - 1);
const yAt = (v: number) => PAD_Y + ((Y_MAX - v) / (Y_MAX - Y_MIN)) * (H - 2 * PAD_Y);

const POINTS = VALUES.map((v, i) => ({ x: xAt(i), y: yAt(v) }));

// Catmull-Rom -> cubic Bezier, so the line curves smoothly through every point.
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

const yLow = yAt(0.8);
const yOptimalTop = yAt(1.3);
const yHigh = yAt(1.5);
const spike = POINTS[SPIKE_INDEX];

const DRAW_DURATION = 1.4;

export function StravaChart() {
  const prefersReducedMotion = useReducedMotion();
  const animate = !prefersReducedMotion;

  return (
    <motion.div
      className="mt-6"
      initial={animate ? "hidden" : "shown"}
      whileInView="shown"
      viewport={{ once: true, amount: 0.6 }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-16 w-full max-w-xs"
        aria-hidden="true"
      >
        <rect
          x="0"
          y={yOptimalTop}
          width={W}
          height={yLow - yOptimalTop}
          fill="#22c55e"
          fillOpacity="0.12"
        />
        {[
          { y: yLow, color: "#818cf8" },
          { y: yOptimalTop, color: "#f59e0b" },
          { y: yHigh, color: "#ef4444" },
        ].map((line) => (
          <line
            key={line.color}
            x1="0"
            x2={W}
            y1={line.y}
            y2={line.y}
            stroke={line.color}
            strokeWidth="1"
            strokeDasharray="3 3"
            strokeOpacity="0.8"
          />
        ))}
        <motion.path
          d={PATH_D}
          fill="none"
          stroke="#c084fc"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0 },
            shown: {
              pathLength: 1,
              transition: { duration: DRAW_DURATION, ease: "easeInOut" },
            },
          }}
        />
        <motion.g
          variants={{
            hidden: { opacity: 0 },
            shown: {
              opacity: 1,
              transition: { duration: 0.3, delay: DRAW_DURATION * 0.75 },
            },
          }}
        >
          <circle cx={spike.x} cy={spike.y} r="7" fill="#ef4444" fillOpacity="0.2" />
          <circle cx={spike.x} cy={spike.y} r="3.5" fill="#ef4444" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
