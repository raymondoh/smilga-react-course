import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../components";
import Wrapper from "../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  const user = false;

  // if (!user) {
  //   <main>dgdgd</main>;
  // }

  return (
    <Wrapper>
      shared layout
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
      <p>footer</p>
    </Wrapper>
  );
};

export default SharedLayout;
