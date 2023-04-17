import React from "react";
import { NavLink, Outlet } from "react-router-dom";
//import { Navbar, Sidebar, Footer } from "../components";

const RootLayout = () => {
  const user = false;

  if (!user) {
    <main>dgdgd</main>;
  }

  return (
    <React.Fragment>
      root
      <p>navbar</p>
      <p>sidebar</p>
      <main>
        <Outlet />
      </main>
      <p>footer</p>
    </React.Fragment>
  );
};

export default RootLayout;
