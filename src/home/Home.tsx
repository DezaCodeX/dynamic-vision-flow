import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { BookingPanel } from "@/components/BookingPanel";
import { Footer } from "@/sections/Footer";
import { useReveal } from "@/hooks/useReveal";
import { setupHomeAnimations } from "@/home/animations/homeAnimations";
import { Hero } from "@/home/components/Hero/Hero";
import { BookingWidget } from "@/home/components/Booking/BookingWidget";
import { AboutPreview } from "@/home/components/About/AboutPreview";
import { RoomsPreview } from "@/home/components/Rooms/RoomsPreview";
import { DiningPreview } from "@/home/components/Dining/DiningPreview";
import { Amenities } from "@/home/components/Amenities/Amenities";
import { Experience } from "@/home/components/Experience/Experience";
import { GalleryPreview } from "@/home/components/Gallery/GalleryPreview";
import { Testimonials } from "@/home/components/Testimonials/Testimonials";
import { LocationPreview } from "@/home/components/Location/LocationPreview";
import { BookingCTA } from "@/home/components/BookingCTA/BookingCTA";

export function Home() {
  const [booking, setBooking] = useState(false);
  const root = useRef<main>(null);
  const openBooking = useCallback(() => setBooking(true), []);
  useReveal(true);
  useEffect(() => { const cleanup = root.current ? setupHomeAnimations(root.current) : undefined; const lenis = new Lenis({ duration: 1.2, smoothWheel: true }); let raf = 0; const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop); }; raf = requestAnimationFrame(loop); return () => { cleanup?.(); cancelAnimationFrame(raf); lenis.destroy(); }; }, []);
  return <><Cursor /><Navbar onBook={openBooking} /><main ref={root} className="relative"><Hero onBook={openBooking} /><BookingWidget onBook={openBooking} /><AboutPreview /><RoomsPreview /><DiningPreview /><Amenities /><Experience /><GalleryPreview /><Testimonials /><LocationPreview /><BookingCTA onBook={openBooking} /><Footer onBook={openBooking} /></main><BookingPanel open={booking} onClose={() => setBooking(false)} /></>;
}