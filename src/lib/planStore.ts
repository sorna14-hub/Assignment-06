import type { Workout } from "./types";

/** Maximum number of unfinished lifts allowed in today's plan. */
export const PLAN_CAP = 5;

export type PlanItem = {
  workout: Workout;
  done: boolean;
  addedAt: number;
};

export type PlanState = {
  plan: PlanItem[];
  saved: Workout[];
};

const STORAGE_KEY = "fitlog:v1";
const EMPTY: PlanState = { plan: [], saved: [] };

let state: PlanState = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function readStorage(): PlanState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<PlanState>;
    return {
      plan: Array.isArray(parsed.plan) ? parsed.plan : [],
      saved: Array.isArray(parsed.saved) ? parsed.saved : [],
    };
  } catch {
    return EMPTY;
  }
}

function ensureLoaded() {
  if (!loaded && typeof window !== "undefined") {
    state = readStorage();
    loaded = true;
  }
}

function setState(next: PlanState) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable (private mode etc.) — keep in memory */
  }
  listeners.forEach((l) => l());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  // keep multiple tabs in sync
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      state = readStorage();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function getSnapshot(): PlanState {
  ensureLoaded();
  return state;
}

export function getServerSnapshot(): PlanState {
  return EMPTY;
}

/* ---------- actions ---------- */

export type AddResult = "added" | "exists" | "full";

export function activeCount(s: PlanState = getSnapshot()) {
  return s.plan.filter((p) => !p.done).length;
}

export function addToPlan(workout: Workout): AddResult {
  const s = getSnapshot();
  if (s.plan.some((p) => p.workout.id === workout.id)) return "exists";
  if (activeCount(s) >= PLAN_CAP) return "full";
  setState({
    ...s,
    plan: [...s.plan, { workout, done: false, addedAt: Date.now() }],
  });
  return "added";
}

export function saveForLater(workout: Workout): "added" | "exists" {
  const s = getSnapshot();
  if (s.saved.some((w) => w.id === workout.id)) return "exists";
  setState({ ...s, saved: [...s.saved, workout] });
  return "added";
}

export function removeFromPlan(id: number) {
  const s = getSnapshot();
  setState({ ...s, plan: s.plan.filter((p) => p.workout.id !== id) });
}

export function removeFromSaved(id: number) {
  const s = getSnapshot();
  setState({ ...s, saved: s.saved.filter((w) => w.id !== id) });
}

export function markDone(id: number) {
  const s = getSnapshot();
  setState({
    ...s,
    plan: s.plan.map((p) => (p.workout.id === id ? { ...p, done: true } : p)),
  });
}
