import { Clock, Flame, Star } from "lucide-react";

// Duration / calories / rating row with icons
export default function WorkoutStats({ workout, className = "text-muted", iconClass = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 text-xs ${className}`}>
      <span className="flex items-center gap-1.5">
        <Clock size={14} className={iconClass} /> {workout.duration} min
      </span>
      <span className="flex items-center gap-1.5">
        <Flame size={14} className={iconClass} /> {workout.caloriesBurned} kcal
      </span>
      <span className="flex items-center gap-1.5">
        <Star size={14} className={iconClass} /> {workout.rating}
      </span>
    </div>
  );
}
