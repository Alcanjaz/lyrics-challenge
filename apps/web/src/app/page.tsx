import { Button } from '@lyrics-challenge/ui';
import { getBands } from './(bands)/queries/bands';
import { BandsList } from './(bands)/components/BandsList';

export default async function Index() {
  const bands = await getBands();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-10 w-full ly-ds-bg-secondary/50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/sources/lyric_lg_rgb_mnt_wht.png"
              alt="Lyric logo"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="primary">Home</Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="sr-only">Lyric Challenge</h1>
          <BandsList bands={bands} />
        </section>
      </main>
    </div>
  );
}
