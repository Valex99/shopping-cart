// When you define nested routes you need to use Outlet
// React Router will render <Products /> for /products, and if the path is /products/watches,
// it looks for an <Outlet /> inside Products to render the Watches component.
// Without <Outlet />, React Router has nowhere to inject the nested component.

//import Placeholder from "../components/Placeholder";

import Banner from "../components/banner/Banner";
import ProductGrid from "../components/product-grid/ProductGrid";

import { Outlet, useLocation } from "react-router-dom";

// Update products.jsx with route-based logic
export default function Products() {
  const location = useLocation();

  // Check if we're exactly on /products (no sub-path)
  const isBaseProductsPage = location.pathname === "/products";

  return (
    <div>
      <Banner />
      {/* Just calling ProductGrid is showing all products unconditionally */}
      {isBaseProductsPage && <ProductGrid />}

      <Outlet />
    </div>
  );
}
