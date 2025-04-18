import "./search.css";
import { useWatches } from "../../context/WatchesContext";
import SearchItem from "../SearchItem";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

import img1 from "./../../components/banner/banner-image/prx-collection.jpg";

export default function SearchModal({ toggleModal }) {
  const { globalWatchesData } = useWatches();
  const [userInput, setUserInput] = useState("");

  // Handle input change and update searchTerm
  const handleSearchChange = (e) => {
    setUserInput(e.target.value);
  };

  // Filter watches based on search input
  const filteredWatches = globalWatchesData.filter((watch) =>
    watch.title.toLowerCase().startsWith(userInput.toLowerCase())
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 flex"
        onClick={toggleModal} // Close modal if clicking anywhere on the backdrop
      >
        {/* Left half backdrop */}
        <div className="backdrop w-1/2 h-full"></div>

        {/* Right half modal */}
        <div
          className="w-1/2 h-full bg-white p-6 shadow-lg z-50"
          onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing the modal
        >
          <div
            className="flex items-center justify-center h-[40px] w-[40px] hover:bg-[#F2F5FF] cursor-pointer"
            onClick={toggleModal}
          >
            <IoIosArrowBack />
          </div>

          {/* HEADER */}
          <h1 className="text-2xl mt-3 mb-3">Search Products</h1>

          {/* SEARCH BAR & BUTTON DIV */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={userInput} // Bind input value to the state
              onChange={handleSearchChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              //onClick={toggleModal}
              className="bg-[#c8651b] p-2 ml-5 text-white rounded-md cursor-pointer hover:bg-black"
            >
              Search
            </button>
          </div>

          {/* SEARCH PRODUCTS 
          FLEXBOX -> FLEX DIRECTION COLUMN
          */}
          <div className="mt-5 flex flex-col">
            {/* Map through filtered watches and display SearchItems */}

            {filteredWatches.length > 0 ? (
              filteredWatches.map((item) => (
                <SearchItem
                  img={item.images[0]}
                  name={item.title}
                  price={item.price}
                />
              ))
            ) : (
              <p>No products found </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
