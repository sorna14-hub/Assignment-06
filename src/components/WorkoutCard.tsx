import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/lib/types";
import StatsRow from "./StatsRow";
import Tag from "./Tag";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 394px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((g) => (
              <Tag key={g} label={g} />
            ))}
          </div>
          <h3 className="pt-2 font-display text-lg font-bold uppercase leading-7 tracking-[0.45px] text-white">
            {workout.name}
          </h3>
          <p className="text-xs leading-4 text-muted">{workout.equipment}</p>
        </div>

        <div className="pt-4">
          <StatsRow
            duration={workout.duration}
            calories={workout.caloriesBurned}
            rating={workout.rating}
            className="border-t border-[#20242e] pt-[13px]"
          />
        </div>
      </div>
    </Link>
  );
}
