import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/HomePage";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./pages/SingleProduct";

import Men from "./pages/Men";
import Women from "./pages/Women";
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
          {
            path: "men",
            element: <Men />,
            children: [
              {
                path: ":id", // products/men/:id
                element: <SingleProduct />,
              },
            ],
          },
          {
            path: "women",
            element: <Women />,
            children: [
              {
                path: ":id",
                element: <SingleProduct />,
              },
            ],
          },
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
