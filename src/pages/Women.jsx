import ProductGrid from "../components/product-grid/ProductGrid";

export default function Women() {
  return (
    <div>
      <ProductGrid filterFn={(watch) => watch.category === "womens-watches"} />
    </div>
  );
}
