import React from 'react';
import type { AlbumImage } from '../data/albums';

interface ExplicitColumnMasonryProps {
  images: AlbumImage[];
  onOpenLightbox: (index: number) => void;
}

export const ExplicitColumnMasonry: React.FC<ExplicitColumnMasonryProps> = ({
  images,
  onOpenLightbox,
}) => {
  const columns: { item: AlbumImage; index: number }[][] = [[], [], []];
  let nextCol = 0;
  images.forEach((item, index) => {
    columns[nextCol].push({ item, index });
    nextCol = (nextCol + 1) % 3;
  });

  return (
    <>
      {/* Desktop (lg: >= 1024px): 3 explicit columns to respect top-to-bottom group order */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-start">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {col.map(({ item, index }) => {
              const imgSrc = typeof item === 'string' ? item : item.src;
              const width = typeof item === 'object' ? item.width : undefined;
              const height = typeof item === 'object' ? item.height : undefined;
              return (
                <div
                  key={index}
                  onClick={() => onOpenLightbox(index)}
                  className="cursor-pointer group"
                >
                  <img
                    src={`${imgSrc}?tr=w-800`}
                    alt={`Photo ${index + 1}`}
                    width={width}
                    height={height}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      aspectRatio: width && height ? `${width} / ${height}` : undefined,
                    }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile & Tablet (< lg): matching Black Stars of Ghana (columns-1 sm:columns-2 gap-6 space-y-6) */}
      <div className="block lg:hidden columns-1 sm:columns-2 gap-6 space-y-6">
        {images.map((item, index) => {
          const imgSrc = typeof item === 'string' ? item : item.src;
          const width = typeof item === 'object' ? item.width : undefined;
          const height = typeof item === 'object' ? item.height : undefined;
          return (
            <div
              key={index}
              onClick={() => onOpenLightbox(index)}
              className="break-inside-avoid cursor-pointer group"
              style={{ marginBottom: '1.5rem' }}
            >
              <img
                src={`${imgSrc}?tr=w-800`}
                alt={`Photo ${index + 1}`}
                width={width}
                height={height}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  aspectRatio: width && height ? `${width} / ${height}` : undefined,
                }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExplicitColumnMasonry;
