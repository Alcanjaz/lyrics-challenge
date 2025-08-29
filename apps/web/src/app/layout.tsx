import './global.css';

export const metadata = {
  title: 'Lyrics Challenge',
  description: 'Take a look at the bands and their lyrics',
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
