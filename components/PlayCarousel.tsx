"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CarouselPhoto } from "@/lib/photos";
import { PlayPhoto } from "./PlayPhoto";

type PlayCarouselProps = {
  photos: CarouselPhoto[];
};

const buttonClass =
  "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-midnight text-cream transition-opacity duration-200 hover:bg-electric disabled:pointer-events-none disabled:opacity-0";

export function PlayCarousel({ photos }: PlayCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [photos, updateEdges]);

  function scrollByPage(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={updateEdges}
        className="flex gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain [scrollbar-width:none] sm:gap-8 [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo) => (
          <PlayPhoto
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="aspect-[4/5] h-[380px] w-auto shrink-0 sm:h-[440px] lg:h-[520px]"
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="previous photos"
        disabled={!canScrollLeft}
        onClick={() => scrollByPage(-1)}
        className={`${buttonClass} left-3 sm:left-4`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="next photos"
        disabled={!canScrollRight}
        onClick={() => scrollByPage(1)}
        className={`${buttonClass} right-3 sm:right-4`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
