import { useState, useEffect } from "react";
import "./grid.css";
import ProductItem from "../ProductItem";
import duplicateWatches from "../../duplicateWatches";
import { useSearchParams } from "react-router-dom"; // pagination
import Pagination from "../pagination/Pagination";
import { fetchWatches } from "../../api";

// Imported pic for ProductItem
//import prx from "../banner/banner-image/prx-collection.jpg";

export default function ProductGrid({ filterFn }) {
  const [watchesArray, setWatchesArray] = useState([]);
  const [loading, setLoading] = useState([true]);

  // pagination state
  // Utilize React Router’s useSearchParams hook to read and set the page query parameter in the URL.
  // This allows users to navigate directly to a specific page via the URL.
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Calcualte pagination variables
  // Determine the indices for slicing your watchesArray to display the correct items per page. How many products per page?
  const itemsPerPage = 12;
  const totalItems = watchesArray.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Page indexing - showing 12 products per page - slicing items for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = watchesArray.slice(startIndex, endIndex);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchWatches();

        // Duplicate array
        const duplicatedData = duplicateWatches(data);
        console.log("Duplicated DATA:", duplicatedData);

        // Apply filter if provided
        const filtered = filterFn
          ? duplicatedData.filter(filterFn)
          : duplicatedData;

        setWatchesArray(filtered);
      } catch (err) {
        console.error("Error fetching watches: ", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [filterFn]);

  const handlePageChange = (page) => {
    setSearchParams({ page: page.toString() });
  };

  // FIX THIS SO THAT LOADING APPEARS IN THE MIDDLE OF THE SCREEN...
  if (loading)
    return (
      <div className="felx h-[400px] w-full items-center justify-center">
        <p>Loading...</p>
        {/* // STYLE THIS - Add spinner or something */}
      </div>
    );

  return (
    <div className="flex px-40 py-20 gap-20 flex justify-center">
      <div className="products-menu w-[200px] shrink-0 flex flex-col items-center gap-5 pt-5">
        {/* // THIS DIV SHOULD HAVE A POSITION STICKY - IT GOES DOWN WITH THE PAGE */}
        {/* Add link to it */}
        <p>ALL PRODUCTS</p>
        <p>MEN</p>
        <p>WOMEN</p>
      </div>

      <div className="flex flex-col">
        <div className="w-full grid-container">
          {/* // Grid childs */}
          {currentItems.map((watch) => (
            <ProductItem
              imgSrc={watch.images[0]}
              itemName={watch.title}
              itemPrice={watch.price + "$"}
            />
          ))}
        </div>
        {/* Add pagination component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
