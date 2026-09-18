import { featuredRooms } from "@/home/data/homeData";
export function RoomsPreview() {
  return (
    <section id="stay" className="bg-[var(--color-surface-blue-soft)] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow" data-home-reveal>
          02 — Stay
        </p>
        <h2
          className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.86] tracking-[-0.02em] text-cream"
          data-home-reveal
        >
          Luxury rooms <span className="italic text-gold">&amp; suites</span>
        </h2>
        <p className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground" data-home-reveal>
          Warm materials, calm proportions, and the quiet details that make a stay feel entirely
          your own.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          {featuredRooms.map((room, index) => (
            <article
              key={room.id}
              className={`group ${index === 0 ? "md:col-span-6" : "md:col-span-3"}`}
              data-home-reveal
            >
              <div className="overflow-hidden border border-gold/40">
                <img
                  src={room.image}
                  alt={`${room.name} at PNS Nakshatra`}
                  loading="lazy"
                  width="1200"
                  height="800"
                  className={`${index === 0 ? "aspect-[4/3]" : "aspect-[3/4]"} w-full object-cover transition-transform duration-1000 group-hover:scale-105`}
                />
              </div>
              <div className="flex items-baseline justify-between border-b border-gold/40 pt-5 pb-3">
                <h3 className="font-display text-3xl text-cream">{room.name}</h3>
                <span className="eyebrow">{room.size}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{room.detail}</p>
              <span className="eyebrow mt-5 inline-block text-gold">Explore room →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
