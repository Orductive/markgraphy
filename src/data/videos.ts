export interface Video {
  id: string;
  title: string;
  category: 'Documentaries' | 'Brand Storytelling';
  date: string;
  description: string;
  thumbnail: string;
}

export const videos: Video[] = [
  {
    id: 'doc-1',
    title: 'The Artisan Way',
    category: 'Documentaries',
    date: 'March 2026',
    description: 'A deep dive into the lives of traditional craftsmen preserving century-old techniques in the modern world.',
    thumbnail: 'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brand-1',
    title: 'Acme Co. Rebranding',
    category: 'Brand Storytelling',
    date: 'January 2026',
    description: 'A visual journey establishing the new aesthetic and core values of a global lifestyle brand.',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'doc-2',
    title: 'Ocean Deep',
    category: 'Documentaries',
    date: 'November 2025',
    description: 'Exploring the uncharted territories of the marine ecosystem through the lens of local conservationists.',
    thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brand-2',
    title: 'Stellar Athletics Fall Campaign',
    category: 'Brand Storytelling',
    date: 'August 2025',
    description: 'High-energy visuals matching the intensity of Stellar Athletics\' new high-performance gear.',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'doc-3',
    title: 'City Lights',
    category: 'Documentaries',
    date: 'June 2025',
    description: 'A night-time exploration of urban landscapes and the stories of those who work when the rest of the world sleeps.',
    thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
  },
];
