import { motion } from "motion/react";
import { FiChevronDown } from "react-icons/fi";

const panelVariants = {
  collapsed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25, delay: 0.05 } },
  },
};

const collapseTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] };

/**
 * Single accessible accordion row: a button header (with rotating
 * chevron) controlling a height-animated, fade-in answer panel.
 *
 * @param {{
 *   id: string,
 *   question: string,
 *   answer: string,
 *   isOpen: boolean,
 *   onToggle: (id: string) => void,
 * }} props
 */
export default function Accordion({ id, question, answer, isOpen, onToggle }) {
  const headerId = `accordion-header-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <h3 className="m-0">
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(id)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F6F5F]"
        >
          <span className="text-base font-semibold text-[#0F172A]">{question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={collapseTransition}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1F6F5F]/10 text-[#1F6F5F]"
          >
            <FiChevronDown aria-hidden="true" className="h-4 w-4" />
          </motion.span>
        </button>
      </h3>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={panelVariants}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-slate-600">{answer}</p>
      </motion.div>
    </div>
  );
}
