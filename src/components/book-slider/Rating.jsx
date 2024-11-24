/* eslint-disable react/prop-types */
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ rating, reviews }) => {
  return (
    <div className="rating">
      {rating >= 1 ? (
        <BsStarFill className="ricon" />
      ) : rating >= 0.5 ? (
        <BsStarHalf className="ricon" />
      ) : (
        <BsStar className="ricon"/>
      )}
      {rating >= 2 ? (
        <BsStarFill className="ricon" />
      ) : rating >= 1.5 ? (
        <BsStarHalf className="ricon" />
      ) : (
        <BsStar className="ricon"/>
      )}
      {rating >= 3 ? (
        <BsStarFill className="ricon" />
      ) : rating >= 2.5 ? (
        <BsStarHalf className="ricon" />
      ) : (
        <BsStar className="ricon" />
      )}
      {rating >= 4 ? (
        <BsStarFill className="ricon" />
      ) : rating >= 3.5 ? (
        <BsStarHalf className="ricon" />
      ) : (
        <BsStar className="ricon" />
      )}
      {rating >= 5 ? (
        <BsStarFill className="ricon" />
      ) : rating >= 4.5 ? (
        <BsStarHalf className="ricon" />
      ) : (
        <BsStar className="ricon" />
      )}
      <span>{rating}</span>
      <span>({reviews} reviews)</span>
    </div>
  );
};

export default Rating;
