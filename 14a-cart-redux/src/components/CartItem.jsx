import React from "react";
import { ChevronDown, ChevronUp } from "../assets/icons";
//store
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
const CartItem = ({ item }) => {
  // don;t need useselector here because we got state in parent component and passed them through as props
  const { id, img, title, price, amount } = item;
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">£{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/** id is object in slice */}
        <button className="amount-btn" onClick={() => dispatch(increase({ id }))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        {/** id is NOT OBject in slice */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
