import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children }) => {
  //const {} = useAuthContext();
  //const {user} = useAuth0()
  const user = true;

  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet>{children}</Outlet>;
};

export default PrivateRoute;
