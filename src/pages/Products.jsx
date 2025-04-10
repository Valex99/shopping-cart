// When you define nested routes you need to use Outlet
// React Router will render <Products /> for /products, and if the path is /products/watches,
// it looks for an <Outlet /> inside Products to render the Watches component.
// Without <Outlet />, React Router has nowhere to inject the nested component.

import Placeholder from "../components/Placeholder";
import Banner from "../components/banner/Banner";
import ProductGrid from "../components/ProductGrid";

import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <Banner />
      <ProductGrid />
      <Placeholder />

      {/* This is where nested routes (like /products/watches) will render */}
      <Outlet />
    </div>
  );
}
