import { Link } from "react-router-dom";
import "./blog.css";

import image1 from "./blog-images/blog1.jpg";
import image2 from "./blog-images/blog2.jpg";
import image3 from "./blog-images/blog3.jpg";

export default function Blog() {
  return (
    // Play around with px-40 (to make it responsive)
    <div className="flex justify-center items-center flex-col px-40">
      <h1 className="m-10 text-2xl font-bold tracking-wide  text-gray-800">
        LATEST POSTS
      </h1>
      <div className="blog">
        <div className="blog-post">
          <img src={image1} alt="" className="blog-image" />
          <h3 className="blog-theme">Feel good</h3>
          <h2 className="blog-title">
            Sleek, Sophisticated, and Timeless: The Art of Watchmaking
          </h2>
          <p className="blog-description">
            Explore the timeless beauty of watchmaking, where precision meets
            elegance. Discover the intricate craftsmanship behind every
            timepiece, and learn what makes a luxury watch more than just a
            tool—it’s a symbol of style, status, and history.
          </p>
          <Link to="error">
            <p>[Read More]</p>
          </Link>
        </div>
        <div className="blog-post">
          <img src={image2} alt="" className="blog-image" />
          <h3 className="blog-theme">Proper care</h3>
          <h2 className="blog-title">
            The Secret Behind Precision Timekeeping
          </h2>
          <p className="blog-description">
            Proper maintenance is crucial to keeping your watch in perfect
            condition. From regular servicing to avoiding common mistakes, find
            out how to take care of your watch and preserve its functionality
            for generations to come.
          </p>
          <Link to="error">
            <p>[Read More]</p>
          </Link>
        </div>
        <div className="blog-post">
          <img src={image3} alt="" className="blog-image" />
          <h3 className="blog-theme">Legacy</h3>
          <h2 className="blog-title">The Legacy of Iconic Watches</h2>
          <p className="blog-description">
            From classic designs that have stood the test of time to the modern
            innovations revolutionizing the industry, dive into the legacy of
            iconic watches and explore how they continue to shape the world of
            horology today.
          </p>
          <Link to="error">
            <p>[Read More]</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Bellow 900px screen width, (div with class blog) posts should go from flex column to flex row!
// or blog post...
