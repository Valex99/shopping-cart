import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useCart } from "../context/CartContext";

export default function StickyHeader({ toggleModal }) {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-black
    px-10 h-[70px] w-full flex bg-black items-center justify-between"
    >
      <Link to="/">
        <h1
          className="w-[100px] font-semibold text-2xl uppercase tracking-wide text-white m-0 cursor-pointer 
      hover:scale-105 transition-all duration-700 ease-in-out"
        >
          NOUVÉ
        </h1>
      </Link>

      <div className="navbar text-white h-12 flex items-center justify-center px-4 relative text-sm">
        <Link to="products" className="text-white px-4 hover:underline">
          ALL PRODUCTS
        </Link>
        <Link to="/products/men" className="text-white px-4 hover:underline">
          MEN
        </Link>
        <Link to="/products/women" className="text-white px-4 hover:underline">
          WOMEN
        </Link>
        <Link to="about" className="text-white px-4 hover:underline">
          ABOUT US
        </Link>
      </div>

      <div className="relative icons w-[100px] flex items-center space-x-4 text-xl text-white justify-end">
        {/* // Temporary while the page is in production */}
        <IoSearchSharp
          size={25}
          className="cursor-pointer"
          onClick={toggleModal}
        />

        <div>
          <Link to="cart">
            <MdOutlineShoppingBag size={25} className=" cursor-pointer" />
          </Link>

          {/* Badge */}
          {totalItems > 0 && (
            <div
              className="absolute -top-1 -right-1 
            text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full
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
