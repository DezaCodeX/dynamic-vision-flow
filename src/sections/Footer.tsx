export function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
        <div data-reveal>
          <p className="font-display text-2xl tracking-[0.16em] text-cream">PNS NAKSHATRA</p>
          <p className="eyebrow mt-2">Vellore, Tamil Nadu</p>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">
            Rooms, rooftop dining, lounge and banquet spaces under one roof.
          </p>
          <button
            onClick={onBook}
            className="mt-6 border border-gold px-6 py-3 text-[0.55rem] tracking-[0.35em] text-gold uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Book your stay
          </button>
        </div>

        <div data-reveal>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground">
            {[
              ["Stay", "#stay"],
              ["Dine", "#dine"],
              ["Celebrate", "#celebrate"],
              ["Vellore", "#vellore"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground">
            <li>Katpadi Road, Vellore 632004</li>
            <li>
              <a href="tel:+914162222222" className="hover:text-gold">
                +91 416 222 2222
              </a>
            </li>
            <li>
              <a href="mailto:stay@pnsnakshatra.com" className="hover:text-gold">
                stay@pnsnakshatra.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1400px] px-6 text-[0.5rem] tracking-[0.25em] text-muted-foreground uppercase lg:px-12">
        © {new Date().getFullYear()} Hotel PNS Nakshatra
      </p>
    </footer>
  );
}
