import Image from "next/image";
import Link from "next/link";
import WorkoutStats from "./WorkoutStats";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#222630] bg-surface transition hover:-translate-y-1 hover:border-accent-dark/60"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-accent-dark px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.05em] text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-[0.025em]">
          {workout.name}
        </h3>
        <p className="mt-1 text-xs text-muted">{workout.equipment}</p>

        <div className="mt-auto pt-4">
          <div className="border-t border-[#20242e] pt-3">
            <WorkoutStats workout={workout} />
          </div>
        </div>
      </div>
    </Link>
  );
}
