import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HeroBackdrop } from "@/components/HeroBackdrop";

export function Hero({ onBook }: { onBook: () => void }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => gsap.from("[data-hero-line]", { yPercent: 110, opacity: 0, duration: 1.2, stagger: 0.12, ease: "power3.out" }), root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} id="top" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32">
      <div className="absolute inset-0 -z-20"><HeroBackdrop /></div>
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow" data-home-reveal>PNS Nakshatra · Vellore</p>
          <h1 className="mt-7 overflow-hidden font-display text-[clamp(3.6rem,10vw,8.8rem)] leading-[0.84] text-cream">
            <span className="block" data-hero-line>Stay in the</span>
            <span className="block italic text-gold" data-hero-line>right light.</span>
          </h1>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground" data-home-reveal>
            A contemporary hotel in the heart of Vellore, shaped around comfort, dining and the moments that bring people together.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6" data-home-reveal>
            <button onClick={onBook} className="border border-gold bg-gold px-9 py-4 text-[0.6rem] tracking-[0.4em] text-primary-foreground uppercase transition-colors hover:bg-transparent hover:text-gold">Book now</button>
            <a href="#stay" className="eyebrow hover:text-gold">Explore rooms</a>
          </div>
        </div>
      </div>
      <span className="eyebrow absolute bottom-8 left-6 lg:left-12">Scroll to discover</span>
    </section>
  );
}