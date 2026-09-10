import { featuredRooms } from "@/home/data/homeData";

export function RoomsPreview() {
  return (
    <section id="stay" className="bg-card/40 px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow" data-home-reveal>02 — Stay</p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.86] tracking-[-0.02em] text-cream" data-home-reveal>
          Luxury rooms <span className="italic text-gold">&amp; suites</span>
        </h2>
        <p className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground" data-home-reveal>
          Warm materials, calm proportions, and the quiet details that make a stay feel entirely your own.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featuredRooms.map((room) => (
            <article
              key={room.id}
              className="group card-hover-lift cursor-pointer border border-border bg-background hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)]"
              data-home-reveal
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} at PNS Nakshatra`}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-3xl text-cream transition-colors duration-300 group-hover:text-gold">{room.name}</h3>
                  <span className="eyebrow">{room.size}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{room.detail}</p>
                <span className="eyebrow mt-5 inline-block text-gold transition-all duration-300 group-hover:translate-x-1">
                  Explore room →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
