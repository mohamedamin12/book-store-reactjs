/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import BookStoreContext from "../../context/bookStoreContext.js";
import Modal from "../modal/Modal";
import "./book-slider.css";
import Rating from "./Rating";
import {
  BsEyeFill,
  BsCartPlus,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
const BookSlider = ({ books }) => {
  const { addToCart } = useContext(BookStoreContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  // Handle Modal
  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  };

  return (
    <div className="book-slider-container">
      {slideIndex >= 0 && <BsChevronLeft onClick={() => handleClick("left")} className="book-slider-arrow-left"/>}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {books.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slider-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <BsEyeFill className="icons" onClick={() => handleOpenModal(item)}  />
              <BsCartPlus className="icons" onClick={() => addToCart({...item, quantity : 1})} />
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= books.length - 1 && (
        <BsChevronRight onClick={() => handleClick("right")} className="book-slider-arrow-right"/>
      )}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default BookSlider;
