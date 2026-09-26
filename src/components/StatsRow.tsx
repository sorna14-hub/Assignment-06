import { Clock, Flame, Star } from "lucide-react";

type StatsRowProps = {
  duration: number;
  calories: number;
  rating: number;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

export default function StatsRow({
  duration,
  calories,
  rating,
  className = "",
  iconClassName = "",
  textClassName = "text-muted",
}: StatsRowProps) {
  const stats = [
    { icon: Clock, label: `${duration} min`, title: "Duration" },
    { icon: Flame, label: `${calories} kcal`, title: "Calories" },
    { icon: Star, label: rating.toFixed(1), title: "Rating" },
  ];
  return (
    <ul className={`flex flex-wrap items-center gap-4 ${className}`}>
      {stats.map(({ icon: Icon, label, title }) => (
        <li
          key={title}
          className={`flex items-center gap-1.5 text-xs leading-4 ${textClassName}`}
          title={title}
        >
          <Icon size={14} strokeWidth={2} className={iconClassName} aria-hidden />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
