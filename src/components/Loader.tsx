import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / 1900);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        gsap.to(root.current, {
          autoAlpha: 0,
          duration: 0.9,
          ease: "power2.inOut",
          onComplete: onDone,
        });
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <p className="font-display text-4xl tracking-[0.3em] text-cream sm:text-5xl">PNS</p>
      <p className="mt-2 font-display text-2xl tracking-[0.5em] text-gold sm:text-3xl">
        NAKSHATRA
      </p>
      <span className="mt-6 block size-1 rounded-full bg-gold" />
      <p className="eyebrow mt-6">Loading experience</p>
      <div className="mt-4 h-px w-56 overflow-hidden bg-border">
        <div
          className="h-full bg-gold transition-[width] duration-100 ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}
