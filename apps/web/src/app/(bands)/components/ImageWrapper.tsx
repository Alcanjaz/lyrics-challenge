'use client';
import { CardImage } from '@lyrics-challenge/ui';
import React from 'react';

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const ImageWithFallback = ({
  onError,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [currentSrc, setCurrentSrc] = React.useState('/sources/default.png');

  React.useEffect(() => {
    if (typeof src === 'string' && src.length > 0) {
      setCurrentSrc(src);
    } else {
      setCurrentSrc('/sources/default.png');
    }
  }, [src]);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    // Prevent potential loops and ensure a stable fallback
    e.currentTarget.onerror = null;
    if (!e.currentTarget.src.endsWith('/sources/default.png')) {
      setCurrentSrc('/sources/default.png');
    }
    onError?.(e);
  };

  return (
    <CardImage
      {...props}
      src={currentSrc}
      onError={handleError}
      loading={props.loading ?? 'lazy'}
      decoding={props.decoding ?? 'async'}
    />
  );
};
