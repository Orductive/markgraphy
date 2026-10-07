import React, { useEffect, useRef, useState } from 'react';
import { desktopVideo, mobileVideo, desktopPoster, mobilePoster } from './heroMedia';

// Named constants for the radial vignette effect
export const VIGNETTE_INNER_STOP = '45%';
export const VIGNETTE_OUTER_OPACITY = 0.85;

export interface HeroBackgroundProps {
  /** Callback fired once on the video's first "playing" event (or fallback error) */
  onPlaying?: () => void;
}

/**
 * Hook to select video and poster source based on viewport breakpoint.
 * Evaluated synchronously on initial render so only one video source is rendered and downloaded.
 */
function useHeroMediaSource() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 767px)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener('change', onChange);
    } else {
      mql.addListener(onChange);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, []);

  return {
    videoSrc: isMobile ? mobileVideo : desktopVideo,
    posterSrc: isMobile ? mobilePoster : desktopPoster,
  };
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ onPlaying }) => {
  const { videoSrc, posterSrc } = useHeroMediaSource();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasFiredPlayingRef = useRef(false);
  const errorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Check prefers-reduced-motion
  const [prefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Handle first "playing" event only
  const handlePlaying = () => {
    if (hasFiredPlayingRef.current) return;
    hasFiredPlayingRef.current = true;
    if (errorTimerRef.current) {
      clearTimeout(errorTimerRef.current);
      errorTimerRef.current = null;
    }
    onPlaying?.();
  };

  // If video errors, stay on poster/black and trigger onPlaying after 2 seconds
  const handleError = () => {
    if (hasFiredPlayingRef.current) return;
    if (errorTimerRef.current) return;

    errorTimerRef.current = setTimeout(() => {
      if (!hasFiredPlayingRef.current) {
        hasFiredPlayingRef.current = true;
        onPlaying?.();
      }
    }, 2000);
  };

  // Video playback initialization on mount and source changes
  useEffect(() => {
    if (prefersReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    try {
      video.currentTime = 0;
    } catch {
      // Ignore if not ready
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Auto-play prevented or aborted; ignore
      });
    }
  }, [videoSrc, prefersReducedMotion]);

  // Clean up error timer on unmount
  useEffect(() => {
    return () => {
      if (errorTimerRef.current) {
        clearTimeout(errorTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full bg-[#000] overflow-hidden"
      style={{ backgroundColor: '#000000' }}
      aria-hidden="true"
    >
      {/* 1. Black layer (fallback & base) */}
      <div
        className="absolute inset-0 w-full h-full bg-black z-0 pointer-events-none"
        style={{ backgroundColor: '#000000' }}
      />

      {/* 2. Video layer (or poster only if prefers-reduced-motion) */}
      {prefersReducedMotion ? (
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        />
      ) : (
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={handlePlaying}
          onError={handleError}
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        />
      )}

      {/* 3. Dark overlay: rgba(0,0,0,0.3) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      />

      {/* 4. Vignette: radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.85) 100%) */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: `radial-gradient(ellipse at center, transparent ${VIGNETTE_INNER_STOP}, rgba(0, 0, 0, ${VIGNETTE_OUTER_OPACITY}) 100%)`,
        }}
      />
    </div>
  );
};

export default HeroBackground;
