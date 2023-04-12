import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";

import { Link } from "react-router-dom";
import { useAuthContext } from "../context/auth_context";

const CheckoutPage = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <p>Loading againg....</p>;
  }

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
