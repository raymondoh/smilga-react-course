import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from "./pages";
import RootLayout from "./layouts/RootLayout";
import ProductsLayout from "./layouts/ProductsLayout";

// outlet in the layout component
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="cart" element={<CartPage />} />
      {/** 
      <Route path="products" element={<ProductsPage />} />
      <Route path="products/:id" element={<SingleProductPage />} />
      */}
      {/** Another section */}
      <Route path="products" element={<ProductsLayout />}>
        <Route index element={<ProductsPage />} />
        <Route path=":id" element={<SingleProductPage />} />
      </Route>

      {/*** private */}
      <Route path="checkout" element={<PrivateRoute />}>
        <Route index element={<CheckoutPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
      {/** closing route */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
