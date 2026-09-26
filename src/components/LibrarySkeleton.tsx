export default function LibrarySkeleton() {
  return (
    <div role="status" aria-live="polite">
      <div className="mb-6 flex items-center gap-3 text-sm text-muted">
        <span className="size-5 animate-spin rounded-full border-2 border-line-strong border-t-accent" />
        Loading workouts…
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="h-48 animate-pulse bg-surface-2" />
            <div className="flex flex-col gap-3 p-6">
              <div className="flex gap-2">
                <div className="h-5 w-14 animate-pulse rounded-full bg-surface-2" />
                <div className="h-5 w-12 animate-pulse rounded-full bg-surface-2" />
              </div>
              <div className="h-6 w-3/4 animate-pulse rounded bg-surface-2" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-surface-2" />
              <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-surface-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
