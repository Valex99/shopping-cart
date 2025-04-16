import { createContext, useContext, useState } from "react";
//import { useEffect } from "react";
// LOCATION OF THE FILE DOESNT MATTER (Parent/child) as long as the paths are correct

// 1. Create the context
const WatchesContext = createContext();

// 2. Create the provider
export function WatchesProvider({ children }) {
  const [globalWatchesData, setGlobalWatchesData] = useState([]);

  // MAKE IT FIX THE SITUATION
  // // ✅ Load data on first render (important for page refreshes)
  // useEffect(() => {
  //   async function fetchWatches() {
  //     try {
  //       const res = await fetch("/path-to-your-data.json"); // 🔁 Update this path
  //       const data = await res.json();
  //       setGlobalWatchesData(data);
  //     } catch (err) {
  //       console.error("Failed to load watches data", err);
  //     }
  //   }

  //   if (globalWatchesData.length === 0) {
  //     fetchWatches();
  //   }
  // }, []);

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
