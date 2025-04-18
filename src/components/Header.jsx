// Look at tissot webpage
// Maybe later add Register watch
// Add counter for cart items later
import { Link } from "react-router-dom";

import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useCart } from "../context/CartContext";

export default function Header({ toggleModal }) {
  // Use context to see how many items there are in the cart
  const { cartItems } = useCart();

  // Use reduce method to calculate all the items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-black text-white h-30 flex items-center justify-center px-4 relative">
      <Link to="/">
        <h1
          className="font-semibold text-5xl uppercase tracking-wide text-white m-0 cursor-pointer 
      hover:scale-105 transition-all duration-700 ease-in-out"
        >
          NOUVÉ
        </h1>
      </Link>

      <div className="icons absolute top-+ right-10 flex items-center space-x-4 text-xl text-white">
        {/* // Temporary while the page is in production */}
    <Link>
        <IoSearchSharp
          size={30}
          className="cursor-pointer"
          onClick={toggleModal}
        />
        </Link>

        <div>
          <Link to="cart">
            <MdOutlineShoppingBag size={30} className="cursor-pointer" />
          </Link>

          {/* Badge */}
          {totalItems > 0 && (
            <div
              className="absolute -top-2 -right-2 
            text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full
              bg-[#c87c2e]"
            >
              {/* maybe use black text and white background */}
              {totalItems}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
