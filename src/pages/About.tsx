import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-[1063px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* Bio Text */}
        <div className="flex flex-col justify-center text-left font-['Space_Mono']">
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tight leading-none text-white mb-10">My Story</h1>
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

        {/* Image Placeholders */}
        <div className="flex flex-col gap-4 h-full min-h-[500px] w-full">
          {/* Top Large Image */}
          <div className="flex-[2] bg-[var(--color-surface)] flex items-center justify-center">
            <span className="text-[var(--color-text-secondary)] text-lg">Large Photo</span>
          </div>
          {/* Bottom Small Images */}
          <div className="flex-[1] grid grid-cols-2 gap-4">
            <div className="bg-[var(--color-surface)] flex items-center justify-center">
              <span className="text-[var(--color-text-secondary)] text-sm">Small Photo 1</span>
            </div>
            <div className="bg-[var(--color-surface)] flex items-center justify-center">
              <span className="text-[var(--color-text-secondary)] text-sm">Small Photo 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
