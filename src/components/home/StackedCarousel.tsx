import { useCallback, useEffect, useRef, useState } from "react";

/*
 * Every image in src/assets/about-carousel/ becomes a card, in filename order.
 * Name files "<number>-<Caption>.webp", e.g. "5-Rubber.webp": the number sets
 * the order and the rest of the name is shown as the card's caption.
 */
const modules = import.meta.glob<string>(
  "@/assets/about-carousel/*.{webp,jpg,jpeg,png}",
  { eager: true, import: "default" }
);

const slides = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => {
    const file = path.split("/").pop() ?? "";
    const caption = file.replace(/\.[^.]+$/, "").replace(/^\d+\s*[-_.]\s*/, "");
    return { src: modules[path], caption };
  });

const AUTOPLAY_MS = 2500;

/* Position of slide i relative to the active one, wrapping around the ends. */
const relativeOffset = (i: number, active: number, total: number) => {
  let d = i - active;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
};

export const StackedCarousel = () => {
  const total = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (step: number) => setActive((i) => (i + step + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, total, go]);

  if (total === 0) return null;

  // Show up to 2 cards on each side, but never more than fit symmetrically.
  const maxSide = Math.min(2, Math.floor((total - 1) / 2));

  return (
    <div
      className="stacked-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        touchStartX.current = null;
        setPaused(false);
        if (start === null) return;
        const dx = e.changedTouches[0].clientX - start;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
      aria-roledescription="carousel"
      aria-label="Industries we serve"
    >
      <div className="stacked-carousel__stage">
        {slides.map((slide, i) => {
          const offset = relativeOffset(i, active, total);
          const abs = Math.abs(offset);
          const visible = abs <= Math.max(maxSide, 1);
          return (
            <figure
              key={slide.src}
              className="stacked-carousel__card"
              data-active={offset === 0}
              aria-hidden={offset !== 0}
              onClick={() => offset !== 0 && go(offset)}
              style={{
                transform: `translateX(${offset * 30}%) scale(${1 - abs * 0.14}) rotateY(${offset * -12}deg)`,
                zIndex: 10 - abs,
                opacity: visible ? 1 : 0,
                filter: abs === 0 ? "none" : `brightness(${1 - abs * 0.2})`,
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              <img src={slide.src} alt={slide.caption} loading="lazy" draggable={false} />
              {slide.caption && (
                <figcaption className="stacked-carousel__caption">{slide.caption}</figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {total > 1 && (
        <div className="stacked-carousel__dots">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show ${slide.caption || `image ${i + 1}`}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={i === active ? "is-active" : ""}
              />
            ))}
        </div>
      )}
    </div>
  );
};
