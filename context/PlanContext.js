"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import toast from "react-hot-toast";
import { getServerSnapshot, getSnapshot, subscribe, updateStore } from "@/lib/planStore";

const PlanContext = createContext(null);

export const PLAN_LIMIT = 5; // "Cap of five lifts for today"

// Keep only the fields the My Plan page needs
const pick = (w) => ({
  id: w.id,
  name: w.name,
  image: w.image,
  equipment: w.equipment,
  muscleGroups: w.muscleGroups,
  duration: w.duration,
  caloriesBurned: w.caloriesBurned,
  rating: w.rating,
});

export function PlanProvider({ children }) {
  // plan + saved lists live in a small localStorage-backed store
  const { plan, saved, loaded } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isInPlan = (id) => plan.some((w) => w.id === id);
  const isSaved = (id) => saved.some((w) => w.id === id);

  const addToPlan = (workout) => {
    if (isInPlan(workout.id)) {
      toast(`${workout.name} is already in today's plan`, { icon: "ℹ️" });
      return;
    }
    if (plan.length >= PLAN_LIMIT) {
      toast.error(`Today's plan is full (max ${PLAN_LIMIT} lifts)`);
      return;
    }
    updateStore((s) => ({ ...s, plan: [...s.plan, { ...pick(workout), done: false }] }));
    toast.success(`Added ${workout.name} to today's plan`);
  };

  const saveForLater = (workout) => {
    if (isSaved(workout.id)) {
      toast(`${workout.name} is already saved`, { icon: "ℹ️" });
      return;
    }
    updateStore((s) => ({ ...s, saved: [...s.saved, pick(workout)] }));
    toast.success(`Saved ${workout.name} for later`);
  };

  const value = {
    plan,
    saved,
    loaded,
    isInPlan,
    isSaved,
    addToPlan,
    saveForLater,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }
  return context;
}
