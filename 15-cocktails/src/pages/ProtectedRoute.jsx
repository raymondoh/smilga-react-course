import React from "react";
import { Navigate, Outlet } from "react-router-dom";
//import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  // const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet>{children}</Outlet>;
};

export default ProtectedRoute;
