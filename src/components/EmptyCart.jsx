import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex flex-col h-[600px] w-full items-center justify-center text-[#423C3A]">
      <h1 className="mb-8 text-xl font-bold">YOUR CART IS LOOKING EMPTY</h1>
      <Link to="/products">
        <button className="underline cursor-pointer">SHOP NOW</button>
      </Link>
    </div>
  );
}
