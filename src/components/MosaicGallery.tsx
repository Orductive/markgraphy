import React from 'react';
import type { AlbumImage } from '../data/albums';

export type BlockType = 'L' | 'R' | 'T' | 'P';

/**
 * Reorderable block pattern sequence.
 * L = 3 photos (large left 2 cols, 2 stacked right)
 * R = 3 photos (2 stacked left, large right 2 cols)
 * T = 3 photos (1 row of 3 equal photos)
 * P = 2 photos (1 row of 2 equal photos, half container width each)
 * 3 + 2 + 3 + 3 + 2 + 3 + 2 + 3 = 21 photos total.
 */
export const BLOCK_PATTERN: BlockType[] = ['L', 'P', 'T', 'R', 'P', 'L', 'P', 'T'];

const BLOCK_PHOTO_COUNTS: Record<BlockType, number> = {
  L: 3,
  R: 3,
  T: 3,
  P: 2,
};

interface MosaicGalleryProps {
  images: AlbumImage[];
  onOpenLightbox: (index: number) => void;
}

const getImageData = (item: AlbumImage) => {
  const src = typeof item === 'string' ? item : item.src;
  const width = typeof item === 'object' ? item.width : undefined;
  const height = typeof item === 'object' ? item.height : undefined;
  return { src, width, height };
};

export const MosaicGallery: React.FC<MosaicGalleryProps> = ({
  images,
  onOpenLightbox,
}) => {
  // Group photos according to BLOCK_PATTERN sequence
  let photoCursor = 0;
  const blocks: { type: BlockType; photos: { item: AlbumImage; index: number }[] }[] = [];

  for (const blockType of BLOCK_PATTERN) {
    const count = BLOCK_PHOTO_COUNTS[blockType];
    const blockPhotos: { item: AlbumImage; index: number }[] = [];
    for (let i = 0; i < count && photoCursor < images.length; i++) {
      blockPhotos.push({ item: images[photoCursor], index: photoCursor });
      photoCursor++;
    }
    blocks.push({ type: blockType, photos: blockPhotos });
  }

  // Handle any remaining photos beyond the pattern if photo count changes
  while (photoCursor < images.length) {
    const remaining = images.length - photoCursor;
    if (remaining >= 3) {
      blocks.push({
        type: 'T',
        photos: [
          { item: images[photoCursor], index: photoCursor++ },
          { item: images[photoCursor], index: photoCursor++ },
          { item: images[photoCursor], index: photoCursor++ },
        ],
      });
    } else if (remaining === 2) {
      blocks.push({
        type: 'P',
        photos: [
          { item: images[photoCursor], index: photoCursor++ },
          { item: images[photoCursor], index: photoCursor++ },
        ],
      });
    } else {
      blocks.push({
        type: 'P',
        photos: [{ item: images[photoCursor], index: photoCursor++ }],
      });
    }
  }

  const renderPhotoTile = (
    photo: { item: AlbumImage; index: number },
    widthParam: 'w-1600' | 'w-800',
    extraClasses = ''
  ) => {
    const { src, width, height } = getImageData(photo.item);
    return (
      <div
        key={photo.index}
        onClick={() => onOpenLightbox(photo.index)}
        className={`cursor-pointer group ${extraClasses}`}
      >
        <img
          src={`${src}?tr=${widthParam}`}
          alt={`Photo ${photo.index + 1}`}
          width={width}
          height={height}
          loading="lazy"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            aspectRatio: width && height ? `${width} / ${height}` : '3 / 2',
          }}
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  };

  const renderStackedPair = (
    first: { item: AlbumImage; index: number },
    second?: { item: AlbumImage; index: number }
  ) => {
    return (
      <div
        data-type="stacked"
        className="col-span-1 flex flex-col mosaic-stacked"
        style={{ gap: '16px' }}
      >
        {renderPhotoTile(first, 'w-800', 'mosaic-small')}
        {second && renderPhotoTile(second, 'w-800', 'mosaic-small')}
      </div>
    );
  };

  return (
    <>
      {/* Desktop (lg: >= 1024px): Irregular mosaic blocks following BLOCK_PATTERN */}
      <div className="hidden lg:flex lg:flex-col" style={{ gap: '24px' }}>
        {blocks.map((block, blockIndex) => {
          const { type, photos } = block;

          if (type === 'L') {
            const large = photos[0];
            const small1 = photos[1];
            const small2 = photos[2];
            return (
              <div
                key={blockIndex}
                data-block={blockIndex + 1}
                data-block-type="L"
                className="grid grid-cols-3 gap-6 items-start mosaic-block"
                style={{ columnGap: '24px' }}
              >
                {large && renderPhotoTile(large, 'w-1600', 'col-span-2 mosaic-large')}
                {small1 && renderStackedPair(small1, small2)}
              </div>
            );
          }

          if (type === 'R') {
            const large = photos[0];
            const small1 = photos[1];
            const small2 = photos[2];
            return (
              <div
                key={blockIndex}
                data-block={blockIndex + 1}
                data-block-type="R"
                className="grid grid-cols-3 gap-6 items-start mosaic-block"
                style={{ columnGap: '24px' }}
              >
                {small1 && renderStackedPair(small1, small2)}
                {large && renderPhotoTile(large, 'w-1600', 'col-span-2 mosaic-large')}
              </div>
            );
          }

          if (type === 'T') {
            return (
              <div
                key={blockIndex}
                data-block={blockIndex + 1}
                data-block-type="T"
                className="grid grid-cols-3 gap-6 items-start mosaic-block"
                style={{ columnGap: '24px' }}
              >
                {photos.map((p) => renderPhotoTile(p, 'w-800', 'col-span-1 mosaic-trio'))}
              </div>
            );
          }

          if (type === 'P') {
            return (
              <div
                key={blockIndex}
                data-block={blockIndex + 1}
                data-block-type="P"
                className="grid grid-cols-2 gap-6 items-start mosaic-block"
                style={{ columnGap: '24px' }}
              >
                {photos.map((p) => renderPhotoTile(p, 'w-1600', 'col-span-1 mosaic-pair'))}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Mobile & Tablet (< lg): matching Black Stars of Ghana & masonry (1 col mobile, 2 cols tablet) */}
      <div className="block lg:hidden columns-1 sm:columns-2 gap-6 space-y-6">
        {images.map((item, index) => {
          const { src, width, height } = getImageData(item);
          return (
            <div
              key={index}
              onClick={() => onOpenLightbox(index)}
              className="break-inside-avoid cursor-pointer group"
              style={{ marginBottom: '1.5rem' }}
            >
              <img
                src={`${src}?tr=w-800`}
                alt={`Photo ${index + 1}`}
                width={width}
                height={height}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  aspectRatio: width && height ? `${width} / ${height}` : '3 / 2',
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

export default MosaicGallery;
