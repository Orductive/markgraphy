import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { albums } from '../data/albums';
import Reveal from '../components/Reveal';

const SubAlbumDetail: React.FC = () => {
  const { albumId, subAlbumId } = useParams<{ albumId: string; subAlbumId: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [albumId, subAlbumId]);

  const album = albums.find((a) => a.id === albumId);
  const subAlbum = album?.subAlbums?.find((s) => s.id === subAlbumId);

  if (!album || !subAlbum) return <div className="text-center py-24 text-white">Album not found.</div>;

  const openLightbox = (index: number) => { setActiveImageIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => { setLightboxOpen(false); setActiveImageIndex(null); };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white min-h-screen">
      <div className="mb-12 border-b border-[var(--color-surface)] pb-6 flex gap-4 items-center">
        <Link to="/photography" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
          Photography
        </Link>
        <span className="text-gray-600">/</span>
        <Link to={`/photography/${album.id}`} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">
          {album.title}
        </Link>
      </div>

      <Reveal className="mb-16">
        <h1 className="font-heading text-5xl md:text-7xl mb-6">{subAlbum.title}</h1>
      </Reveal>

      {subAlbum.subFolders && subAlbum.subFolders.length > 0 ? (
        <Reveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subAlbum.subFolders.map((folder) => (
            <Link key={folder.id} to={`/photography/${album.id}/${subAlbum.id}/${folder.id}`} className="group block cursor-pointer">
              <div
                style={{
                  width: '100%',
                  paddingBottom: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundImage: `url(${folder.coverImage}?tr=w-600)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 30%',
                  marginBottom: '1.5rem',
                }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <h3 className="text-2xl text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors flex items-center justify-between font-heading">
                {folder.title}
                <span className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] font-sans">View Album &rarr;</span>
              </h3>
            </Link>
          ))}
        </Reveal>
      ) : (
        <>
          <Reveal staggerChildren className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {subAlbum.images.map((imgSrc, i) => (
              <div key={i} onClick={() => openLightbox(i)} className="break-inside-avoid cursor-pointer group" style={{ marginBottom: '1.5rem' }}>
                <img src={`${imgSrc}?tr=w-800`} alt={`Photo ${i + 1}`} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} className="transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </Reveal>

          {lightboxOpen && activeImageIndex !== null && (
            <div className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4">
              <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors">
                <X size={32} />
              </button>
              <div className="w-full h-full p-12 flex flex-col items-center justify-center">
                <img src={subAlbum.images[activeImageIndex]} alt={`Full size ${activeImageIndex + 1}`} className="max-w-full max-h-full object-contain" />
                <div className="mt-4 text-gray-400">{activeImageIndex + 1} / {subAlbum.images.length}</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SubAlbumDetail;
