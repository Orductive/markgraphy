import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Placeholder */}
        <div className="aspect-[3/4] w-full bg-[var(--color-surface)] flex items-center justify-center">
          <span className="text-[var(--color-text-secondary)] text-lg">Image Placeholder</span>
        </div>

        {/* Bio Text */}
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-8">About the Artist</h1>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              [Placeholder Bio Text] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
