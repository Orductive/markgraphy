import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { videos, type Video } from '../data/videos';
import Reveal from '../components/Reveal';

const VideoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const getYouTubeId = (url: string): string => {
    if (url.includes('watch?v=')) return url.split('watch?v=')[1].split('&')[0];
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
    if (url.includes('/shorts/')) return url.split('/shorts/')[1].split('?')[0];
    if (url.includes('/embed/')) return url.split('/embed/')[1].split('?')[0];
    return url.split('/').pop()?.split('?')[0] || '';
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentIndex = videos.findIndex((v) => v.id === id);
  const video = videos[currentIndex];

  if (!video) {
    return <div className="text-center py-24 text-white">Video not found.</div>;
  }

  const prevVideo = currentIndex > 0 ? videos[currentIndex - 1] : null;
  const nextVideo = currentIndex < videos.length - 1 ? videos[currentIndex + 1] : null;

  const similarVideos = videos
    .filter((v) => v.category === video.category && v.id !== video.id)
    .slice(0, 3);

  return (
    <div className="max-w-[1063px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white min-h-screen">
      
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold mb-10">
        <ArrowLeft size={20} />
        Back to Videos
      </button>
      
      {/* 1. Video Embed Placeholder */}
      {video.category === 'Shortform' ? (
        <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto 2.5rem' }}>
          <div style={{ position: 'relative', paddingTop: '177.78%', overflow: 'hidden' }}>
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeUrl)}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '2.5rem' }}>
          <iframe
            src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeUrl)}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      )}

      <Reveal className="max-w-4xl">
        {/* 2. Category & Date */}
        <div className="flex items-center gap-4 mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400 font-body">
          <span>{video.category}</span>
        </div>
        
        {/* 3. Title */}
        <h1 className="font-heading text-4xl md:text-5xl mb-8 uppercase leading-tight tracking-tight">
          {video.title}
        </h1>

        {/* 4. Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8 font-body">
          {video.description || '[Placeholder Description] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>

        {/* 5. Roles */}
        <div className="text-gray-400 border-t border-[var(--color-surface)] pt-6 font-body mb-16">
          <span className="font-bold text-white uppercase tracking-wider text-sm mr-4">Roles:</span>
          {video.role}
        </div>
      </Reveal>

      {/* 6. Navigation Control */}
      <div className="flex flex-col md:flex-row gap-8 justify-between border-t border-b border-[var(--color-surface)] py-10 mb-24">
        <div className="text-left w-full md:w-auto">
          {prevVideo && (
            <Link 
              to={`/videography/${prevVideo.id}`} 
              className="group inline-flex flex-col items-start"
            >
              <span className="text-gray-500 font-body text-xs uppercase tracking-widest mb-2 group-hover:text-[var(--color-accent)] transition-colors">Previous</span>
              <span className="flex items-center gap-3 font-heading text-2xl md:text-3xl uppercase tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
                <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                {prevVideo.title}
              </span>
            </Link>
          )}
        </div>
        <div className="text-left md:text-right flex justify-start md:justify-end w-full md:w-auto">
          {nextVideo && (
            <Link 
              to={`/videography/${nextVideo.id}`} 
              className="group inline-flex flex-col items-start md:items-end"
            >
              <span className="text-gray-500 font-body text-xs uppercase tracking-widest mb-2 group-hover:text-[var(--color-accent)] transition-colors">Next</span>
              <span className="flex items-center gap-3 font-heading text-2xl md:text-3xl uppercase tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
                {nextVideo.title}
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* 7. Similar Videos */}
      {similarVideos.length > 0 && (
        <Reveal>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight mb-12">YOU MIGHT ALSO LIKE</h2>
          <Reveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {similarVideos.map((similarVideo) => (
              <SimilarVideoCard key={similarVideo.id} video={similarVideo} />
            ))}
          </Reveal>
        </Reveal>
      )}
    </div>
  );
};

const SimilarVideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <Link to={`/videography/${video.id}`} className="group block cursor-pointer">
    <div
      style={{
        position: 'relative',
        paddingBottom: '66.67%',
        overflow: 'hidden',
        marginBottom: '20px',
        backgroundImage: `url(${video.thumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
        className="group-hover:bg-opacity-10 transition-colors"
      >
        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center pl-1 group-hover:scale-110 transition-transform opacity-0 group-hover:opacity-100">
          <Play size={24} className="text-white" />
        </div>
      </div>
    </div>
    <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider block mb-1 font-semibold">{video.category}</span>
    <h3 className="font-heading text-2xl uppercase tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">{video.title}</h3>
  </Link>
);

export default VideoDetail;
