import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function setupHomeAnimations(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);
  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-home-reveal]").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 36, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        },
      );
    });
  }, root);
  return () => ctx.revert();
}
