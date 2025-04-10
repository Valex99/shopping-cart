// Add media query here! - banner text overflow
import banner1 from "./banner-image/banner1.jpg";

export default function Banner() {
  return (
    <div className="flex h-[420px]">
      <div className="w-[40%] p-20 bg-[#f2efee] flex items-center flex-col text-[#423c3a]">
        <h1 className="font-bold text-[26px] mb-4">TIMELESS ELEGANCE</h1>
        <p className="text-[14.5px]">
          Introducing our exquisite collection of timepieces, where precision
          meets elegance. Whether you’re looking for a sleek, modern design or a
          timeless, classic style, our watches are crafted to complement your
          unique taste.
          <br />
          <br />
          Explore our selection and find the perfect watch to enhance your look
          and keep you on time, every time.
        </p>
      </div>

      <div className="w-[60%] overflow-hidden">
        <img
          src={banner1}
          alt=""
          className="transition-transform duration-300 transform hover:scale-105 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
