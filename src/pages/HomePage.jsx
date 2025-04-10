import Carousel from "../components/image-carousel/Carousel";
import FeaturedCollection from "../components/featured-collection/FeaturedCollection";
import Blog from "../components/blog/Blog";
import MailForm from "../components/mail-form/MailForm";
import Footer from "../components/footer/Footer";
import Author from "../components/Author";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <FeaturedCollection />
      <Blog />
      <MailForm />
      <Footer />
      <Author />
    </div>
  );
}
