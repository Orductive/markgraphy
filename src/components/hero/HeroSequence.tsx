import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { heroCues, type HeroCue } from './heroCues';

/* =========================================================================
   PRESENTATIONAL TEXT BLOCKS
   Pure presentational pieces, decoupled from timeline driver logic.
   This allows future drivers (e.g. video.currentTime) to drive the same blocks.
   ========================================================================= */

interface CueBlockProps {
  blockRef: React.RefObject<HTMLDivElement | null>;
}

export const CueFrameBlock: React.FC<CueBlockProps> = ({ blockRef }) => {
  return (
    <div
      ref={blockRef}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none"
      style={{ opacity: 0 }}
      aria-hidden="true"
    >
      <div
        className="font-display uppercase text-white tracking-wide"
        style={{
          fontFamily: "var(--font-display, 'Instrument Serif', serif)",
          fontSize: 'clamp(2.5rem, 6vw, 6rem)',
          lineHeight: 1.05,
        }}
      >
        <div>EVERY FRAME</div>
        <div>HAS A STORY.</div>
      </div>
    </div>
  );
};

export const CueHereBlock: React.FC<CueBlockProps> = ({ blockRef }) => {
  return (
    <div
      ref={blockRef}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none"
      style={{ opacity: 0 }}
      aria-hidden="true"
    >
      <div
        className="font-display uppercase text-white tracking-wide"
        style={{
          fontFamily: "var(--font-display, 'Instrument Serif', serif)",
          fontSize: 'clamp(2.5rem, 6vw, 6rem)',
          lineHeight: 1.05,
        }}
      >
        <div>I'M HERE</div>
        <div>TO TELL IT.</div>
      </div>
    </div>
  );
};

interface CueNameBlockProps {
  nameRef: React.RefObject<HTMLDivElement | null>;
  buttonRef: React.RefObject<HTMLDivElement | null>;
}

export const CueNameBlock: React.FC<CueNameBlockProps> = ({ nameRef, buttonRef }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none">
      {/* Centered Name and Subtitle */}
      <div className="relative flex flex-col items-center justify-center">
        <div
          ref={nameRef}
          className="flex flex-col items-center justify-center"
          style={{ opacity: 0 }}
        >
          <h1
            className="font-display uppercase text-white tracking-tight"
            style={{
              fontFamily: "var(--font-display, 'Instrument Serif', serif)",
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              lineHeight: 0.95,
            }}
          >
            BISMARK AKOTO
          </h1>
          <p
            className="font-mono-accent uppercase text-white/80 tracking-[0.25em] mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm md:text-base text-center"
            style={{
              fontFamily: "var(--font-mono-accent, 'Space Mono', monospace)",
              letterSpacing: '0.25em',
            }}
          >
            VISUAL STORYTELLER · FILMMAKER · PHOTOGRAPHER
          </p>
        </div>

        {/* Enter Button: positioned relative to the name block without displacing its center */}
        <div
          ref={buttonRef}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-8 sm:pt-10 md:pt-12 whitespace-nowrap pointer-events-auto"
          style={{ opacity: 0, pointerEvents: 'none' }}
        >
          <Link
            to="/photography"
            className="inline-block px-7 sm:px-9 py-3 sm:py-3.5 border border-rust bg-transparent text-white font-mono-accent uppercase tracking-[0.25em] text-xs sm:text-sm transition-all duration-300 hover:bg-rust hover:text-white focus:outline-none focus:ring-1 focus:ring-rust cursor-pointer"
            style={{
              fontFamily: "var(--font-mono-accent, 'Space Mono', monospace)",
              borderColor: 'var(--color-rust, #B7410E)',
              letterSpacing: '0.25em',
            }}
          >
            [ ENTER ]
          </Link>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   TIMELINE DRIVER
   Decoupled driver creating the GSAP timeline from the cues array.
   ========================================================================= */

export interface TimelineDriverOptions {
  cue1Element: HTMLElement | null;
  cue2Element: HTMLElement | null;
  cue3Element: HTMLElement | null;
  buttonElement: HTMLElement | null;
  cues: HeroCue[];
}

export function buildHeroTimeline({
  cue1Element,
  cue2Element,
  cue3Element,
  buttonElement,
  cues,
}: TimelineDriverOptions): gsap.core.Timeline | null {
  if (!cue1Element || !cue2Element || !cue3Element || !buttonElement) {
    return null;
  }

  const getCue = (id: HeroCue['id']) => cues.find((c) => c.id === id)?.time ?? 0;
  const t1 = getCue('frame');
  const t2 = getCue('here');
  const t3 = getCue('name');
  const tEnter = getCue('enter');

  const tl = gsap.timeline();

  // Cue 1 fades in at 1.4s (~0.8s)
  tl.to(
    cue1Element,
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    },
    t1
  );

  // Crossfade at 3.6s: Cue 1 fades out (~0.6s) while Cue 2 fades in (~0.8s)
  tl.to(
    cue1Element,
    {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    },
    t2
  );
  tl.to(
    cue2Element,
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    },
    t2
  );

  // Crossfade at 5.4s: Cue 2 fades out (~0.6s) while Cue 3 fades in (~0.8s)
  tl.to(
    cue2Element,
    {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    },
    t3
  );
  tl.to(
    cue3Element,
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    },
    t3
  );

  // Enter button fades in at 6.4s (~0.8s) and stays
  tl.set(buttonElement, { pointerEvents: 'auto' }, tEnter);
  tl.to(
    buttonElement,
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    },
    tEnter
  );

  return tl;
}

/* =========================================================================
   HERO SEQUENCE COMPONENT
   ========================================================================= */

export interface HeroSequenceProps {
  /** Indicates whether the video has started playing, triggering the intro timeline */
  isPlaying?: boolean;
}

const HeroSequence: React.FC<HeroSequenceProps> = ({ isPlaying = false }) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cue1Ref = useRef<HTMLDivElement | null>(null);
  const cue2Ref = useRef<HTMLDivElement | null>(null);
  const cue3Ref = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip timeline and show final state immediately
      gsap.set([cue1Ref.current, cue2Ref.current], { opacity: 0, pointerEvents: 'none' });
      gsap.set(cue3Ref.current, { opacity: 1 });
      gsap.set(buttonRef.current, { opacity: 1, pointerEvents: 'auto' });
      return;
    }

    // Until timeline starts (triggered by onPlaying), all text blocks stay at opacity 0
    if (!isPlaying) {
      gsap.set([cue1Ref.current, cue2Ref.current, cue3Ref.current], { opacity: 0 });
      gsap.set(buttonRef.current, { opacity: 0, pointerEvents: 'none' });
      return;
    }

    // Timeline starts once when isPlaying becomes true
    const ctx = gsap.context(() => {
      gsap.set([cue1Ref.current, cue2Ref.current, cue3Ref.current], { opacity: 0 });
      gsap.set(buttonRef.current, { opacity: 0, pointerEvents: 'none' });

      buildHeroTimeline({
        cue1Element: cue1Ref.current,
        cue2Element: cue2Ref.current,
        cue3Element: cue3Ref.current,
        buttonElement: buttonRef.current,
        cues: heroCues,
      });
    }, stageRef);

    // Revert context on unmount / route changes / StrictMode remount
    return () => {
      ctx.revert();
    };
  }, [isPlaying]);

  return (
    <div
      ref={stageRef}
      className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden"
    >
      <CueFrameBlock blockRef={cue1Ref} />
      <CueHereBlock blockRef={cue2Ref} />
      <CueNameBlock nameRef={cue3Ref} buttonRef={buttonRef} />
    </div>
  );
};

export default HeroSequence;
