"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";
import { RotateCcw, TriangleAlert } from "lucide-react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-1 items-center justify-center px-4 py-16 sm:px-6">
      <div className="flex w-full max-w-xl flex-col items-center rounded-2xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
        <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
          <TriangleAlert size={26} aria-hidden />
        </span>
        <h1 className="font-display text-2xl font-bold uppercase tracking-[0.5px] text-white sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
          We couldn&apos;t load this page. Check your connection and try again.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-xs font-bold uppercase leading-4 tracking-[0.3px] text-black transition hover:brightness-110"
          >
            <RotateCcw size={16} aria-hidden />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-line-strong px-6 py-3 text-xs font-bold uppercase leading-4 tracking-[0.3px] text-soft transition hover:border-accent hover:text-accent"
          >
            Back to workouts
          </Link>
        </div>
      </div>
    </main>
  );
}
