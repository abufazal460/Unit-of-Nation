import { motion } from "motion/react";
import { FiDownload } from "react-icons/fi";
import CopyButton from "../../ui/CopyButton";
import { fadeUp, scaleIn, viewportOnce } from "./animations";

/**
 * Handles the QR "Download QR" action by triggering a browser download
 * of the QR image via a temporary anchor element.
 */
function downloadQr(image, fileName) {
  const link = document.createElement("a");
  link.href = image;
  link.download = fileName || "donation-qr.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Donation Methods section: a glass card holding a downloadable QR on
 * one side and UPI / bank transfer details (with copy-to-clipboard)
 * on the other.
 *
 * @param {{ donationMethod: import("../../../data/donationMethodData").donationMethodData }} props
 */
export default function DonationMethod({ donationMethod }) {
  if (!donationMethod) return null;

  const { qr, upi, bank } = donationMethod;

  return (
    <section
      id="donation-method"
      aria-labelledby="donation-method-heading"
      className="bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1F6F5F]">
            {donationMethod.eyebrow}
          </p>
          <h2 id="donation-method-heading" className="mt-2 max-w-2xl text-3xl font-bold text-[#0F172A] sm:text-4xl">
            {donationMethod.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-8 rounded-3xl border border-[#1F6F5F]/15 bg-[#1F6F5F]/5 p-6 shadow-sm backdrop-blur-xl sm:p-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:gap-10"
        >
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-full max-w-[240px] rounded-2xl bg-white p-4 shadow-md">
              <img
                src={qr.image}
                alt={qr.imageAlt}
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                className="mx-auto aspect-square w-full rounded-lg object-contain"
              />
            </div>
            <button
              type="button"
              onClick={() => downloadQr(qr.image, qr.downloadFileName)}
              className="inline-flex items-center gap-2 rounded-full bg-[#1F6F5F] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#195A4D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F6F5F]"
            >
              <FiDownload aria-hidden="true" className="h-4 w-4" />
              {qr.downloadLabel}
            </button>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{upi.label}</p>
              <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-white/70 p-3">
                <span className="truncate text-sm font-medium text-[#0F172A]">{upi.id}</span>
                <CopyButton value={upi.id} label="Copy" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{bank.label}</p>
              <dl className="mt-2 divide-y divide-slate-200/70 rounded-xl bg-white/70">
                {bank.fields.map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-wrap items-center justify-between gap-3 px-3 py-3 first:rounded-t-xl last:rounded-b-xl"
                  >
                    <dt className="text-sm text-slate-500">{field.label}</dt>
                    <div className="flex items-center gap-3">
                      <dd className="text-sm font-medium text-[#0F172A]">{field.value}</dd>
                      {field.copyable ? <CopyButton value={field.value} label="Copy" /> : null}
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
