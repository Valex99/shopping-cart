import "./product.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Import context
import { useWatches } from "../../context/WatchesContext";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // If I do that - state is set before data is fetched - use useEffect
  // const [selectedImage, setSelectedImage] = useState(watchData.images[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const { id } = useParams();
  console.log("ID:", id);

  const { globalWatchesData } = useWatches();
  const productId = Number(id); // Convert it from string to number
  const watchData = globalWatchesData.find((watch) => watch.id === productId);
  console.log("CLICKED WATCH WHOLE DATA: ", watchData);

  const { addToCart } = useCart();

  // This makes sure selectedImage is only set once the data is loaded.
  useEffect(() => {
    if (watchData && watchData.images && watchData.images.length > 0) {
      setSelectedImage(watchData.images[0]);
    }
  }, [watchData]);

  // EXTRACT DATA FROM ARRAY AND PUT IS INTO HTML BELOW - FIX THIS
  if (!watchData || !watchData.images) {
    return <p>Loading...</p>; // or a spinner, or redirect, etc.
  }
  return (
    <div className="main-container">
      <div className="left-side">
        <div className="path">
          <Link to="/products">
            <p className="underline">HOME</p>
          </Link>
          <p></p>
          <Link to={`/products/${watchData.category}`}>
            <p className="underline">{watchData.category}</p>
          </Link>
          <p></p>
          <p>{watchData.title}</p>
        </div>

        <div className="active-image-div overflow-hidden">
          <img
            src={selectedImage}
            className="hover:scale-102 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* // ALL IMAGES DIV - ADD LATER ONE */}
        <div className="all-images-div h-[90px] flex items-center justify-center">
          {watchData.images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedImage(img)}
              className={`h-20 w-20 object-cover cursor-pointer rounded ${
                // If current image matches displayed image - make border different
                selectedImage === img
                  ? "border-4 border-black"
                  : "border border-gray-300"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      <div className="right-side">
        <h1 className="product-name">{watchData.title}</h1>

        <h2 className="product-price">
          {watchData.price}$
          {/* ADD THAT IN CASE THERE IS A SALE ON THIS PRODUCT */}
          {/* {oldPrice && (
            <span className="old-price">₱{oldPrice.toLocaleString()}</span>
          )} */}
        </h2>

        <p className="product-description">{watchData.description}</p>

        <ul className="features">
          <li>{watchData.rating} / 5</li>
          <li>{watchData.returnPolicy}</li>
          <li>{watchData.shippingInformation}</li>
          <li>{watchData.warrantyInformation}</li>
        </ul>

        <div className="quantity-container">
          <button
            className="decrease"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </button>
          <input
            type="text"
            className="amount input"
            onChange={(e) => {
              const value = e.target.value;
              // Allow empty input while typing
              if (value === "") {
                setQuantity("");
              } else {
                setQuantity(Number(value));
              }
            }}
            onBlur={() => {
              // If input is empty or invalid when losing focus, reset to 1
              if (!quantity || quantity <= 0) {
                setQuantity(1);
              }
            }}
            min={1}
            value={quantity}
          />
          <button
            className="increase"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => {
            setIsAddedToCart(true);
            addToCart(watchData.id, quantity);
            setQuantity(1);
          }}
        >
          ADD TO CART
        </button>

        {/* // Fix Checkoutt button design */}
        {isAddedToCart && (
          <Link to="/cart" className="checkout-btn">
            <button>CHECKOUT</button>
          </Link>
        )}
      </div>
    </div>
  );
}
