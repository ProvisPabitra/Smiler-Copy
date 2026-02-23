"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cityTripShoots } from "@/lib/site-data";

export default function CityTripSection() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {t("citytrip.title")}
        </h2>

        {/* Carousel */}
        <div className="relative mt-6 md:mt-8">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-all hover:shadow-lg focus:outline-none md:-left-5"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-all hover:shadow-lg focus:outline-none md:-right-5"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide md:gap-5"
          >
            {cityTripShoots.map((shoot) => (
              <a
                key={shoot.id}
                href="#"
                className="group flex w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md md:w-[300px]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={shoot.image}
                    alt={shoot.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />
                  {/* Image dots indicator */}
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                    {Array.from({ length: Math.min(shoot.imageCount, 6) }).map(
                      (_, i) => (
                        <span
                          key={i}
                          className={`block h-1.5 w-1.5 rounded-full ${
                            i === 0 ? "bg-[#ffffff]" : "bg-[#ffffff]/50"
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    {shoot.city}
                  </span>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {shoot.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-smiler-pink px-8 py-3 text-sm font-semibold text-smiler-pink transition-all hover:bg-smiler-pink hover:text-[#ffffff]"
          >
            {t("citytrip.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
