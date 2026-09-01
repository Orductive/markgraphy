import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { albums } from '../data/albums';
import Reveal from '../components/Reveal';

const SubAlbumDetail: React.FC = () => {
  const { albumId, subAlbumId } = useParams<{ albumId: string; subAlbumId: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string; index: number } | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [albumId, subAlbumId]);

  const album = albums.find((a) => a.id === albumId);
  const subAlbum = album?.subAlbums?.find((s) => s.id === subAlbumId);

  if (!album || !subAlbum) return <div className="text-center py-24 text-white">Album not found.</div>;

  const openLightbox = (src: string, index: number) => { setActiveImage({ src, index }); setLightboxOpen(true); };
  const closeLightbox = () => { setLightboxOpen(false); setActiveImage(null); };

  // If subFolders exist, show them flat with section headings
  // Order: The Preparation → The Ceremony → The Details
  const orderedFolders = subAlbum.subFolders
    ? ['the-preparation', 'the-ceremony', 'the-details']
        .map(id => subAlbum.subFolders!.find(f => f.id === id))
        .filter(Boolean)
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white min-h-screen">
      
      {/* Breadcrumb */}
      <div className="mb-12 border-b border-[var(--color-surface)] pb-6 flex gap-4 items-center">
        <Link to="/photography" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
          Photography
        </Link>
        <span className="text-gray-600">/</span>
        <Link to={`/photography/${album.id}`} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
          {album.title}
        </Link>
      </div>

      {/* Title */}
      <Reveal className="mb-16">
        <h1 className="font-heading text-5xl md:text-7xl mb-6">{subAlbum.title}</h1>
      </Reveal>

      {orderedFolders ? (
        // Flat layout with section headings
        <div>
          {orderedFolders.map((folder) => (
            <div key={folder!.id} className="mb-20">
              <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-widest text-white mb-8 pb-4 border-b border-[var(--color-surface)]">
                {folder!.title}
              </h2>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {folder!.images.map((imgSrc, i) => (
                  <div
                    key={i}
                    onClick={() => openLightbox(imgSrc, i)}
                    className="break-inside-avoid cursor-pointer group"
                    style={{ marginBottom: '1.5rem' }}
                  >
                    <img
                      src={`${imgSrc}?tr=w-800`}
                      alt={`${folder!.title} ${i + 1}`}
                      loading="lazy"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Regular flat photo grid (for sub-albums without sub-folders)
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {subAlbum.images.map((imgSrc, i) => (
            <div
              key={i}
              onClick={() => openLightbox(imgSrc, i)}
              className="break-inside-avoid cursor-pointer group"
              style={{ marginBottom: '1.5rem' }}
            >
              <img
                src={`${imgSrc}?tr=w-800`}
                alt={`Photo ${i + 1}`}
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && activeImage && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors">
            <X size={32} />
          </button>
          <div className="w-full h-full p-4 flex flex-col items-center justify-center">
            <img src={activeImage.src} alt="Full size" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubAlbumDetail;
