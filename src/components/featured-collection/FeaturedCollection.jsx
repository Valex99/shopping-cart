import { Link } from "react-router-dom";
import image1 from "./collection-images/image1.jpg";
import image2 from "./collection-images/image2.jpg";

export default function FeaturedCollection() {
  return (
    <div className="flex p-5 pt-15 px-40 w-full">
      <div className="flex flex-col w-2/5 py-16 pr-6 gap-[15px]">
        <h2 className="text-2xl font-bold tracking-wide">SERAPHÉ</h2>
        <p>
          “SERAPHÉ embodies refined craftsmanship, where precision engineering
          meets timeless elegance. With luxurious materials and a design that
          emphasizes understated beauty, it’s a collection for those who
          appreciate both performance and quiet sophistication.”
        </p>
        <Link to="products" className="underline font-bold text-gray-800">
          BROWSE “SERAPHÉ”
        </Link>

        {/* Make images "reactive" - on hover it looks like it is zoomed in */}
        <div className="overflow-hidden">
          <img
            src={image1}
            alt=""
            className="transition-transform duration-300 transform hover:scale-103"
          />
        </div>
      </div>

      <div className="flex flex-col w-3/5 py-46 gap-[15px]">
        <div className="overflow-hidden">
          <img
            src={image2}
            alt=""
            className="transition-transform duration-300 transform hover:scale-103"
          />
        </div>
        <Link to="products">
          <button className="w-3/8 py-3 px-6 mt-6 bg-black text-white font-bold hover:bg-gray-800 transition-all cursor-pointer">
            SEE THE COLLECTION
          </button>
        </Link>
      </div>
    </div>
  );
}
