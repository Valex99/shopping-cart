import "./grid.css";
import ProductItem from "../ProductItem";

// Imported pic for ProductItem
import prx from "../banner/banner-image/prx-collection.jpg";

export default function ProductGrid() {
  // fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(console.log);

  return (
    <div
      className="flex px-40 py-20 gap-20 
    flex justify-center
    "
    >
      <div className="w-[200px] bg-black text-white">
        {" "}
        Maybe add me as a position absolute so i am taken out of the document
        flow
      </div>

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

        {/* // ADD PAGES - BUTTONS + NUMBERS */}
      </div>
    </div>
  );
}
