import React from 'react';

const Videography: React.FC = () => {
  const projects = [
    { id: 1, title: 'Project One', category: 'Commercial' },
    { id: 2, title: 'Project Two', category: 'Documentary' },
    { id: 3, title: 'Project Three', category: 'Music Video' },
    { id: 4, title: 'Project Four', category: 'Event' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-display text-4xl md:text-5xl text-white mb-12 text-center">Videography</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="aspect-video w-full bg-[var(--color-surface)] flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02]">
              <span className="text-[var(--color-text-secondary)]">Video Placeholder</span>
            </div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl text-white font-medium group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <span className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videography;
