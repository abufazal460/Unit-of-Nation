import React from 'react';
import { contact } from '../../../data/contact';
import { site } from '../../../data/site';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Button from '../../common/Button';
import Badge from '../../ui/Badge';
import { FaWhatsapp, FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa6';
import { FiMail, FiMapPin, FiClock, FiPhoneCall, FiExternalLink } from 'react-icons/fi';

export function ContactDetailsSection() {
  const socialPlatforms = [
    {
      id: "whatsapp",
      name: "WhatsApp Support",
      handle: "+91 9621555551",
      icon: FaWhatsapp,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
      btnColor: "bg-emerald-600 hover:bg-emerald-700 text-white",
      url: site.whatsappUrl,
      hoverColor: "group-hover:text-[#2A9D8F]",
    },
    {
      id: "facebook",
      name: "Facebook Page",
      handle: "@UniteOfNation",
      icon: FaFacebook,
      color: "text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100",
      btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
      url: "https://www.facebook.com/share/1Md2dFpnck/",
      hoverColor: "group-hover:text-blue-800",
    },
    {
      id: "instagram",
      name: "Instagram",
      handle: "@unitefornationorg",
      icon: FaInstagram,
      color: "text-pink-600 bg-pink-50 border-pink-200 hover:bg-pink-100",
      btnColor: "bg-pink-600 hover:bg-pink-700 text-white",
      url: "https://www.instagram.com/unitefornationorg/",
      hoverColor: "group-hover:text-pink-600",
    },
    {
      id: "X",
      name: "Unite4NationOrg",
      handle: "@UniteOfNation",
      icon: FaXTwitter,
      color: "text-slate-900 bg-slate-100 border-slate-300 hover:bg-slate-200",
      btnColor: "bg-slate-900 hover:bg-slate-800 text-white",
      url: "https://x.com/Unite4NationOrg",
      hoverColor: "group-hover:text-slate-700",
    },
    {
      id: "youtube",
      name: "Unite-for-Nation",
      handle: "Unite For Nation Official",
      icon: FaYoutube,
      color: "text-red-600 bg-red-50 border-red-200 hover:bg-red-100",
      btnColor: "bg-red-600 hover:bg-red-700 text-white",
      url: "https://www.youtube.com/channel/UCBEFl7KofquOu8biYK_YMrQ",
      hoverColor: "group-hover:text-red-700",
    },
   
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#faf8f5]">
      <Container>
        <SectionTitle
          subtitle={contact.subtitle}
          title={contact.title}
          description="Connect directly with our legal secretariat via WhatsApp, Email, or Social Channels."
        />

        {/* Contact Info Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp Card */}
          <Card className="bg-emerald-50/90 border-emerald-200/90 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <FaWhatsapp className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">Fast Legal Desk</span>
              <h3 className="text-xl font-heading font-extrabold text-slate-900">WhatsApp Helpline</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
              Instant consultation for victims and families seeking confidential legal guidance.
            </p>
            <Button
              variant="whatsapp"
              size="md"
              fullWidth
              className="py-3 text-base shadow-xs"
            >
              Chat on WhatsApp
            </Button>
          </Card>

          {/* Email Card */}
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white border border-emerald-200/90 flex items-center justify-center font-bold">
              <FiMail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 ">Official Correspondence</span>
              <h3 className="text-xl font-heading font-bold text-slate-900">Email Secretariat</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
              Send formal documents, case details, and official legal queries directly to our email.
            </p>
            <br />
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-base transition-colors"
            >
              <FiMail className="w-5 h-5" />
              <span>{site.email}</span>
            </a>
          </Card>

          {/* Address Card */}
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white border border-[#DADCE0] flex items-center justify-center font-bold">
              <FiMapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">Head Office</span>
              <h3 className="text-xl font-heading font-bold text-slate-900">Secretariat Office</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
              {contact.officeAddress.building}, <br /> {contact.officeAddress.org}, <br /> {contact.officeAddress.street}, {contact.officeAddress.city}, {contact.officeAddress.state} - {contact.officeAddress.pincode}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#2A9D8F] bg-[#2A9D8F]/10 p-2.5 rounded-lg border border-[#2A9D8F]">
              <FiClock className="w-4 h-4 text-[#2A9D8F] shrink-0" />
              <span>All day: 10:00 AM - 8:00 PM</span>
            </div>
          </Card>
        </div>

        {/* Social Media Channels Section */}
        <div className="space-y-6 pt-4 border-t border-slate-200">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <Badge variant="red" size="md">Official Connect Channels</Badge>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              Follow & Reach Us On Social Media
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Click any platform below to connect with Unite For Nation on official channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
            {socialPlatforms.map((social) => {
              const IconComp = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-slate-400 hover:shadow-md flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${social.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`text-base sm:text-lg font-heading font-bold text-slate-900  transition-colors ${social.hoverColor}`}>
                        {social.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-mono">
                        {social.handle}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-red-50 text-slate-600 group-hover:text-red-700 flex items-center justify-center transition-colors">
                    <FiExternalLink className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactDetailsSection;
