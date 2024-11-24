import "./cart.css";
import OrderSummary from "./OrderSummary.jsx";
import CartItem from "./CartItem.jsx";
import { useContext } from "react";
import BookStoreContext from "../../context/bookStoreContext.js";
const Cart = () => {
  const {cartItems , addToCart , removeFromCart} = useContext(BookStoreContext);
  const totalItems = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity , 0).toFixed(2);
  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item)=> (
            <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
          ))}
        </div>
          <OrderSummary totalItems={totalItems}/>
      </div>
    </div>
  );
};

export default Cart;
