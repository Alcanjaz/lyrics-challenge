'use client';

import { useState, useCallback } from 'react';
import { X, Flag } from 'lucide-react';
import {
  Card,
  CardBody,
  CardDescription,
  CardTitle,
} from '@lyrics-challenge/ui';

export const WelcomeMessage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleDismissKeyDown = useCallback<React.KeyboardEventHandler<HTMLButtonElement>>((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(false);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <aside className="hidden lg:flex flex-col gap-4 w-[380px] shrink-0 animate-slide-in-right">
      <Card>
        <CardBody className="relative space-y-3 ly-ds-bg-tertiary animate-fade-in">
          <CardTitle className="ly-ds-text-title flex items-center justify-between">
            Welcome to Lyric Music{' '}
            <button
              type="button"
              aria-label="Close welcome message"
              className="inline-flex items-center justify-center rounded-md p-1 ly-ds-text-button hover:ly-ds-bg-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              onClick={handleDismiss}
              onKeyDown={handleDismissKeyDown}
              tabIndex={0}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </CardTitle>
          <CardDescription>
            We’re thrilled to have you join us on this musical journey! Lyric
            Music is your gateway to a fresh and immersive way to enjoy the
            bands and artists you love. Whether you&apos;re searching for your
            all-time favorite tracks, exploring curated playlists crafted to fit
            every mood, or discovering new songs that will soon become your
            go-to anthems, Lyric Music is here to elevate your listening
            experience.
          </CardDescription>
          <CardDescription>
            Imagine having the perfect soundtrack for every moment of your life,
            from energizing workouts to peaceful evenings under the stars. With
            an intuitive interface designed to make finding music effortless and
            enjoyable, you’ll spend less time searching and more time grooving.
            Best of all, it’s completely free—because we believe that great
            music should be accessible to everyone.
          </CardDescription>
          <CardDescription>
            At Lyric Music, we’re passionate about creating a community where
            music lovers like you can explore, connect, and celebrate the power
            of sound. So dive in, press play, and let the music move you.
            Welcome to your new favorite way to listen.
          </CardDescription>

          <Card>
            <CardBody className="ly-ds-bg-primary grid grid-cols-3 items-center gap-3">
              <Flag
                size={75}
                className="ly-ds-text-title col-span-1"
                aria-hidden="true"
              />
              <div className="space-y-1 col-span-2">
                <CardTitle className="ly-ds-text-title text-xl">
                  COMING SOON
                </CardTitle>
                <CardDescription>
                  Check out what’s new for 2025 from the Lyric team.
                </CardDescription>
              </div>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </aside>
  );
};
