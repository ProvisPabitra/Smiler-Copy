"use client";

import { useLanguage } from "@/lib/language-context";

export default function TrustStatsBar() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f5f4f7] py-4">
      <div className="smiler-container">
        <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-10">
          <p className="text-base font-medium text-[#443d4b]">{t("stats.locations")}</p>
          <p className="text-base font-medium text-[#443d4b]">{t("stats.photoshoots")}</p>
          <p className="text-base font-medium text-[#443d4b]">4.9★ average rating</p>
        </div>
      </div>
    </section>
  );
}
