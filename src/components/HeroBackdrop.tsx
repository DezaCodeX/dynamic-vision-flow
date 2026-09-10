import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import heroHotel from "@/assets/hero-hotel.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import diningCloud9 from "@/assets/dining-cloud9.jpg";
import clinqLounge from "@/assets/clinq-lounge.jpg";
import eventsBanquet from "@/assets/events-banquet.jpg";

const slides = [
  { src: heroHotel, alt: "Illuminated facade of Hotel PNS Nakshatra at night" },
  { src: roomSuite, alt: "Nakshatra Suite living lounge" },
  { src: diningCloud9, alt: "Cloud 9 rooftop dining above Vellore" },
  { src: clinqLounge, alt: "Clinq lounge and bar interiors" },
  { src: eventsBanquet, alt: "Banquet hall set for a celebration" },
];

export function HeroBackdrop() {
  const root = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const el = layer.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      gsap.to(el, {
        x: (e.clientX / window.innerWidth - 0.5) * -34,
        y: (e.clientY / window.innerHeight - 0.5) * -22,
        duration: 1.4,
        ease: "power2.out",
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={root} className="absolute inset-0 overflow-hidden">
      <div ref={layer} className="absolute -inset-[6%]">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 size-full object-cover transition-all duration-[2200ms] ease-out ${
              i === active ? "opacity-100 animate-ken-burns" : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/40 via-background/50 to-background/70" />
      <div className="pointer-events-none absolute inset-0 veil" />
      <div className="pointer-events-none absolute inset-0 animate-light-sweep" />
    </div>
  );
}
