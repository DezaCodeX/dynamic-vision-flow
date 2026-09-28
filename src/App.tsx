import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Chatbot } from "@/components/chatbot";
import { Home } from "./home/Home";
import { AboutUs } from "./pages/AboutUs";
import { Rooms } from "./pages/Rooms";
import { Dining } from "./pages/Dining";
import { Gallery } from "./pages/Gallery";
import { Legal } from "./pages/Legal";

function ParagraphTypographyBoost() {
  useEffect(() => {
    const boostParagraphs = () => {
      document.querySelectorAll("p").forEach((paragraph) => {
        const currentSize = parseFloat(window.getComputedStyle(paragraph).fontSize);
        if (!Number.isFinite(currentSize) || currentSize <= 0) return;

        if (!paragraph.dataset.baseParagraphFontSize) {
          paragraph.dataset.baseParagraphFontSize = currentSize.toString();
        }

        const baseSize = Number(paragraph.dataset.baseParagraphFontSize);
        const targetSize = baseSize + 2;
        const displayedSize = parseFloat(window.getComputedStyle(paragraph).fontSize);

        if (Math.abs(displayedSize - targetSize) > 0.1) {
          paragraph.style.fontSize = `${targetSize}px`;
        }
      });
    };

    boostParagraphs();

    const observer = new MutationObserver(() => boostParagraphs());
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    window.addEventListener("resize", boostParagraphs);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", boostParagraphs);
    };
  }, []);

  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" className="luxury-button luxury-button-hover mt-6 inline-flex px-4 py-2">
          Go home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ParagraphTypographyBoost />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy-policy" element={<Legal path="/privacy-policy" />} />
        <Route path="/terms-and-conditions" element={<Legal path="/terms-and-conditions" />} />
        <Route path="/refund-cancellation-policy" element={<Legal path="/refund-cancellation-policy" />} />
        <Route path="/contact" element={<Home contactOpen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        <Chatbot />
      </BrowserRouter>
    </>
  );
}
