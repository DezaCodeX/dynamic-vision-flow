export function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="site-footer dark-surface border-t border-border bg-ink py-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-7 px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
        <div data-reveal>
          <p className="font-display text-2xl tracking-[0.16em] text-cream">PNS NAKSHATRA</p>
          <p className="eyebrow mt-2">Vellore, Tamil Nadu</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Rooms, rooftop dining, lounge and banquet spaces under one roof.
          </p>
          <button onClick={onBook} className="luxury-button luxury-button-hover mt-4 px-5 py-2">
            Book your stay
          </button>
        </div>

        <div data-reveal>
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
            {[
              ["Home", "/"],
              ["About Us", "/about-us"],
              ["Rooms", "/#stay"],
              ["Dining", "/#dine"],
              ["Gallery", "/#gallery"],
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
          <a href="/contact" className="eyebrow text-left transition-colors hover:text-gold">
            Contact
          </a>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
            <li>No. 171, Arcot Main Road, Rangapuram, Vellore 632009</li>
            <li>
              <a href="tel:+917598498603" className="hover:text-gold">
                +91 75984 98603
              </a>
            </li>
            <li>
              <a href="mailto:fo@hotelpnsnakshatra.com" className="hover:text-gold">
                fo@hotelpnsnakshatra.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-7 max-w-[1400px] px-6 text-[0.6875rem] leading-relaxed tracking-[0.16em] text-muted-foreground uppercase lg:px-12">
        © {new Date().getFullYear()} Hotel PNS Nakshatra
      </p>
    </footer>
  );
}
