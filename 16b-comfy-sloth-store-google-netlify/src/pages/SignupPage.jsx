import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/auth_context";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      if (!email || !password) {
        setError("email and password fields must be filled in");
        return;
      }
      await signup(email, password);
      setEmail("");
      setPassword("");
      navigate("/products");
    } catch (error) {
      setError(error.message);
      setEmail("");
      setPassword("");
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <div className="p-4 box">
        <h2 className="mb-3">Signup</h2>
        {error && { error }}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="d-grid gap-2">
            <button variant="primary" type="Submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </React.Fragment>
  );
};

export default SignupPage;
