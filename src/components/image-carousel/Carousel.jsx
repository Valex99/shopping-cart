import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
import { collections } from "./collectionData";
import "./carousel.css";

export default function Carousel() {
  // By default index is zero - show first picture
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      // Check if we are at the end - wrap aorund
      if (index === collections.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return collections.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="relative max-h-[650px] w-full overflow-hidden">
      {/* Show all images - map through array and translate each one by 100% + add animation*/}
      {/* Can not transition from one image to anotehr if we dont know what next one is - we need other image in the dom as well */}
      {/* SOLUTION: Render all images out */}
      <div className=" h-[650px] w-full overflow-hidden flex relative">
        {collections.map((item) => (
          <img
            key={item.image}
            src={item.image}
            className="img"
            style={{ translate: `${-100 * imageIndex}%` }}
            alt={item.name}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        {/* Collection Text */}
        <div className="absolute bottom-14 left-20 z-20 max-w-[40%] text-white">
          <h2 className="text-4xl font-bold tracking-wide mb-2">
            {collections[imageIndex].name}
          </h2>
          <p className="text-base leading-relaxed">
            {collections[imageIndex].description}
          </p>
        </div>

        {/* Shop Now Button */}
        <div className="absolute bottom-14 right-20 z-20">
          <Link to="products">
            <button className="bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition font-bold cursor-pointer">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

    {/* Navigation Arrows */}
    <button className="slider-btn left-0 z-30" onClick={showPrevImage}>
        <ArrowBigLeft />
      </button>
      <button className="slider-btn right-0 z-30" onClick={showNextImage}>
        <ArrowBigRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {collections.map((_, index) =>
          index === imageIndex ? (
            <CircleDot key={index} className="text-white" />
          ) : (
            <Circle
              key={index}
              className="text-white cursor-pointer"
              onClick={() => setImageIndex(index)}
            />
          )
        )}
      </div>
    </div>
  );
}