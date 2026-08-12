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
    }, 3000);
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
          <Reveal y={50} duration={1} delay={0.2}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6">MARRKGRAPHY</h1>
          </Reveal>
          <Reveal y={20} duration={0.8} delay={0.7}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Creating bold, immersive stories that leave a lasting impression.
            </p>
          </Reveal>
          <Reveal y={20} duration={0.8} delay={0.9}>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-10">Bismark Akoto | Visual Storyteller</p>
          </Reveal>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[var(--color-accent)] text-white font-medium hover:bg-red-700 transition-colors uppercase tracking-widest text-sm rounded-full"
          >
            Contact Me
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
              src="https://ik.imagekit.io/orductive/photography/Profile/h.jpg"
              alt="Bismark Akoto"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
          <h2 className="text-6xl md:text-8xl font-heading uppercase tracking-tight leading-none mb-6">STORY SELLS.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            People don't buy what you do; they buy why you do it. Every frame tells a story — let's make yours unforgettable.
          </p>
        </Reveal>
        <Reveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          {[
            { id: 'hv1iVQIfL8M', title: 'Serving Those Who Served' },
            { id: 'Ca_zRAYyD5g', title: 'The People Behind the Brand' },
          ].map((video) => (
            <a key={video.id} href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer" className="group relative aspect-video flex items-center justify-center cursor-pointer overflow-hidden" style={{ position: 'relative' }}>
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-heading uppercase">{video.title}</h3>
              </div>
            </a>
          ))}
        </Reveal>
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
            'https://ik.imagekit.io/orductive/photography/Character%20Studies/Cover.jpg',
            'https://ik.imagekit.io/orductive/photography/Moments%20in%20Motion/Cover.jpg',
            'https://ik.imagekit.io/orductive/photography/Monochrome/Cover.jpg',
            'https://ik.imagekit.io/orductive/photography/The%20Edge%20of%20Effort/Cover.jpg',
            'https://ik.imagekit.io/orductive/photography/The%20Unscripted/Cover.jpg',
            'https://ik.imagekit.io/orductive/photography/Hub%20Page%20images/2.jpg',
          ].map((src, i) => (
            <div key={i} onClick={() => openLightbox(i)} className="relative cursor-pointer overflow-hidden group break-inside-avoid">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                style={{ width: '100%', objectFit: 'cover', display: 'block' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* 5. Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)] overflow-hidden bg-[var(--color-background)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading uppercase tracking-tight leading-none">Services</h2>
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
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-[-2.3px] font-heading uppercase leading-none text-white mb-8">CONTACT ME.</h2>
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
              'https://ik.imagekit.io/orductive/photography/Character%20Studies/Cover.jpg',
              'https://ik.imagekit.io/orductive/photography/Moments%20in%20Motion/Cover.jpg',
              'https://ik.imagekit.io/orductive/photography/Monochrome/Cover.jpg',
              'https://ik.imagekit.io/orductive/photography/The%20Edge%20of%20Effort/Cover.jpg',
              'https://ik.imagekit.io/orductive/photography/The%20Unscripted/Cover.jpg',
              'https://ik.imagekit.io/orductive/photography/Hub%20Page%20images/2.jpg',
            ][activeImage ?? 0]} alt="Full size" className="max-w-full max-h-full object-contain mx-auto" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
