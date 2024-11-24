/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import FirstBook from "../../assets/images/book1.png";
import SecondBook from "../../assets/images/book2.png";
import ThirdBook from "../../assets/images/book3.png";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import './slider.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 3; 

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? totalSlides - 1 : slideIndex - 1); 
    } else {
      setSlideIndex(slideIndex === totalSlides - 1 ? 0 : slideIndex + 1); 
    }
  };

  return (
    <div className="slider-container">
      <div 
        className={`arrow-left ${slideIndex === 0 ? "hidden" : ""}`} 
        onClick={() => handleClick("left")}
      >
        <BsChevronDoubleLeft />
      </div>

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-image-wrapper">
            <img src={FirstBook} alt="First Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-image-wrapper">
            <img src={SecondBook} alt="Second Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You can read at the bookstore or at home
            </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-image-wrapper">
            <img src={ThirdBook} alt="Third Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">
              We send you the book you want at home
            </p>
          </div>
        </div>
      </div>

      <div 
        className={`arrow-right ${slideIndex === totalSlides - 1 ? "hidden" : ""}`} 
        onClick={() => handleClick("right")}
      >
        <BsChevronDoubleRight />
      </div>
    </div>
  );
};

export default Slider;

