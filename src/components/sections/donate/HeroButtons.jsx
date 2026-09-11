import { scrollToId } from "./animations";

const VARIANT_CLASSES = {
  primary:
    "bg-[#1F6F5F] text-white shadow-md shadow-[#1F6F5F]/25 hover:bg-[#195A4D] focus-visible:outline-[#1F6F5F]",
  secondary:
    "bg-white text-[#0F172A] border border-slate-200 hover:bg-slate-50 focus-visible:outline-[#0F172A]",
};

/**
 * Renders the hero's call-to-action buttons and smooth-scrolls to the
 * section each button targets.
 *
 * @param {{ buttons: import("../../../data/heroData").heroData["buttons"] }} props
 */
export default function HeroButtons({ buttons }) {
  if (!buttons?.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {buttons.map((button) => (
        <button
          key={button.id}
          type="button"
          aria-label={button.ariaLabel ?? button.label}
          onClick={() => scrollToId(button.targetId)}
          className={`inline-flex items-center justify-center cursor-pointer rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            VARIANT_CLASSES[button.variant] ?? VARIANT_CLASSES.secondary
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
