import React from "react";
import CartItem from "./CartItem";
// store
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  // from the state
  const { cartItems, total, amount } = useSelector(state => state.cart); // state
  // for the functions we create and import
  const dispatch = useDispatch();

  const renderCartItems = cartItems && cartItems.map(item => <CartItem key={item.id} item={item} />);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
        <div>{renderCartItems}</div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>{total.toFixed(2)}</span>
            </h4>
          </div>
          {/**<button className="btn clear-btn" onClick={() => dispatch(clearCart())}> */}
          <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
            clear cart
          </button>
        </footer>
      </header>
    </section>
  );
};

export default CartContainer;
