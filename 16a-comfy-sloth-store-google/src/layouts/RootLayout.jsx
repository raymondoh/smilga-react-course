import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
