import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: boolean;
  delay?: number;
  duration?: number;
  y?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = '', 
  staggerChildren = false,
  delay = 0,
  duration = 0.8,
  y = 30
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (staggerChildren) {
        const items = ref.current?.children;
        if (items && items.length > 0) {
          gsap.fromTo(items, 
            { y: y, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: duration,
              ease: 'power3.out',
              delay: delay,
              stagger: 0.1,
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
              }
            }
          );
        }
      } else {
        gsap.fromTo(ref.current, 
          { y: y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: duration,
            ease: 'power3.out',
            delay: delay,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
            }
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [staggerChildren, delay, duration, y]);

  return <div ref={ref} className={className}>{children}</div>;
};

export default Reveal;
