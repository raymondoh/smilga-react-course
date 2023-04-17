import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../assets/icons";

const Navbar = () => {
  const { amount } = useSelector(state => state.cart);
  console.log(typeof amount);
  return (
    <nav className="nav-center">
      <h3>Redux Toolkit Cart</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
