import Image from "next/image";
import Link from "next/link";
import WorkoutStats from "./WorkoutStats";

// One workout row on the My Plan page
export default function PlanItem({ workout, children }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[#232732] bg-[#14171e] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-[#1f2937] sm:w-36">
          <Image src={workout.image} alt={workout.name} fill sizes="144px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-base font-bold uppercase tracking-[0.025em]">
            {workout.name}
          </h2>
          <p className="text-xs text-[#8a92a0]">{workout.equipment}</p>
          <WorkoutStats
            workout={workout}
            className="mt-2 gap-3 text-gray-300"
            iconClass="text-accent"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-gray-700 px-4 py-2 text-xs text-white transition hover:border-accent hover:text-accent"
        >
          View Details
        </Link>
        {children}
      </div>
    </article>
  );
}
