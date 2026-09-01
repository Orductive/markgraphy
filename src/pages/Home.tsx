import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Accordion from '../components/Accordion';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  const location = useLocation();

  const servicesData = [
    { id: 'videography', title: 'Video', content: 'From commercial campaigns to documentary-style storytelling, we craft moving images that command attention.' },
    { id: 'photography', title: 'Photography', content: 'Striking, high-end photography for brands, events, and individuals who demand visual excellence.' },
    { id: 'consulting', title: 'Consulting', content: "Strategic visual consulting to help align your brand's aesthetic with your overarching business goals." },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    'https://ik.imagekit.io/orductive/photography/Hub%20Page%20images/1.jpg',
    'https://ik.imagekit.io/orductive/photography/Hub%20Page%20images/2.jpg',
    'https://ik.imagekit.io/orductive/photography/Hub%20Page%20images/3.jpg',
    'https://ik.imagekit.io/orductive/photography/Hub%20Page%20images/4.jpg',
    'https://ik.imagekit.io/orductive/photography/Hub%20Page%20images/5.jpg',
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash === '#contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const openLightbox = (index: number) => { setActiveImage(index); setLightboxOpen(true); };
  const closeLightbox = () => { setLightboxOpen(false); setActiveImage(null); };

  return (
    <div style={{ width: '100%' }} className="text-white">

      {/* 1. Hero */}
      <div style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${heroImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        marginTop: '-80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
        <div style={{ position: 'relative', zIndex: 20, textAlign: 'center', padding: '0 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <Reveal y={20} duration={0.8} delay={0.6}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: '300', letterSpacing: '0.2em', color: 'white', marginBottom: '0.5rem' }}>
              Bismark Akoto
            </h1>
          </Reveal>
          <Reveal y={20} duration={0.8} delay={0.7}>
            <p className="text-sm md:text-base text-gray-300 uppercase tracking-[0.3em] mb-4">The Visual Storyteller</p>
          </Reveal>
          <Reveal y={20} duration={0.8} delay={0.8}>
            <p className="text-sm text-gray-400 mb-10">Creating bold, immersive stories that leave a lasting impression.</p>
          </Reveal>
          <Link
            to="/photography"
            className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm rounded-full"
          >
            View My Work
          </Link>
        </div>
        <div style={{ position: 'absolute', bottom: '2.5rem', zIndex: 20 }} className="animate-bounce">
          <ChevronDown size={32} className="text-white opacity-70" />
        </div>
      </div>

      {/* 2. About Me Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)] bg-[var(--color-background)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
            <img
              src="https://ik.imagekit.io/orductive/photography/Profile/Official-Headshot.JPG"
              alt="Bismark Akoto"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
            />
          </div>
          <Reveal>
            <h2 className="text-4xl mb-6">About Me</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm Bismark Akoto, a visual and digital storyteller passionate about creating visuals that people connect with and remember. I produce engaging short-form content, photography, videography and social media campaigns that help brands, businesses, and creators grow their audience and tell authentic stories.
            </p>
            <Link to="/about" className="text-[var(--color-accent)] hover:text-white transition-colors border-b border-[var(--color-accent)] pb-1">
              More About Me
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. Story Sells */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)] text-center overflow-hidden bg-[var(--color-background)]">
        <Reveal>
          <h2 className="text-5xl md:text-8xl font-heading uppercase tracking-tight leading-none mb-6">STORY SELLS.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            People don't buy what you do; they buy why you do it. Every frame tells a story — let's make yours unforgettable.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          {[
            { id: 'hv1iVQIfL8M', title: 'Serving Those Who Served' },
            { id: '4rvAsaFJzwg', title: 'Terries on the Quad EP1' },
          ].map((video) => (
            <div key={video.id} className="group cursor-pointer">
              {playingVideoId === video.id ? (
                <div style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden', marginBottom: '1rem' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
              ) : (
                <div
                  onClick={() => setPlayingVideoId(video.id)}
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                    backgroundImage: `url(https://img.youtube.com/vi/${video.id}/maxresdefault.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    className="group-hover:bg-opacity-20 transition-all">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-4">
                <h3 className="text-xl font-heading uppercase text-white">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <Link to="/videography" className="inline-block px-10 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
          More of My Work
        </Link>
      </section>

      {/* 4. Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)] overflow-hidden bg-[var(--color-background)]">
        <Reveal className="flex justify-between items-end mb-12">
          <h2 className="text-4xl">Gallery</h2>
          <Link to="/photography" className="hidden md:inline-block text-[var(--color-accent)] hover:text-white transition-colors border-b border-[var(--color-accent)] pb-1">
            View All Photos
          </Link>
        </Reveal>
        <Reveal staggerChildren className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {[
            'https://ik.imagekit.io/orductive/photography/gallery/mkg-94.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/IMG_0877%204.40.28%E2%80%AFPM.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/TBG-104.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/TBG-191.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/IMG_0019.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/mkg-134.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/IMG_0143.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/IMG_0310.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/IMG_0806.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/mkg-180.jpg',
            'https://ik.imagekit.io/orductive/photography/gallery/IMG_0196.jpg',
          ].map((src, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="break-inside-avoid cursor-pointer group"
              style={{ marginBottom: '1rem' }}
            >
              <img
                src={`${src}?tr=w-800`}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </Reveal>
      </section>

      {/* 5. Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)] overflow-hidden bg-[var(--color-background)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-heading uppercase tracking-tight leading-none">Services</h2>
          </Reveal>
          <Reveal className="w-full">
            <Accordion items={servicesData} defaultOpenId="videography" />
          </Reveal>
        </div>
      </section>

      {/* 6. Contact */}
      <section id="contact" className="py-12 bg-[var(--color-background)] text-white scroll-mt-20 overflow-hidden">
        <div className="max-w-[1063px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <Reveal>
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-[-2.3px] font-heading uppercase leading-none text-white mb-8">CONTACT ME.</h2>
            </Reveal>
            <Reveal className="w-full">
              <form className="space-y-8 font-body">
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Name</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name (required)" required className="w-full bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:border-white transition-colors text-black placeholder-gray-500 text-sm" />
                    <input type="text" placeholder="Last Name (required)" required className="w-full bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:border-white transition-colors text-black placeholder-gray-500 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Email</label>
                  <input type="email" placeholder="Email (required)" required className="w-full bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:border-white transition-colors text-black placeholder-gray-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Brief Description</label>
                  <input type="text" placeholder="Brief Description (required)" required className="w-full bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:border-white transition-colors text-black placeholder-gray-500 text-sm" />
                </div>
                <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[var(--color-accent)] text-white font-semibold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors">
                  Send
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors">
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl">
            <img src={[
              'https://ik.imagekit.io/orductive/photography/gallery/mkg-94.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/IMG_0877%204.40.28%E2%80%AFPM.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/TBG-104.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/TBG-191.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/IMG_0019.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/mkg-134.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/IMG_0143.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/IMG_0310.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/IMG_0806.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/mkg-180.jpg',
              'https://ik.imagekit.io/orductive/photography/gallery/IMG_0196.jpg',
            ][activeImage ?? 0]} alt="Full size" className="max-w-full max-h-full object-contain mx-auto" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
