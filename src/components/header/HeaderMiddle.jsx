import { Link } from "react-router-dom";
import { BsBook , BsSearch , BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import BookStoreContext from "../../context/bookStoreContext";

const HeaderMiddle = () => {
  const { cartItems } = useContext(BookStoreContext);

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <BsBook className="logo-icon"/>
        <b>Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search in book store..."
        />
        <BsSearch className="search-icon"/>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
      {cartItems.length > 0 && (
        <b className="cart-notification">{cartItems.length}</b>
      )}
        <BsCart2 className="cart-icon"/>
      </Link>
    </div>
  );
};

export default HeaderMiddle;
