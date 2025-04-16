import "./product.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
// Import context
import { useWatches } from "../../context/WatchesContext";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { id } = useParams();
  console.log("ID:", id);

  const { globalWatchesData } = useWatches();

  const productId = Number(id); // Convert it from string to number

  const watchData = globalWatchesData.find((watch) => watch.id === productId);
  console.log("CLICKED WATCH WHOLE DATA: ", watchData);

  // EXTRACT DATA FROM ARRAY AND PUT IS INTO HTML BELOW - FIX THIS
  if (!watchData) {
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

        <div className="active-image-div">
          <img src={watchData.images[0]} />
        </div>

        {/* // ALL IMAGES DIV - ADD LATER ONE */}
        <div className="all-images-div h-[90px] flex items-center justify-center">
          <img
            src={watchData.images[0]}
            alt=""
            className="small-images"
            draggable="false"
          />
          <img
            src={watchData.images[1]}
            alt=""
            className="small-images"
            draggable="false"
          />
          <img
            src={watchData.images[2]}
            alt=""
            className="small-images"
            draggable="false"
          />
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
            type="number"
            className="amount input"
            value={quantity}
            min="1"
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
