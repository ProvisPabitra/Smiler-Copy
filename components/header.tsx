"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { languages, currencies } from "@/lib/site-data";

function SmilerLogo() {
  return (
    <a href="/" className="flex items-center gap-0.5" aria-label="Smiler home">
      <span className="text-xl font-bold tracking-tight text-foreground">smiler</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="10" cy="10" r="10" fill="#FFD600" />
        <circle cx="7" cy="8" r="1.5" fill="#000000" />
        <circle cx="13" cy="8" r="1.5" fill="#000000" />
        <path d="M6 12.5C6 12.5 7.5 15 10 15C12.5 15 14 12.5 14 12.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </a>
  );
}

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function Header() {
  const { locale, setLocale, currency, setCurrency, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const currRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (currRef.current && !currRef.current.contains(e.target as Node)) {
        setCurrencyDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === locale) ?? languages[0];
  const currencySymbols: Record<string, string> = {
    EUR: "\u20ac",
    USD: "$",
    GBP: "\u00a3",
    AUD: "A$",
    CAD: "C$",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Left: Logo + Nav links */}
        <div className="flex items-center gap-8">
          <SmilerLogo />
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-smiler-gray">
              {t("nav.photographers")}
            </a>
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-smiler-gray">
              {t("nav.partners")}
            </a>
          </nav>
        </div>

        {/* Right: Currency + Language */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Currency Selector */}
          <div ref={currRef} className="relative">
            <button
              onClick={() => {
                setCurrencyDropdownOpen(!currencyDropdownOpen);
                setLangDropdownOpen(false);
              }}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              aria-expanded={currencyDropdownOpen}
              aria-haspopup="listbox"
              aria-label={t("currency.select")}
            >
              <span>{currencySymbols[currency]}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${currencyDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {currencyDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 overflow-hidden rounded-xl border border-border bg-[#ffffff] shadow-lg" role="listbox">
                {currencies.map((c) => (
                  <button
                    key={c}
                    role="option"
                    aria-selected={currency === c}
                    onClick={() => {
                      setCurrency(c);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                      currency === c ? "bg-secondary font-medium" : "text-foreground"
                    }`}
                  >
                    <span>{currencySymbols[c]}</span>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setCurrencyDropdownOpen(false);
              }}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              aria-expanded={langDropdownOpen}
              aria-haspopup="listbox"
              aria-label={t("language.select")}
            >
              <span className="text-base">{getFlagEmoji(currentLang.flag)}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 overflow-hidden rounded-xl border border-border bg-[#ffffff] shadow-lg" role="listbox">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={locale === lang.code}
                    onClick={() => {
                      setLocale(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                      locale === lang.code ? "bg-secondary font-medium" : "text-foreground"
                    }`}
                  >
                    <span className="text-base">{getFlagEmoji(lang.flag)}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-border bg-[#ffffff] px-4 py-4" aria-label="Mobile navigation">
          <a href="#" className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            {t("nav.photographers")}
          </a>
          <a href="#" className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            {t("nav.partners")}
          </a>

          <div className="my-2 h-px bg-border" />

          {/* Mobile Currency */}
          <p className="px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("currency.select")}
          </p>
          <div className="flex flex-wrap gap-2 px-4 py-2">
            {currencies.map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  currency === c
                    ? "bg-primary text-primary-foreground font-medium"
                    : "bg-secondary text-foreground hover:bg-border"
                }`}
              >
                {currencySymbols[c]} {c}
              </button>
            ))}
          </div>

          <div className="my-2 h-px bg-border" />

          {/* Mobile Language */}
          <p className="px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("language.select")}
          </p>
          <div className="flex flex-col gap-1 px-2 py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors ${
                  locale === lang.code
                    ? "bg-secondary font-medium"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <span className="text-base">{getFlagEmoji(lang.flag)}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
