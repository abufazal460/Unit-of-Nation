import { motion } from "framer-motion";
import { FiShield  } from "react-icons/fi";
import { MdOutlineVerified , MdOutlineBalance  } from "react-icons/md";
import {  GiGavel } from "react-icons/gi";
import HeroButtons from "./HeroButtons";
import HeroQR from "./HeroQR";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./animations";

const BADGE_ICONS = {
  shield: FiShield,
  badgeCheck: MdOutlineVerified,
  scale: MdOutlineBalance,
  gavel: GiGavel,
};

/**
 * Top-of-page hero: heading + copy + CTAs on the light panel, a dark
 * panel with the donation QR on larger screens.
 *
 * @param {{ hero: import("../../../data/heroData").heroData }} props
 */
export default function Hero({ hero }) {
  if (!hero) return null;

  return (
    <section aria-labelledby="donate-hero-heading" className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="flex flex-col justify-center gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <motion.h1
            id="donate-hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-5xl"
          >
            {hero.headingLines.map((line, index) => (
              <span key={line} className="block">
                {index === hero.headingLines.length - 1 ? (
                  <span className="text-[#1F6F5F]">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <HeroButtons buttons={hero.buttons} />
          </motion.div>

          <motion.ul
            variants={staggerContainer(0.08, 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-2 flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Trust indicators"
          >
            {hero.trustBadges.map((badge) => {
              const Icon = BADGE_ICONS[badge.icon] ?? FiShield;
              return (
                <motion.li
                  key={badge.id}
                  variants={staggerItem}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <Icon aria-hidden="true" className="h-4 w-4 text-[#1F6F5F]" />
                  <span>{badge.label}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        <div className="relative flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#134E4A] px-6 py-16 sm:py-20 lg:py-0 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl hidden lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-[#1F6F5F]/30 blur-3xl hidden lg:block"
          />
          <HeroQR qr={hero.qr} />
        </div>
      </div>
    </section>
  );
}
