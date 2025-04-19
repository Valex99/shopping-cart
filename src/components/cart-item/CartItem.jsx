import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cart.css";

export default function CartItem({ id, img, category, name, price, quantity }) {
  const { removeFromCart, updateQuantity } = useCart();

  const path = category === "mens-watches" ? "men" : "women";

  function formatPrice(price) {
    if (typeof price !== "number") return "";

    const rounded = price.toFixed(2); // ensures 2 decimal places
    const [integer, decimal] = rounded.split(".");

    // Add space every 3 digits from the right in the integer part
    const formattedInt = integer.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return `${formattedInt}.${decimal}`;
  }

  return (
    <div className="grid grid-cols-6 items-center py-6 text-gray-800 text-sm border-b">
      {/* Item section */}

      <div className="col-span-2 flex items-center gap-4">
        <Link to={`/products/${path}/${id}`} className="group">
          <img
            src={img}
            alt={name}
            className="hover:scale-102 transition-transform duration-500 border border-[#c87c2e] ease-in-out 
            w-20 h-20 object-cover rounded cursor-pointer group-hover:scale-105"
          />
        </Link>

        <h2 className="font-bold">{name}</h2>
      </div>

      {/* Price */}
      <div className="text-left font-bold">€ {price.toFixed(2)}</div>

      {/* Quantity */}
      <div className="quantity-container">
        <button
          className="decrease"
          onClick={() => updateQuantity(id, quantity - 1)}
          disabled={quantity === 1}
        >
          -
        </button>
        <input
          type="text"
          className="amount input"
          value={quantity}
          min="1"
          disabled
        />
        <button
          className="increase"
          onClick={() => updateQuantity(id, quantity + 1)}
        >
          +
        </button>
      </div>

      {/* Total */}
      <div className="text-left font-semibold">
        {formatPrice(quantity * price)} €
      </div>

      {/* Remove Button */}
      <div>
        <button
          className="underline text-black px-4 py-2 rounded bg-gray-200 hover:bg-[#423c3a] hover:text-white transition font-bold cursor-pointer
        "
          // Very simple solution - just pass id to current product - work off ids
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
