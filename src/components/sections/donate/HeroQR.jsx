import { motion } from "motion/react";
import { FiShield } from "react-icons/fi";
import { SiPaytm, SiGooglepay, SiPhonepe } from "react-icons/si";
import { PiCreditCardBold, PiQrCodeBold } from "react-icons/pi";
import { scaleIn } from "./animations";

const PAYMENT_ICONS = {
  upi: PiQrCodeBold,
  paytm: SiPaytm,
  gpay: SiGooglepay,
  phonepe: SiPhonepe,
  card: PiCreditCardBold,
};

/**
 * Glass QR card shown inside the dark hero panel. Scales in from 0 on
 * first mount to draw the eye immediately.
 *
 * @param {{ qr: import("../../../data/heroData").heroData["qr"] }} props
 */
export default function HeroQR({ qr }) {
  if (!qr) return null;

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="w-full max-w-[280px] sm:max-w-[320px] rounded-3xl border border-white/15 bg-white/10 p-5 sm:p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <div className="rounded-2xl bg-white p-4 shadow-inner">
        <img
          src={qr.image}
          alt={qr.imageAlt}
          width={240}
          height={240}
          loading="lazy"
          decoding="async"
          className="mx-auto aspect-square w-full rounded-lg object-contain"
        />
      </div>

      <p className="mt-4 text-center text-sm font-semibold tracking-wide text-white">
        {qr.caption}
      </p>

      <ul
        className="mt-3 flex flex-wrap items-center justify-center gap-2"
        aria-label="Accepted payment methods"
      >
        {qr.paymentIcons.map((method) => {
          const Icon = PAYMENT_ICONS[method.icon] ?? PiCreditCardBold;
          return (
            <li key={method.id}>
              <span
                title={method.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0F172A]"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">{method.label}</span>
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-200">
        <FiShield aria-hidden="true" className="h-3.5 w-3.5" />
        <span>{qr.secureLabel}</span>
      </div>
    </motion.div>
  );
}
