"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { browseLandmarks } from "@/lib/site-data";

export default function BrowseLandmarks() {
  const { t } = useLanguage();

  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {t("browse.title")}
        </h2>

        {/* Landmark Cards Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {browseLandmarks.map((landmark) => (
            <a
              key={landmark.name}
              href="#"
              className="group relative flex aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={landmark.image}
                alt={landmark.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-base font-semibold text-[#ffffff] md:text-lg">
                  {landmark.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-smiler-pink px-8 py-3 text-sm font-semibold text-smiler-pink transition-all hover:bg-smiler-pink hover:text-[#ffffff]"
          >
            {t("browse.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
