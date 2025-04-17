import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  // By default quantity is 1, if no argument is provided it stays one
  const addToCart = (productId, quantity = 1) => {
    console.log(
      "Product with id:",
      productId,
      "added to cart. Amount is: ",
      quantity
    );
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
