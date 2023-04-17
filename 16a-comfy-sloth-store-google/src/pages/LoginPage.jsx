import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth_context";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleSignIn } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      if (!email || !password) {
        setError("email and password fields must be filled in");
        return;
      }
      await login(email, password);
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

  const handleGoogleSignIn = async e => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <React.Fragment>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
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

          <button type="btn">Log In</button>
        </form>
        <hr />
        <div>
          <button onClick={handleGoogleSignIn} className="g-btn" type="dark" />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
