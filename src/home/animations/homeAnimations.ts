import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function setupHomeAnimations(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);
  const ctx = gsap.context(() => {
    gsap.fromTo("[data-home-reveal]", { y: 36, autoAlpha: 0 }, {
      y: 0, autoAlpha: 1, duration: 1, stagger: 0.08, ease: "power3.out",
      scrollTrigger: { trigger: root, start: "top 88%" },
    });
  }, root);
  return () => ctx.revert();
}