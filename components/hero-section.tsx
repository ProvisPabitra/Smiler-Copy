"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HelpCircle, MapPin, Search } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

function HeroLogo() {
  return (
    <a href="/" className="flex items-center gap-1" aria-label="Smiler home">
      <img src="download.svg" alt="Smiler" className="h-8 w-auto" />
    </a>
  );
}

function UkRoundFlag() {
  return (
    <svg width="34" height="34" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="uk-circle-clip">
          <circle cx="21" cy="21" r="21" />
        </clipPath>
      </defs>
      <g clipPath="url(#uk-circle-clip)">
        <rect width="42" height="42" fill="#012169" />
        <path d="M0 0L42 42M42 0L0 42" stroke="#FFFFFF" strokeWidth="7" />
        <path d="M0 0L42 42M42 0L0 42" stroke="#C8102E" strokeWidth="3.2" />
        <path d="M21 0V42M0 21H42" stroke="#FFFFFF" strokeWidth="10.5" />
        <path d="M21 0V42M0 21H42" stroke="#C8102E" strokeWidth="6.2" />
      </g>
    </svg>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const locations = [
    "Miami, United States",
    "Milan, Italy",
    "Mykonos, Greece",
    "Naples, Italy",
    "New York City, United States",
    "Nice, France",
    "Palma, Spain",
    "Paris, France",
    "Phuket, Thailand",
  ];

  const suggestions = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return locations;
    return locations.filter((location) => location.toLowerCase().includes(value));
  }, [query]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!searchRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <section className="smiler-hero z-20 items-end overflow-visible">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://d152e0p9x4tjpm.cloudfront.net/fit-in/2240x0/filters:quality(100)/filters:format(webp)/media/original_images/Smiler_Spring_Hero_Image.jpeg"
          alt="Smiler hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-[#000000]/10" />
      </div>

      <div className="absolute left-0 right-0 top-0 z-10">
        <div className="smiler-container pointer-events-auto flex h-[var(--smiler-header-height)] items-center justify-between">
          <HeroLogo />

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#"
              className="rounded-lg bg-[#ff4d6b] px-7 py-3 text-[15px] font-semibold text-[#FFFFFF]"
            >
              {t("nav.photographers")}
            </a>
            <a
              href="#"
              className="rounded-lg bg-[#FFFFFF] px-7 py-3 text-[15px] font-semibold text-[#ff4d6b]"
            >
              {t("nav.partners")}
            </a>
            <span className="text-[36px] font-bold text-[#FFFFFF]">€</span>
            <UkRoundFlag />
            <button
              type="button"
              className="rounded-full border border-[#FFFFFF]/85 p-1 text-[#FFFFFF]"
              aria-label="Help"
            >
              <HelpCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="smiler-hero-body pointer-events-auto">
        <div className="smiler-hero-title-wrap">
          <h1 className="smiler-h1">Capturing moments you'll never forget</h1>
          <p className="smiler-p">Book your next photoshoot. Available in 150+ locations</p>
          <form className="smiler-hero-search">
            <label className="sr-only" htmlFor="hero-search">
              Search city or landmark
            </label>
            <div ref={searchRef} className="relative">
              <div className="smiler-search">
                <Search className="h-6 w-6 text-[#3d1b64]" />
                <input
                  id="hero-search"
                  type="text"
                  value={query}
                  onFocus={() => setDropdownOpen(true)}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setDropdownOpen(true);
                  }}
                  placeholder="Search for any city or landmark"
                  className="w-full bg-transparent text-base text-[#443d4b] placeholder:text-[#9e9ea7] focus:outline-none"
                />
              </div>

              {dropdownOpen && suggestions.length > 0 && (
                <div className="smiler-search-results">
                  {suggestions.map((location) => (
                    <button
                      key={location}
                      type="button"
                      onClick={() => {
                        setQuery(location);
                        setDropdownOpen(false);
                      }}
                      className="flex min-h-[3.9375rem] w-full items-center gap-2 border-b border-[#e6e6e6] px-4 py-[10px] text-left last:border-b-0 hover:bg-[#f9f3fc]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d3a5e54d]">
                        <MapPin className="h-4 w-4 text-[#4b1d7a]" />
                      </span>
                      <span className="text-base font-bold leading-[1.5] text-[#3d1b64]">{location}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
