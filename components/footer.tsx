"use client";

import { useLanguage } from "@/lib/language-context";
import { Instagram, Linkedin } from "lucide-react";

function SmilerWordmark() {
  return (
    <a href="/" className="inline-flex items-center gap-1" aria-label="Smiler home">
      <span className="text-5xl font-extrabold tracking-tight text-[#ff4d6b]">
        <img src="Smiler.svg" alt="Smiler" className="h-8 w-auto" />
      </span>
    </a>
  );
}

function TrustpilotBadge() {
  return (
    <div className="text-[#FFFFFF] scale-80">
      <p className="text-2xl font-semibold leading-none">
        <span className="mr-1 text-[#00B67A]">★</span>Trustpilot
      </p>
      <div className="mt-2 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="inline-flex h-7 w-7 items-center justify-center rounded-[2px] bg-[#00B67A] text-sm text-[#FFFFFF]"
          >
            ★
          </span>
        ))}
      </div>
      <p className="mt-2 text-[13px] font-semibold leading-tight text-[#FFFFFF]">
        TrustScore <span className="font-bold">4.9</span>
        <br />
        <a href="#" className="underline underline-offset-2">
          6,870 reviews
        </a>
      </p>
    </div>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const links = {
    explore: ["New York City", "Paris", "Barcelona", "Rome", "Dubai"],
    support: [t("footer.contact"), t("footer.privacy"), t("footer.cookies"), t("footer.terms")],
    company: [t("footer.about"), t("footer.careers")],
    workWithUs: [t("footer.become_photographer"), t("footer.photographer_portal"), t("footer.become_partner")],
  };

  return (
    <footer className="smiler-footer">
      <div className="smiler-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h4 className="mb-3 text-[18px] font-semibold text-[#FFFFFF]">{t("footer.explore")}</h4>
            <ul className="space-y-2.5">
              {links.explore.map((label) => (
                <li key={label}>
                  <a href="#" className="text-[15px] text-[#FFFFFF] no-underline hover:text-[#FFD7E1]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[18px] font-semibold text-[#FFFFFF]">{t("footer.support")}</h4>
            <ul className="space-y-2.5">
              {links.support.map((label) => (
                <li key={label}>
                  <a href="#" className="text-[15px] text-[#FFFFFF] no-underline hover:text-[#FFD7E1]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[18px] font-semibold text-[#FFFFFF]">{t("footer.company")}</h4>
            <ul className="space-y-2.5">
              {links.company.map((label) => (
                <li key={label}>
                  <a href="#" className="text-[15px] text-[#FFFFFF] no-underline hover:text-[#FFD7E1]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[18px] font-semibold text-[#FFFFFF]">{t("footer.workwithus")}</h4>
            <ul className="space-y-2.5">
              {links.workWithUs.map((label) => (
                <li key={label}>
                  <a href="#" className="text-[15px] text-[#FFFFFF] no-underline hover:text-[#FFD7E1]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <TrustpilotBadge />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 border-t border-[#FFFFFF]/15 pt-8 md:flex-row md:items-end md:justify-between">
          <SmilerWordmark />

          <p className="text-[16px] text-[#FFFFFF] md:pb-2">© 2026 Smiler • Capturing moments that matter</p>

          <div className="flex items-center gap-3 md:pb-1">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF]/10"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF]/10"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
