// cart-item/CartItem.jsx

export default function CartItem({ img, name, price, quantity }) {
  return (
    <div className="grid grid-cols-6 items-center py-6 text-gray-800 text-sm border-b">
      {/* Item section */}
      <div className="overflow-hidden col-span-2 flex items-center gap-4">
        <img
          src={img}
          alt={name}
          className="hover:scale-102 transition-transform duration-500 ease-in-out w-20 h-20 object-cover rounded"
        />
        <h2 className="font-bold">{name}</h2>
      </div>

      {/* Price */}
      <div className="text-left font-medium">€{price.toFixed(2)}</div>

      {/* Quantity */}
      <div className="text-left">{quantity}</div>

      {/* Total */}
      <div className="text-left font-semibold">
        €{(price * quantity).toFixed(2)}
      </div>

      {/* Remove Button */}
      <div>
        <button className="underline text-black px-4 py-2 rounded bg-gray-200 hover:bg-[#423c3a] hover:text-white transition font-bold cursor-pointer">
          Remove
        </button>
      </div>
    </div>
  );
}
