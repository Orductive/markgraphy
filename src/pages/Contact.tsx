import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="font-heading text-4xl md:text-5xl text-white mb-8 text-center">Get in Touch</h1>
      <p className="text-[var(--color-text-secondary)] text-center mb-12 text-lg">
        Interested in working together? Drop a message below.
      </p>

      {success && (
        <div className="mb-8 rounded-md bg-green-900/40 border border-green-700 px-5 py-4 text-green-300 text-sm text-center">
          ✅ Your message was sent! I'll get back to you soon.
        </div>
      )}

      {error && (
        <div className="mb-8 rounded-md bg-red-900/40 border border-red-700 px-5 py-4 text-red-300 text-sm text-center">
          ⚠️ {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
            className="w-full bg-[var(--color-surface)] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors disabled:opacity-50"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="w-full bg-[var(--color-surface)] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors disabled:opacity-50"
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={isLoading}
            className="w-full bg-[var(--color-surface)] border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none disabled:opacity-50"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[var(--color-accent)] hover:bg-red-700 text-white font-medium py-4 px-6 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
