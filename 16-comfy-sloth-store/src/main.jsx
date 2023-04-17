import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductsContextProvider } from "./context/products_context";
import { FilterContextProvider } from "./context/filter_context";
import { CartContextProvider } from "./context/cart_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);
