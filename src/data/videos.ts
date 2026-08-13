export interface Video {
  id: string;
  title: string;
  category: 'Documentaries' | 'Series' | 'Corporate & Brand' | 'Collaborations' | 'Shortform';
  description: string;
  youtubeUrl: string;
  thumbnail: string;
  role?: string;
}

export const videos: Video[] = [
  // ---- DOCUMENTARIES ----
  {
    id: 'doc-1',
    title: 'Serving Those Who Served',
    category: 'Documentaries',
    description: 'A look at how organizations support veterans after their service ends.',
    youtubeUrl: 'https://youtu.be/hv1iVQIfL8M',
    thumbnail: 'https://img.youtube.com/vi/hv1iVQIfL8M/maxresdefault.jpg',
    role: 'Editing',
  },
  {
    id: 'doc-2',
    title: 'Using Music to Save Lives',
    category: 'Documentaries',
    description: 'How a music therapy program is helping people heal.',
    youtubeUrl: 'https://youtu.be/hgRAjD53dPM',
    thumbnail: 'https://img.youtube.com/vi/hgRAjD53dPM/maxresdefault.jpg',
    role: 'B-cam filming, editing',
  },
  {
    id: 'doc-3',
    title: 'TMF Defender US Entry',
    category: 'Documentaries',
    description: 'The story of a company bringing its product into the US market for the first time.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Hs_V9UQu3tc',
    thumbnail: 'https://img.youtube.com/vi/Hs_V9UQu3tc/maxresdefault.jpg',
    role: 'Editing',
  },
  {
    id: 'doc-4',
    title: 'The First Gen Story',
    category: 'Documentaries',
    description: 'A first-generation student on what it took to get to college — and stay there.',
    youtubeUrl: 'https://www.instagram.com/reel/DQz4UPdlKu6/',
    thumbnail: '',
  },

  // ---- SERIES: Terries on the Quad ----
  {
    id: 'series-1',
    title: 'Terries on the Quad EP1',
    category: 'Series',
    description: 'The college president sits down with students on the quad for honest, one-on-one conversations about campus life.',
    youtubeUrl: 'https://www.youtube.com/watch?v=4rvAsaFJzwg',
    thumbnail: 'https://img.youtube.com/vi/4rvAsaFJzwg/maxresdefault.jpg',
    role: 'Scripting, Directing, Filming and Editing',
  },
  {
    id: 'series-2',
    title: 'Terries on the Quad EP2',
    category: 'Series',
    description: 'The college president sits down with students on the quad for honest, one-on-one conversations about campus life.',
    youtubeUrl: 'https://www.youtube.com/watch?v=txoCOJDiM_s',
    thumbnail: 'https://img.youtube.com/vi/txoCOJDiM_s/maxresdefault.jpg',
    role: 'Scripting, Directing, Filming and Editing',
  },
  {
    id: 'series-3',
    title: 'Terries on the Quad EP3',
    category: 'Series',
    description: 'The college president sits down with students on the quad for honest, one-on-one conversations about campus life.',
    youtubeUrl: 'https://www.youtube.com/watch?v=Yo5yP_LSaKE',
    thumbnail: 'https://img.youtube.com/vi/Yo5yP_LSaKE/maxresdefault.jpg',
    role: 'Scripting, Directing, Filming and Editing',
  },

  // ---- CORPORATE & BRAND ----
  {
    id: 'brand-1',
    title: 'The People Behind the Brand',
    category: 'Corporate & Brand',
    description: 'The team and story behind the company — told by the people who built it.',
    youtubeUrl: 'https://youtu.be/Ca_zRAYyD5g',
    thumbnail: 'https://img.youtube.com/vi/Ca_zRAYyD5g/maxresdefault.jpg',
  },

  // ---- COLLABORATIONS ----
  {
    id: 'collab-1',
    title: 'Quad Amputee Tries Playing Golf',
    category: 'Collaborations',
    description: 'A quadruple amputee takes on golf for the first time.',
    youtubeUrl: 'https://youtu.be/CW-zkDrDj9A',
    thumbnail: 'https://img.youtube.com/vi/CW-zkDrDj9A/maxresdefault.jpg',
    role: 'Behind-the-scenes photos, thumbnail photo',
  },
  {
    id: 'collab-2',
    title: 'Quad Amputee Veteran Shares His Top 5 Life-Changing Prosthetics',
    category: 'Collaborations',
    description: 'A veteran walks through the five prosthetics that changed his daily life.',
    youtubeUrl: 'https://youtu.be/68pBa5JZRw4',
    thumbnail: 'https://img.youtube.com/vi/68pBa5JZRw4/maxresdefault.jpg',
    role: 'B-cam footage, gaffer',
  },
  {
    id: 'collab-3',
    title: 'Army vs. Navy: Quadruple Amputee Veteran Showdown',
    category: 'Collaborations',
    description: 'Two quadruple amputee veterans, one friendly rivalry, Army vs. Navy.',
    youtubeUrl: 'https://youtu.be/QRr0_0MZ_HI',
    thumbnail: 'https://img.youtube.com/vi/QRr0_0MZ_HI/maxresdefault.jpg',
    role: 'B-cam footage, production equipment manager',
  },

  // ---- SHORTFORM ----
  {
    id: 'short-1',
    title: 'They Said Yes! | The Engagement Dance',
    category: 'Shortform',
    description: 'A surprise engagement, captured in the moment.',
    youtubeUrl: 'https://youtube.com/shorts/045sY_qAEig',
    thumbnail: 'https://img.youtube.com/vi/045sY_qAEig/maxresdefault.jpg',
  },
  {
    id: 'short-2',
    title: '1979 Triumph Spitfire',
    category: 'Shortform',
    description: 'A classic car, still turning heads decades later.',
    youtubeUrl: 'https://youtube.com/shorts/sl9B4FwBVCo',
    thumbnail: 'https://img.youtube.com/vi/sl9B4FwBVCo/maxresdefault.jpg',
  },
];
