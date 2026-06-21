import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedOutlet: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  
  const [displayLocation, setDisplayLocation] = useState(location);
  const [displayOutlet, setDisplayOutlet] = useState(currentOutlet);
  
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Determine if we need to crossfade (path changed)
    if (location.pathname !== displayLocation.pathname) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        setDisplayLocation(location);
        setDisplayOutlet(currentOutlet);
        window.scrollTo(0, 0);
        return;
      }

      if (wrapperRef.current) {
        gsap.to(wrapperRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            // Actually update the displayed content
            setDisplayLocation(location);
            setDisplayOutlet(currentOutlet);
            
            // Scroll to top
            if (window.lenis) {
              window.lenis.scrollTo(0, { immediate: true });
            } else {
              window.scrollTo(0, 0);
            }

            // Fade back in
            gsap.to(wrapperRef.current, {
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out',
              onComplete: () => {
                // Ensure scroll triggers are refreshed on the new page
                ScrollTrigger.refresh();
              }
            });
          }
        });
      }
    } else if (currentOutlet !== displayOutlet) {
      // If it's a search param change, query change, or inner state update, update without fade
      setDisplayOutlet(currentOutlet);
    }
  }, [location.pathname, currentOutlet, displayLocation.pathname, displayOutlet]);

  return <div ref={wrapperRef}>{displayOutlet}</div>;
};

export default AnimatedOutlet;
