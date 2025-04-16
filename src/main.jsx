import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { WatchesProvider } from "./context/WatchesContext";

// By convention BrowserRouter is set up in main.jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WatchesProvider>
      <RouterProvider router={router} />
    </WatchesProvider>
  </StrictMode>
);
