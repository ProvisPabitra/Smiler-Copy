"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";

const reviews = [
  {
    id: "r1",
    title: "Best experience ever",
    text: "Best experience ever. Very professional and took the worry out of the whole shoot.",
    author: "IAN STUART ROBER...",
    time: "20h ago",
  },
  {
    id: "r2",
    title: "Kouss was really very accomodative",
    text: "Kouss was really very accommodating and super friendly throughout the entire shoot.",
    author: "Kunal Muralidharan",
    time: "1 day ago",
  },
  {
    id: "r3",
    title: "Highly recommend",
    text: "George was so great and we loved his work. Our family photos turned out amazing.",
    author: "Kristy Partain",
    time: "2 days ago",
  },
  {
    id: "r4",
    title: "Highly recommended!",
    text: "Photographer was punctual and professional. I highly recommend this photoshoot.",
    author: "Marija",
    time: "2 days ago",
  },
  {
    id: "r5",
    title: "Amazing memories",
    text: "Smooth booking process and beautiful photos in iconic spots. Would book again.",
    author: "Alyssa J.",
    time: "3 days ago",
  },
  {
    id: "r6",
    title: "Perfect for couples",
    text: "Our photographer made us feel comfortable right away and guided every pose perfectly.",
    author: "Daniel K.",
    time: "3 days ago",
  },
];

function StarsRow() {
  return (
    <div className="mb-3 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="inline-flex h-5 w-5 items-center justify-center rounded-[2px] bg-[#00B67A] text-[12px] leading-none text-[#FFFFFF]"
        >
          ★
        </span>
      ))}
      <CircleCheck className="ml-1 h-4 w-4 text-[#6b7280]" />
      <span className="text-[13px] text-[#6b7280] underline">by invitation</span>
    </div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="smiler-home-section">
      <div>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#D1D5DB] bg-[#FFFFFF] md:flex"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-4 w-4 text-[#443d4b]" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#D1D5DB] bg-[#FFFFFF] md:flex"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-4 w-4 text-[#443d4b]" />
          </button>

          <div ref={scrollRef} className="flex gap-3 overflow-x-auto scroll-smooth pb-3 scrollbar-hide">
            {reviews.map((review) => (
              <article key={review.id} className="w-[250px] shrink-0 rounded-lg border border-[#E5E7EB] bg-[#f5f4f7] p-3.5 md:w-[260px]">
                <StarsRow />
                <h3 className="line-clamp-1 text-[20px] font-bold text-[#443d4b]">{review.title}</h3>
                <p className="mt-1.5 line-clamp-3 text-[15px] leading-snug text-[#4f4a56]">{review.text}</p>
                <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.02em] text-[#4b5563]">
                  {review.author}, <span className="normal-case font-normal">{review.time}</span>
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center scale-80 mb-15">
          <p className="text-[17px] text-[#443d4b]">
            A score of <span className="font-semibold">4.9</span> out of 5 based on <span className="font-semibold underline">6,870 reviews</span>.
          </p>
          <p className="mt-1 text-xl font-semibold text-[#443d4b]">
            <span className="mr-1 text-[#00B67A]">★</span>Trustpilot
          </p>
        </div>
      </div>
    </section>
  );
}
