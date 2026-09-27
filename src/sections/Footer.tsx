import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/pns logo.png";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Rooms", "/rooms"],
  ["Dining", "/dining"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="site-footer dark-surface border-t border-gold/30 bg-ink text-[var(--color-ivory)]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-3 lg:flex-row lg:items-start lg:justify-between lg:gap-5 lg:px-12 lg:py-4">
        <div className="flex min-w-0 flex-col justify-between lg:w-[24%]">
          <a href="/" className="inline-block" aria-label="Hotel PNS Nakshatra home">
            <img src={logo} alt="Hotel PNS Nakshatra" className="h-8 w-auto object-contain" />
          </a>
          <button onClick={onBook} className="luxury-button luxury-button-hover mt-3 w-fit px-4 py-2 text-xs uppercase tracking-[0.14em]">
            Book your stay
          </button>
        </div>

        <div className="lg:w-[17%]">
          <p className="eyebrow text-gold">Explore</p>
          <nav className="mt-2 grid gap-x-3 gap-y-1 text-sm leading-[1.2] text-[var(--color-ivory)]/85 sm:grid-cols-2 lg:grid-cols-2">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-gold">{label}</a>
            ))}
          </nav>
        </div>

        <div className="lg:w-[38%]">
          <p className="eyebrow text-gold">Reach out</p>
          <div className="mt-2 grid gap-3 text-sm leading-[1.2] text-[var(--color-ivory)]/85 md:grid-cols-[1.1fr_0.9fr] md:gap-5">
            <address className="not-italic">
              <span className="block">No. 171, Arcot Main Road,<br />Rangapuram,<br />Vellore - 632009,<br />Tamil Nadu, India.</span>
            </address>

            <div className="grid gap-2">
              <a href="https://maps.app.goo.gl/MhVVYxgfvEiwWW6d8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gold hover:text-[var(--color-ivory)]"><MapPin className="size-4" />Get directions</a>
              <a href="tel:+917598498603" className="hover:text-gold">Room reservations: +91 75984 98603</a>
              <a href="mailto:fo@hotelpnsnakshatra.com" className="hover:text-gold">fo@hotelpnsnakshatra.com</a>
            </div>
          </div>
        </div>

        <div className="lg:w-[10%] lg:pt-1">
          <div className="flex items-center gap-4 text-gold">
            <a href="https://www.facebook.com/pnsnakshatra" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[var(--color-ivory)]"><Facebook className="size-5" /></a>
            <a href="https://www.instagram.com/hotelpnsnakshatra" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[var(--color-ivory)]"><Instagram className="size-5" /></a>
            <a href="tel:+917598498603" aria-label="Call reservations" className="hover:text-[var(--color-ivory)]"><Phone className="size-5" /></a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-1 border-t border-gold/20 px-6 py-1.5 text-[0.62rem] uppercase tracking-[0.14em] text-[var(--color-ivory)]/70 sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <span>© {new Date().getFullYear()} Hotel PNS Nakshatra</span>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a href="/privacy-policy" className="hover:text-gold">Privacy policy</a>
          <a href="/terms-and-conditions" className="hover:text-gold">Terms and conditions</a>
          <a href="/refund-cancellation-policy" className="hover:text-gold">Refund &amp; cancellation policy</a>
        </div>
        <span>Powered by PNS Nakshatra</span>
      </div>
    </footer>
  );
}
