import { Suspense } from "react";
import Hero from "@/components/Hero";
import Library from "@/components/Library";
import LibrarySkeleton from "@/components/LibrarySkeleton";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 pt-8 sm:px-6 sm:pt-12">
      <Hero />

      <section id="library" className="scroll-mt-24 pt-16">
        <div className="mb-8 flex flex-col gap-1">
          <h2 className="font-display text-[30px] font-bold uppercase leading-9 tracking-[-0.75px] text-white">
            The Library
          </h2>
          <p className="text-sm leading-5 text-muted">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <Suspense fallback={<LibrarySkeleton />}>
          <Library />
        </Suspense>
      </section>
    </main>
  );
}
