import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import DetailActions from "@/components/DetailActions";
import { getWorkout } from "@/lib/api";

export async function generateMetadata({
  params,
}: PageProps<"/workout/[id]">): Promise<Metadata> {
  const { id } = await params;
  const workout = await getWorkout(id).catch(() => null);
  return {
    title: workout ? `${workout.name} — FitLog` : "Workout not found — FitLog",
    description: workout?.description,
  };
}

export default async function WorkoutDetailPage({
  params,
}: PageProps<"/workout/[id]">) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) notFound();

  const workout = await getWorkout(id);
  if (!workout) notFound();

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: String(workout.sets) },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating.toFixed(1) },
  ];

  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 pt-8 sm:px-6 sm:pt-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Left: visual */}
        <section className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] lg:sticky lg:top-28 lg:self-start">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(min-width: 1024px) 588px, 100vw"
            className="object-cover"
          />
        </section>

        {/* Right: information & actions */}
        <section className="flex flex-col">
          <h1 className="pb-3 font-display text-3xl font-bold uppercase leading-10 tracking-[-0.9px] text-white sm:text-4xl">
            {workout.name}
          </h1>
          <p className="max-w-[576px] pb-5 text-base leading-6 text-muted">
            {workout.description}
          </p>

          <ul className="flex flex-wrap gap-2.5 pb-7">
            {workout.muscleGroups.map((g) => (
              <li
                key={g}
                className="rounded-full bg-accent px-3.5 py-1 text-xs font-semibold leading-4 text-[#0f1115]"
              >
                {g}
              </li>
            ))}
          </ul>

          {/* Key specs panel */}
          <dl className="mb-8 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center justify-between gap-4 px-6 py-3.5 ${
                  i > 0 ? "border-t border-[#1e2330]" : ""
                }`}
              >
                <dt className="text-xs font-bold uppercase leading-4 tracking-[0.6px] text-muted">
                  {s.label}
                </dt>
                <dd className="text-right text-sm font-medium leading-5 text-[#e5e7eb]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Instructions */}
          <div className="flex flex-col gap-4 pb-9">
            <h2 className="text-base font-extrabold uppercase leading-6 tracking-[0.8px] text-white">
              Instructions
            </h2>
            <ol className="flex flex-col gap-3">
              {workout.instructions.map((step, i) => (
                <li key={i} className="flex items-start text-sm leading-[22.75px]">
                  <span className="shrink-0 pr-2 text-muted">{i + 1}.</span>
                  <span className="text-soft">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <DetailActions workout={workout} />
        </section>
      </div>
    </main>
  );
}
