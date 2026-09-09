"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const SPARKLE_PATH =
  "M12 2.5c.3 3.2 1 5.4 2.1 6.5 1.1 1.1 3.3 1.8 6.5 2.1-3.2.3-5.4 1-6.5 2.1-1.1 1.1-1.8 3.3-2.1 6.5-.3-3.2-1-5.4-2.1-6.5C8.8 12.1 6.6 11.4 3.4 11.1c3.2-.3 5.4-1 6.5-2.1 1.1-1.1 1.8-3.3 2.1-6.5Z";

export function Sparkle({
  className = "",
  initialRotate = 0,
}: {
  className?: string;
  initialRotate?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const rotation = useRef(initialRotate);

  useEffect(() => {
    if (prefersReducedMotion) return;
    controls.set({ rotate: initialRotate });
    controls.start({
      rotate: initialRotate + 360,
      transition: { duration: 50, repeat: Infinity, ease: "linear" },
    });
  }, [controls, prefersReducedMotion, initialRotate]);

  const handleHoverStart = () => {
    if (prefersReducedMotion) return;
    rotation.current += 360;
    controls
      .start({
        rotate: rotation.current,
        transition: { duration: 0.6, ease: "easeInOut" },
      })
      .then(() => {
        controls.start({
          rotate: rotation.current,
          transition: { duration: 50, repeat: Infinity, ease: "linear" },
        });
      });
  };

  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      animate={controls}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.12 }}
      onHoverStart={handleHoverStart}
    >
      <path d={SPARKLE_PATH} />
    </motion.svg>
  );
}
