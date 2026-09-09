"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function AboutPhoto() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] sm:rounded-[48px]"
    >
      <Image
        src="/photos/me.jpg"
        alt="Preity Singh"
        fill
        priority
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 100vw"
        className="object-cover"
      />
    </motion.div>
  );
}
