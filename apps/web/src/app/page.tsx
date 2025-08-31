import {
  Card,
  CardBody,
  CardDescription,
  CardTitle,
} from '@lyrics-challenge/ui';
import { getBands } from './(bands)/queries/bands';
import { BandsList } from './(bands)/components/BandsList';
import { Bell, Cog, Flag, MessageCircle } from 'lucide-react';
import { GenreFiltersList } from './(bands)/components/GenreFiltersList';
import { SearchBands } from './(bands)/components/SearchBands';
import type { Band } from './(bands)/types/bands';

type IndexProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const getSelectedGenres = (
  params: Record<string, string | string[] | undefined> | undefined
): string[] => {
  if (!params) return [];
  const value = params['genres'];
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value
    .split(',')
    .map((g) => g.trim())
    .filter(Boolean);
};

const getSearch = (
  params: Record<string, string | string[] | undefined> | undefined
): string => {
  if (!params) return '';
  const value = params['search'];
  return Array.isArray(value) ? value[0] ?? '' : value ?? '';
};

export default async function Index(props: IndexProps) {
  const [sp, allBands] = await Promise.all([props.searchParams, getBands()]);

  const selectedGenres = getSelectedGenres(sp);
  const rawSearch = getSearch(sp);
  const search = rawSearch.toLowerCase();

  let bands: Band[] = allBands;
  if (selectedGenres.length > 0) {
    const genreSet = new Set(selectedGenres.map((g) => g.toLowerCase()));
    bands = bands.filter((b) => genreSet.has(b.genre.toLowerCase()));
  }
  if (search.length > 0) {
    bands = bands.filter(
      (b) =>
        b.name.toLowerCase().includes(search) ||
        b.album.toLowerCase().includes(search) ||
        b.genre.toLowerCase().includes(search)
    );
  }

  const uniqueGenres = Array.from(new Set(allBands.map((b) => b.genre))).sort(
    (a, b) => a.localeCompare(b)
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Two-column page grid: left content, right sidebar */}
      <div className="mx-auto w-full max-w-fit px-6 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: navbar + albums */}
        <div className="lg:col-span-9 flex flex-col">
          <nav className="top-8 z-10 w-full ly-ds-bg-tertiary px-4 rounded-md">
            <div className="py-3 grid grid-cols-12 items-center gap-3">
              {/* Left: Logo */}
              <div className="col-span-6 sm:col-span-3 md:col-span-2 flex items-center justify-start gap-2">
                <img
                  src="/sources/lyric_lg_rgb_mnt_wht.png"
                  alt="Lyric logo"
                  className="h-14 w-auto"
                />
              </div>

              {/* Genre filters */}
              <div className="col-span-12 order-3 sm:order-2 sm:col-span-9 md:col-span-5 lg:col-span-4">
                <GenreFiltersList
                  genres={uniqueGenres}
                  selectedGenres={selectedGenres}
                />
              </div>

              {/* Search */}
              <div className="col-span-12 order-2 sm:order-3 sm:col-span-12 md:col-span-4 lg:col-span-4">
                <SearchBands placeholder="Search bands" search={rawSearch} />
              </div>

              {/* Icons */}
              <div className="col-span-6 sm:col-span-3 md:col-span-1 lg:col-span-2 order-4 sm:order-4 md:order-4 lg:order-4 flex items-center justify-end gap-2">
                <Bell className="h-5 w-5 ly-ds-text-button" size={16} />
                <Cog className="h-5 w-5 ly-ds-text-button" size={16} />
                <MessageCircle
                  className="h-5 w-5 ly-ds-text-button"
                  size={16}
                />
              </div>
            </div>
          </nav>

          <main className="flex-1">
            <section className="py-8" aria-live="polite">
              <h1 className="sr-only">Lyric Challenge</h1>
              {bands.length > 0 ? (
                <BandsList bands={bands} />
              ) : rawSearch.length > 0 ? (
                <Card>
                  <CardBody className="ly-ds-bg-tertiary">
                    <CardTitle className="ly-ds-text-title">
                      No results
                    </CardTitle>
                    <CardDescription>
                      No albums match the search “{rawSearch}”. Try a different
                      term or clear filters.
                    </CardDescription>
                  </CardBody>
                </Card>
              ) : (
                <Card>
                  <CardBody className="space-y-2 ly-ds-bg-tertiary">
                    <CardTitle className="ly-ds-text-title">
                      No results
                    </CardTitle>
                    <CardDescription>
                      No albums match the current filters.
                    </CardDescription>
                  </CardBody>
                </Card>
              )}
            </section>
          </main>
        </div>

        {/* Right: welcome card(s) */}
        <aside className="hidden lg:flex lg:col-span-3 flex-col gap-4 w-full">
          <Card>
            <CardBody className="space-y-3 ly-ds-bg-tertiary">
              <CardTitle className="ly-ds-text-title">
                Welcome to Lyric Music
              </CardTitle>
              <CardDescription>
                We’re thrilled to have you join us on this musical journey!
                Lyric Music is your gateway to a fresh and immersive way to
                enjoy the bands and artists you love. Whether you&apos;re
                searching for your all-time favorite tracks, exploring curated
                playlists crafted to fit every mood, or discovering new songs
                that will soon become your go-to anthems, Lyric Music is here to
                elevate your listening experience.
              </CardDescription>
              <CardDescription>
                Imagine having the perfect soundtrack for every moment of your
                life, from energizing workouts to peaceful evenings under the
                stars. With an intuitive interface designed to make finding
                music effortless and enjoyable, you’ll spend less time searching
                and more time grooving. Best of all, it’s completely
                free—because we believe that great music should be accessible to
                everyone.
              </CardDescription>
              <CardDescription>
                At Lyric Music, we’re passionate about creating a community
                where music lovers like you can explore, connect, and celebrate
                the power of sound. So dive in, press play, and let the music
                move you. Welcome to your new favorite way to listen.
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
      </div>
    </div>
  );
}
