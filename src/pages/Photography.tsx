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
            <div
              style={{
                width: '100%',
                paddingBottom: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${album.coverImage}?tr=w-600)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                marginBottom: '1.5rem',
              }}
              className="transition-transform duration-700 group-hover:scale-105"
            />
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
