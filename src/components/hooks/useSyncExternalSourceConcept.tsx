import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Let's say react starts rendering the component when width 1200.
 * Before, it commits, we resize the window to 500
 * Still the render continue with stale value i.e. 1200 and commit it.
 * Later, an effect runs, re-subscribe and update to 500. We briefly observe flicker/inconsistent state.
 */
export const useWindowResizeOld = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleChange = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleChange);
    return () => window.removeEventListener("resize", handleChange);
  }, []);
  return width;
};

/**
 * useSyncExternalSource used to subscribe the external data source in a way that is safe for concurrent rendering.
 *
 * It ensures react always read the consistent snapshot of the external data.
 * It also prevent bugs where React might re-render using stale or inconsistent state.
 *
 *
 * Syncing external data source with useState and useEffect is not safe for concurrent rendering i.e.
 * it could render multiple times before commit causing UI to briefly show inconsistent date between renders.
 * This is called tearing.
 *
 *
 *
 * Syntax
 * -----
 * const returnedValue = useSyncExternalSource(subscribe, getSnapshot, getServerSnapshot);
 *
 * subscribe(callback) -> Register a listener, invoked whenever the store changes.
 * getSnapshot() -> return the current value from the external source (Invoked everytime the component re-render)
 * getServerSnapshot() -> Optional -> Used during SSR
 * When we run the react application on server, it can't access Browser API or the store depends on client state, it
 * will fail on server.
 * ---
 * getServerSnapshot provides a safe fallback value that React uses while rendering on the server so that the initial
 * HTML is consistent b/w server render and client hydration.
 *
 * If we are using SSR, it is recommended to use getServerSnapshot to prevent runtime error by providing default value
 * during inital renders and hydration issues.
 */

export const SyncExternalStore = () => {
  const subscribe = (notify: () => void) => () => {
    window.addEventListener("resize", notify);

    return () => {
      window.removeEventListener("resize", notify);
    };
  };
  const getSnapShots = () => {
    return window.innerWidth;
  };
  const width = useSyncExternalStore(subscribe, getSnapShots);

  //M2
  const windowWidth = useSyncExternalStore(
    (notify) => {
      window.addEventListener("resize", notify);
      return () => window.removeEventListener("resize", notify);
    },
    () => window.innerWidth
  );

  return (
    <div>
      {width} - {windowWidth}
    </div>
  );
};

//Other example
type Listener = () => void;

class CounterStore {
  private count = 0;
  private listeners = new Set<Listener>();

  // Subscribe to store changes
  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  // Return current state snapshot
  getSnapshot = (): number => this.count;

  // Mutators
  increment = () => {
    this.count++;
    this.emitChange();
  };

  decrement = () => {
    this.count--;
    this.emitChange();
  };

  private emitChange() {
    for (const listener of this.listeners) listener();
  }
}

export const counterStore = new CounterStore();
