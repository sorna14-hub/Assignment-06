type MetricsRowProps = {
  exercises: number;
  minutes: number;
  calories: number;
};

export default function MetricsRow({ exercises, minutes, calories }: MetricsRowProps) {
  const metrics = [
    { label: "Exercises", value: exercises, accent: true },
    { label: "Minutes", value: minutes, accent: false },
    { label: "Calories", value: calories, accent: false },
  ];

  return (
    <section
      aria-label="Plan summary"
      className="grid grid-cols-3 rounded-2xl border border-[#232732] bg-[#13161d] px-4 py-6 sm:px-6 sm:pt-8"
    >
      {metrics.map((m, i) => (
        <div
          key={m.label}
          className={`flex flex-col gap-1 ${
            i > 0 ? "border-l border-[rgba(35,39,50,0.6)] pl-4 sm:pl-8" : "pr-4"
          }`}
        >
          <span className="text-xs leading-4 text-[#8a92a0]">{m.label}</span>
          <span
            className={`font-display text-3xl font-bold leading-10 sm:text-4xl ${
              m.accent ? "text-accent" : "text-white"
            }`}
          >
            {m.value}
          </span>
        </div>
      ))}
    </section>
  );
}
