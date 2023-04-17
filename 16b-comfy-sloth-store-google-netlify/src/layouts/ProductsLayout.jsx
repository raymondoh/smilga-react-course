import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Products Layout</h2>
      <p>This text is coming from the products layout page</p>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
