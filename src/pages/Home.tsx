import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Accordion from '../components/Accordion';
import Reveal from '../components/Reveal';

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
  const placeholderImages = ['Image 1', 'Image 2', 'Image 3'];

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
      setCurrentImageIndex((prev) => (prev + 1) % placeholderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholderImages.length]);

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
          <div className="w-full h-full bg-[var(--color-surface)] flex items-center justify-center opacity-50">
            <span className="text-[var(--color-text-secondary)]">Video/Image Placeholder</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 text-center px-4 flex flex-col items-center">
          <Reveal y={50} duration={1} delay={0.2}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6">
              MARKGRAPHY
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
          <div className="relative aspect-[4/5] bg-[var(--color-surface)] overflow-hidden flex items-center justify-center">
            {placeholderImages.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <span className="text-[var(--color-text-secondary)]">About Me {img}</span>
              </div>
            ))}
          </div>
          <Reveal>
            <h2 className="text-4xl mb-6">About Me</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am a passionate visual storyteller based in Maine, dedicated to bringing ideas to life through dynamic photography and cinematic videography. With years of experience behind the lens, I focus on authentic moments and premium aesthetics.
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
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
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
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              onClick={() => openLightbox(i)}
              className="relative bg-[var(--color-surface)] cursor-pointer overflow-hidden group"
              style={{ height: `${200 + (i % 3) * 100}px` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[var(--color-text-secondary)]">Image {i + 1}</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Heading */}
            <Reveal>
              <h2 className="text-[77px] font-semibold tracking-[-2.3px] font-heading uppercase leading-none text-white mb-8">
                CONTACT ME.
              </h2>
            </Reveal>
            
            {/* Right Column: Form */}
            <Reveal className="w-full">
              <form className="space-y-8 font-body">
                {/* Name Fields */}
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Name</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="sr-only">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        placeholder="First Name (required)"
                        required
                        className="w-full bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:border-white transition-colors text-black placeholder-gray-500 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        placeholder="Last Name (required)"
                        required
                        className="w-full bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:border-white transition-colors text-black placeholder-gray-500 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email (required)"
                    required
                    className="w-full bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:border-white transition-colors text-black placeholder-gray-500 text-sm"
                  />
                </div>

                {/* Description Field */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Brief Description</label>
                  <input 
                    type="text" 
                    id="description" 
                    placeholder="Brief Description (required)"
                    required
                    className="w-full bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:border-white transition-colors text-black placeholder-gray-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-[var(--color-accent)] text-white font-semibold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-[var(--color-surface)] flex items-center justify-center">
            <span className="text-2xl text-[var(--color-text-secondary)]">
              Full Size Image {activeImage !== null ? activeImage + 1 : ''} Placeholder
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
