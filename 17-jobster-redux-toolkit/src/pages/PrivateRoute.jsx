import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector(state => state.user);

  if (!user) {
    return <Navigate to="/register" />;
  }
  return <Outlet>{children}</Outlet>;
};

export default PrivateRoute;
