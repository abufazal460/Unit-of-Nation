import React, { useEffect, useRef, useState } from 'react';
import { hero } from '../../../data/hero';

const AUTO_ADVANCE_MS = 3000;

/**
 * Image-only Hero slider.
 * - Single horizontal track, translateX-based sliding (GPU-accelerated, no reflow).
 * - Fixed aspect-ratio wrapper => zero CLS regardless of image load timing.
 * - One interval, always torn down on unmount/dependency change.
 * - Respects prefers-reduced-motion (instant swap, no slide animation).
 * - Scales to any number of images in hero.images without logic changes.
 */
export function HeroSection() {
  const images = hero.images ?? [];
  const slideCount = images.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotionRef = useRef(false);
  const [, forceRerenderOnMotionChange] = useState(0);

  // Track reduced-motion preference (ref for the interval, state to trigger one re-render)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mediaQuery.matches;
    forceRerenderOnMotionChange((n) => n + 1);

    const handleChange = (event) => {
      prefersReducedMotionRef.current = event.matches;
      forceRerenderOnMotionChange((n) => n + 1);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Single auto-advance timer, always cleaned up
  useEffect(() => {
    if (slideCount <= 1) return undefined;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(intervalId);
  }, [slideCount]);

  // Guard against index drift if the data array shrinks at runtime
  useEffect(() => {
    if (activeIndex >= slideCount && slideCount > 0) {
      setActiveIndex(0);
    }
  }, [slideCount, activeIndex]);

  if (slideCount === 0) return null;

  const isReducedMotion = prefersReducedMotionRef.current;

  return (
    <section aria-label="Unite For Nation highlights" className="w-full overflow-hidden">
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-100">
        <div
          className={`flex h-full ${
            isReducedMotion ? '' : 'transition-transform duration-700 ease-in-out'
          }`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-full h-full flex-shrink-0 object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;