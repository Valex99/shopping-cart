import "./product.css";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
// Import context
import { useWatches } from "../../context/WatchesContext";

export default function ProductDetails() {
  const { id } = useParams();
  console.log("ID:", id);

  const { globalWatchesData } = useWatches();

  const productId = Number(id); // Convert it from string to number

  const watchData = globalWatchesData.find((watch) => watch.id === productId);
  console.log("CLICKED WATCH WHOLE DATA: ", watchData);

  // EXTRACT DATA FROM ARRAY AND PUT IS INTO HTML BELOW

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
        <div className="all-images-div">
          {/* {images.map((img, index) => (
            <img key={index} src={img} alt={`thumbnail-${index}`} />
          ))} */}
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
          <button className="decrease">-</button>
          <input
            type="number"
            className="amount input"
            value="1"
            min="1"
            readOnly
          />
          <button className="increase">+</button>
        </div>

        <button className="add-to-cart-btn">ADD TO CART</button>

      </div>
    </div>
  );
}
