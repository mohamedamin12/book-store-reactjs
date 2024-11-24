import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import "./book.css";
import Rating from "../../components/book-slider/Rating";
// import { useState } from "react";
import {
  BsCartPlus,
  BsFileEarmarkBreak,
  BsGlobe,
  BsCalendar3,
} from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import BookStoreContext from "../../context/bookStoreContext";

const BookPage = () => {
  const {addToCart} = useContext(BookStoreContext);
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const book = books.find((b) => b.id === +id);

  useEffect(()=> {
    window.scrollTo(0, 0);
  } , [])

  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={(e)=> setQty(e.target.value)}
            />
            <button onClick={()=> addToCart({...book , quantity: qty})} className="book-add-to-cart-btn">
              <BsCartPlus style={{marginRight: "5px"}}/>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        molestiae corporis facere minima consequuntur, blanditiis voluptatem
        praesentium possimus odit, aliquam temporibus nulla! Delectus quas totam
        nihil est reiciendis sunt. Ex. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. A veritatis vitae hic corrupti voluptas dignissimos
        consequatur doloribus laborum adipisci quo voluptates dolorum cumque
        tempora expedita possimus, ab quae tenetur fugit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Laudantium fugit illo porro
        perspiciatis fuga doloremque placeat assumenda labore! Harum numquam
        voluptate eveniet libero debitis consequuntur nostrum reiciendis
        officiis delectus rem.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <BsFileEarmarkBreak className="bicon"/>
          <b>{book.printLength} pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <BsGlobe className="bicon"/>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <BsCalendar3 className="bicon"/>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
