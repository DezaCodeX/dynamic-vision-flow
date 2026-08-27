import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import Lenis from "lenis";

import { Loader } from "@/components/Loader";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { BookingPanel } from "@/components/BookingPanel";
import { Hero } from "@/sections/Hero";
import { Rooms } from "@/sections/Rooms";
import { Dining } from "@/sections/Dining";
import { Events } from "@/sections/Events";
import { Location } from "@/sections/Location";
import { Footer } from "@/sections/Footer";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Hotel PNS Nakshatra — Luxury Hotel in Vellore" },
      {
        name: "description",
        content:
          "Premium rooms, Cloud 9 rooftop dining, Clinq lounge and banquet halls at Hotel PNS Nakshatra, Vellore. Book your stay.",
      },
      { property: "og:title", content: "Hotel PNS Nakshatra — Luxury Hotel in Vellore" },
      {
        property: "og:description",
        content:
          "A cinematic stay in Vellore: designed rooms, rooftop dining, lounge bar and four celebration halls.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [booking, setBooking] = useState(false);
  const openBooking = useCallback(() => setBooking(true), []);

  useReveal(loaded);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {!loaded ? <Loader onDone={() => setLoaded(true)} /> : null}
      <Cursor />
      <Navbar onBook={openBooking} />

      <main className="relative">
        <Hero ready={loaded} onBook={openBooking} />
        <Rooms />
        <Dining />
        <Events />
        <Location />
        <Footer onBook={openBooking} />
      </main>

      <button
        onClick={openBooking}
        className="glass-panel fixed bottom-6 right-6 z-40 px-6 py-4 text-[0.6rem] tracking-[0.34em] text-gold uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
      >
        Book your stay
      </button>

      <BookingPanel open={booking} onClose={() => setBooking(false)} />
    </>
  );
}
