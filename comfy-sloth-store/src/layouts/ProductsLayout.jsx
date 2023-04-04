import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Products LAyout</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione ipsa beatae corrupti nisi repellendus
        qui cum minima dolorem temporibus.
      </p>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
