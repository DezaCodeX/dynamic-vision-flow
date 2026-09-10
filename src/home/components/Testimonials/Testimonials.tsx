export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
      <div className="max-w-2xl" data-home-reveal>
        <p className="eyebrow">07 — Guest reviews</p>
        <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-cream">
          Your stay, in <span className="italic text-gold">your words.</span>
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Guest stories will appear here as verified reviews become available.
        </p>
        <div className="mt-8 flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="text-2xl text-gold transition-transform duration-300 hover:scale-125" style={{ transitionDelay: `${i * 50}ms` }}>
              ★
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
