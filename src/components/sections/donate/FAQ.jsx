import { useState } from "react";
import { motion } from "motion/react";
import Accordion from "../../ui/Accordion";
import { fadeUp, viewportOnce } from "./animations";

/**
 * Full-width FAQ section. Only one answer is open at a time; state
 * lives here and is handed down to each Accordion row as props.
 *
 * @param {{ faq: import("../../../data/faqData").faqData }} props
 */
export default function FAQ({ faq }) {
  const [openId, setOpenId] = useState(null);

  if (!faq?.items?.length) return null;

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="w-full bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1F6F5F]">{faq.eyebrow}</p>
          <h2 id="faq-heading" className="mt-2 text-3xl font-bold text-[#0F172A] sm:text-4xl">
            {faq.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8"
        >
          {faq.items.map((item) => (
            <Accordion
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
