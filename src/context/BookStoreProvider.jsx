/* eslint-disable react/prop-types */
import { useState } from "react";
import BookStoreContext from "./bookStoreContext";

const BookStoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isExist = cartItems.find((cart)=> cart.id === item.id);
    if(isExist){
      setCartItems(cartItems.map((cartItem)=> cartItem.id === item.id ? item : cartItem))
    }else {
      setCartItems(prev => [...prev, item])
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId))
  }

  return (
    <BookStoreContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </BookStoreContext.Provider>
  );


}

export default BookStoreProvider;


