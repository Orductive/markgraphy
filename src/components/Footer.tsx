import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-background)] py-12 border-t border-[var(--color-surface)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Markgraphy. All rights reserved.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Built by <a href="https://orductive.online" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-accent)] transition-colors">Orductive</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
