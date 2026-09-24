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

export function BookingWidget({
  onBook,
  showHeading = false,
}: {
  onBook: (details: BookingDetails) => void;
  showHeading?: boolean;
}) {
  const [details, setDetails] = useState(initialBookingDetails);

  const updateDetails = (field: keyof BookingDetails, value: string) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onBook(details);
      }}
      aria-label={showHeading ? "Book your stay" : undefined}
      className="booking-bar glass-panel relative z-20 grid w-full grid-cols-1 gap-4 rounded-md p-4 shadow-[0_16px_40px_-24px_rgba(41,56,99,0.55)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_-24px_rgba(41,56,99,0.65)] focus-within:-translate-y-0.5 md:grid-cols-[1fr_1fr_0.75fr_auto] md:items-end"
    >
      {showHeading && (
        <h2 className="booking-bar-heading col-span-2 w-full font-display text-3xl leading-none text-ink md:col-span-4 md:text-4xl">
          Book your stay
        </h2>
      )}
      <label className="block">
        <span className="eyebrow">Check-in</span>
        <input
          required
          type="date"
          value={details.checkIn}
          onChange={(event) => updateDetails("checkIn", event.target.value)}
          className="mt-0.5 w-full border-b border-input bg-transparent pb-0.5 text-[length:var(--type-body-small)] text-cream outline-none focus:border-gold"
        />
      </label>
      <label className="block">
        <span className="eyebrow">Check-out</span>
        <input
          required
          type="date"
          value={details.checkOut}
          onChange={(event) => updateDetails("checkOut", event.target.value)}
          className="mt-0.5 w-full border-b border-input bg-transparent pb-0.5 text-[length:var(--type-body-small)] text-cream outline-none focus:border-gold"
        />
      </label>
      <label>
        <span className="eyebrow">Guests</span>
        <select
          value={details.guests}
          onChange={(event) => updateDetails("guests", event.target.value)}
          className="mt-0.5 w-full border-b border-input bg-transparent pb-0.5 text-[length:var(--type-body-small)] text-cream outline-none"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4+</option>
        </select>
      </label>
      <button className="luxury-button luxury-button-hover col-span-2 px-5 py-1.5 lg:col-span-1">
        Check availability
      </button>
    </form>
  );
}
