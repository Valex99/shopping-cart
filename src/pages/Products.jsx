// When you define nested routes you need to use Outlet
// React Router will render <Products /> for /products, and if the path is /products/watches,
// it looks for an <Outlet /> inside Products to render the Watches component.
// Without <Outlet />, React Router has nowhere to inject the nested component.

import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Hello from PRODUCTS page!</h1>

      {/* This is where nested routes (like /products/watches) will render */}
      <Outlet />
    </div>
  );
}
