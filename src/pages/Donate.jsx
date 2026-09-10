import { useEffect } from "react";
import Hero from "../components/sections/donate/Hero";
import DonationMethod from "../components/sections/donate/DonationMethod";
import Transparency from "../components/sections/donate/Transparency";
import FAQ from "../components/sections/donate/FAQ";
import CTA from "../components/sections/donate/CTA";
import { heroData } from "../data/heroData";
import { donationMethodData } from "../data/donationMethodData";
import { transparencyData } from "../data/transparencyData";
import { faqData, finalCtaData } from "../data/faqData";
import MainLayout from "../components/layout/MainLayout";

export default function Donate() {
   useEffect(() => {
    document.title = "Donate — Unit for Nation | Legal Aid for the Wrongly Accused";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute(
      "content",
      "Support Unit for Nation's mission to provide legal aid, emergency bail assistance and human rights protection to individuals facing false accusations."
    );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://unitefornation.com/donate");

    return () => {
      document.title = "Unite For Nation | Human Rights Organization & Legal Support in India";
      if (canonical) canonical.setAttribute("href", "https://unitefornation.com/");
    };
  }, []);
  return (
    <MainLayout currentPath="/donate">
    <main id="main-content" className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">

      <Hero hero={heroData} />
      <DonationMethod donationMethod={donationMethodData} />
      <Transparency transparency={transparencyData} />
      <FAQ faq={faqData} />
      <CTA cta={finalCtaData} />
    </main>
    </MainLayout>
  );
}
