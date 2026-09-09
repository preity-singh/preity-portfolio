"use client";

import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CarouselPhoto } from "@/lib/photos";
import { PlayPhoto } from "./PlayPhoto";

type PlayCarouselProps = {
  photos: CarouselPhoto[];
};

export function PlayCarousel({ photos }: PlayCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [maxDrag, setMaxDrag] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    function measure() {
      if (!containerRef.current || !trackRef.current) return;
      const overflow =
        trackRef.current.scrollWidth - containerRef.current.clientWidth;
      setMaxDrag(Math.max(0, overflow));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [photos]);

  // One-time nudge so the strip's motion — not an arrow or dot — signals
  // it's draggable; skipped entirely under prefers-reduced-motion.
  useEffect(() => {
    if (prefersReducedMotion || maxDrag === 0) return;
    const timeout = setTimeout(() => {
      controls.start({
        x: [0, -48, 0],
        transition: { duration: 1.1, ease: "easeInOut", times: [0, 0.6, 1] },
      });
    }, 700);
    return () => clearTimeout(timeout);
  }, [maxDrag, prefersReducedMotion, controls]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        ref={trackRef}
        drag={prefersReducedMotion ? false : "x"}
        dragConstraints={{ left: -maxDrag, right: 0 }}
        dragElastic={0.06}
        animate={controls}
        className="flex w-max cursor-grab gap-6 active:cursor-grabbing sm:gap-8"
      >
        {photos.map((photo) => (
          <PlayPhoto
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="aspect-[4/5] h-[380px] w-auto shrink-0 sm:h-[440px] lg:h-[520px]"
          />
        ))}
      </motion.div>
    </div>
  );
}
