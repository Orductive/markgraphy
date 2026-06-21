import { Link } from 'react-router-dom';
import { albums } from '../data/albums';
import Reveal from '../components/Reveal';

const Photography: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <Reveal>
        <h1 className="text-4xl md:text-5xl text-white mb-10">Photography</h1>
      </Reveal>
      
      <Reveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          <Link key={album.id} to={`/photography/${album.id}`} className="group block cursor-pointer">
            {/* Image Placeholder */}
            <div className="aspect-square w-full bg-[var(--color-surface)] flex items-center justify-center mb-6 overflow-hidden relative">
              <img src={album.coverImage} alt={album.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500 z-10"></div>
            </div>
            {/* Details */}
            <div>
              <h3 className="text-2xl text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors flex items-center justify-between font-heading">
                {album.title}
                <span className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] font-sans">View Album &rarr;</span>
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {album.description}
              </p>
            </div>
          </Link>
        ))}
      </Reveal>
    </div>
  );
};

export default Photography;
