"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { browseLandmarks } from "@/lib/site-data";

function bookCityStickerUrl(stickerId: string) {
  return `https://smiler.co/assets/stickers/bookCities/${stickerId}.svg`;
}

export default function BrowseLandmarks() {
  const { t } = useLanguage();

  return (
    <section className="smiler-home-section">
      <div>
        <h2 className="smiler-h2 text-[#443d4b]">{t("browse.title")}</h2>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible">
          {browseLandmarks.map((landmark) => (
            <a
              key={landmark.name}
              href="#"
              className="group relative flex h-full min-h-[214px] w-[210px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[8px] text-[#ffffff] md:w-[230px] lg:w-full"
            >
              <Image
                src={landmark.image}
                alt={landmark.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 220px, 20vw"
              />

              <div className="absolute inset-0 z-[1] bg-[#3d1b64]/30 transition-opacity duration-100 group-hover:opacity-10" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bookCityStickerUrl(landmark.stickerId)}
                alt={`${landmark.name} sticker`}
                className="absolute left-1/2 top-1/2 z-[2] h-16 w-auto -translate-x-1/2 -translate-y-1/2 md:h-[70px]"
              />

              <div className="absolute bottom-3 left-3 right-3 z-[2]">
                <h3 className="text-lg font-bold text-[#FFFFFF]">{landmark.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
