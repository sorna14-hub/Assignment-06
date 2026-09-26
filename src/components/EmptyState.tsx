import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[rgba(17,19,23,0.5)] px-4 py-24 text-center">
      <h2 className="pb-2 font-display text-xl font-bold uppercase leading-5 tracking-[0.7px] text-white">
        Nothing here yet
      </h2>
      <p className="max-w-sm pb-6 text-xs leading-4 text-[#a1a1aa]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="rounded-full bg-accent px-6 py-2.5 text-xs font-semibold leading-4 tracking-[-0.3px] text-black shadow-[0px_10px_15px_-3px_rgba(194,241,13,0.1),0px_4px_6px_-4px_rgba(194,241,13,0.1)] transition hover:brightness-110"
      >
        Go to workouts
      </Link>
    </div>
  );
}
