"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cityTripShoots } from "@/lib/site-data";

function TripCard({
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
    <a key={title} href="#" className="smiler-product-card group bg-[#FFFFFF]">
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src={images[activeImage]}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
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

export default function CityTripSection() {
  const { t } = useLanguage();

  const tripImages = useMemo(() => cityTripShoots.map((shoot) => shoot.image), []);

  const getGallery = (currentImage: string) => {
    const unique = [currentImage, ...tripImages.filter((img) => img !== currentImage)];
    return unique.slice(0, 5);
  };

  return (
    <section className="smiler-home-section">
      <div>
        <h2 className="smiler-h2 text-[#443d4b]">{t("citytrip.title")}</h2>

        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cityTripShoots.map((shoot) => (
            <TripCard
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
