import { useEffect } from "react";
import type { BookingDetails } from "@/home/components/Booking/BookingWidget";

export function BookingPanel({ open, details, onClose }: { open: boolean; details: BookingDetails; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[80] transition-opacity duration-500 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        aria-label="Close booking"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <div
        className={`glass-panel absolute left-1/2 top-1/2 w-[min(92vw,640px)] -translate-x-1/2 -translate-y-1/2 p-8 transition-transform duration-500 sm:p-12 ${
          open ? "scale-100" : "scale-95"
        }`}
      >
        <p className="eyebrow">Reserve</p>
        <h2 className="mt-3 font-display text-4xl text-cream">Reserve your stay</h2>
        <div className="gold-rule mt-6" />

        <form
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <label className="block">
            <span className="eyebrow">Check in</span>
            <input type="date" required value={details.checkIn} readOnly className="mt-3 w-full border-b border-input bg-transparent pb-2 text-sm text-cream outline-none focus:border-gold" />
          </label>
          <label className="block">
            <span className="eyebrow">Check out</span>
            <input type="date" required value={details.checkOut} readOnly className="mt-3 w-full border-b border-input bg-transparent pb-2 text-sm text-cream outline-none focus:border-gold" />
          </label>
          {[
            { label: "Rooms", options: ["1", "2", "3", "4+"] },
            { label: "Guests", options: ["1", "2", "3", "4", "5+"] },
          ].map((f) => (
            <label key={f.label} className="block">
              <span className="eyebrow">{f.label}</span>
              <select value={details[f.label.toLowerCase() as "rooms" | "guests"]} readOnly className="mt-3 w-full border-b border-input bg-transparent pb-2 text-sm text-cream outline-none focus:border-gold">
                {f.options.map((o) => (
                  <option key={o} value={o} className="bg-card">
                    {o}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button
            type="submit"
            className="sm:col-span-2 mt-2 border border-gold bg-gold px-8 py-4 text-[0.6rem] tracking-[0.4em] text-primary-foreground uppercase transition-colors hover:bg-transparent hover:text-gold"
          >
            Check availability
          </button>
        </form>

        <button onClick={onClose} className="eyebrow mt-6 block hover:text-gold">
          Close
        </button>
      </div>
    </div>
  );
}
