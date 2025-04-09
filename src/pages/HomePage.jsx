import Carousel from "../components/image-carousel/Carousel";
import FeaturedCollection from "../components/featured-collection/FeaturedCollection";
import Blog from "../components/blog/Blog";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <FeaturedCollection />
      <Blog />
    </div>
  );
}
