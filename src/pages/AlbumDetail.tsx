import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { albums } from '../data/albums';
import Reveal from '../components/Reveal';
import ExplicitColumnMasonry from '../components/ExplicitColumnMasonry';
import MosaicGallery from '../components/MosaicGallery';

const AlbumDetail: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [albumId]);

  const album = albums.find((a) => a.id === albumId);
  if (!album) return <div className="text-center py-24 text-white">Album not found.</div>;

  const isMasonryAlbum =
    album.id === 'character-studies' ||
    album.id === 'moments-in-motion' ||
    album.id === 'the-edge-of-effort';
  const isMosaicAlbum = album.id === 'monochrome';

  const openLightbox = (index: number) => { setActiveImageIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => { setLightboxOpen(false); setActiveImageIndex(null); };

  const showPrev = useCallback(() => {
    setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : album.images.length - 1));
  }, [album.images.length]);

  const showNext = useCallback(() => {
    setActiveImageIndex((prev) => (prev !== null && prev < album.images.length - 1 ? prev + 1 : 0));
  }, [album.images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, showPrev, showNext]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white min-h-screen">
      <div className="mb-12 border-b border-[var(--color-surface)] pb-6">
        <Link to="/photography" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
          &larr; Back to Albums
        </Link>
      </div>

      <Reveal className="mb-16">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl mb-6">{album.title}</h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed">{album.description}</p>
      </Reveal>

      {album.subAlbums && album.subAlbums.length > 0 ? (
        <Reveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {album.subAlbums.map((sub) => (
            <Link key={sub.id} to={`/photography/${album.id}/${sub.id}`} className="group block cursor-pointer">
              <div
                style={{
                  width: '100%',
                  paddingBottom: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundImage: `url(${sub.coverImage}?tr=w-600)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  marginBottom: '1.5rem',
                }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div>
                <h3 className="text-2xl text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors flex items-center justify-between font-heading">
                  {sub.title}
                  <span className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] font-sans">View Album &rarr;</span>
                </h3>
              </div>
            </Link>
          ))}
        </Reveal>
      ) : (
        <>
          {isMosaicAlbum ? (
            <MosaicGallery images={album.images} onOpenLightbox={openLightbox} />
          ) : isMasonryAlbum ? (
            <ExplicitColumnMasonry images={album.images} onOpenLightbox={openLightbox} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {album.images.map((item, i) => {
                const imgSrc = typeof item === 'string' ? item : item.src;
                const objectPosition = typeof item === 'object' && item.objectPosition ? item.objectPosition : undefined;
                return (
                  <div key={i} onClick={() => openLightbox(i)} className="cursor-pointer group overflow-hidden">
                    <img
                      src={`${imgSrc}?tr=w-800`}
                      alt={`Photo ${i + 1}`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        ...(objectPosition ? { objectPosition } : {}),
                        display: 'block',
                      }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          )}

          {lightboxOpen && activeImageIndex !== null && (
            <div className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4">
              <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors z-20 cursor-pointer">
                <X size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white hover:text-[var(--color-accent)] transition-colors p-2 z-20 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white hover:text-[var(--color-accent)] transition-colors p-2 z-20 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight size={36} />
              </button>
              <div className="w-full h-full p-4 md:p-12 flex flex-col items-center justify-center">
                <img
                  src={typeof album.images[activeImageIndex] === 'string' ? (album.images[activeImageIndex] as string) : (album.images[activeImageIndex] as { src: string }).src}
                  alt={`Full size ${activeImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="mt-4 text-gray-400">{activeImageIndex + 1} / {album.images.length}</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AlbumDetail;
