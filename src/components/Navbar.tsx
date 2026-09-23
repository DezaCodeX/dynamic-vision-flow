import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/pns logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Rooms", href: "/#stay" },
  { label: "Dining", href: "/#dine" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ onBook }: { onBook: () => void }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
        solid
          ? "glass-panel border-x-0 border-t-0 bg-background/88 py-2"
          : "border-b border-border bg-background/68 py-[clamp(0.75rem,2vw,1rem)] backdrop-blur-md"
      }`}
    >
      <nav className="flex w-full items-center justify-between px-[clamp(1rem,3vw,2rem)]">
        <a href="#top" className="leading-none" data-cursor="Home">
          <img
            src={logo}
            alt="PNS Nakshatra"
            className="h-[clamp(3.25rem,5vw,4.5rem)] w-auto object-contain"
          />
        </a>

        <ul className="hidden items-center gap-[clamp(1.25rem,3vw,2.5rem)] lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`eyebrow text-[0.78rem] transition-colors hover:text-gold ${location.pathname === l.href ? "text-gold" : ""}`}
                data-cursor="View"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={onBook}
            data-cursor="Book"
            className="luxury-button luxury-button-hover hidden px-5 py-2.5 lg:block"
          >
            Book your stay
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-6 bg-cream" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-panel mx-[clamp(1rem,4vw,1.5rem)] mt-3 flex flex-col gap-5 p-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`eyebrow ${location.pathname === l.href ? "text-gold" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="luxury-button luxury-button-hover px-5 py-2.5"
          >
            Book your stay
          </button>
        </div>
      ) : null}
    </header>
  );
}
