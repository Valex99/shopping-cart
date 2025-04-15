import "./product.css";
import prx from "../banner/banner-image/prx-collection.jpg";

export default function ProductDetails() {
  // Add all input props into it

  return (
    <div className="main-container">
      <div className="left-side">
        <div className="path">
          <p>HOME</p>
          <p>MEN</p>
          <p>ROLEX DAYTONA</p>
        </div>

        <div className="active-image-div">
          <img src={prx} />
        </div>

        {/* // ALL IMAGES DIV - ADD LATER ONE */}
        <div className="all-images-div">
          {/* {images.map((img, index) => (
            <img key={index} src={img} alt={`thumbnail-${index}`} />
          ))} */}
        </div>
      </div>

      <div className="right-side">
        <h1 className="product-name">ROLEX DAYTONA</h1>

        <h2 className="product-price">
          42 000€
          {/* ADD THAT IN CASE THERE IS A SALE ON THIS PRODUCT */}
          {/* {oldPrice && (
            <span className="old-price">₱{oldPrice.toLocaleString()}</span>
          )} */}
        </h2>

        <p className="product-description">
          “A sleek, modern timepiece crafted with precision. Featuring a
          stainless steel case, minimalist dial, and a comfortable leather strap
          — perfect for any occasion.”
        </p>

        <ul className="features">

          {/* MAP THROUGH LI ELEMENTS LATER ON */}
          {/* {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))} */}
          <li>Modern Design</li>
          <li>Carbon Case</li>
          <li>Saphire glass</li>
          <li>...</li>
        </ul>

        <div className="quantity-selector">
          <button className="decrease">-</button>
          <input
            type="number"
            className="amount input"
            // ZERO FOR NOW
            value="0"
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
