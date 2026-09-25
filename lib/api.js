const API_URL = "https://api.abcz.workers.dev/api/fitlog";

// All workouts for the library
export async function getWorkouts() {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load workouts");
  return res.json();
}

// A single workout for the details page (returns null if not found)
export async function getWorkout(id) {
  const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}
