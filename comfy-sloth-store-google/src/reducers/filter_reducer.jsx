import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let max_price = action.payload.map(product => product.price);
      max_price = Math.max(...max_price);
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: max_price, price: max_price },
      };
    case SET_GRIDVIEW:
      return {
        ...state,
        gridView: true,
      };
    case SET_LISTVIEW:
      return {
        ...state,
        gridView: false,
      };
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload.value, // returned object on payload in context
      };
    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];
      if (sort === "price-lowest") {
        // long way
        tempProducts = tempProducts.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
        //tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }

      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return {
        ...state,
        filteredProducts: tempProducts,
      };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };
    case FILTER_PRODUCTS:
      const { allProducts } = state;
      const { searchText, company, category, color, price, shipping } = state.filters;
      let temp_products = [...allProducts];
      // filtering
      //text
      if (searchText) {
        temp_products = temp_products.filter(product => {
          return product.name.toLowerCase().startsWith(searchText);
        });
      }
      //category
      if (category !== "all") {
        temp_products = temp_products.filter(product => {
          return product.category === category;
        });
      }
      //company
      if (company !== "all") {
        temp_products = temp_products.filter(product => {
          return product.company === company;
        });
      }
      // colors
      if (color !== "all") {
        temp_products = temp_products.filter(product => {
          return product.colors.find(c => {
            return c === color;
          });
        });
      }

      // price
      temp_products = temp_products.filter(product => product.price <= price);

      // shipping
      if (shipping) {
        temp_products = temp_products.filter(product => product.shipping === true);
      }

      return {
        ...state,
        filteredProducts: temp_products,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          searchText: "",
          company: "all",
          category: "all",
          color: "all",
          //minPrice: 0,
          //maxPrice: 0,
          // price: 0,
          price: state.filters.maxPrice,
          shipping: false,
        },
      };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
