import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiCopy, FiCheck } from "react-icons/fi";

/**
 * Generic "copy to clipboard" button. Shows a check icon briefly after
 * a successful copy, then resets back to the copy icon.
 *
 * @param {{
 *   value: string,
 *   label?: string,
 *   resetDelay?: number,
 *   className?: string,
 * }} props
 */
export default function CopyButton({ value, label = "Copy", resetDelay = 1800, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), resetDelay);
    } catch {
      // Clipboard API unavailable or denied — fail silently, button stays interactive.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard" : `${label} to clipboard`}
      className={`inline-flex items-center gap-1.5 rounded-full bg-[#1F6F5F] px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#195A4D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F6F5F] ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-1.5"
          >
            <FiCheck aria-hidden="true" className="h-3.5 w-3.5" />
            Copied
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-1.5"
          >
            <FiCopy aria-hidden="true" className="h-3.5 w-3.5" />
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
