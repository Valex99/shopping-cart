import "./search.css";
import { useWatches } from "../../context/WatchesContext";
import SearchItem from "../SearchItem";
import { IoIosArrowBack } from "react-icons/io";

import img1 from "./../../components/banner/banner-image/prx-collection.jpg";

export default function SearchModal({ toggleModal }) {
  const { globalWatchesData } = useWatches();

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
            {/* NOW HERE - FOR EACH PRODUCT THAT STARTS WITH LETTER THAT USER TYPED IN, SHOW THAT PRODUCTS */}
            {/* CALL COMPONENT - FOR EACH ITEM */}

            <SearchItem img={img1} name="PRX TISSOT" price="1000€" />
            <SearchItem img={img1} name="PRX TISSOT" price="1000€" />
          </div>
        </div>
      </div>
    </>
  );
}
