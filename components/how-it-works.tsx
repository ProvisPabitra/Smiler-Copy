"use client";

import { Camera, CalendarCheck, Images } from "lucide-react";

const steps = [
  { icon: Camera, title: "Choose your shoot" },
  { icon: CalendarCheck, title: "Book instantly" },
  { icon: Images, title: "Receive your photos" },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FFFFFF] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-[26px] font-bold text-[#000000]">How it works</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F7F7] text-[#000000]">
                <step.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#000000]">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
