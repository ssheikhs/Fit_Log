"use client";

import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import Loader from "./Loader";
import PlanItem from "./PlanItem";

const sortOptions = [
  { value: "duration", label: "Duration", key: "duration" },
  { value: "calories", label: "Calories", key: "caloriesBurned" },
  { value: "rating", label: "Rating", key: "rating" },
];

const tabs = [
  { key: "plan", label: "Today's Plan" },
  { key: "saved", label: "Saved" },
];

export default function MyPlan() {
  const { plan, saved, loaded, markAsDone, removeWorkout } = usePlan();
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  // Sort the current tab's list (highest first)
  const sortKey = sortOptions.find((o) => o.value === sortBy).key;
  const list = [...(activeTab === "plan" ? plan : saved)].sort(
    (a, b) => b[sortKey] - a[sortKey]
  );

  // Metrics for today's plan — update live as items are added/removed
  const totalMinutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  const metrics = [
    { label: "Exercises", value: plan.length, highlight: true },
    { label: "Minutes", value: totalMinutes },
    { label: "Calories", value: totalCalories },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-12">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight">My Plan</h1>
      <p className="mt-2 text-sm text-[#8a92a0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics summary */}
      <div className="mt-6 grid grid-cols-3 rounded-2xl border border-[#232732] bg-[#13161d] py-6 sm:py-8">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`px-4 sm:px-8 ${index > 0 ? "border-l border-[#232732]" : ""}`}
          >
            <p className="text-xs text-[#8a92a0]">{metric.label}</p>
            <p
              className={`mt-1 font-display text-3xl font-bold sm:text-4xl ${
                metric.highlight ? "text-accent" : "text-white"
              }`}
            >
              {loaded ? metric.value : 0}
            </p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-xl border border-[#232732] bg-[#151921] p-1" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-lg px-4 py-1.5 text-xs transition ${
                activeTab === tab.key
                  ? "border border-[#2b303d] bg-[#1f242d] font-bold text-white"
                  : "border border-transparent text-[#8a92a0] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <label className="flex items-center gap-3 text-xs text-[#8a92a0]">
          Sort By
          <span className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cursor-pointer appearance-none rounded-lg border border-[#232732] bg-[#13161d] py-2 pl-3 pr-9 text-xs text-white outline-none focus:border-accent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white"
            />
          </span>
        </label>
      </div>

      {/* List / loading / empty state */}
      <div className="mt-6">
        {!loaded ? (
          <Loader text="Loading workouts…" />
        ) : list.length === 0 ? (
          <div className="flex flex-col items-center rounded-xl border border-dashed border-[#2b303d] bg-[#111317] px-6 py-20 text-center">
            <h2 className="font-display text-xl font-bold uppercase tracking-[0.035em]">
              Nothing here yet
            </h2>
            <p className="mt-2 text-xs text-zinc-400">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-6 rounded-full bg-accent-dark px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-accent"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {list.map((workout) => (
              <PlanItem key={workout.id} workout={workout} done={workout.done}>
                {activeTab === "plan" && (
                  <button
                    type="button"
                    onClick={() => markAsDone(workout.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                      workout.done
                        ? "border border-accent/40 bg-[#1a2312] text-accent"
                        : "bg-accent text-black hover:brightness-95"
                    }`}
                  >
                    <Check size={14} strokeWidth={2.5} />
                    {workout.done ? "Done" : "Mark as Done"}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => removeWorkout(workout.id, activeTab)}
                  aria-label={`Remove ${workout.name}`}
                  title="Remove"
                  className="rounded-full p-1.5 text-[#8a92a0] transition hover:bg-red-500/10 hover:text-red-400"
                >
                  <X size={16} />
                </button>
              </PlanItem>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
