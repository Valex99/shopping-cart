import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

// Local storage is very simply added -> just make sure you:
// 1) Initialize it on load
// 2) And save it on any change

export function CartProvider({ children }) {
  // Meaning: either set existing cart as a state or use empty aray
  const [cartItems, setCartItems] = useState(() => {
    try {
      // 1) ✅ Load cart from localStorage initially
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (err) {
      console.error("Error parsing cart from local storage: ", err);
      return [];
    }
  });

  // 2) ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  // By default quantity is 1, if no argument is provided it stays one
  const addToCart = (productId, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { productId, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };

  // Update quantity of an item
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  return useContext(CartContext);
}

// USE IT LIKE THIS:
// import { useCart } from "../../context/CartContext";

// const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

// // Example usage:
// addToCart(3, 1); // Add product with ID 3, quantity
