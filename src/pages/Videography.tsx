import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Play } from 'lucide-react';
import { videos } from '../data/videos';
import Reveal from '../components/Reveal';

const Videography: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('category') || 'All';
  const setFilter = (cat: string) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredVideos = filter === 'All' 
    ? videos 
    : videos.filter(v => v.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 min-h-screen">
      <div className="flex flex-col lg:flex-row items-start">
        
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/5 mb-12 lg:mb-0 lg:pr-8 lg:sticky lg:top-24">
          <div className="flex flex-col space-y-6">
            {['All', 'Documentaries', 'Series', 'Corporate & Brand', 'Collaborations', 'Shortform'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`text-left transition-colors font-body text-sm uppercase tracking-widest ${
                  filter === tab 
                    ? 'text-[var(--color-accent)] font-bold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Video Grid */}
        <div className="w-full lg:w-4/5">
          <Reveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[60px]">
            {filteredVideos.map((project) => (
              <VideoCard key={project.id} project={project} />
            ))}
          </Reveal>
        </div>

      </div>
    </div>
  );
};

const VideoCard: React.FC<{ project: typeof videos[0] }> = ({ project }) => {
  return (
    <Link 
      to={`/videography/${project.id}`} 
      className="group block cursor-pointer"
    >
      <div 
        style={{
          position: 'relative',
          paddingBottom: '66.67%',
          overflow: 'hidden',
          marginBottom: '20px',
          backgroundImage: `url(${project.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
          className="group-hover:bg-opacity-20 transition-all"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
            <Play size={24} className="text-white" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-xs text-[var(--color-accent)] uppercase tracking-wider block mb-1 font-semibold">
          {project.category}
        </span>
        <h3 className="text-2xl text-white font-heading uppercase mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-2">{project.description}</p>
        {project.role && (
          <p className="text-sm text-gray-500 italic">Role: {project.role}</p>
        )}
      </div>
    </Link>
  );
};

export default Videography;
