import "./grid.css";
import ProductItem from "../ProductItem";

// Imported pic for ProductItem
import prx from "../banner/banner-image/prx-collection.jpg";

export default function ProductGrid() {
  // fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(console.log);

  return (
    <div className="flex px-40 py-20 gap-20">
      <div className="w-[100px] bg-black"></div>

      <div className="w-full grid-container">
        {/* // Grid childs */}
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />

        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />

        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />

        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={prx} itemName="TISSOT PRX" itemPrice="649€" />
      </div>
    </div>
  );
}
