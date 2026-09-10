import heroHotel from "@/assets/hero-hotel.jpg";

export function BookingCTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative overflow-hidden border-y border-border px-6 py-32 lg:px-12 lg:py-48">
      <img src={heroHotel} alt="PNS Nakshatra at night" className="absolute inset-0 -z-10 size-full object-cover opacity-25 transition-transform duration-[3000ms] ease-out hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/70 to-background/80" />
      <div className="mx-auto max-w-[1400px]" data-home-reveal>
        <p className="eyebrow">PNS Nakshatra</p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.82] text-cream">
          Experience <span className="italic animate-shimmer">Nakshatra.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-6">
          <button
            onClick={onBook}
            className="group relative overflow-hidden border border-gold bg-gold px-9 py-4 text-[0.6rem] tracking-[0.4em] text-cream uppercase transition-all duration-500 hover:shadow-[var(--shadow-gold)]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-gold">Book your stay</span>
            <span className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-500 ease-out group-hover:translate-x-0" />
          </button>
          <a
            href="mailto:stay@pnsnakshatra.com"
            className="group relative overflow-hidden border border-cream/30 px-9 py-4 text-[0.6rem] tracking-[0.4em] text-cream uppercase transition-all duration-500 hover:border-gold"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-gold">Contact us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
