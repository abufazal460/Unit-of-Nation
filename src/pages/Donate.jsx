import Hero from "../components/sections/donate/Hero";
import TrustCards from "../components/sections/donate/TrustCards";
import Impact from "../components/sections/donate/Impact";
import DonationAmount from "../components/sections/donate/DonationAmount";
import DonationMethod from "../components/sections/donate/DonationMethod";
import Transparency from "../components/sections/donate/Transparency";
import Verification from "../components/sections/donate/Verification";
// import Testimonials from "../components/sections/donate/Testimonials";
import FAQ from "../components/sections/donate/FAQ";
import CTA from "../components/sections/donate/CTA";
import { heroData } from "../data/heroData";
import { trustData } from "../data/trustData";
import { impactData } from "../data/impactData";
import { donationAmountData } from "../data/donationAmountData";
import { donationMethodData } from "../data/donationMethodData";
import { transparencyData } from "../data/transparencyData";
import { verificationData } from "../data/verificationData";
// import { testimonialData, TestimonialsData } from "../data/testimonialData"
import { faqData, finalCtaData } from "../data/faqData";
import MainLayout from "../components/layout/MainLayout";

/**
 * Donate page for Unit of Nation. Composes every sections from its own
 * data file so all copy, images, icons, numbers, bank details and FAQ
 * content stay editable in one place without touching component code.
 *
 * sections order mirrors the reference layout: hero → trust bar →
 * impact story + counters → tiered giving → donation methods →
 * transparency → verification → FAQ → final CTA.
 */
export default function Donate() {
  return (
    <MainLayout currentPath="/donate">
    <main id="main-content" className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <title>Donate — Unit of Nation | Legal Aid for the Wrongly Accused</title>
      <meta
        name="description"
        content="Support Unit of Nation's mission to provide legal aid, emergency bail assistance and human rights protection to individuals facing false accusations."
      />

      <Hero hero={heroData} />
      <TrustCards trust={trustData} />
      <Impact impact={impactData} />
      <DonationAmount donationAmount={donationAmountData} />
      <DonationMethod donationMethod={donationMethodData} />
      <Transparency transparency={transparencyData} />
      <Verification verification={verificationData} />
      {/* <Testimonials verification={testimonialData} /> */}
      <FAQ faq={faqData} />
      <CTA cta={finalCtaData} />
    </main>
    </MainLayout>
  );
}
