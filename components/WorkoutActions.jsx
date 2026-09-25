"use client";

import { Bookmark, BookmarkCheck, Check, Plus } from "lucide-react";
import { PLAN_LIMIT, usePlan } from "@/context/PlanContext";

// "Add to today's plan" + "Save for later" buttons on the details page
export default function WorkoutActions({ workout }) {
  const { plan, addToPlan, saveForLater, isInPlan, isSaved } = usePlan();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);
  const planFull = !inPlan && plan.length >= PLAN_LIMIT;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <button
          type="button"
          onClick={() => addToPlan(workout)}
          disabled={inPlan || planFull}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-[#0f1115] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {inPlan ? <Check size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
          {inPlan ? "Added to today's plan" : "Add to today's plan"}
        </button>
        <button
          type="button"
          onClick={() => saveForLater(workout)}
          disabled={saved}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-gray-700 disabled:hover:text-gray-200"
        >
          {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
          {saved ? "Saved" : "Save for later"}
        </button>
      </div>

      {planFull && (
        <p className="mt-3 text-xs text-muted">
          Today&apos;s plan already has {PLAN_LIMIT} lifts. Finish or remove one to add more.
        </p>
      )}
    </div>
  );
}
