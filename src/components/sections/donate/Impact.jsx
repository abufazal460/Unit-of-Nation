import { motion } from "framer-motion";
import CounterCard from "./CounterCard";
import { slideInLeft, slideInRight, viewportOnce } from "./animations";

/**
 * "Why Your Support Matters" section: illustration + copy, followed by
 * an animated grid of impact counters.
 *
 * @param {{ impact: import("../../../data/impactData").impactData }} props
 */
export default function Impact({ impact }) {
  if (!impact) return null;

  return (
    <section id="impact" aria-labelledby="impact-heading" className="bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.img
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          src={impact.image}
          alt={impact.imageAlt}
          width={560}
          height={420}
          loading="lazy"
          decoding="async"
          className="mx-auto w-full max-w-md rounded-3xl object-contain"
        />

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1F6F5F]">
            {impact.eyebrow}
          </p>
          <h2 id="impact-heading" className="mt-2 text-3xl font-bold text-[#0F172A] sm:text-4xl">
            {impact.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {impact.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {impact.counters?.length ? (
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {impact.counters.map((counter) => (
            <CounterCard
              key={counter.id}
              value={counter.value}
              decimals={counter.decimals}
              suffix={counter.suffix}
              label={counter.label}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
