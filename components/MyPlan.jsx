"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import Loader from "./Loader";
import PlanItem from "./PlanItem";

const tabs = [
  { key: "plan", label: "Today's Plan" },
  { key: "saved", label: "Saved" },
];

export default function MyPlan() {
  const { plan, saved, loaded } = usePlan();
  const [activeTab, setActiveTab] = useState("plan");

  const list = activeTab === "plan" ? plan : saved;

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
              <PlanItem key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
