import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { albums } from '../data/albums';

const AlbumDetail: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [albumId]);

  const album = albums.find((a) => a.id === albumId);

  if (!album) {
    return <div className="text-center py-24 text-white">Album not found.</div>;
  }

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImageIndex(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white min-h-screen">
      
      {/* Navigation Controls */}
      <div className="mb-12 border-b border-[var(--color-surface)] pb-6">
        <Link to="/photography" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
          &larr; Back to Albums
        </Link>
      </div>

      {/* Album Header */}
      <div className="mb-16">
        <h1 className="font-display text-5xl md:text-7xl mb-6">{album.title}</h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">{album.description}</p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {album.images.map((imgSrc, i) => (
          <div 
            key={i} 
            onClick={() => openLightbox(i)}
            className="relative cursor-pointer overflow-hidden group break-inside-avoid"
          >
            <img 
              src={imgSrc} 
              alt={`Album photo ${i + 1}`} 
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && activeImageIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors"
          >
            <X size={32} />
          </button>
          <div className="w-full h-full p-12 flex flex-col items-center justify-center">
            <img 
              src={album.images[activeImageIndex]} 
              alt={`Full size ${activeImageIndex + 1}`} 
              className="max-w-full max-h-full object-contain"
            />
            <div className="mt-4 text-gray-400">
              {activeImageIndex + 1} / {album.images.length}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AlbumDetail;
