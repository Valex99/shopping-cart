import image1 from "./about-images/about1.jpg";
import image2 from "./about-images/about2.jpg";
import image3 from "./about-images/about3.jpg";

export default function AboutUs() {
  return (
    <div>
      <div className="px-6 md:px-20 py-12 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <img
            src={image1}
            alt="Timeless Watches"
            className="w-full md:w-1/2 rounded object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Nouve, we began with a simple vision — to craft elegant,
              enduring wristwatches that elevate everyday moments and inspire
              self-expression. Founded by a collective of watch enthusiasts and
              designers, our journey started with a passion for timekeeping
              artistry and an obsession with detail. Each timepiece is
              thoughtfully designed to blend timeless aesthetics with modern
              versatility, built to last and meant to be worn with pride. Today,
              we continue that mission — creating watches that don’t just tell
              time, but tell your story. From classic silhouettes to
              contemporary innovations, we’re here to redefine what it means to
              wear a watch in the modern era. Join us on this journey through
              time — one watch, one memory, one legacy at a time.
            </p>
            <button>Browse Products</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
          <img
            src={image2}
            alt="Craftsmanship"
            className="w-full md:w-1/2 rounded object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Craft That Lasts
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Built with precision, our watches are made to endure. From quality
              materials to expert finishing, we honor the legacy of horology
              while embracing modern design.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={image3}
            alt="Personal Stories"
            className="w-full md:w-1/2 rounded object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              More Than Time
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every timepiece carries meaning. It's not just about telling
              time—it's about marking moments, celebrating milestones, and
              passing down stories from one generation to the next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
