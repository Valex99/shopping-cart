import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/HomePage";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

import Watches from "./pages/Watches";
import Jewelry from "./pages/Jewelry";
import Layout from "./Layout";

// By convention BrowserRouter is set up in main.jsx
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 👈 Everything inside here shares the layout
    children: [
      {
        path: "/", // This is the homepage route
        element: <Homepage />, // The homepage component
      },

      {
        path: "products",
        element: <Products />,
        children: [
          { path: "watches", element: <Watches /> },
          { path: "jewelry", element: <Jewelry /> },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "error",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routes;
