import React from "react";
import { footer } from "../../data/footer";
import { site } from "../../data/site";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FiMail, FiMapPin } from "react-icons/fi";

export function Footer() {
  const socialIcons = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: site.whatsappUrl,
      color: "hover:text-emerald-600 hover:bg-emerald-50",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/share/1Md2dFpnck/",
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/unitefornationorg/",
      color: "hover:text-pink-600 hover:bg-pink-50",
    },
    {
      name: "Twitter / X",
      icon: FaXTwitter,
      url: "https://x.com/Unite4NationOrg",
      color: "hover:text-slate-900 hover:bg-slate-200",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/channel/UCBEFl7KofquOu8biYK_YMrQ",
      color: "hover:text-red-600 hover:bg-red-50",
    },
    
  ];

  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200/80 pt-14  text-sm font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                  {site.name}
                </h3>
                <p className="text-xs text-[#2A9D8F] font-mono font-bold uppercase tracking-wider">
                 A Human Rights Organization
                </p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {footer.aboutText}
            </p>

            {/* Social Icons Row */}
            <div className="pt-2 flex items-center gap-2 flex-wrap">
              {socialIcons.map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center transition-all ${social.color}`}
                  >
                    <IconComp className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (4 pages) */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-base">
              {footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-700 hover:text-[#2A9D8F] font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Secretariat */}
          <div className="space-y-4">
            <h4 className="text-sm font-heading font-bold text-slate-900 uppercase tracking-wider font-mono">
              Secretariat Desk
            </h4>
            <div className="space-y-3 text-sm sm:text-base text-slate-700">
              <a
                href={site.whatsappUrl}
                target="__blank"
                className="flex items-center gap-2.5 text-emerald-700 font-bold hover:underline"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>WhatsApp Support Desk</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-slate-900"
              >
                <FiMail className="w-5 h-5 text-slate-500 shrink-0" />
                <span>{site.email}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <FiMapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>{site.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-200 text-center space-y-3">
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto italic">
            {footer.legalDisclaimer}
          </p>
          <p className="text-xs sm:text-sm font-mono text-slate-500 font-medium">
            {footer.copyright}
          </p>
          <p className="text-xs sm:text-sm font-body border-t pb-2 pt-2 border-slate-200 text-slate-500 font-light">
            {footer.developer.title}{" "}
            <a
              href={footer.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all duration-300"
            >
              {footer.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
