import { createContext, useContext, useState, useEffect } from "react";
import { fetchWatches } from "../api";
// LOCATION OF THE FILE DOESNT MATTER (Parent/child) as long as the paths are correct

// 1. Create the context
const WatchesContext = createContext();

// 2. Create the provider
export function WatchesProvider({ children }) {
  const [globalWatchesData, setGlobalWatchesData] = useState([]);

  // 🔁 Fetch watches on first load
  useEffect(() => {
    async function loadWatches() {
      try {
        const data = await fetchWatches();
        setGlobalWatchesData(data);
      } catch (err) {
        console.error("Failed to load watches data", err);
      }
    }

    loadWatches();
  }, []);

  return (
    <WatchesContext.Provider
      value={{ globalWatchesData, setGlobalWatchesData }}
    >
      {children}
    </WatchesContext.Provider>
  );
}

// 3. Create a hook for easier access
// This is a custom hook that gives you easy access to the context from any component.
// Instead of writing: useContext(WatchesContext), you just write:
// const { globalWatchesData } = useWatches();
export function useWatches() {
  return useContext(WatchesContext);
}
