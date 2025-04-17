import { Link } from "react-router-dom";

export default function CartSummary({ totalPrice, onClick }) {
  return (
    <div className="w-full md:w-96 mt-10 md:mt-0 md:ml-auto p-6 pr-0 pt-10 rounded-md bg-white ">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700">Subtotal</span>
        <span className="font-medium text-gray-900">€ {totalPrice}</span>
      </div>

      <div className="flex justify-between items-center mb-4 text-sm ">
        <span className="text-gray-700">Shipping</span>
        <span className="text-gray-700">Free</span>
      </div>

      <div className="flex justify-between items-center mb-6 text-sm border-b border-gray-400 pb-4">
        <span className="text-gray-700">Taxes</span>
        <span className="text-gray-700">Calculated at checkout</span>
      </div>

      <button
        className="w-full bg-black text-white text-sm font-medium py-3 rounded hover:opacity-90 active:scale-95 transition transform duration-200 cursor-pointer"
        onClick={onClick}
      >
        Checkout
      </button>

      <div className="flex justify-end">
        <Link to="/products">
        
        <p className="underline pt-3 cursor-pointer">Continue Shopping?</p>
        </Link>
      </div>
    </div>
  );
}
