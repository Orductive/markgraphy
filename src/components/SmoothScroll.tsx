import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Augment window object for TS
declare global {
  interface Window {
    lenis: Lenis;
  }
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Keep ScrollTrigger in sync with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Bind Lenis's requestAnimationFrame to GSAP's ticker
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // Prevent GSAP from trying to catch up on dropped frames
    gsap.ticker.lagSmoothing(0);

    // Make lenis globally available for smooth scrolling to anchors
    window.lenis = lenis;

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete window.lenis;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
