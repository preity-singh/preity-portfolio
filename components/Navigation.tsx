"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type MouseEvent } from "react";

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "play", href: "#play" },
  { label: "contact", href: "#contact" },
];

export function Navigation() {
  const headerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function updateNavHeight() {
      if (!headerRef.current) return;
      document.documentElement.style.setProperty(
        "--nav-height",
        `${headerRef.current.offsetHeight}px`,
      );
    }
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.querySelector(href);
    if (!(target instanceof HTMLElement)) return;
    event.preventDefault();

    const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const targetY = target.getBoundingClientRect().top + window.scrollY - offset;

    if (prefersReducedMotion) {
      window.scrollTo(0, targetY);
    } else {
      animate(window.scrollY, targetY, {
        duration: 0.6,
        ease: [0.45, 0, 0.55, 1],
        onUpdate: (value) =>
          window.scrollTo({ top: value, left: 0, behavior: "instant" }),
      });
    }
    history.pushState(null, "", href);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-midnight text-cream"
    >
      <nav
        aria-label="Primary"
        className="flex flex-col items-center gap-3 px-[26px] py-[22px] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-[66px] sm:py-[26px]"
      >
        <a
          href="#"
          className="font-serif text-[22px] tracking-tight"
          aria-label="preity, back to top"
        >
          preity.
        </a>
        <ul className="flex items-center gap-6 font-sans text-[17.6px] sm:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="group relative inline-block py-1 text-cream/90 transition-colors hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-electric transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
