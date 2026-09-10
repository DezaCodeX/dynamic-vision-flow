import { facilities } from "@/home/data/homeData";

export function Amenities() {
  return (
    <section className="border-y border-border bg-ink px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow" data-home-reveal>04 — Facilities</p>
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden bg-background p-8 transition-all duration-500 hover:bg-card"
              data-home-reveal
            >
              <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-gold/8 to-transparent transition-transform duration-700 ease-out group-hover:translate-y-0" />
              <p className="relative font-display text-3xl text-cream transition-colors duration-300 group-hover:text-gold">{item.name}</p>
              <div className="gold-rule relative my-5 w-12 transition-all duration-500 group-hover:w-20" />
              <p className="relative text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
