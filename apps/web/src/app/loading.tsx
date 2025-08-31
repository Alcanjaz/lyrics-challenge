import { Skeleton } from '@lyrics-challenge/ui';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mx-auto w-full max-w-fit px-6 pt-8 flex flex-col lg:flex-row gap-6 transition-all duration-300 ease-out">
        {/* Left column: navbar + albums skeleton */}
        <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-out">
          <nav className="top-8 z-10 w-full ly-ds-bg-tertiary px-4 rounded-md animate-slide-in-up">
            <div className="py-3 grid grid-cols-12 items-center gap-3 lg:gap-4">
              {/* Logo */}
              <div className="col-span-6 sm:col-span-3 md:col-span-2 flex items-center">
                <Skeleton className="h-10 sm:h-12 md:h-14 w-40" />
              </div>

              {/* Genre filters */}
              <div className="col-span-12 order-3 sm:order-2 sm:col-span-9 md:col-span-5 lg:col-span-4">
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-7 w-16" />
                  <Skeleton className="h-7 w-20" />
                  <Skeleton className="h-7 w-14" />
                  <Skeleton className="h-7 w-24" />
                </div>
              </div>

              {/* Search */}
              <div className="col-span-12 order-2 sm:order-3 sm:col-span-12 md:col-span-4 lg:col-span-4">
                <div className="w-full lg:w-1/2">
                  <Skeleton className="h-9 w-full" />
                </div>
              </div>

              {/* Icons */}
              <div className="col-span-6 sm:col-span-3 md:col-span-1 lg:col-span-2 order-4 sm:order-4 md:order-4 lg:order-4 flex items-center justify-end gap-2 lg:gap-3">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
            </div>
          </nav>

          <main className="flex-1">
            <section
              className="py-8 transition-all duration-300 ease-out animate-fade-in"
              aria-live="polite"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="ly-ds-bg-cards rounded-xl overflow-hidden w-full max-w-96"
                  >
                    <Skeleton className="block w-full h-40" />
                    <div className="p-6 space-y-3">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* Right column: welcome card skeleton */}
        <aside className="hidden lg:flex flex-col gap-4 w-[380px] shrink-0 animate-slide-in-right">
          <div className="ly-ds-bg-cards rounded-xl overflow-hidden">
            <div className="p-6 space-y-3 ly-ds-bg-tertiary">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
              <Skeleton className="h-4 w-5/6" />

              <div className="ly-ds-bg-cards rounded-xl overflow-hidden">
                <div className="p-4 grid grid-cols-3 items-center gap-3 ly-ds-bg-primary">
                  <Skeleton className="h-[75px] w-[75px] col-span-1" />
                  <div className="space-y-2 col-span-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
