import { hotel, nearbyPlaces } from "@/home/data/homeData";

export function LocationPreview() {
  return (
    <section id="vellore" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-2">
        <div data-home-reveal>
          <p className="eyebrow">08 — Location</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5.2rem)] leading-none text-cream">
            Close to what <span className="italic text-gold">matters.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{hotel.address}</p>
          <a
            href="https://maps.google.com/?q=Hotel+PNS+Nakshatra+Vellore"
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-2 border-b border-gold pb-2 text-gold eyebrow transition-all duration-300 hover:gap-4"
          >
            Get directions
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <ul>
          {nearbyPlaces.map((place) => (
            <li
              key={place.place}
              className="group flex items-baseline justify-between border-b border-border py-6 transition-colors duration-300 hover:border-gold/50"
              data-home-reveal
            >
              <span className="font-display text-2xl text-cream transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                {place.place}
              </span>
              <span className="eyebrow transition-all duration-300 group-hover:text-gold group-hover:tracking-[0.22em]">
                {place.distance}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
