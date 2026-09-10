import { motion } from "motion/react";
import { FiFileText, FiBriefcase, FiCheckCircle, FiShield, FiLock, FiCreditCard } from "react-icons/fi";
import { staggerContainer, staggerItem, viewportOnce } from "./animations";

const ICONS = {
  fileText: FiFileText,
  briefcase: FiBriefcase,
  checkCircle: FiCheckCircle,
  shieldCheck: FiShield,
  lock: FiLock,
  creditCard: FiCreditCard,
};

/**
 * Grid of short transparency assurances shown below the donation
 * methods section.
 *
 * @param {{ transparency: import("../../../data/transparencyData").transparencyData }} props
 */
export default function Transparency({ transparency }) {
  if (!transparency?.items?.length) return null;

  return (
    <section
      id="transparency"
      aria-labelledby="transparency-heading"
      className="bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1F6F5F]">
          {transparency.eyebrow}
        </p>
        <h2 id="transparency-heading" className="mt-2 max-w-2xl text-3xl font-bold text-[#0F172A] sm:text-4xl">
          {transparency.heading}
        </h2>

        <motion.ul
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {transparency.items.map((item) => {
            const Icon = ICONS[item.icon] ?? FiShieldCheck;
            return (
              <motion.li
                key={item.id}
                variants={staggerItem}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F6F5F]/10 text-[#1F6F5F]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-[#0F172A]">{item.title}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
