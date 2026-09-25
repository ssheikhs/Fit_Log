// Spinning dumbbell-style loader shown while data is fetched
export default function Loader({ text = "Loading workouts…" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24" role="status">
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-[#222630] border-t-accent-dark" />
      <p className="text-sm text-muted">{text}</p>
    </div>
  );
}
