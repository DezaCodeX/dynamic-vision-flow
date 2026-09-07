import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import heroHotel from "@/assets/hero-hotel.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import diningCloud9 from "@/assets/dining-cloud9.jpg";
import { HeroBackdrop } from "@/components/HeroBackdrop";

/** 3 hotel scenes that cycle inside the hero card like the reference video. */
const cardSlides = [
  { src: heroHotel, alt: "Illuminated facade of Hotel PNS Nakshatra at night" },
  { src: roomSuite, alt: "Nakshatra Suite living lounge" },
  { src: diningCloud9, alt: "Cloud 9 rooftop dining above Vellore" },
];


export function Hero({ ready, onBook }: { ready: boolean; onBook: () => void }) {
  const root = useRef<HTMLElement>(null);
  const image = useRef<HTMLDivElement>(null);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setCardIndex((i) => (i + 1) % cardSlides.length),
      4200,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-line]", { yPercent: 120, opacity: 0, duration: 1.2, stagger: 0.12 })
        .from("[data-hero-preview]", { scale: 0.8, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.3)
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
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <HeroBackdrop />
      </div>


      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div>
          <p className="eyebrow mt-10 text-gold">Arquitecta Hotel Collection</p>
          <h1 className="mt-4 max-w-2xl font-display text-[clamp(3.2rem,8vw,6.8rem)] leading-[0.82] tracking-[-0.025em] text-cream">
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                PNS Nakshatra
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block italic text-gold">
                Luxury Hotel
              </span>
            </span>
          </h1>

          <p data-hero-fade className="eyebrow mt-7">
            Vellore, Tamil Nadu · Rooms · Dining · Celebrations
          </p>
          <p data-hero-fade className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            A calm, considered stay in the heart of Vellore, shaped by warm hospitality, layered
            interiors, and rooms made for unhurried mornings.
          </p>

          <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-8">
            <button
              onClick={onBook}
              data-cursor="Book"
              className="border border-gold bg-gold px-10 py-4 text-[0.6rem] tracking-[0.4em] text-primary-foreground uppercase transition-colors hover:bg-transparent hover:text-gold"
            >
              Book your stay
            </button>
            <a href="#stay" className="eyebrow hover:text-gold">
              Scroll ↓
            </a>
          </div>
        </div>

        <div className="[perspective:1200px]">
          <div
            ref={image}
            data-hero-image
            className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-cinema)] [transform-style:preserve-3d]"
          >
            <div className="relative h-[58vh] w-full lg:h-[78vh]">
              {cardSlides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  width={912}
                  height={1408}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 size-full object-cover transition-all duration-[1500ms] ease-out ${
                    i === cardIndex
                      ? "opacity-100 scale-100 [clip-path:inset(0_0_0_0)]"
                      : "opacity-0 scale-110 [clip-path:inset(0_0_0_100%)]"
                  }`}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--hero-overlay)] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <p className="font-display text-2xl text-cream">Est. Vellore</p>
              <p className="eyebrow">3★ Comfort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
