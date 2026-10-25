import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef } from "react";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

// Freezes page scrolling (Lenis + native/touch) while `locked` is true, keeping the current scroll position
export function useScrollLock(locked = true) {
  const lenis = useLenis();

  useEffect(() => {
    if (!locked) return;

    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    const prevOverscroll = html.style.overscrollBehavior;
    const prevPaddingRight = html.style.paddingRight;
    // Pad by the scrollbar width so hiding it doesn't shift the layout sideways
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    lenis?.stop();
    html.style.overflow = "hidden";
    // Stops the iOS rubber-band bounce on the page behind
    html.style.overscrollBehavior = "none";
    if (scrollbarWidth > 0) html.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = prevOverflow;
      html.style.overscrollBehavior = prevOverscroll;
      html.style.paddingRight = prevPaddingRight;
      lenis?.start();
    };
  }, [locked, lenis]);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  if (!lenisRef.current) {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
  }

  useEffect(() => {
    const lenis = lenisRef.current!;
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}