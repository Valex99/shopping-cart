import image1 from "./about-images/about-group.jpg";
import image2 from "./about-images/about-men.jpg";
import image3 from "./about-images/about-women.jpg";

import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <div
        style={{ backgroundColor: "#F7EDE1" }}
        className="w-full pt-20 pb-15 px-4"
      >
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 uppercase">
            Timeless Craftsmanship For The Modern Gentleman
          </h1>
          <p className="text-[#6E6E6E] leading-relaxed text-sm px-[30px]">
            At Nouve, we fuse modern design with classic precision to create
            watches that embody confidence, character, and craftsmanship. Each
            timepiece is built to complement your style, whether you're in the
            boardroom, on the move, or enjoying a quiet moment.
            <br />
            <br />
            Our Men’s Collection is a statement in sophistication — refined
            materials, bold silhouettes, and timeless detailing that elevate
            your wristwear game. Discover the perfect companion for your
            everyday legacy.
          </p>
        </div>
      </div>

      <div>
        {/* FIRST SECTION */}
        <div className="px-6 md:px-20 py-12 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-10 mb-20">
            <img
              src={image1}
              alt="Timeless Watches"
              className="w-full md:w-1/2 rounded object-cover"
            />
            <div className="md:w-1/2 flex flex-col justify-between h-full text-center md:text-left">
              <div className="mb-6">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  About Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Nouve, we began with a simple vision — to craft elegant,
                  enduring wristwatches that elevate everyday moments and
                  inspire self-expression.
                  <br />
                  <br />
                  Founded by a collective of watch enthusiasts and designers,
                  our journey started with a passion for timekeeping artistry
                  and an obsession with detail. Each timepiece is thoughtfully
                  designed to blend timeless aesthetics with modern versatility,
                  built to last and meant to be worn with pride.
                  <br />
                  <br />
                  Today, we continue that mission — creating watches that don’t
                  just tell time, but tell your story. From classic silhouettes
                  to contemporary innovations, we’re here to redefine what it
                  means to wear a watch in the modern era. Join us on this
                  journey through time — one watch, one memory, one legacy at a
                  time.
                </p>
              </div>
              <Link to="/products">
                <button className="underline mt-6 px-6 py-2 bg-black text-white rounded hover:bg-[#7B3F00] transition-colors duration-300 md:self-start cursor-pointer">
                  Browse Products
                </button>
              </Link>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div className="px-6 md:px-20 py-12 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch gap-10 mb-20">
              <div className="md:w-1/2 flex flex-col justify-between h-full text-center md:text-left">
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Men’s Collection{" "}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    At Nouve, our Men’s Collection was born from a vision to
                    create bold, refined timepieces that embody confidence,
                    craftsmanship, and modern masculinity.
                    <br />
                    <br />
                    Crafted by a team of designers and watchmakers who value
                    precision and purpose, every detail — from the weight of the
                    case to the texture of the strap — is designed to make a
                    statement without saying a word.
                    <br />
                    <br />
                    These watches aren’t just tools for keeping time; they’re
                    companions for the driven, the curious, and the
                    unapologetically ambitious. Whether you’re navigating
                    boardrooms, city streets, or quiet moments of reflection, a
                    Nouve timepiece is made to move with you.
                    <br />
                    <br />
                    By blending timeless aesthetics with functional innovation,
                    we redefine what it means to wear a watch today — durable,
                    versatile, and always intentional. Step into your story with
                    a watch that reflects who you are — and who you’re becoming.
                  </p>
                </div>
                <Link to="/products/men">
                  <button className="underline mt-6 px-6 py-2 bg-black text-white rounded hover:bg-[#7B3F00] transition-colors duration-300 md:self-start cursor-pointer">
                    Browse Men’s Collection
                  </button>
                </Link>
              </div>
              <img
                src={image2}
                alt="Timeless Watches"
                className="w-full md:w-1/2 rounded object-cover"
              />
            </div>
          </div>

          {/* THIRD SECTION */}
          <div className="px-6 md:px-20 py-12 max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch gap-10 mb-20">
              <img
                src={image3}
                alt="Timeless Watches"
                className="w-full md:w-1/2 rounded object-cover"
              />
              <div className="md:w-1/2 flex flex-col justify-between h-full text-center md:text-left">
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Timeless Responsibility
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Discover the perfect balance of grace and strength with our
                    Women’s Collection — a carefully curated selection of
                    timepieces designed to reflect the essence of modern
                    femininity. These pieces are more than just watches; they
                    are symbols of confidence, elegance, and individuality.
                    <br />
                    <br />
                    From delicate details to bold silhouettes, each watch in the
                    collection captures timeless elegance, making it the perfect
                    companion for any occasion. Whether you’re dressing up for
                    an elegant evening or staying effortlessly casual, our
                    designs are versatile enough to complement every moment of
                    your day.
                    <br />
                    <br />
                    Crafted with precision and an eye for design, these
                    timepieces embody both beauty and functionality. The
                    luxurious materials, paired with innovative designs, ensure
                    that each piece not only looks stunning but also stands the
                    test of time. With every tick, you’ll be reminded of your
                    strength, grace, and the moments that truly matter.
                  </p>
                </div>
                <Link to="/products/women">
                  <button className="underline mt-6 px-6 py-2 bg-black text-white rounded hover:bg-[#7B3F00] transition-colors duration-300 md:self-start cursor-pointer">
                    Browse Women’s Collection
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
