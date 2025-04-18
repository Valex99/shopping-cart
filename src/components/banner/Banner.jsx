// Add media query here! - banner text overflow
//import allProductsImg from "./banner-image/banner1.jpg";
//import prx1 from "./banner-image/prx-collection.jpg";

import "./banner.css"

export default function Banner({ title, description, img }) {
  return (
    <div className="banner-div flex h-[420px]">
      <div className="banner-text w-[40%] p-20 bg-[#f2efee] flex items-center flex-col text-[#423c3a]">
        <h1 className="font-bold text-[26px] mb-4">{title}</h1>
        {/* //  FIX THIS - OVERFLOW HIDDEN */}
        <p className="text-[14.5px] overflow-hidden">
          {description}
          <br />
          <br />
          Explore our selection and find the perfect watch to enhance your look
          and keep you on time, every time.
        </p>
      </div>

      <div className="banner-img-div w-[60%] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="transition-transform duration-600 transform hover:scale-103 w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  );
}

// What should be a prop?
// 1. Title
// 2. Description
// 3. Img
