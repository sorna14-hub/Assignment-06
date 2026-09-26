"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { usePlan } from "@/context/PlanContext";
import type { Workout } from "@/lib/types";
import EmptyState from "./EmptyState";
import MetricsRow from "./MetricsRow";
import PlanCard from "./PlanCard";
import SortSelect, { type SortKey } from "./SortSelect";

/** Highest first: longest, most calories, best rated. */
function sortValue(w: Workout, key: SortKey) {
  if (key === "duration") return w.duration;
  if (key === "calories") return w.caloriesBurned;
  return w.rating;
}

type Tab = "plan" | "saved";

export default function MyPlan() {
  const { plan, saved, hydrated, markDone, removeFromPlan, removeFromSaved } = usePlan();
  const [tab, setTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const sortedPlan = [...plan].sort(
    (a, b) => sortValue(b.workout, sortBy) - sortValue(a.workout, sortBy),
  );
  const sortedSaved = [...saved].sort((a, b) => sortValue(b, sortBy) - sortValue(a, sortBy));

  function handleDone(w: Workout) {
    markDone(w.id);
    toast.success(`${w.name} marked as done. Nice work!`);
  }

  function handleRemovePlan(w: Workout) {
    removeFromPlan(w.id);
    toast.success(`Removed ${w.name} from today's plan`);
  }

  function handleRemoveSaved(w: Workout) {
    removeFromSaved(w.id);
    toast.success(`Removed ${w.name} from saved`);
  }

  const totals = plan.reduce(
    (acc, p) => ({
      minutes: acc.minutes + p.workout.duration,
      calories: acc.calories + p.workout.caloriesBurned,
    }),
    { minutes: 0, calories: 0 },
  );

  const tabs: { id: Tab; label: string }[] = [
    { id: "plan", label: "Today's Plan" },
    { id: "saved", label: "Saved" },
  ];

  const isEmpty = tab === "plan" ? plan.length === 0 : saved.length === 0;

  return (
    <div className="flex flex-col gap-6">
      <MetricsRow
        exercises={hydrated ? plan.length : 0}
        minutes={hydrated ? totals.minutes : 0}
        calories={hydrated ? totals.calories : 0}
      />

      {/* Tabs + sort */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div
          role="tablist"
          aria-label="Plan lists"
          className="flex items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-[5px]"
        >
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className={`rounded-lg border px-4 py-1.5 text-xs leading-4 transition ${
                  active
                    ? "border-[#2b303d] bg-[#1f242d] font-bold text-white shadow-sm"
                    : "border-transparent text-[#8a92a0] hover:text-white"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <SortSelect value={sortBy} onChange={setSortBy} />
      </div>

      {/* List */}
      <section role="tabpanel" aria-live="polite">
        {!hydrated ? (
          <div className="flex min-h-[200px] items-center justify-center gap-3 rounded-xl border border-[#232732] bg-[#13161d] text-sm text-muted">
            <span className="size-5 animate-spin rounded-full border-2 border-line-strong border-t-accent" />
            Loading workouts…
          </div>
        ) : isEmpty ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-4">
            {tab === "plan"
              ? sortedPlan.map((p) => (
                  <PlanCard
                    key={p.workout.id}
                    workout={p.workout}
                    variant="plan"
                    done={p.done}
                    onDone={() => handleDone(p.workout)}
                    onRemove={() => handleRemovePlan(p.workout)}
                  />
                ))
              : sortedSaved.map((w) => (
                  <PlanCard
                    key={w.id}
                    workout={w}
                    variant="saved"
                    onRemove={() => handleRemoveSaved(w)}
                  />
                ))}
          </div>
        )}
      </section>
    </div>
  );
}
