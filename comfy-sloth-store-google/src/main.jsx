import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductsContextProvider } from "./context/products_context";
import { FilterContextProvider } from "./context/filter_context";
import { CartContextProvider } from "./context/cart_context";
import { AuthContextProvider } from "./context/auth_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductsContextProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </FilterContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
