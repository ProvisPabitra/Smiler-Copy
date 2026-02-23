"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { popularCities, photoShootsByCity, type CitySlug } from "@/lib/site-data";

function cityStickerUrl(stickerId: string) {
  return `/images/stickers/cities/${stickerId}.svg`;
}

function ShootCard({
  city,
  title,
  rating,
  price,
  images,
}: {
  city: string;
  title: string;
  rating: number;
  price: number;
  images: string[];
}) {
  const [activeImage, setActiveImage] = useState(0);

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  return (
    <a
      href="#"
      className="smiler-product-card group bg-[#FFFFFF]"
    >
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src={images[activeImage]}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 90vw, 25vw"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#000000]/35 text-[#FFFFFF] opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#000000]/35 text-[#FFFFFF] opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === activeImage ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase leading-[1.5] text-[#b3b3b3]">{city}</p>
        <h3 className="line-clamp-1 pt-[2px] text-[1.125rem] font-bold leading-[1.5] text-[#443d4b]">{title}</h3>

        <div className="mt-2 flex items-center justify-between">
          <p className="flex items-center gap-[0.4rem] text-base font-bold leading-normal text-[#443d4b]">
            <span className="text-[#ffd261]">★★★★★</span>
            {rating.toFixed(1)}
          </p>
          <p className="flex items-center whitespace-pre-wrap text-base font-normal leading-[1.5] text-[#443d4b]">
            <span className="pr-1">From</span> <span className="font-bold">€{price}</span>
          </p>
        </div>
      </div>
    </a>
  );
}

export default function PopularSpots() {
  const { t } = useLanguage();
  const [activeCity, setActiveCity] = useState<CitySlug>("new-york");
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<Partial<Record<CitySlug, HTMLButtonElement | null>>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const cityOrder: CitySlug[] = ["new-york", "paris", "rome", "barcelona", "sydney"];

  const shoots = useMemo(() => {
    const list = photoShootsByCity[activeCity] ?? [];
    return list.slice(0, 4);
  }, [activeCity]);

  const cityImages = useMemo(() => shoots.map((shoot) => shoot.image), [shoots]);

  const getGallery = (currentImage: string) => {
    const unique = [currentImage, ...cityImages.filter((img) => img !== currentImage)];
    return unique.slice(0, 4);
  };

  const orderedCities = useMemo(
    () =>
      cityOrder
        .map((slug) => popularCities.find((city) => city.slug === slug))
        .filter((city): city is (typeof popularCities)[number] => Boolean(city)),
    []
  );

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = tabButtonRefs.current[activeCity];
      if (!activeButton || !tabsRef.current) return;
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeCity, orderedCities]);

  return (
    <section id="popular" className="smiler-home-section">
      <div>
        <div className="flex items-center justify-between gap-4">
          <h2 className="smiler-h2 text-[#443d4b]">{t("popular.title")}</h2>
          <a href="#" className="hidden items-center gap-2 text-base font-semibold text-[#ff4d6b] md:inline-flex">
            See all cities <span className="text-2xl">→</span>
          </a>
        </div>

        <div className="mt-6 mb-6 border-b border-[#e6e6e6] pb-[5px]">
          <div
            ref={tabsRef}
            className="relative flex gap-6 overflow-x-auto scrollbar-hide md:grid md:grid-cols-5 md:gap-0 md:overflow-visible"
          >
            {orderedCities.map((city) => (
              <button
                key={city.slug}
                ref={(el) => {
                  tabButtonRefs.current[city.slug] = el;
                }}
                onClick={() => {
                  if (city.slug !== activeCity) {
                    setActiveCity(city.slug);
                  }
                }}
                className="relative flex w-auto min-w-max shrink-0 items-center pb-0 md:w-full md:min-w-0 md:justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cityStickerUrl(city.stickerId)} alt={city.name} className="w-14 object-contain md:w-[45%]" />
                <span className="ml-2 text-left text-sm font-bold leading-[1.2] whitespace-nowrap text-[#443d4b] md:ml-0 md:w-[55%] md:min-w-[5rem] md:text-base md:whitespace-normal">{city.name}</span>
              </button>
            ))}
            <span
              className="pointer-events-none absolute bottom-0 h-[5px] bg-[#ff4d6b] transition-[left,width] duration-500 ease-in-out"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
          </div>
        </div>

        <div
          key={activeCity}
          className="grid grid-cols-1 gap-4 animate-in fade-in-0 slide-in-from-bottom-1 duration-1000 md:grid-cols-2 xl:grid-cols-4"
        >
          {shoots.map((shoot) => (
            <ShootCard
              key={shoot.id}
              city={shoot.city}
              title={shoot.title}
              rating={shoot.rating}
              price={shoot.price}
              images={getGallery(shoot.image)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
