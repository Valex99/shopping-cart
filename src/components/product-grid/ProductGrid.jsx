import { useState, useEffect } from "react";
import "./grid.css";
import ProductItem from "../ProductItem";
import duplicateWatches from "../../duplicateWatches";

// Imported pic for ProductItem
//import prx from "../banner/banner-image/prx-collection.jpg";

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
        //setWatchesArray(data);

        // Duplicate array
        const duplicatedData = duplicateWatches(data);
        console.log("Duplicated DATA:", duplicatedData);
        setWatchesArray(duplicatedData);
      } catch (err) {
        console.error("Error fetching watches: ", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>; // STYLE THIS - Add spinner or something

  return (
    <div className="flex px-40 py-20 gap-20 flex justify-center">
      <div
        className="products-menu w-[200px] shrink-0 flex flex-col items-center gap-5 pt-5
      "
      >
        <p>ALL PRODUCTS</p>
        <p>PRX COLLECTION</p>
        <p>BESTSELLERS</p>
      </div>

      <div className="w-full grid-container">
        {/* // Grid childs */}
        {watchesArray.map((watch) => (
          <ProductItem
            imgSrc={watch.images[0]}
            itemName={watch.title}
            itemPrice={watch.price + "$"}
          />
        ))}
        {/* // ADD PAGES - BUTTONS + NUMBERS */}
      </div>
    </div>
  );
}
