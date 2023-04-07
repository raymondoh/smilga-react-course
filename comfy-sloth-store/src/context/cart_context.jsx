import React, { createContext, useState, useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS } from "../actions";

const initialState = {};

const CartContext = createContext();
// make sure use
const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  return <CartContext.Provider value="cart contex hellot">{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider, useCartContext };
