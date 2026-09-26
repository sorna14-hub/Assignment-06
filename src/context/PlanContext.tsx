"use client";

import { useSyncExternalStore } from "react";
import {
  PLAN_CAP,
  activeCount,
  addToPlan,
  getServerSnapshot,
  getSnapshot,
  markDone,
  removeFromPlan,
  removeFromSaved,
  saveForLater,
  subscribe,
} from "@/lib/planStore";

const noopSubscribe = () => () => {};

/** True once we're rendering in the browser (localStorage has been read). */
export function useHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

/** Today's plan + saved workouts, persisted in localStorage. */
export function usePlan() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = useHydrated();

  return {
    plan: state.plan,
    saved: state.saved,
    hydrated,
    planCount: state.plan.length,
    savedCount: state.saved.length,
    isFull: activeCount(state) >= PLAN_CAP,
    isInPlan: (id: number) => state.plan.some((p) => p.workout.id === id),
    isSaved: (id: number) => state.saved.some((w) => w.id === id),
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    markDone,
  };
}
