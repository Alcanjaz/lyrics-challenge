'use client';

import * as React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@lyrics-challenge/ui';
import { Search as SearchIcon } from 'lucide-react';

type SearchBandsProps = {
  placeholder?: string;
  search: string;
};

export const SearchBands: React.FC<SearchBandsProps> = ({
  //This is not in the design, but I think it's better to have a placeholder
  placeholder = 'Search bands',
  search,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = React.useState<string>(search ?? '');

  // Keep local state in sync when prop changes (URL updated elsewhere)
  React.useEffect(() => {
    setValue(search ?? '');
  }, [search]);

  const [debounced, setDebounced] = React.useState<string>(value);
  React.useEffect(() => {
    const id = setTimeout(() => setDebounced(value), 300);
    return () => clearTimeout(id);
  }, [value]);

  React.useEffect(() => {
    const next = new URLSearchParams(searchParams.toString());
    if (debounced && debounced.trim().length > 0) {
      next.set('search', debounced.trim());
    } else {
      next.delete('search');
    }

    const qs = next.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;
    router.replace(url, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      placeholder={placeholder}
      icon={SearchIcon}
      aria-label="Search bands"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchBands;
