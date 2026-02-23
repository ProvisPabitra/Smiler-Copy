"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations } from "@/lib/site-data";

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
  currency: string;
  setCurrency: (currency: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("en");
  const [currency, setCurrency] = useState("EUR");

  const t = useCallback(
    (key: string) => {
      return translations[locale]?.[key] ?? translations["en"]?.[key] ?? key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, currency, setCurrency }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
