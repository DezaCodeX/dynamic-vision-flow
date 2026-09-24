import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import heroHotel from "@/assets/hero-hotel.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import diningCloud9 from "@/assets/dining-cloud9.jpg";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import type { BookingDetails } from "@/home/components/Booking/BookingWidget";
import { BookingWidget } from "@/home/components/Booking/BookingWidget";

/** 3 hotel scenes that cycle inside the hero card like the reference video. */
const cardSlides = [
  { src: heroHotel, alt: "Illuminated facade of Hotel PNS Nakshatra at night" },
  { src: roomSuite, alt: "Nakshatra Suite living lounge" },
  { src: diningCloud9, alt: "Cloud 9 rooftop dining above Vellore" },
];

export function Hero({
  ready = true,
  onBook,
}: {
  ready?: boolean;
  onBook: (details?: BookingDetails) => void;
}) {
  const root = useRef<HTMLElement>(null);
  const image = useRef<HTMLDivElement>(null);
  const [cardIndex, setCardIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setCardIndex((i) => (i + 1) % cardSlides.length), 4200);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-line]", { yPercent: 120, opacity: 0, duration: 1.2, stagger: 0.12 })
        .from("[data-hero-fade]", { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.7)
        .from("[data-hero-image]", { scale: 1.15, opacity: 0, duration: 1.6 }, 0.1);
    }, root);
    return () => ctx.revert();
  }, [ready]);

  useEffect(() => {
    const el = image.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rx = (e.clientY / window.innerHeight - 0.5) * -8;
      const ry = (e.clientX / window.innerWidth - 0.5) * 10;
      gsap.to(el, { rotateX: rx, rotateY: ry, duration: 0.9, ease: "power2.out" });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="dark-surface relative flex min-h-screen items-center overflow-hidden pb-[clamp(3rem,8vh,7rem)] pt-[clamp(7rem,14vh,10rem)]"
    >
      <div className="absolute inset-0 -z-10">
        <HeroBackdrop />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-[clamp(2.5rem,6vw,5rem)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 pb-4 lg:pb-16">
            <p className="eyebrow mt-10 font-bold text-gold">A new constellation in Vellore</p>
            <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.9rem,8vw,8.4rem)] leading-[0.82] tracking-[-0.025em] text-cream">
              <span className="block overflow-hidden"><span data-hero-line className="block text-[var(--color-ivory)]">Stay above</span></span>
              <span className="block overflow-visible pb-[0.12em]"><span data-hero-line className="block italic text-gold">the ordinary.</span></span>
            </h1>
            <p data-hero-fade className="eyebrow mt-8 text-cream">PNS Nakshatra · Vellore, Tamil Nadu</p>
            <p data-hero-fade className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-ivory)]">Thoughtful rooms, sky-high dining, and warm hospitality in the heart of the city.</p>
          </div>

          <div className="relative [perspective:1200px]">
            <div ref={image} data-hero-image className="relative overflow-hidden rounded-[1.5rem] border border-cream/20 shadow-[var(--shadow-cinema)] [transform-style:preserve-3d]">
              <div className="relative h-[clamp(24rem,64vh,48rem)] w-full">
                {cardSlides.map((slide, i) => (
                  <img key={slide.src} src={slide.src} alt={slide.alt} width={912} height={1408} loading={i === 0 ? "eager" : "lazy"} className={`absolute inset-0 size-full object-cover transition-all duration-[1500ms] ease-out ${i === cardIndex ? "opacity-100 scale-100 [clip-path:inset(0_0_0_0)]" : "opacity-0 scale-110 [clip-path:inset(0_0_0_100%)]"}`} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--hero-overlay)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <p className="font-display text-2xl text-cream">Rooms with a point of view</p>
                <p className="eyebrow text-cream">0{cardIndex + 1} / 03</p>
              </div>
            </div>
          </div>
        </div>

        <div data-hero-fade className="mt-8"><BookingWidget onBook={onBook} /></div>
      </div>
    </section>
  );
}
