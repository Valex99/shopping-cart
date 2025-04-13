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

  if (loading) return <p>Loading...</p>;

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
        {/* 
        <ProductItem
          imgSrc={watchesArray.products[0].images[0]}
          itemName={watchesArray.products[0].title}
          itemPrice={watchesArray.products[0].price}
        />
        <ProductItem
          imgSrc={watchesArray.products[1].images[0]}
          itemName={watchesArray.products[1].title}
          itemPrice={watchesArray.products[1].price}
        />
        <ProductItem
          imgSrc={watchesArray.products[2].images[0]}
          itemName={watchesArray.products[2].title}
          itemPrice={watchesArray.products[2].price}
        />

        <ProductItem
          imgSrc={watchesArray.products[3].images[0]}
          itemName={watchesArray.products[3].title}
          itemPrice={watchesArray.products[3].price}
        />
        <ProductItem
          imgSrc={watchesArray.products[4].images[0]}
          itemName={watchesArray.products[4].title}
          itemPrice={watchesArray.products[4].price}
        />
        <ProductItem
          imgSrc={watchesArray.products[5].images[0]}
          itemName={watchesArray.products[5].title}
          itemPrice={watchesArray.products[5].price}
        />

        <ProductItem
          imgSrc={watchesArray.products[5].images[1]}
          itemName="TISSOT PRX"
          itemPrice="649€"
        />
        <ProductItem
          imgSrc={watchesArray.products[5].images[2]}
          itemName="TISSOT PRX"
          itemPrice="649€"
        /> */}

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
