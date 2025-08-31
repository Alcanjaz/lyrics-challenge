import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Lyrics Challenge',
    template: '%s — Lyrics Challenge',
  },
  description: 'Take a look at the bands and their lyrics',
  applicationName: 'Lyrics Challenge',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Lyrics Challenge',
    description: 'Take a look at the bands and their lyrics',
    siteName: 'Lyrics Challenge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lyrics Challenge',
    description: 'Take a look at the bands and their lyrics',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="ly-ds-bg-primary ly-ds-text-description ly-ds-font-sans">
        {children}
      </body>
    </html>
  );
}
