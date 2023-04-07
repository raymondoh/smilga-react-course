import React, { createContext, useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

//
const initialState = {
  // this = state
  filteredProducts: [],
  allProducts: [],
  gridView: true,
};

const FilterContext = createContext();

const useFilterContext = () => useContext(FilterContext);

const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return <FilterContext.Provider value={{ ...state }}>{children}</FilterContext.Provider>;
};

export { FilterContext, FilterContextProvider, useFilterContext };
