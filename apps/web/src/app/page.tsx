import {
  Card,
  CardBody,
  CardDescription,
  CardTitle,
} from '@lyrics-challenge/ui';
import { getBands } from './(bands)/queries/bands';
import { BandsList } from './(bands)/components/BandsList';
import { Bell, Cog, MessageCircle } from 'lucide-react';
import { GenreFiltersList } from './(bands)/components/GenreFiltersList';
import { SearchBands } from './(bands)/components/SearchBands';
import type { Band } from './(bands)/types/bands';
import { WelcomeMessage } from './(bands)/components/WelcomeMessage';
import Image from 'next/image';

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
      <div className="mx-auto w-full max-w-fit px-6 pt-8 flex flex-col lg:flex-row gap-6 transition-all duration-300 ease-out">
        <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-out">
          <nav className="top-8 z-10 w-full ly-ds-bg-tertiary px-4 rounded-md animate-slide-in-up">
            <div className="py-3 grid grid-cols-12 items-center gap-3 lg:gap-4">
              <div className="col-span-6 sm:col-span-3 md:col-span-2 flex items-center justify-start gap-2">
                <Image
                  src="/sources/lyric_lg_rgb_mnt_wht.png"
                  alt="Lyric logo"
                  width={340}
                  height={56}
                  className="h-10 sm:h-12 md:h-14 w-auto"
                />
              </div>

              <div className="col-span-12 order-3 sm:order-2 sm:col-span-9 md:col-span-5 lg:col-span-4">
                <GenreFiltersList
                  genres={uniqueGenres}
                  selectedGenres={selectedGenres}
                />
              </div>

              <div className="col-span-12 order-2 sm:order-3 sm:col-span-12 md:col-span-4 lg:col-span-4">
                <div className="w-full lg:w-1/2">
                  <SearchBands placeholder="Search bands" search={rawSearch} />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3 md:col-span-1 lg:col-span-2 order-4 sm:order-4 md:order-4 lg:order-4 flex items-center justify-end gap-2 lg:gap-3">
                <Bell className="h-5 w-5 lg:h-6 lg:w-6 ly-ds-text-button" />
                <Cog className="h-5 w-5 lg:h-6 lg:w-6 ly-ds-text-button" />
                <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6 ly-ds-text-button" />
              </div>
            </div>
          </nav>

          <main className="flex-1">
            <section
              className="py-8 transition-all duration-300 ease-out animate-fade-in"
              aria-live="polite"
            >
              <h1 className="sr-only">Lyric Challenge</h1>
              {bands.length > 0 ? (
                <BandsList bands={bands} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="sm:col-span-2 lg:col-span-3">
                    <CardBody className="ly-ds-bg-tertiary">
                      <CardTitle className="ly-ds-text-title">
                        No results
                      </CardTitle>
                      <CardDescription>
                        {rawSearch.length > 0
                          ? `No albums match the search “${rawSearch}”. Try a different term or clear filters.`
                          : 'No albums match the current filters.'}
                      </CardDescription>
                    </CardBody>
                  </Card>
                </div>
              )}
            </section>
          </main>
        </div>

        <WelcomeMessage />
      </div>
    </div>
  );
}
