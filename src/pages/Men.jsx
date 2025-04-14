import ProductGrid from "../components/product-grid/ProductGrid";

const Men = () => {
  return (
    <div>
      <ProductGrid filterFn={(watch) => watch.category === "mens-watches"}/>
    </div>
  );
};

export default Men;
