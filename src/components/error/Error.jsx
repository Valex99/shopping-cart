import React from "react";
import { Link } from "react-router-dom";
import ouOfTime from "./error-image/out-of-time.jpg";
import "./error.css";

export default function Error() {
  return (
    <div className="error-container">
      <h1 className="error-title">Oops... OUT OF TIME</h1>
      <img src={ouOfTime} alt="Out of Time" className="error-image" />
      <p className="error-description">
        The page you're looking for doesn't exist or is under construction.
        Please try again later or use the buttons below to navigate.
      </p>
      <div className="button-container">
        <Link to="/">
          <button className="error-button">Go to Homepage</button>
        </Link>
        <button className="error-button">Contact Support</button>

        <Link to="/products">
          <button className="error-button">Back to Products</button>
        </Link>
      </div>
    </div>
  );
}
