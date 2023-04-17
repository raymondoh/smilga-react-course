import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";

import { Link } from "react-router-dom";
import { useAuthContext } from "../context/auth_context";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  const { user } = useAuthContext();

  if (!user) {
    return <p>Loading againg....</p>;
  }

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it222
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
