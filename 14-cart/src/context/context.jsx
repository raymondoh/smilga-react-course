import { createContext, useContext, useEffect, useState, useReducer } from "react";
import cartItems from "../data";
import reducer from "./reducer";
import { CLEAR_CART, REMOVE_ITEM, INCREASE_ITEM, DECREASE_ITEM, LOADING, DISPLAY_ITEMS } from "./actions";
import { getTotals } from "../utils";
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const useGlobalContext = () => useContext(AppContext);

const initialState = {
  loading: false,
  //cart: new Map(cartItems.map(item => [item.id, item])),
  cart: new Map(),
};

const AppContextProvider = ({ children }) => {
  const [state, disaptch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  // clear cart
  const clearCart = () => {
    disaptch({ type: CLEAR_CART });
  };

  // remove item
  const removeItem = id => {
    disaptch({ type: REMOVE_ITEM, payload: { id } });
  };

  // increase item
  const increaseItem = id => {
    disaptch({ type: INCREASE_ITEM, payload: { id } });
  };
  // decrease item
  const decreaseItem = id => {
    disaptch({ type: DECREASE_ITEM, payload: { id } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    disaptch({ type: LOADING });
    try {
      const response = await fetch(url);
      const cart = await response.json();
      console.log("THE CART", cart);
      disaptch({ type: DISPLAY_ITEMS, payload: { cart } });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increaseItem, decreaseItem, totalAmount, totalCost }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider, useGlobalContext };
