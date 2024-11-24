
import BookSlider from "../../components/book-slider/BookLSlider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import { books } from "../../data/books";
const HomePage = () => {
  return (
    <section>
      <Slider />
      <HeadingTitle title="Most gifted" />
      <BookSlider books={books} />
      <HeadingTitle title="Best Seller" />
      <BookSlider books={books} />
      <HeadingTitle title="Most wished for" />
      <BookSlider books={books} />
      <Services />
    </section>
  );
};

export default HomePage;
