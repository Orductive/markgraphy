import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { albums } from '../data/albums';
import Reveal from '../components/Reveal';

const SubFolderDetail: React.FC = () => {
  const { albumId, subAlbumId, subFolderId } = useParams<{ albumId: string; subAlbumId: string; subFolderId: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [albumId, subAlbumId, subFolderId]);

  const album = albums.find((a) => a.id === albumId);
  const subAlbum = album?.subAlbums?.find((s) => s.id === subAlbumId);
  const subFolder = subAlbum?.subFolders?.find((f) => f.id === subFolderId);

  if (!album || !subAlbum || !subFolder) return <div className="text-center py-24 text-white">Album not found.</div>;

  const openLightbox = (index: number) => { setActiveImageIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => { setLightboxOpen(false); setActiveImageIndex(null); };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white min-h-screen">
      <div className="mb-12 border-b border-[var(--color-surface)] pb-6 flex gap-4 items-center flex-wrap">
        <Link to="/photography" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">Photography</Link>
        <span className="text-gray-600">/</span>
        <Link to={`/photography/${album.id}`} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">{album.title}</Link>
        <span className="text-gray-600">/</span>
        <Link to={`/photography/${album.id}/${subAlbum.id}`} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold">{subAlbum.title}</Link>
      </div>

      <Reveal className="mb-16">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl mb-6">{subFolder.title}</h1>
      </Reveal>

      <Reveal staggerChildren className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {subFolder.images.map((imgSrc, i) => (
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
          <div className="w-full h-full p-4 md:p-12 flex flex-col items-center justify-center">
            <img src={subFolder.images[activeImageIndex]} alt={`Full size ${activeImageIndex + 1}`} className="max-w-full max-h-full object-contain" />
            <div className="mt-4 text-gray-400">{activeImageIndex + 1} / {subFolder.images.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubFolderDetail;
