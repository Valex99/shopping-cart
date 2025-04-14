import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar bg-[#4a4a4a] text-white h-12 flex items-center justify-center px-4 relative text-sm">
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
  );
}
