import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

export default async function Library() {
  let workouts;
  try {
    workouts = await getWorkouts();
  } catch {
    return (
      <p className="rounded-2xl border border-line bg-surface p-8 text-center text-muted">
        Couldn&apos;t load workouts right now. Please refresh the page.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((w) => (
        <WorkoutCard key={w.id} workout={w} />
      ))}
    </div>
  );
}
