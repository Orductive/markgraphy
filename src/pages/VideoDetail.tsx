import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { videos, type Video } from '../data/videos';

const VideoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
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
      
      {/* 1. Video Embed Placeholder */}
      <div className="aspect-video w-full bg-[var(--color-surface)] flex flex-col items-center justify-center mb-10 relative group">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center z-10 transition-all group-hover:bg-opacity-50">
          <div className="w-20 h-20 rounded-full bg-[var(--color-accent)] flex items-center justify-center pl-2 cursor-pointer hover:scale-110 transition-transform mb-4">
            <Play size={32} className="text-white" />
          </div>
          <span className="text-white font-['Space_Mono'] text-sm tracking-widest uppercase hover:underline cursor-pointer">
            Watch on YouTube
          </span>
        </div>
      </div>

      <div className="max-w-4xl">
        {/* 2. Category & Date */}
        <div className="flex items-center gap-4 mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400 font-['Space_Mono']">
          <span>{video.category}</span>
          <span className="text-gray-600">&bull;</span>
          <span>{video.date || '11/15/25'}</span>
        </div>
        
        {/* 3. Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 uppercase leading-tight tracking-tight">
          {video.title}
        </h1>

        {/* 4. Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8 font-['Space_Mono']">
          {video.description || '[Placeholder Description] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>

        {/* 5. Roles */}
        <div className="text-gray-400 border-t border-[var(--color-surface)] pt-6 font-['Space_Mono'] mb-16">
          <span className="font-bold text-white uppercase tracking-wider text-sm mr-4">Roles:</span>
          Director, Cinematographer, Editor
        </div>
      </div>

      {/* 6. Navigation Control */}
      <div className="grid grid-cols-2 gap-4 border-t border-b border-[var(--color-surface)] py-10 mb-24">
        <div className="text-left">
          {prevVideo && (
            <Link 
              to={`/videography/${prevVideo.id}`} 
              className="group inline-flex flex-col items-start"
            >
              <span className="text-gray-500 font-['Space_Mono'] text-xs uppercase tracking-widest mb-2 group-hover:text-[var(--color-accent)] transition-colors">Previous</span>
              <span className="flex items-center gap-3 font-display text-2xl md:text-3xl uppercase tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
                <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                {prevVideo.title}
              </span>
            </Link>
          )}
        </div>
        <div className="text-right flex justify-end">
          {nextVideo && (
            <Link 
              to={`/videography/${nextVideo.id}`} 
              className="group inline-flex flex-col items-end"
            >
              <span className="text-gray-500 font-['Space_Mono'] text-xs uppercase tracking-widest mb-2 group-hover:text-[var(--color-accent)] transition-colors">Next</span>
              <span className="flex items-center gap-3 font-display text-2xl md:text-3xl uppercase tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
                {nextVideo.title}
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* 7. Similar Videos */}
      {similarVideos.length > 0 && (
        <div>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-12">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
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
    <div className="relative aspect-[3/2] bg-[var(--color-surface)] flex items-center justify-center overflow-hidden mb-[20px]">
      <img 
        src={video.thumbnail} 
        alt={video.title} 
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-10 transition-colors z-10 flex items-center justify-center">
         <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center pl-1 group-hover:scale-110 transition-transform opacity-0 group-hover:opacity-100">
            <Play size={24} className="text-white" />
         </div>
      </div>
    </div>
    <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider block mb-1 font-semibold">{video.category}</span>
    <h3 className="font-display text-2xl uppercase tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">{video.title}</h3>
  </Link>
);

export default VideoDetail;
