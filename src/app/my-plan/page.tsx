import type { Metadata } from "next";
import MyPlan from "@/components/MyPlan";

export const metadata: Metadata = {
  title: "My Plan — FitLog",
  description: "Today's plan and saved workouts.",
};

export default function MyPlanPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-6 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-12">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-[30px] font-bold uppercase leading-9 tracking-[-0.75px] text-white">
          My Plan
        </h1>
        <p className="text-sm leading-5 text-[#8a92a0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <MyPlan />
    </main>
  );
}
