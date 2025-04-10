import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar bg-[#4a4a4a] text-white h-12 flex items-center justify-center px-4 relative text-sm">
      <Link to="products" className="text-white px-4 hover:underline">
        ALL PRODUCTS
      </Link>
      <Link to="/products/watches" className="text-white px-4 hover:underline">
      PRX COLLECTION
      </Link>
      <Link to="/products/jewelry" className="text-white px-4 hover:underline">
        BESTSELLERS
      </Link>
      <Link to="about" className="text-white px-4 hover:underline">
        ABOUT US
      </Link>
    </div>
  );
}
