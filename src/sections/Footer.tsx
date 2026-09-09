export function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="site-footer border-t border-border py-8">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-7 px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
        <div data-reveal>
          <p className="font-display text-2xl tracking-[0.16em] text-cream">PNS NAKSHATRA</p>
          <p className="eyebrow mt-2">Vellore, Tamil Nadu</p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
            Rooms, rooftop dining, lounge and banquet spaces under one roof.
          </p>
          <button
            onClick={onBook}
            className="mt-4 border border-gold px-5 py-2 text-[0.5rem] tracking-[0.3em] text-gold uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Book your stay
          </button>
        </div>

        <div data-reveal>
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 flex flex-col gap-1.5 text-xs text-muted-foreground">
            {[
              ["Stay", "/#stay"],
              ["Dine", "/#dine"],
              ["Celebrate", "/#celebrate"],
              ["Vellore", "/#vellore"],
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
          <a href="/contact" className="eyebrow text-left transition-colors hover:text-gold">Contact</a>
          <ul className="mt-3 flex flex-col gap-1.5 text-xs text-muted-foreground">
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

      <p className="mx-auto mt-7 max-w-[1400px] px-6 text-[0.45rem] tracking-[0.2em] text-muted-foreground uppercase lg:px-12">
        © {new Date().getFullYear()} Hotel PNS Nakshatra
      </p>
    </footer>
  );
}
