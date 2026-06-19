import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { videos, type Video } from '../data/videos';

const VideoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white min-h-screen">
      
      {/* Navigation Controls */}
      <div className="flex justify-between items-center mb-12 border-b border-[var(--color-surface)] pb-6">
        <Link to="/videography" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
          &larr; Back to Grid
        </Link>
        <div className="flex gap-4">
          <button 
            onClick={() => prevVideo && navigate(`/videography/${prevVideo.id}`)}
            disabled={!prevVideo}
            className="p-2 border border-gray-600 rounded hover:border-white disabled:opacity-50 transition-colors"
            aria-label="Previous Video"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => nextVideo && navigate(`/videography/${nextVideo.id}`)}
            disabled={!nextVideo}
            className="p-2 border border-gray-600 rounded hover:border-white disabled:opacity-50 transition-colors"
            aria-label="Next Video"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Video Content */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          <span>{video.category}</span>
          <span className="text-gray-600">&bull;</span>
          <span className="text-gray-400">{video.date}</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          {video.title}
        </h1>

        <div className="aspect-video w-full bg-[var(--color-surface)] flex items-center justify-center mb-12 relative overflow-hidden group">
          <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="w-20 h-20 rounded-full bg-[var(--color-accent)] flex items-center justify-center pl-2 z-10 cursor-pointer hover:scale-110 transition-transform">
            <Play size={32} className="text-white" />
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {video.description}
          </p>
          <div className="text-gray-400 border-t border-[var(--color-surface)] pt-6">
            <span className="font-bold text-white uppercase tracking-wider text-sm mr-4">Roles:</span>
            Director, Cinematographer, Editor
          </div>
        </div>
      </div>

      {/* Similar Videos */}
      {similarVideos.length > 0 && (
        <div className="border-t border-[var(--color-surface)] pt-24">
          <h2 className="font-display text-4xl mb-12">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarVideos.map((similarVideo) => (
              <SimilarVideoCard key={similarVideo.id} video={similarVideo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SimilarVideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <Link to={`/videography/${video.id}`} className="group block cursor-pointer">
    <div className="aspect-video w-full relative overflow-hidden mb-4">
      <img 
        src={video.thumbnail} 
        alt={video.title} 
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-10 transition-colors"></div>
    </div>
    <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider block mb-1 font-semibold">{video.category}</span>
    <h3 className="font-display text-2xl group-hover:text-[var(--color-accent)] transition-colors">{video.title}</h3>
  </Link>
);

export default VideoDetail;
