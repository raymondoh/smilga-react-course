import React, { useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/auth_context";

const AuthWrapper = ({ children }) => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ error: false, msg: "" });

  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading....</h1>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }

  return <h4>AuthWrapper Component</h4>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
