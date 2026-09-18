import { useEffect, useState } from "react";
import logo from "@/assets/pns logo.png";

const links = [
  { label: "Stay", href: "/#stay" },
  { label: "Dine", href: "/#dine" },
  { label: "Contact", href: "/contact" },
  { label: "Vellore", href: "/#vellore" },
];

export function Navbar({ onBook }: { onBook: () => void }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
        solid ? "glass-panel border-x-0 border-t-0 py-2" : "border-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <a href="#top" className="leading-none" data-cursor="Home">
          <img src={logo} alt="PNS Nakshatra" className="h-14 w-auto object-contain sm:h-[4.5rem]" />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="eyebrow text-[0.78rem] transition-colors hover:text-gold" data-cursor="View">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={onBook}
            data-cursor="Book"
            className="hidden border border-gold/60 bg-background/10 px-6 py-3 text-[0.7rem] tracking-[0.3em] text-gold uppercase transition-colors hover:bg-gold hover:text-primary-foreground sm:block"
          >
            Book your stay
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-6 bg-cream" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-panel mx-6 mt-3 flex flex-col gap-5 p-6 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eyebrow" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="border border-gold/50 px-5 py-3 text-[0.6rem] tracking-[0.34em] text-gold uppercase"
          >
            Book your stay
          </button>
        </div>
      ) : null}
    </header>
  );
}
