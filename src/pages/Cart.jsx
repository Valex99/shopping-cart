import { useCart } from "../context/CartContext";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/cart-item/CartItem";
import { useWatches } from "../context/WatchesContext";
import CartSummary from "../components/CartSummary";
// Should Contain Cart layout and call - cart item for each unique id inside the cart
export default function Cart() {
  // Make sure you correct the right thing!
  const { cartItems, clearCart } = useCart();
  const { globalWatchesData } = useWatches();

  const isWatchesDataLoaded = globalWatchesData && globalWatchesData.length > 0;

  if (cartItems.length === 0) return <EmptyCart />;

  console.log("CART ITEMS:", cartItems);
  console.log("WATCHES: ", globalWatchesData);

  // Wait for watches data before rendering cart
  if (!isWatchesDataLoaded) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  // Calculate the total price using reduce
  const totalPrice = cartItems.reduce((total, { productId, quantity }) => {
    const product = globalWatchesData.find((watch) => watch.id === productId);
    if (product) {
      return total + product.price * quantity;
    }
    return total; // If the product is not found, just skip it
  }, 0); // 0 is the initial value for the total

  return (
    <div className="px-50 py-15">
      <h1 className="text-2xl font-bold text-center text-[#423c3a] mb-15">
        YOUR CART
      </h1>

      {/* Column headers */}
      <div
        className="grid grid-cols-6 font-semibold border-b
      text-gray-700 uppercase text-sm tracking-wide"
      >
        <div className="col-span-2">Item</div>
        <div className="text-left">Price</div>
        <div className="text-left">Quantity</div>
        <div className="text-left">Total</div>
        <div></div>
      </div>

      {/* Cart Items */}
      <div className="divide-y">
        {cartItems.map(({ productId, quantity }) => {
          const product = globalWatchesData.find(
            (watch) => watch.id === productId
          );

          // Wait for product to be available
          if (!product) {
            return (
              <div key={productId} className="py-4 italic text-gray-500">
                Loading product info...
              </div>
            );
          }

          console.log("PRODUCT OBJECT: ", product);
          console.log("Looking for ID:", productId);
          console.log("Watches:", globalWatchesData); // OK
          //if (!product) return null; // Skip if not found

          return (
            <CartItem
              id={productId}
              key={productId}
              category={product.category}
              img={product.images[0]}
              name={product.title}
              price={product.price}
              quantity={quantity}
            />
          );
        })}
      </div>
      <CartSummary
        totalPrice={totalPrice}
        onClick={() => {
          alert("Checkout successful!");
          clearCart();
        }}
      />
    </div>
  );
}
