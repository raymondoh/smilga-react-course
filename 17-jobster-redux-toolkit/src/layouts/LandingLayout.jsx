import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <React.Fragment>
      <p>landing layout for landing, login and register</p>
      <Outlet />
    </React.Fragment>
  );
};

export default LandingLayout;
