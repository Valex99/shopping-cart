import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
// Classic image carousel
// Should contain some text (collection - description)
// Should contain button shop now -> leads to all products page

import "./carousel.css";

// Import all watch images
import watch1 from "./carousel-images/watch1.jpg";
import watch2 from "./carousel-images/watch2.jpg";
import watch3 from "./carousel-images/watch3.jpg";
import watch5 from "./carousel-images/watch5.jpg";
import watch6 from "./carousel-images/watch6.jpg";
import watch7 from "./carousel-images/watch7.jpg";

// You only use ALL CAPS when defining constants thatnever change
const images = [watch1, watch3, watch2, watch7, watch5, watch6];

export default function Carousel() {
  const showNextImage = () => {
    setImageIndex((index) => {
      // Check if we are at the end - wrap aorund
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  // By default index is zero
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="relative max-h-[650px] w-full overflow-hidden">
      {/* Show all images - map through array and translate each one by 100% + add animation*/}
      {/* Can not transition from one image to anotehr if we dont know what next one is - we need other image in the dom as well */}
      {/* SOLUTION: Render all images out */}
      <div className=" h-[650px] w-full overflow-hidden flex">
        {images.map((url) => (
          <img
            key={url}
            src={url}
            className="img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        {/*Add Dark overlay here - make sure buttons are still working*/}
        {/* Shop Now button */}
        <div className="absolute bottom-14 right-18 z-20">
            <Link to="products">
            
          <button className="bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition cursor-pointer font-bold ">
            SHOP NOW
          </button>

            </Link>
        </div>
      </div>
      <button className="slider-btn" onClick={showPrevImage}>
        <ArrowBigLeft />
      </button>
      <button className="slider-btn right-0" onClick={showNextImage}>
        <ArrowBigRight />
      </button>

      {/* // Buttons / image pointers */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {" "}
        {images.map((_, index) => (
          <button
            key={index}
            className="carousel-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
