"use client";

import { useLanguage } from "@/lib/language-context";

function SmilerLogoFooter() {
  return (
    <svg width="100" height="28" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Smiler logo">
      <path d="M8 8C8 8 10 16 16 16C22 16 24 8 24 8" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
      <circle cx="10" cy="6" r="2" fill="#FF6B6B" />
      <circle cx="22" cy="6" r="2" fill="#FF6B6B" />
      <text x="32" y="22" fontFamily="DM Sans, sans-serif" fontSize="20" fontWeight="700" fill="#ffffff">
        smiler
      </text>
    </svg>
  );
}

function SocialIcon({ type }: { type: "instagram" | "facebook" | "twitter" | "tiktok" }) {
  const paths: Record<string, JSX.Element> = {
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </>
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    twitter: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    tiktok: (
      <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  };

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#ffffff]/60 transition-colors hover:text-[#ffffff]" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: t("footer.about"), href: "#" },
      { label: t("footer.careers"), href: "#" },
      { label: t("footer.press"), href: "#" },
      { label: t("footer.blog"), href: "#" },
    ],
    support: [
      { label: t("footer.support"), href: "#" },
      { label: t("footer.terms"), href: "#" },
      { label: t("footer.privacy"), href: "#" },
      { label: t("footer.cookies"), href: "#" },
    ],
    services: [
      { label: t("footer.photographers"), href: "#" },
      { label: t("footer.partners"), href: "#" },
    ],
  };

  return (
    <footer className="bg-smiler-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Social */}
          <div className="flex flex-col gap-6">
            <a href="/" aria-label="Smiler home">
              <SmilerLogoFooter />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-[#ffffff]/60">
              Capturing moments that matter. Book professional photographers in 150+ locations worldwide.
            </p>
            <div className="flex items-center gap-4">
              {(["instagram", "facebook", "twitter", "tiktok"] as const).map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`Follow us on ${social}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffffff]/10 transition-colors hover:bg-[#ffffff]/20"
                >
                  <SocialIcon type={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ffffff]/40">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#ffffff]/60 transition-colors hover:text-[#ffffff]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ffffff]/40">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#ffffff]/60 transition-colors hover:text-[#ffffff]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ffffff]/40">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#ffffff]/60 transition-colors hover:text-[#ffffff]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#ffffff]/10 pt-8 md:flex-row">
          <p className="text-xs text-[#ffffff]/40">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#ffffff]/40 transition-colors hover:text-[#ffffff]/60">
              {t("footer.terms")}
            </a>
            <a href="#" className="text-xs text-[#ffffff]/40 transition-colors hover:text-[#ffffff]/60">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-xs text-[#ffffff]/40 transition-colors hover:text-[#ffffff]/60">
              {t("footer.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
