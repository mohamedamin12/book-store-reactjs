/* eslint-disable react/prop-types */
import { BsDashLg, BsPlusLg, BsTrashFill } from "react-icons/bs";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img
        src={`/books/${item.image}`}
        alt={item.title}
        className="cart-item-img"
      />
      <div className="cart-item-info">
        <div>
          <div className="cart-item-book-title">
            <b>Title: </b>
            {item.title}
          </div>
          <div className="cart-item-author">
            <b>Author: </b>
            {item.author}
          </div>
        </div>
        <div>
          <div className="cart-item-quantity">
            <button>
              <BsPlusLg
                onClick={() =>
                  addToCart({ ...item, quantity: item.quantity + 1 })
                }
              />
            </button>
            <b>{item.quantity}</b>
            <button disabled={item.quantity <= 1}>
              <BsDashLg
                onClick={() =>
                  addToCart({ ...item, quantity: item.quantity - 1 })
                }
              />
            </button>
          </div>
          <div className="cart-item-price">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
          <div className="icon" onClick={() => removeFromCart(item.id)}>
            <BsTrashFill  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
