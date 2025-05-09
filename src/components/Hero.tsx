'use client'; // Required for useState & form handling

import { useState } from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    if (data.success) {
      setMessage({ type: 'success', text: 'Successfully added to waitlist!' });
      setName('');
      setEmail('');
    } else {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]" />

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.heading}
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2 items-center w-full max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition"
          >
            Join Waitlist
          </button>

          {message && (
            <div
              className={`mt-2 text-sm font-medium ${
                message.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message.text}
            </div>
          )}
        </form>

        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <AppStoreButton dark />
          <PlayStoreButton dark />
        </div>

        <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
