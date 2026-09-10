import { hotel } from "@/home/data/homeData";

export function AboutPreview() {
  return (
    <section id="about" className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-40">
      <div data-home-reveal>
        <p className="eyebrow">01 — About</p>
        <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-none text-cream">
          A considered stay in <span className="italic text-gold">Vellore.</span>
        </h2>
      </div>
      <div data-home-reveal className="lg:pt-24">
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {hotel.description} Every detail is designed to make arrival feel easy and the time after it feel entirely your own.
        </p>
        <a href="#about" className="group mt-8 inline-flex items-center gap-2 border-b border-gold pb-2 text-gold eyebrow transition-all duration-300 hover:gap-4">
          Explore our story
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
