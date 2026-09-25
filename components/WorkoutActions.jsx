"use client";

import { Bookmark, Plus } from "lucide-react";

// "Add to today's plan" + "Save for later" buttons on the details page
export default function WorkoutActions({ workout }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-[#0f1115] transition hover:brightness-95"
        aria-label={`Add ${workout.name} to today's plan`}
      >
        <Plus size={16} strokeWidth={2.5} />
        Add to today&apos;s plan
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-accent hover:text-accent"
        aria-label={`Save ${workout.name} for later`}
      >
        <Bookmark size={16} />
        Save for later
      </button>
    </div>
  );
}
