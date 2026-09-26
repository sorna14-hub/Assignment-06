export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      className="mx-auto w-full max-w-[1280px] flex-1 px-4 pt-8 sm:px-6 sm:pt-12"
    >
      <span className="sr-only">Loading workout…</span>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-[4/5] w-full animate-pulse rounded-2xl border border-line bg-surface" />
        <div className="flex flex-col gap-4">
          <div className="h-10 w-3/4 animate-pulse rounded bg-surface-2" />
          <div className="h-5 w-full animate-pulse rounded bg-surface-2" />
          <div className="h-5 w-2/3 animate-pulse rounded bg-surface-2" />
          <div className="flex gap-2">
            <div className="h-6 w-16 animate-pulse rounded-full bg-surface-2" />
            <div className="h-6 w-14 animate-pulse rounded-full bg-surface-2" />
          </div>
          <div className="h-80 w-full animate-pulse rounded-2xl bg-surface" />
        </div>
      </div>
    </main>
  );
}
