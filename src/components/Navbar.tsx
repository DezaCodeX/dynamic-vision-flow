import { useEffect, useState } from "react";
import favIcon from "@/assets/fav_icon.webp";

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
        solid ? "glass-panel border-x-0 border-t-0 py-2" : "border-transparent py-3"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-start px-6 lg:px-12">
        <a href="#top" className="mr-auto leading-none transition-transform duration-300 hover:scale-[1.03]" data-cursor="Home">
          <span className="flex items-center gap-3">
            <img src={favIcon} alt="PNS Nakshatra" className="size-12 object-contain transition-transform duration-500 hover:rotate-3 sm:size-14" />
            <span className="text-left font-bold text-gold">
              <span className="block font-wordmark text-[1rem] tracking-[0.18em]">PNS</span>
              <span className="block w-fit border-b border-gold pb-0.5 font-wordmark text-[1.3rem] tracking-[0.12em]">NAKSHATRA</span>
              <span className="mt-[2px] block text-right text-[0.58rem] tracking-[0.35em]">LUXURY HOTEL</span>
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative eyebrow text-[0.78rem] transition-colors hover:text-gold"
                data-cursor="View"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-400 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4">
          <button
            onClick={onBook}
            data-cursor="Book"
            className="group relative hidden overflow-hidden border border-gold/50 px-6 py-3 text-[0.7rem] tracking-[0.3em] text-gold uppercase transition-all duration-500 hover:border-gold hover:shadow-[var(--shadow-gold)] sm:block"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-cream">Book your stay</span>
            <span className="absolute inset-0 -translate-y-full bg-gold transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="group flex size-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`block h-px w-6 bg-cream transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-cream transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-cream transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden transition-all duration-500 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass-panel mx-6 mt-3 flex flex-col gap-5 p-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eyebrow transition-colors hover:text-gold" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onBook(); }}
            className="border border-gold/50 px-5 py-3 text-[0.6rem] tracking-[0.34em] text-gold uppercase transition-colors hover:bg-gold hover:text-cream"
          >
            Book your stay
          </button>
        </div>
      </div>
    </header>
  );
}
