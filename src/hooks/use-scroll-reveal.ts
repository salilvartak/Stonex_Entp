import { useCallback, useRef } from "react";

/**
 * Adds `is-visible` to every `[data-reveal]` element inside the container
 * once it scrolls into view (once only). Pair with the `.reveal` CSS class.
 *
 * Usage: const ref = useScrollReveal<HTMLDivElement>(); <div ref={ref}>…</div>
 */
export function useScrollReveal<T extends HTMLElement>() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  return useCallback((container: T | null) => {
    observerRef.current?.disconnect();
    observerRef.current = null;
    if (!container) return;

    const targets = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    observerRef.current = observer;
  }, []);
}

/** Stagger used by the 4-column grids: row 1 → 0–300ms, row 2 → 100–400ms … */
export const gridRevealDelay = (index: number, columns = 4) =>
  `${Math.min((index % columns) + Math.floor(index / columns), 5) * 100}ms`;
