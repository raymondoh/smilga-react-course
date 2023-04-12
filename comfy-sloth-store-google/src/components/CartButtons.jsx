import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useAuthContext } from "../context/auth_context";

const CartButtons = () => {
  const { user, login, logout } = useAuthContext();
  const { closeSidebar } = useProductsContext();
  const { totalItems } = useCartContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Wrapper className="cart-btn-wrapper">
      {user && (
        <React.Fragment>
          <p>Hello, {user.email}</p>
        </React.Fragment>
      )}
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        {" "}
        cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{totalItems}</span>
        </span>
      </Link>

      {user && user ? (
        <button onClick={handleLogout} type="button" className="auth-btn">
          <Link to="/">
            Logout <FaUserMinus />
          </Link>
        </button>
      ) : (
        <React.Fragment>
          <button type="button" className="auth-btn">
            <Link to="/login">
              Login <FaUserPlus />
            </Link>
          </button>
          {/**  <button type="button" className="btn">
            <Link to="/signup">
              Signup <FaUserPlus />
            </Link>
          </button>*/}
        </React.Fragment>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
