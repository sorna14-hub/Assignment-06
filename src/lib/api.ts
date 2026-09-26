import type { Workout } from "./types";

export const API_BASE = "https://api.abcz.workers.dev/api/fitlog";

/** Fetch every workout in the library (always fresh, streamed behind a loader). */
export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(API_BASE, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load workouts (${res.status})`);
  return res.json();
}

/** Fetch a single workout. Returns null when the id doesn't exist. */
export async function getWorkout(id: string | number): Promise<Workout | null> {
  const res = await fetch(`${API_BASE}/${id}`, { next: { revalidate: 3600 } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load workout ${id} (${res.status})`);
  const data = await res.json();
  if (!data || typeof data !== "object" || !("id" in data)) return null;
  return data as Workout;
}
