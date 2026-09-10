import { motion } from "motion/react";
import { GiLifeInTheBalance  } from "react-icons/gi";
import { fadeUp, scrollToId, viewportOnce } from "./animations";

/**
 * Closing call-to-action banner. Its button reuses `scrollToId` so it
 * shares the exact same Lenis-aware smooth-scroll behavior as the
 * hero CTAs.
 *
 * @param {{ cta: import("../../../data/faqData").finalCtaData }} props
 */
export default function CTA({ cta }) {
  if (!cta) return null;

  return (
    <section aria-labelledby="final-cta-heading" className="bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#134E4A] px-6 py-12 text-center shadow-lg sm:px-12 sm:py-16"
      >
        <GiLifeInTheBalance 
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 text-white/5 sm:h-56 sm:w-56"
        />

        <h2 id="final-cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
          {cta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {cta.description}
        </p>

        <button
          type="button"
          aria-label={cta.button.ariaLabel ?? cta.button.label}
          onClick={() => scrollToId(cta.button.targetId)}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#12343b] transition-colors duration-200 hover:bg-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {cta.button.label}
        </button>
      </motion.div>
    </section>
  );
}
