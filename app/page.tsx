"use client";

import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PopularSpots from "@/components/popular-spots";
import BrowseLandmarks from "@/components/browse-landmarks";
import CityTripSection from "@/components/city-trip-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <PopularSpots />
          <BrowseLandmarks />
          <CityTripSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
