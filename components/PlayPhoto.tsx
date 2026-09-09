"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type PlayPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export function PlayPhoto({ src, alt, className = "" }: PlayPhotoProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-[32px] sm:rounded-[40px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        draggable={false}
        sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 300px"
        className="pointer-events-none select-none object-cover"
      />
    </motion.div>
  );
}
