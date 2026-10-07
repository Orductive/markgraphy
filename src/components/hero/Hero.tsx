import React, { useState, useCallback } from 'react';
import HeroBackground from './HeroBackground';
import HeroSequence from './HeroSequence';

/**
 * Hero section composing HeroBackground and HeroSequence.
 * Full-viewport height (100vh) with -80px margin to tuck underneath the transparent navbar.
 * Synchronizes the sequence timeline with the video playback start.
 */
export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaying = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black text-white"
      style={{
        width: '100%',
        height: '100vh',
        marginTop: '-80px',
        position: 'relative',
        backgroundColor: '#000000',
      }}
      aria-label="Hero Introduction"
    >
      <HeroBackground onPlaying={handlePlaying} />
      <HeroSequence isPlaying={isPlaying} />
    </section>
  );
};

export default Hero;
