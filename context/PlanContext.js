"use client";

import { createContext, useContext, useState } from "react";

const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  // Workouts added to "Today's Plan" and "Saved"
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const value = { plan, setPlan, saved, setSaved };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }
  return context;
}
