import { diningExperiences } from "@/home/data/homeData";

export function DiningPreview() {
  return (
    <section id="dine" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <p className="eyebrow" data-home-reveal>03 — Dine</p>
      <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.2rem)] leading-none text-cream" data-home-reveal>
        Good evenings begin <span className="italic text-gold">here.</span>
      </h2>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {diningExperiences.map((item) => (
          <article
            key={item.id}
            data-home-reveal
            className="group card-hover-lift cursor-pointer overflow-hidden border border-border bg-background hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={`${item.name} at PNS Nakshatra`}
                loading="lazy"
                width={1400}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute left-4 top-4 border border-gold/40 bg-ink/60 px-3 py-1 eyebrow text-cream backdrop-blur-sm transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                {item.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl text-cream transition-colors duration-300 group-hover:text-gold">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <a href="#dine" className="group mt-12 inline-flex items-center gap-2 border-b border-gold pb-2 text-gold eyebrow transition-all duration-300 hover:gap-4">
        Explore dining
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </section>
  );
}
