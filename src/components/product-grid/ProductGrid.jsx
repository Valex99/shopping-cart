import { useState, useEffect } from "react";
import "./grid.css";
import ProductItem from "../ProductItem";

// Imported pic for ProductItem
import prx from "../banner/banner-image/prx-collection.jpg";

// Import fetch function to call it
import { fetchWatches } from "../../api";

export default function ProductGrid() {
  const [watchesArray, setWatchesArray] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchWatches();
        console.log("DATA:", data);
        setWatchesArray(data);
      } catch (err) {
        console.error("Error fetching watches: ", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>

  return (
    <div className="flex px-40 py-20 gap-20 flex justify-center">
      <div className="products-menu w-[200px] border-[2px] border-solid border-red shrink-0">
        Maybe add me as a position absolute so i am taken out of the document
        flow
      </div>

      <div className="w-full grid-container">
        {/* // Grid childs */}
        <ProductItem imgSrc={watchesArray.products[5].images[0]} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={watchesArray.products[5].images[1]} itemName="TISSOT PRX" itemPrice="649€" />
        <ProductItem imgSrc={watchesArray.products[5].images[2]} itemName="TISSOT PRX" itemPrice="649€" />

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
