// Mx code is written directly on the site - it wolud be better if i wrote it in a component...

import AboutUs from "../components/about-us/AboutUs";
import aboutUsData from "../components/about-us/about";
import { Link } from "react-router-dom";
import "../components/blog/blog.css";

import image1 from "../components/about-us/about-images/about1.jpg";
import image2 from "../components/about-us/about-images/about2.jpg";
import image3 from "../components/about-us/about-images/about3.jpg";

export default function About() {
  return (
    <div>
      <AboutUs />
      {/* // Banner code - dont want grayscale to be applied */}
      <div className="banner-div flex h-[420px]">
        <div className="banner-text w-[40%] p-20 bg-[#f2efee] flex items-center flex-col text-[#423c3a]">
          <h1 className="font-bold text-[26px] mb-4">{aboutUsData.title}</h1>
          {/* //  FIX THIS - OVERFLOW HIDDEN */}
          <p className="text-[14.5px] overflow-hidden">
            {aboutUsData.description}
            <br />
            <br />
            Explore our selection and find the perfect watch to enhance your
            look and keep you on time, every time.
          </p>
        </div>

        <div className="banner-img-div w-[60%] overflow-hidden">
          <img
            src={aboutUsData.image}
            alt={aboutUsData.title}
            className="transition-transform duration-600 transform hover:scale-103 w-full h-full object-cover"
          />
        </div>
      </div>
      {/* BLOG CODE */}
      <div className="flex justify-center items-center flex-col px-40">
        <h1 className="m-10 text-2xl font-bold tracking-wide  text-gray-800">
          PRECISION & PERSPECTIVE
        </h1>
        <div className="blog">
          <div className="blog-post">
            <div className="overflow-hidden">
              <img
                src={image1}
                alt=""
                className="blog-image transition-transform duration-500 transform hover:scale-102 w-full h-full object-cover"
              />
            </div>
            <h3 className="blog-theme">Tradition</h3>
            <h2 className="blog-title">Designed for the Moments That Matter</h2>
            <p className="blog-description">
              Watches do more than tell time—they define it. From boardroom
              meetings to weekend escapes, our timepieces are built to match
              your rhythm. Minimal in form, bold in presence, every model is
              crafted to elevate your look and keep you grounded in the now.
            </p>
            <Link to="/error">
              <p>[Discover Yours]</p>
            </Link>
          </div>
          <div className="blog-post">
            <div className="overflow-hidden">
              <img
                src={image2}
                alt=""
                className="blog-image transition-transform duration-500 transform hover:scale-102 w-full h-full object-cover"
              />
            </div>

            <h3 className="blog-theme">BEND TIME</h3>
            <h2 className="blog-title">Built to Endure. Easy to Maintain.</h2>
            <p className="blog-description">
              A great watch is like a good habit—reliable, effortless, and
              refined over time. We make upkeep simple with durable materials,
              intuitive designs, and easy-to-follow care tips. Whether it’s your
              first timepiece or your tenth, keeping it flawless is part of the
              experience.
            </p>
            <Link to="/error">
              <p>[Take care tips]</p>
            </Link>
          </div>
          <div className="blog-post">
            <div className="overflow-hidden">
              <img
                src={image3}
                alt=""
                className="blog-image transition-transform duration-500 transform hover:scale-102 w-full h-full object-cover"
              />
            </div>
            <h3 className="blog-theme">YOUR ROUTINE</h3>
            <h2 className="blog-title">Ritual in Every Tick</h2>
            <p className="blog-description">
              Watches aren’t just for occasions—they’re part of your daily
              rhythm. From your first sip of coffee to your evening wind-down,
              our timepieces become a quiet constant in your routine.
              Thoughtfully designed for everyday wear, they bring intention to
              your day and precision to your pace.
            </p>
            <Link to="/error">
              <p>[Explore the Collection]</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
