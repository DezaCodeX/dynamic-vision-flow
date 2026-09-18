import { gallery } from "@/home/data/homeData";
export function GalleryPreview() {
  return (
    <section id="gallery" className="bg-card/25 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="eyebrow" data-home-reveal>
          06 — Gallery
        </p>
        <h2
          className="mt-5 font-display text-[clamp(2.5rem,6vw,5.2rem)] text-cream"
          data-home-reveal
        >
          See the spaces.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {gallery.map((item, index) => (
            <figure
              key={item.label}
              className={`group ${
                index === 0
                  ? "lg:col-span-7"
                  : index === 1
                    ? "sm:col-span-1 lg:col-span-5 lg:mt-16"
                    : index === 2
                      ? "sm:col-span-1 lg:col-span-4"
                      : index === 3
                        ? "sm:col-span-1 lg:col-span-4 lg:mt-16"
                        : "sm:col-span-1 lg:col-span-4"
              }`}
              data-home-reveal
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                width="1200"
                height="800"
                className={`w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02] ${
                  index === 0 ? "aspect-[16/8]" : index === 1 ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              />
              <figcaption className="eyebrow mt-4">{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <a
          href="#gallery"
          className="eyebrow mt-6 inline-block border-b border-gold pb-2 text-gold"
        >
          View full gallery
        </a>
      </div>
    </section>
  );
}
