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
  sort: "price-lowest",
  filters: {
    searchText: "",
    company: "all",
    category: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = createContext();

const useFilterContext = () => useContext(FilterContext);

const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = e => {
    //demo
    //const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    dispatch({ type: UPDATE_SORT, payload: { value } });
  };

  const updateFilters = e => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = e => {};

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider, useFilterContext };
