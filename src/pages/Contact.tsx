import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-heading text-4xl md:text-5xl text-white mb-8 text-center">Get in Touch</h1>
      <p className="text-[var(--color-text-secondary)] text-center mb-12 text-lg">
        Interested in working together? Drop a message below.
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-[var(--color-surface)] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-[var(--color-surface)] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full bg-[var(--color-surface)] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--color-accent)] hover:bg-red-700 text-white font-medium py-4 px-6 rounded-md transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
