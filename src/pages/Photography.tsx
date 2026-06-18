import React from 'react';

const Photography: React.FC = () => {
  const albums = [
    { 
      id: 1, 
      title: 'World Cup Coverage', 
      description: 'Documenting the passion and intensity of the biggest stage in football.',
      link: '#'
    },
    { 
      id: 2, 
      title: 'Brand Shoots', 
      description: 'Commercial photography campaigns for global lifestyle brands.',
      link: '#'
    },
    { 
      id: 3, 
      title: 'Portraits', 
      description: 'Intimate studio and environmental portraits capturing raw emotion.',
      link: '#'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-display text-4xl md:text-5xl text-white mb-12 text-center">Photography</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          <a key={album.id} href={album.link} className="group block cursor-pointer">
            {/* Image Placeholder */}
            <div className="aspect-square w-full bg-[var(--color-surface)] flex items-center justify-center mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500 z-10"></div>
              <span className="text-[var(--color-text-secondary)] z-0 group-hover:scale-105 transition-transform duration-500">
                Image Placeholder
              </span>
            </div>
            {/* Details */}
            <div>
              <h3 className="text-2xl font-display text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                {album.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {album.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Photography;
