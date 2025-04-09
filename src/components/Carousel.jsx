import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
// Classic image carousel
// Should contain some text (collection - description)
// Should contain button shop now -> leads to all products page

// Import all watch images
import watch1 from "./carousel-images/watch1.jpg";
import watch2 from "./carousel-images/watch2.jpg";
import watch3 from "./carousel-images/watch3.jpg";
import watch4 from "./carousel-images/watch4.jpg";
import watch5 from "./carousel-images/watch5.jpg";
import watch6 from "./carousel-images/watch6.jpg";

// You only use ALL CAPS when defining constants thatnever change
const images = [watch1, watch2, watch3, watch4, watch5, watch6];

export default function Carousel() {



 const showNextImage = () => {
    setImageIndex(index => {
        // Check if we are at the end - wrap aorund
        if (index === images.length - 1) return 0
        return index + 1
    })
 }


 const showPrevImage = () => {
    setImageIndex(index => {
        if (index === 0) return images.length -1
        return index -1
    })
 }


  // By default index is zero
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="relative max-h-[650px] w-full overflow-hidden">
      <img src={images[imageIndex]} className="w-full h-full object-cover" />
      <button className="slider-btn" onClick={showPrevImage}>
        <ArrowBigLeft />
      </button>
      <button className="slider-btn right-0" onClick={showNextImage}>
        <ArrowBigRight />
      </button>
    </div>
  );
}
 