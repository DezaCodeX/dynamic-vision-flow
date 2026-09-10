import { gallery } from "@/home/data/homeData";

export function GalleryPreview() {
  return (
    <section id="gallery" className="bg-card/40 py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="eyebrow" data-home-reveal>06 — Gallery</p>
        <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5.2rem)] text-cream" data-home-reveal>See the spaces.</h2>
        <div className="mt-14 flex snap-x gap-5 overflow-x-auto pb-5">
          {gallery.map((item, index) => (
            <figure
              key={item.label}
              className={`group relative min-w-[78vw] snap-start overflow-hidden sm:min-w-[42vw] lg:min-w-[30vw] ${index % 2 ? "lg:mt-16" : ""}`}
              data-home-reveal
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[4/3] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="eyebrow absolute bottom-4 left-4 text-cream opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <a href="#gallery" className="group mt-8 inline-flex items-center gap-2 border-b border-gold pb-2 text-gold eyebrow transition-all duration-300 hover:gap-4">
          View full gallery
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
