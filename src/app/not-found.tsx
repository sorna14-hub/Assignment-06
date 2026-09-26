import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found — FitLog",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-1 items-center justify-center px-4 py-16 sm:px-6">
      <div className="flex w-full max-w-xl flex-col items-center rounded-2xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
        <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Dumbbell size={26} aria-hidden />
        </span>
        <p className="font-display text-7xl font-bold leading-none tracking-[-2px] text-accent sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-[0.5px] text-white sm:text-3xl">
          Missed the rep
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Head back
          to the library and pick your next lift.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-xs font-bold uppercase leading-4 tracking-[0.3px] text-black transition hover:brightness-110"
          >
            <ArrowLeft size={16} aria-hidden />
            Back to workouts
          </Link>
          <Link
            href="/my-plan"
            className="inline-flex items-center justify-center rounded-md border border-line-strong px-6 py-3 text-xs font-bold uppercase leading-4 tracking-[0.3px] text-soft transition hover:border-accent hover:text-accent"
          >
            My plan
          </Link>
        </div>
      </div>
    </main>
  );
}
