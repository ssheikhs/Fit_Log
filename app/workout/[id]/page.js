import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);
  return { title: workout ? `${workout.name} — FitLog` : "Workout not found — FitLog" };
}

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) notFound();

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 md:py-12 lg:grid-cols-2 lg:gap-14">
      {/* Left: image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] lg:aspect-auto lg:h-[735px]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover"
        />
      </div>

      {/* Right: info */}
      <div>
        <h1 className="font-display text-3xl font-bold uppercase leading-[1.11] tracking-tight sm:text-4xl">
          {workout.name}
        </h1>
        <p className="mt-3 text-base leading-normal text-muted">{workout.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-[#0f1115]"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Key specs */}
        <dl className="mt-7 divide-y divide-[#1e2330] rounded-2xl border border-[#232834] bg-[#151922]">
          {specs.map((spec) => (
            <div key={spec.label} className="flex items-center justify-between gap-4 px-6 py-3.5">
              <dt className="text-xs font-bold uppercase tracking-[0.05em] text-muted">
                {spec.label}
              </dt>
              <dd className="text-right text-sm font-medium text-gray-200">{spec.value}</dd>
            </div>
          ))}
        </dl>

        {/* Instructions */}
        <h2 className="mt-8 text-base font-extrabold uppercase tracking-[0.05em]">Instructions</h2>
        <ol className="mt-4 space-y-3">
          {workout.instructions.map((step, index) => (
            <li key={index} className="flex gap-2 text-sm leading-relaxed text-gray-300">
              <span className="text-muted">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-9">
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </section>
  );
}
