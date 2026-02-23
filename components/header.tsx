"use client";

export default function Header() {
  return (
    <header className="relative z-20">
      <div className="bg-[#3d1b64] py-2">
        <div className="smiler-container text-[#FFFFFF]">
          <div className="flex min-h-[28px] items-center justify-center gap-2 text-center lg:hidden">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="inline-flex h-5 w-5 items-center justify-center rounded-[2px] bg-[#00B67A] text-[14px] leading-none text-[#FFFFFF]"
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-[20px] font-semibold leading-none text-[#00B67A]">★</span>
            <span className="text-[14px] font-semibold leading-none">Trustpilot</span>
          </div>

          <div className="hidden items-center justify-center gap-2 lg:flex">
            <span className="text-[15px] leading-[1.5] font-semibold">Our customers say</span>
            <span className="ml-1 text-[20px] font-bold leading-none">Excellent</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="inline-flex h-5 w-5 items-center justify-center rounded-[2px] bg-[#00B67A] text-[15px] leading-none text-[#FFFFFF]"
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-[14px] leading-[1.5] font-medium">4.9 out of 5 based on</span>
            <a href="#" className="text-[14px] leading-[1.5] font-bold underline underline-offset-2">
              6,870 reviews
            </a>
            <span className="text-[20px] font-semibold leading-none text-[#00B67A]">★</span>
            <span className="text-[20px] font-semibold leading-none">Trustpilot</span>
          </div>
        </div>
      </div>
    </header>
  );
}
