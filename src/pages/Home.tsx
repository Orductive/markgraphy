import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Accordion from '../components/Accordion';
import Reveal from '../components/Reveal';

// Asset imports
import heroImage from '../assets/hero-real.jpg';
import logoImage from '../assets/logo.png';
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';

const Home: React.FC = () => {
  const location = useLocation();
  
  const servicesData = [
    {
      id: 'videography',
      title: 'Video',
      content: 'From commercial campaigns to documentary-style storytelling, we craft moving images that command attention.',
    },
    {
      id: 'photography',
      title: 'Photography',
      content: 'Striking, high-end photography for brands, events, and individuals who demand visual excellence.',
    },
    {
      id: 'consulting',
      title: 'Consulting',
      content: 'Strategic visual consulting to help align your brand\'s aesthetic with your overarching business goals.',
    }
  ];

  // Crossfade state for About Me section
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const aboutImages = [about1, about2];
  const galleryImages = [
    { src: gallery1, alt: 'Portrait photography in natural light' },
    { src: gallery2, alt: 'Creative street photography' },
    { src: gallery3, alt: 'Cinematic outdoor portrait' },
    { src: gallery4, alt: 'Dramatic lighting portrait' },
    { src: gallery5, alt: 'Urban photography session' },
    { src: gallery6, alt: 'Artistic event photography' },
  ];

  // Lightbox state
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
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [aboutImages.length]);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="w-full bg-[var(--color-background)] text-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Bismark Akoto capturing cinematic visuals" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20 text-center px-4 flex flex-col items-center">
          <Reveal y={50} duration={1} delay={0.2}>
            <h1 className="mb-6">
              <img src={logoImage} alt="Marrkgraphy" className="w-[220px] md:w-[340px] lg:w-[400px] mx-auto brightness-0 invert" />
            </h1>
          </Reveal>
          <Reveal y={20} duration={0.8} delay={0.7}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Capturing moments that define a lifetime.
            </p>
          </Reveal>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[var(--color-accent)] text-white font-medium hover:bg-red-700 transition-colors uppercase tracking-widest text-sm"
          >
            Contact Me
          </Link>
        </div>

        <div className="absolute bottom-10 z-20 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-70" />
        </div>
      </section>

      {/* 2. About Me Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            {aboutImages.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Bismark Akoto ${index === 0 ? 'behind the camera' : 'on a photography shoot'}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
          <Reveal>
            <h2 className="text-4xl mb-6">About Me</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm Bismark Akoto — a content creator, photographer, and digital storyteller passionate about creating visuals that people connect with and remember. What started in 2020 as a fascination with how stories are made grew into a calling. I produce photography, short-form content, and social media campaigns that help brands, businesses, and creators grow their audience and tell authentic stories — because the best visuals don't come from expensive equipment, they come from understanding people.
            </p>
            <Link to="/about" className="text-[var(--color-accent)] hover:text-white transition-colors border-b border-[var(--color-accent)] pb-1">
              More About Me
            </Link>
          </Reveal>
        </div>
      </section>



      {/* 4. Story Sells / Featured Work Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)] text-center overflow-hidden">
        <Reveal>
          <h2 className="text-6xl md:text-8xl font-heading uppercase tracking-tight leading-none mb-6">STORY SELLS.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            People don't buy what you do; they buy why you do it. Every frame we capture, every sequence we build is meticulously crafted to communicate your authentic narrative. We don't just shoot video—we engineer emotion.
          </p>
        </Reveal>
        
        <Reveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          {[1, 2].map((video) => (
            <div key={video} className="group relative aspect-video bg-[var(--color-surface)] flex items-center justify-center cursor-pointer overflow-hidden">
              <span className="text-[var(--color-text-secondary)]">YouTube Embed Placeholder {video}</span>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-heading uppercase">Cinematic Title {video}</h3>
              </div>
            </div>
          ))}
        </Reveal>
        
        <Link to="/videography" className="inline-block px-10 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
          More of My Work
        </Link>
      </section>

      {/* 5. Grid Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)] overflow-hidden">
        <Reveal className="flex justify-between items-end mb-12">
          <h2 className="text-4xl">Gallery</h2>
          <Link to="/photography" className="hidden md:inline-block text-[var(--color-accent)] hover:text-white transition-colors border-b border-[var(--color-accent)] pb-1">
            View All Photos
          </Link>
        </Reveal>
        
        <Reveal staggerChildren className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, i) => (
            <div 
              key={i} 
              onClick={() => openLightbox(i)}
              className="relative cursor-pointer overflow-hidden group"
              style={{ height: `${200 + (i % 3) * 100}px` }}
            >
              <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
          ))}
        </Reveal>
        <div className="text-center md:hidden mt-10">
          <Link to="/photography" className="inline-block px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors">
            View All Photos
          </Link>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1063px] mx-auto border-b border-[var(--color-surface)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading uppercase tracking-tight leading-none">Services</h2>
          </Reveal>
          <Reveal className="w-full">
            <Accordion items={servicesData} defaultOpenId="videography" />
          </Reveal>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="py-12 bg-[var(--color-background)] text-white scroll-mt-20 overflow-hidden">
        <div className="max-w-[1063px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Heading */}
            <Reveal>
              <h2 className="text-[77px] font-semibold tracking-[-2.3px] font-heading uppercase leading-none text-white mb-8">
                CONTACT ME.
              </h2>
            </Reveal>
            
            {/* Right Column: CTA */}
            <Reveal className="w-full">
              <p className="text-gray-300 text-lg mb-8 font-body">
                Interested in working together? Drop me a message and I'll get back to you as soon as possible.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-[var(--color-accent)] text-white font-semibold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
              >
                Get in Touch
              </Link>
            </Reveal>

          </div>
        </div>
      </section>


      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl flex items-center justify-center">
            {activeImage !== null && (
              <img
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
