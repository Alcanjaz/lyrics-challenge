'use client';

import * as React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Badge } from '@lyrics-challenge/ui';
import { cn } from '@lyrics-challenge/ui';

type GenreFiltersListProps = {
  genres: string[];
  selectedGenres: string[];
};

const parseSelectedGenres = (sp: URLSearchParams): string[] => {
  const all = sp.getAll('genres');
  if (all.length > 0) return Array.from(new Set(all));
  const csv = sp.get('genres');
  if (!csv) return [];
  return Array.from(
    new Set(
      csv
        .split(',')
        .map((g) => g.trim())
        .filter(Boolean)
    )
  );
};

export const GenreFiltersList: React.FC<GenreFiltersListProps> = ({
  genres,
  selectedGenres,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected = React.useMemo(() => selectedGenres, [selectedGenres]);

  const toggleGenre = (genre: string) => {
    const next = new URLSearchParams(searchParams.toString());

    // Prefer multi-valued query params, but keep compatibility with CSV format
    const current = new Set(parseSelectedGenres(next));
    if (current.has(genre)) {
      current.delete(genre);
    } else {
      current.add(genre);
    }

    // Clear existing and re-apply as multiple values
    next.delete('genres');
    Array.from(current).forEach((g) => next.append('genres', g));

    const qs = next.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;
    router.replace(url, { scroll: false });
  };

  const isSelected = (genre: string) => selectedGenres.includes(genre);

  const handleKeyDown = (genre: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleGenre(genre);
    }
  };

  genres.map((genre) => {
    console.log(genre, isSelected(genre));
  });

  return (
    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap p-1">
      {/* All filter */}
      <Badge
        role="button"
        tabIndex={0}
        aria-pressed={selected.length === 0}
        aria-label="Show all genres"
        onClick={() => {
          const next = new URLSearchParams(searchParams.toString());
          next.delete('genres');
          const qs = next.toString();
          const url = qs ? `${pathname}?${qs}` : pathname;
          router.replace(url, { scroll: false });
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const next = new URLSearchParams(searchParams.toString());
            next.delete('genres');
            const qs = next.toString();
            const url = qs ? `${pathname}?${qs}` : pathname;
            router.replace(url, { scroll: false });
          }
        }}
        className={cn(
          selectedGenres.length === 0 ? 'ly-ds-bg-hover-active' : undefined
        )}
      >
        All
      </Badge>
      {genres.map((genre) => (
        <Badge
          key={genre}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected(genre)}
          aria-label={`Filter by ${genre}`}
          onClick={() => toggleGenre(genre)}
          onKeyDown={handleKeyDown(genre)}
          className={cn(
            isSelected(genre) ? 'ly-ds-bg-hover-active' : undefined
          )}
        >
          {genre}
        </Badge>
      ))}
    </div>
  );
};

export default GenreFiltersList;
