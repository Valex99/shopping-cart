import { useState, useEffect } from "react";
import "./grid.css";
import ProductItem from "../ProductItem";
import duplicateWatches from "../../duplicateWatches";
import { useSearchParams } from "react-router-dom"; // pagination
import Pagination from "../pagination/Pagination";
import { fetchWatches } from "../../api";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useWatches } from "../../context/WatchesContext";

// Imported pic for ProductItem
//import prx from "../banner/banner-image/prx-collection.jpg";

export default function ProductGrid({ filterFn }) {
  // Should there be anoter state for error?
  const [watchesArray, setWatchesArray] = useState([]);
  const { setGlobalWatchesData } = useWatches();

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
        //console.log("Duplicated DATA:", duplicatedData);

        // Apply filter if provided
        const filtered = filterFn
          ? duplicatedData.filter(filterFn)
          : duplicatedData;

        // FIX THE CATEGORY IN ARRAY SO THAT IT LEADS TO THE CORRECT PAGE
        const fixedCategory = filtered.map((watch) => ({
          ...watch,
          category:
            watch.category === "mens-watches"
              ? "men"
              : watch.category === "womens-watches"
              ? "women"
              : watch.category,
        }));

        console.log("REPLACED CATEGORY DATA: ", fixedCategory);

        //setWatchesArray(filtered);
        setWatchesArray(fixedCategory);
        // Update "global state as well" - context
        setGlobalWatchesData(fixedCategory);
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

  const consoleLogId = (id) => {
    console.log(id);
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
        {/* Side menu configured with NavLink to determine which one is active and adding class on top of that */}
        <NavLink
          to="/products"
          end
          className={({ isActive }) =>
            isActive ? "menu-link-active" : "menu-link"
          }
        >
          <p>ALL PRODUCTS</p>
        </NavLink>

        <NavLink
          to="/products/men"
          className={({ isActive }) =>
            isActive ? "menu-link-active" : "menu-link"
          }
        >
          <p>MEN</p>
        </NavLink>

        <NavLink
          to="/products/women"
          className={({ isActive }) =>
            isActive ? "menu-link-active" : "menu-link"
          }
        >
          <p>WOMEN</p>
        </NavLink>
      </div>

      <div className="flex flex-col">
        <div className="w-full grid-container">
          {/* // Grid childs */}
          {currentItems.map((watch) => (
            <Link key={watch.id} to={`/products/${watch.category}/${watch.id}`}>
              <ProductItem
                imgSrc={watch.images[0]}
                itemName={watch.title}
                itemPrice={watch.price + "$"}
                onClick={() => consoleLogId(watch.id)}
              />
            </Link>
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
