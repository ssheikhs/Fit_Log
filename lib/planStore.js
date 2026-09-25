// Tiny store for "Today's Plan" and "Saved" lists, persisted in localStorage.
// Used with React's useSyncExternalStore (see context/PlanContext.js).

const STORAGE_KEY = "fitlog-data";
const SERVER_STATE = { plan: [], saved: [], loaded: false };

let state = null;
const listeners = new Set();

function readStorage() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { plan: data?.plan || [], saved: data?.saved || [], loaded: true };
  } catch {
    return { plan: [], saved: [], loaded: true };
  }
}

export function getSnapshot() {
  if (state === null) state = readStorage();
  return state;
}

export function getServerSnapshot() {
  return SERVER_STATE;
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function updateStore(updater) {
  state = { ...updater(getSnapshot()), loaded: true };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ plan: state.plan, saved: state.saved }));
  } catch {
    // storage full or blocked — keep working in memory
  }
  listeners.forEach((listener) => listener());
}
