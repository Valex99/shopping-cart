// When you define nested routes you need to use Outlet
// React Router will render <Products /> for /products, and if the path is /products/watches,
// it looks for an <Outlet /> inside Products to render the Watches component.
// Without <Outlet />, React Router has nowhere to inject the nested component.

//import Placeholder from "../components/Placeholder";

import Banner from "../components/banner/Banner";
import ProductGrid from "../components/product-grid/ProductGrid";
import SingleProduct from "./SingleProduct";

import bannerData from "../components/banner/bannerData";

import { Outlet, useLocation } from "react-router-dom";

// Update products.jsx with route-based logic
export default function Products() {
  const location = useLocation();

  // Check if we're exactly on /products (no sub-path)
  const isBaseProductsPage = location.pathname === "/products";
  const isBaseMensPage = location.pathname === "/products/men";
  const isBaseWomenPage = location.pathname === "/products/women";

  // Check if the pathname is e.g. products/men or women/number
  const isProductDetailPage = /^\/products\/(men|women)\/\d+$/.test(
    location.pathname
  );

  return (
    <div>
      {/* IF CURRENT PAGE IS ALL PRODUCTS, SHOW ALL PRODUCTS BANNER */}
      {isBaseProductsPage && (
        <Banner
          title={bannerData[0].title}
          description={bannerData[0].description}
          img={bannerData[0].image}
        />
      )}

      {/* IF CURRENT PAGE IS MEN PRODUCTS, SHOW MEN BANNER*/}
      {isBaseMensPage && (
        <Banner
          title={bannerData[1].title}
          description={bannerData[1].description}
          img={bannerData[1].image}
        />
      )}

      {/* IF CURRENT PAGE IS WOMEN PRODUCTS, SHOW WOMEN BANNER*/}
      {isBaseWomenPage && (
        <Banner
          title={bannerData[2].title}
          description={bannerData[2].description}
          img={bannerData[2].image}
        />
      )}

      {/* Just calling ProductGrid is showing all products unconditionally */}
      {isBaseProductsPage && <ProductGrid />}

      {/* // Problem: If this is true also one of the above is always ture 
      products/men or product/women */}
      {/* PROBLEM {isProductDetailPage && <SingleProduct/>}  */}

      {/* Main rendering logic 
       If user clicked on the product show SingleProduct page
       Else show Outlet
      */}
      {isProductDetailPage ? <SingleProduct /> : <Outlet />}
    </div>
  );
}
