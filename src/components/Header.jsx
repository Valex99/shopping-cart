// Look at tissot webpage
// Maybe later add Register watch
// Add counter for cart items later
import { Link } from "react-router-dom";

import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-black text-white h-30 flex items-center justify-center px-4 relative">
      <h1
        className="font-semibold text-5xl uppercase tracking-wide text-white m-0 cursor-pointer 
      hover:scale-105 transition-all duration-700 ease-in-out"
      >
        NOUVÉ
      </h1>
      <div className="absolute top-+ right-10 flex items-center space-x-4 text-xl text-white">
        <IoSearchSharp size={30} className="cursor-pointer" />

        <Link to="cart">
          <MdOutlineShoppingBag size={30} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
