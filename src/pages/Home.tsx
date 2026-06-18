import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    ).fromTo(
      taglineRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex flex-col justify-center items-center overflow-hidden -mt-20">
      {/* Video Placeholder Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[var(--color-surface)] flex items-center justify-center opacity-50">
          <span className="text-[var(--color-text-secondary)]">Video Placeholder</span>
        </div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 
          ref={headlineRef}
          className="font-display text-5xl md:text-7xl lg:text-9xl text-white mb-6 tracking-wide"
        >
          MARKGRAPHY
        </h1>
        <p 
          ref={taglineRef}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light"
        >
          Capturing moments that define a lifetime.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>
    </div>
  );
};

export default Home;
