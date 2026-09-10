const moments = ["Arrival", "Stay", "Dining", "Celebration", "Departure"];

export function Experience() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="eyebrow" data-home-reveal>05 — Experience</p>
        <h2 className="mt-6 max-w-5xl font-display text-[clamp(3.4rem,10vw,9rem)] leading-[0.82] text-cream" data-home-reveal>
          Make room for <span className="italic text-gold">the moment.</span>
        </h2>
        <div className="mt-20 grid grid-cols-2 gap-y-8 border-t border-border pt-8 sm:grid-cols-5">
          {moments.map((moment, index) => (
            <div key={moment} data-home-reveal className="group cursor-default">
              <span className="eyebrow transition-colors duration-300 group-hover:text-gold">0{index + 1}</span>
              <p className="mt-4 font-display text-2xl text-cream transition-all duration-500 group-hover:translate-x-1 group-hover:text-gold">{moment}</p>
              <div className="gold-rule mt-3 w-0 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
