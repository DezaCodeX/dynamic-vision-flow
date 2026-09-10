import { useState } from "react";

export type BookingDetails = {
  checkIn: string;
  checkOut: string;
  rooms: string;
  guests: string;
};

const initialBookingDetails: BookingDetails = {
  checkIn: "",
  checkOut: "",
  rooms: "1",
  guests: "1",
};

export function BookingWidget({ onBook }: { onBook: (details: BookingDetails) => void }) {
  const [details, setDetails] = useState(initialBookingDetails);

  const updateDetails = (field: keyof BookingDetails, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  return (
    <section className="relative mx-auto max-w-[1200px] px-3 lg:px-12" data-home-reveal>
      <form
        onSubmit={(event) => { event.preventDefault(); onBook(details); }}
        className="glass-panel grid grid-cols-2 gap-2 p-2 shadow-[var(--shadow-cinema)] transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] lg:grid-cols-[1fr_1fr_0.8fr_0.8fr_auto] lg:items-end lg:gap-3 lg:p-3"
      >
        <label className="group block">
          <span className="eyebrow transition-colors duration-300 group-hover:text-gold">Check-in</span>
          <input
            required
            type="date"
            value={details.checkIn}
            onChange={(event) => updateDetails("checkIn", event.target.value)}
            className="mt-0.5 w-full border-b border-input bg-transparent pb-0.5 text-sm text-cream outline-none transition-colors duration-300 focus:border-gold"
          />
        </label>
        <label className="group block">
          <span className="eyebrow transition-colors duration-300 group-hover:text-gold">Check-out</span>
          <input
            required
            type="date"
            value={details.checkOut}
            onChange={(event) => updateDetails("checkOut", event.target.value)}
            className="mt-0.5 w-full border-b border-input bg-transparent pb-0.5 text-sm text-cream outline-none transition-colors duration-300 focus:border-gold"
          />
        </label>
        <label className="group">
          <span className="eyebrow transition-colors duration-300 group-hover:text-gold">Guests</span>
          <select
            value={details.guests}
            onChange={(event) => updateDetails("guests", event.target.value)}
            className="mt-0.5 w-full border-b border-input bg-transparent pb-0.5 text-sm text-cream outline-none transition-colors duration-300 focus:border-gold"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </label>
        <label className="group">
          <span className="eyebrow transition-colors duration-300 group-hover:text-gold">Rooms</span>
          <select
            value={details.rooms}
            onChange={(event) => updateDetails("rooms", event.target.value)}
            className="mt-0.5 w-full border-b border-input bg-transparent pb-0.5 text-sm text-cream outline-none transition-colors duration-300 focus:border-gold"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </label>
        <button className="group relative col-span-2 overflow-hidden border border-gold bg-gold px-5 py-1.5 text-[0.6rem] tracking-[0.35em] text-cream uppercase transition-all duration-500 hover:shadow-[var(--shadow-gold)] lg:col-span-1">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-gold">Book now</span>
          <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-500 ease-out group-hover:translate-y-0" />
        </button>
      </form>
    </section>
  );
}
