import React, { createContext, useState, useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS } from "../actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

const CartContext = createContext();
// make sure use
const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // add to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  // remove Item
  const removeItem = id => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // toggle amount
  const toggleAmount = (ItemId, value) => {
    console.log(ItemId, value);
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { ItemId, value } });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider, useCartContext };
