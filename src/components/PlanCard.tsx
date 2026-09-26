import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import type { Workout } from "@/lib/types";
import StatsRow from "./StatsRow";

type PlanCardProps = {
  workout: Workout;
  variant: "plan" | "saved";
  done?: boolean;
  onDone?: () => void;
  onRemove?: () => void;
};

export default function PlanCard({ workout, variant, done = false, onDone, onRemove }: PlanCardProps) {
  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl border border-[#232732] bg-[#14171e] p-4 transition sm:flex-row sm:items-center sm:justify-between ${
        done ? "opacity-60" : ""
      }`}
    >
      {/* Thumbnail & description */}
      <div className="flex min-w-0 items-center gap-4">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-[#1f2937] sm:w-36">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <h3
            className={`truncate font-display text-base font-bold uppercase leading-6 tracking-[0.4px] text-white ${
              done ? "line-through decoration-accent decoration-2" : ""
            }`}
          >
            {workout.name}
          </h3>
          <p className="truncate text-xs font-semibold leading-4 text-[#8a92a0]">
            {workout.equipment}
          </p>
          <StatsRow
            duration={workout.duration}
            calories={workout.caloriesBurned}
            rating={workout.rating}
            className="gap-3 pt-1.5"
            iconClassName="text-accent"
            textClassName="text-soft"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center justify-end gap-3">
        <Link
          href={`/workout/${workout.id}`}
          className="inline-flex h-[34px] items-center rounded-full border border-[#374151] px-4 text-xs leading-4 text-white transition hover:border-accent hover:text-accent"
        >
          View Details
        </Link>

        {variant === "plan" &&
          (done ? (
            <span className="inline-flex h-8 items-center gap-1.5 rounded-full border border-accent/40 px-4 text-xs font-semibold leading-4 text-accent">
              <Check size={14} strokeWidth={2.5} aria-hidden />
              Done
            </span>
          ) : (
            <button
              type="button"
              onClick={onDone}
              className="inline-flex h-8 items-center gap-1.5 rounded-full bg-accent px-4 text-xs font-semibold leading-4 text-black shadow-sm transition hover:brightness-110"
            >
              <Check size={14} strokeWidth={2.5} aria-hidden />
              Mark as Done
            </button>
          ))}

        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${workout.name}`}
          className="rounded-md p-1.5 text-[#8a92a0] transition hover:bg-white/5 hover:text-white"
        >
          <X size={16} aria-hidden />
        </button>
      </div>
    </article>
  );
}
