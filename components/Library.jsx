import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

export default async function Library() {
  let workouts = [];
  try {
    workouts = await getWorkouts();
  } catch {
    return (
      <p className="py-16 text-center text-muted">
        Could not load workouts. Please refresh the page.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
