"use client";

import { ChevronDown } from "lucide-react";

export type SortKey = "duration" | "calories" | "rating";

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
];

type SortSelectProps = {
  value: SortKey;
  onChange: (value: SortKey) => void;
};

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <label className="flex items-center gap-3">
      <span className="text-xs leading-4 text-[#8a92a0]">Sort By</span>
      <span className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortKey)}
          className="h-[34px] cursor-pointer appearance-none rounded-[9px] border border-[#232732] bg-[#13161d] py-0 pl-3 pr-8 text-xs leading-4 text-white outline-none transition hover:border-line-strong focus-visible:border-accent"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          aria-hidden
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-white"
        />
      </span>
    </label>
  );
}
