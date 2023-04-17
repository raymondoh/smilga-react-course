import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// will remove later
import { useAuthContext } from "../context/auth_context";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (user === undefined) {
    window.location.href = "/";
    return <p>Loading...</p>;
    //return null; // or loading spinner, etc /// prevent flash??
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet>{children}</Outlet>;
};

export default PrivateRoute;
