"use client";

import { useLanguage } from "@/lib/language-context";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex h-[85vh] items-end justify-center overflow-hidden pt-14">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://d152e0p9x4tjpm.cloudfront.net/fit-in/2240x0/filters:quality(100)/filters:format(webp)/media/original_images/Smiler_Spring_Hero_Image.jpeg"
          alt="Professional travel photography"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-[#000000]/20 to-transparent" />
      </div>

      {/* Content - positioned at lower center */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 text-center md:pb-20">
        <h1
          className="text-balance text-4xl font-extrabold leading-tight text-[#ffffff] md:text-5xl"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        >
          {t("hero.title")}
        </h1>
        <p
          className="mt-4 max-w-xl text-pretty text-lg font-normal text-[#ffffff]"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
        >
          {t("hero.subtitle")}
        </p>
        <a
          href="#popular"
          className="mt-8 inline-flex items-center rounded-full bg-[#FFD600] px-7 py-3 text-sm font-bold text-[#000000] transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:ring-offset-2"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}
