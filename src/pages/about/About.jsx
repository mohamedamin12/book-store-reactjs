/* eslint-disable react/no-unescaped-entities */
import "./about.css";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Discover the story behind our bookstore and our passion for books.</p>
      </div>

      <div className="about-us-content">
        <div className="about-us-section">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team of book lovers dedicated to providing
            readers with a curated selection of books that inspire, educate,
            and entertain. Our bookstore offers a wide variety of genres to
            suit every reader's taste.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make reading accessible and enjoyable for
            everyone. We strive to create a community where readers can find
            their next favorite book, share their thoughts, and connect with
            fellow book enthusiasts.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Our Vision</h2>
          <p>
            To become the go-to destination for book lovers worldwide by
            delivering exceptional service, a unique collection of books, and
            fostering a love for reading across all generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

