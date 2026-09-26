import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-10 md:flex-row md:justify-between lg:p-14">
      {/* Left: copy */}
      <div className="flex w-full max-w-[576px] flex-col items-start gap-5">
        <p className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-accent">
          Workout Library
        </p>
        <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-[-1px] text-white sm:text-5xl lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
          Train with intent. Log every set.
        </h1>
        <p className="max-w-[512px] text-base leading-6 text-muted">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-xs font-bold uppercase leading-4 tracking-[0.3px] text-black shadow-sm transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Browse Workouts
          <ArrowDown size={16} strokeWidth={2.5} aria-hidden />
        </a>
      </div>

      {/* Right: banner image */}
      <div className="relative aspect-square w-56 shrink-0 sm:w-72 lg:w-[334px]">
        <Image
          src="/banner.png"
          alt="Muscle figure training on a preacher-curl machine"
          fill
          priority
          sizes="(min-width: 1024px) 334px, (min-width: 640px) 288px, 224px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
